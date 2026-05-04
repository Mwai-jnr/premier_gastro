import cors from "cors";
import express from "express";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT) || 5000;
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");
let storeQueue = Promise.resolve();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const initialStore = {
  appointments: [],
  contacts: []
};

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(DATA_FILE, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await writeStore(initialStore);
  }
}

async function readStore() {
  await ensureStore();
  const contents = await readFile(DATA_FILE, "utf8");
  return JSON.parse(contents || JSON.stringify(initialStore));
}

async function writeStore(store) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(store, null, 2));
}

async function updateStore(mutator) {
  storeQueue = storeQueue.then(async () => {
    const store = await readStore();
    const result = await mutator(store);
    await writeStore(store);
    return result;
  });

  return storeQueue;
}

function requireFields(body, fields) {
  const missing = fields.filter((field) => !String(body[field] || "").trim());

  if (missing.length) {
    const error = new Error(`Missing required fields: ${missing.join(", ")}`);
    error.status = 400;
    throw error;
  }
}

function nowIso() {
  return new Date().toISOString();
}

function clean(value) {
  return String(value || "").trim();
}

function sortNewest(items) {
  return [...items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function parseDateBoundary(value, edge) {
  if (!value) return null;
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;
  if (edge === "end") date.setHours(23, 59, 59, 999);
  if (edge === "start") date.setHours(0, 0, 0, 0);

  return date;
}

function filterByCreatedAt(items, query) {
  const from = parseDateBoundary(query.from, "start");
  const to = parseDateBoundary(query.to, "end");

  return items.filter((item) => {
    const createdAt = new Date(item.createdAt);
    if (Number.isNaN(createdAt.getTime())) return false;
    if (from && createdAt < from) return false;
    if (to && createdAt > to) return false;
    return true;
  });
}

function groupCounts(items, key, fallback = "Not specified") {
  return items.reduce((counts, item) => {
    const label = clean(item[key]) || fallback;
    counts[label] = (counts[label] || 0) + 1;
    return counts;
  }, {});
}

function getResponseMetrics(items, openStatus) {
  const respondedItems = items.filter((item) => item.respondedAt);
  const responseHours = respondedItems
    .map((item) => (new Date(item.respondedAt) - new Date(item.createdAt)) / 36e5)
    .filter((hours) => Number.isFinite(hours) && hours >= 0);
  const averageResponseHours = responseHours.length
    ? responseHours.reduce((total, hours) => total + hours, 0) / responseHours.length
    : 0;

  return {
    total: items.length,
    open: items.filter((item) => item.status === openStatus).length,
    responded: respondedItems.length,
    responseRate: items.length ? Math.round((respondedItems.length / items.length) * 100) : 0,
    averageResponseHours: Number(averageResponseHours.toFixed(1))
  };
}

function toCsvValue(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function sendCsv(res, filename, rows, columns) {
  const header = columns.map((column) => toCsvValue(column.label)).join(",");
  const body = rows.map((row) => columns.map((column) => toCsvValue(row[column.key])).join(",")).join("\n");
  const csv = [header, body].filter(Boolean).join("\n");

  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.send(csv);
}

function appointmentStatusCounts(appointments) {
  return appointments.reduce(
    (counts, appointment) => {
      counts[appointment.status] = (counts[appointment.status] || 0) + 1;
      return counts;
    },
    { pending: 0, confirmed: 0, completed: 0, cancelled: 0 }
  );
}

function contactStatusCounts(contacts) {
  return contacts.reduce(
    (counts, contact) => {
      counts[contact.status] = (counts[contact.status] || 0) + 1;
      return counts;
    },
    { new: 0, replied: 0, archived: 0 }
  );
}

app.get("/", (req, res) => {
  res.json({
    message: "Premier Gastro backend is running",
    dashboard: "/dashboard",
    endpoints: ["/api/appointments", "/api/contacts", "/api/reports"]
  });
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.post("/api/appointments", async (req, res, next) => {
  try {
    requireFields(req.body, ["name", "email", "phone", "service"]);

    const createdAt = nowIso();
    const appointment = await updateStore(async (store) => {
      const nextAppointment = {
        id: randomUUID(),
        name: clean(req.body.name),
        email: clean(req.body.email),
        phone: clean(req.body.phone),
        service: clean(req.body.service),
        preferredDate: clean(req.body.preferredDate),
        preferredTime: clean(req.body.preferredTime),
        doctor: clean(req.body.doctor),
        notes: clean(req.body.notes),
        status: "pending",
        clientFeedback: "",
        internalNotes: "",
        confirmedAt: "",
        respondedAt: "",
        createdAt,
        updatedAt: createdAt
      };

      store.appointments.push(nextAppointment);
      return nextAppointment;
    });

    res.status(201).json({ message: "Appointment submitted", appointment });
  } catch (error) {
    next(error);
  }
});

app.get("/api/appointments", async (req, res, next) => {
  try {
    const { status = "all", search = "" } = req.query;
    const store = await readStore();
    const term = String(search).toLowerCase();
    const appointments = sortNewest(store.appointments).filter((appointment) => {
      const matchesStatus = status === "all" || appointment.status === status;
      const haystack = [
        appointment.name,
        appointment.email,
        appointment.phone,
        appointment.service,
        appointment.preferredDate,
        appointment.preferredTime
      ].join(" ").toLowerCase();

      return matchesStatus && (!term || haystack.includes(term));
    });

    res.json({ appointments });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/appointments/:id", async (req, res, next) => {
  try {
    const allowedStatuses = ["pending", "confirmed", "completed", "cancelled"];
    const appointment = await updateStore(async (store) => {
      const item = store.appointments.find((entry) => entry.id === req.params.id);

      if (!item) return null;

      if (req.body.status) {
        if (!allowedStatuses.includes(req.body.status)) {
          const error = new Error("Invalid appointment status");
          error.status = 400;
          throw error;
        }

        item.status = req.body.status;
        item.confirmedAt = req.body.status === "confirmed" ? nowIso() : item.confirmedAt;
      }

      if (typeof req.body.clientFeedback === "string") {
        item.clientFeedback = clean(req.body.clientFeedback);
        item.respondedAt = nowIso();
      }

      if (typeof req.body.internalNotes === "string") {
        item.internalNotes = clean(req.body.internalNotes);
      }

      item.updatedAt = nowIso();
      return item;
    });

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.json({ message: "Appointment updated", appointment });
  } catch (error) {
    next(error);
  }
});

app.post("/api/contacts", async (req, res, next) => {
  try {
    requireFields(req.body, ["name", "email", "subject", "message"]);

    const createdAt = nowIso();
    const contact = await updateStore(async (store) => {
      const nextContact = {
        id: randomUUID(),
        name: clean(req.body.name),
        email: clean(req.body.email),
        phone: clean(req.body.phone),
        subject: clean(req.body.subject),
        message: clean(req.body.message),
        status: "new",
        clientFeedback: "",
        internalNotes: "",
        respondedAt: "",
        createdAt,
        updatedAt: createdAt
      };

      store.contacts.push(nextContact);
      return nextContact;
    });

    res.status(201).json({ message: "Message submitted", contact });
  } catch (error) {
    next(error);
  }
});

app.get("/api/contacts", async (req, res, next) => {
  try {
    const { status = "all", search = "" } = req.query;
    const store = await readStore();
    const term = String(search).toLowerCase();
    const contacts = sortNewest(store.contacts).filter((contact) => {
      const matchesStatus = status === "all" || contact.status === status;
      const haystack = [
        contact.name,
        contact.email,
        contact.phone,
        contact.subject,
        contact.message
      ].join(" ").toLowerCase();

      return matchesStatus && (!term || haystack.includes(term));
    });

    res.json({ contacts });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/contacts/:id", async (req, res, next) => {
  try {
    const allowedStatuses = ["new", "replied", "archived"];
    const contact = await updateStore(async (store) => {
      const item = store.contacts.find((entry) => entry.id === req.params.id);

      if (!item) return null;

      if (req.body.status) {
        if (!allowedStatuses.includes(req.body.status)) {
          const error = new Error("Invalid contact status");
          error.status = 400;
          throw error;
        }

        item.status = req.body.status;
      }

      if (typeof req.body.clientFeedback === "string") {
        item.clientFeedback = clean(req.body.clientFeedback);
        item.status = "replied";
        item.respondedAt = nowIso();
      }

      if (typeof req.body.internalNotes === "string") {
        item.internalNotes = clean(req.body.internalNotes);
      }

      item.updatedAt = nowIso();
      return item;
    });

    if (!contact) {
      return res.status(404).json({ message: "Contact message not found" });
    }

    res.json({ message: "Contact message updated", contact });
  } catch (error) {
    next(error);
  }
});

app.get("/api/reports", async (req, res, next) => {
  try {
    const store = await readStore();
    const appointments = filterByCreatedAt(store.appointments, req.query);
    const contacts = filterByCreatedAt(store.contacts, req.query);
    const upcomingConfirmed = store.appointments
      .filter((appointment) => appointment.status === "confirmed")
      .sort((a, b) => `${a.preferredDate} ${a.preferredTime}`.localeCompare(`${b.preferredDate} ${b.preferredTime}`))
      .slice(0, 5);

    res.json({
      filters: {
        from: req.query.from || "",
        to: req.query.to || ""
      },
      totals: {
        appointments: appointments.length,
        contacts: contacts.length,
        pendingAppointments: appointments.filter((item) => item.status === "pending").length,
        unansweredContacts: contacts.filter((item) => item.status === "new").length
      },
      appointmentStatus: appointmentStatusCounts(appointments),
      contactStatus: contactStatusCounts(contacts),
      appointmentServices: groupCounts(appointments, "service"),
      contactSubjects: groupCounts(contacts, "subject"),
      appointmentResponse: getResponseMetrics(appointments, "pending"),
      contactResponse: getResponseMetrics(contacts, "new"),
      recentAppointments: sortNewest(appointments).slice(0, 6),
      recentContacts: sortNewest(contacts).slice(0, 6),
      upcomingConfirmed
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/reports/appointments.csv", async (req, res, next) => {
  try {
    const store = await readStore();
    const appointments = sortNewest(filterByCreatedAt(store.appointments, req.query));

    sendCsv(res, "premier-gastro-appointments.csv", appointments, [
      { key: "createdAt", label: "Submitted At" },
      { key: "name", label: "Client Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "service", label: "Service" },
      { key: "preferredDate", label: "Preferred Date" },
      { key: "preferredTime", label: "Preferred Time" },
      { key: "doctor", label: "Doctor" },
      { key: "status", label: "Status" },
      { key: "clientFeedback", label: "Client Feedback" },
      { key: "internalNotes", label: "Internal Notes" }
    ]);
  } catch (error) {
    next(error);
  }
});

app.get("/api/reports/contacts.csv", async (req, res, next) => {
  try {
    const store = await readStore();
    const contacts = sortNewest(filterByCreatedAt(store.contacts, req.query));

    sendCsv(res, "premier-gastro-contacts.csv", contacts, [
      { key: "createdAt", label: "Submitted At" },
      { key: "name", label: "Client Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "subject", label: "Subject" },
      { key: "message", label: "Message" },
      { key: "status", label: "Status" },
      { key: "clientFeedback", label: "Client Feedback" },
      { key: "internalNotes", label: "Internal Notes" }
    ]);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    message: status === 500 ? "Something went wrong" : error.message
  });
});

await ensureStore();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Dashboard available at http://localhost:${PORT}/dashboard`);
});
