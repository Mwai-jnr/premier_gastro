const state = {
  appointments: [],
  contacts: [],
  activeFeedback: null
};

const labels = {
  pending: "Pending",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
  new: "New",
  replied: "Replied",
  archived: "Archived"
};

const nodes = {
  refreshBtn: document.querySelector("#refreshBtn"),
  appointmentFilter: document.querySelector("#appointmentFilter"),
  appointmentSearch: document.querySelector("#appointmentSearch"),
  contactFilter: document.querySelector("#contactFilter"),
  contactSearch: document.querySelector("#contactSearch"),
  appointmentsTable: document.querySelector("#appointmentsTable"),
  contactsTable: document.querySelector("#contactsTable"),
  dialog: document.querySelector("#feedbackDialog"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogSubtitle: document.querySelector("#dialogSubtitle"),
  feedbackText: document.querySelector("#feedbackText"),
  internalNotes: document.querySelector("#internalNotes"),
  closeDialog: document.querySelector("#closeDialog"),
  saveFeedback: document.querySelector("#saveFeedback"),
  toast: document.querySelector("#toast")
};

function formatDate(value) {
  if (!value) return "Not provided";
  return new Intl.DateTimeFormat("en-KE", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

function formatDateTime(value) {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat("en-KE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  nodes.toast.textContent = message;
  nodes.toast.classList.add("is-visible");
  window.setTimeout(() => nodes.toast.classList.remove("is-visible"), 2400);
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message);
  }

  return response.json();
}

function renderStats(report) {
  document.querySelector("#totalAppointments").textContent = report.totals.appointments;
  document.querySelector("#pendingAppointments").textContent = report.totals.pendingAppointments;
  document.querySelector("#totalContacts").textContent = report.totals.contacts;
  document.querySelector("#unansweredContacts").textContent = report.totals.unansweredContacts;
  document.querySelector("#appointmentReportTotal").textContent = `${report.totals.appointments} records`;
  document.querySelector("#contactReportTotal").textContent = `${report.totals.contacts} records`;

  renderBars("#appointmentBars", report.appointmentStatus, report.totals.appointments);
  renderBars("#contactBars", report.contactStatus, report.totals.contacts);
  renderActivity("#recentAppointments", report.recentAppointments, "appointment");
  renderActivity("#recentContacts", report.recentContacts, "contact");
}

function renderBars(selector, counts, total) {
  const rows = Object.entries(counts).map(([status, count]) => {
    const width = total ? Math.round((count / total) * 100) : 0;
    return `
      <div class="bar-row">
        <div class="bar-meta">
          <span>${labels[status] || status}</span>
          <strong>${count}</strong>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
      </div>
    `;
  });

  document.querySelector(selector).innerHTML = rows.join("");
}

function renderActivity(selector, items, type) {
  const container = document.querySelector(selector);

  if (!items.length) {
    container.innerHTML = `<div class="empty-state">No records yet</div>`;
    return;
  }

  container.innerHTML = items.map((item) => {
    const title = type === "appointment" ? item.service : item.subject;
    return `
      <article class="activity-item">
        <strong>${escapeHtml(item.name)} <span class="status-pill status-${item.status}">${labels[item.status]}</span></strong>
        <small>${escapeHtml(title)} • ${formatDateTime(item.createdAt)}</small>
      </article>
    `;
  }).join("");
}

function renderAppointments() {
  if (!state.appointments.length) {
    nodes.appointmentsTable.innerHTML = `<tr><td colspan="6" class="empty-state">No appointment submissions yet</td></tr>`;
    return;
  }

  nodes.appointmentsTable.innerHTML = state.appointments.map((appointment) => `
    <tr>
      <td>
        <strong>${escapeHtml(appointment.name)}</strong>
        <small>${escapeHtml(appointment.email)}</small>
        <small>${escapeHtml(appointment.phone)}</small>
      </td>
      <td>
        <span>${escapeHtml(appointment.service)}</span>
        <small>${escapeHtml(appointment.doctor || "No doctor selected")}</small>
      </td>
      <td>
        <span>${escapeHtml(appointment.preferredDate || "No date")}</span>
        <small>${escapeHtml(appointment.preferredTime || "No time")}</small>
      </td>
      <td><span class="status-pill status-${appointment.status}">${labels[appointment.status]}</span></td>
      <td>
        <span>${appointment.clientFeedback ? "Feedback recorded" : "No feedback yet"}</span>
        <small>${appointment.respondedAt ? formatDateTime(appointment.respondedAt) : ""}</small>
      </td>
      <td>
        <div class="row-actions">
          ${appointment.status !== "confirmed" ? `<button class="mini-button primary" data-confirm="${appointment.id}">Confirm</button>` : ""}
          <button class="mini-button" data-feedback-appointment="${appointment.id}">Feedback</button>
          <button class="mini-button" data-status="${appointment.id}" data-next-status="completed">Complete</button>
          <button class="mini-button" data-status="${appointment.id}" data-next-status="cancelled">Cancel</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function renderContacts() {
  if (!state.contacts.length) {
    nodes.contactsTable.innerHTML = `<tr><td colspan="6" class="empty-state">No contact messages yet</td></tr>`;
    return;
  }

  nodes.contactsTable.innerHTML = state.contacts.map((contact) => `
    <tr>
      <td>
        <strong>${escapeHtml(contact.name)}</strong>
        <small>${escapeHtml(contact.email)}</small>
        <small>${escapeHtml(contact.phone || "No phone")}</small>
      </td>
      <td>${escapeHtml(contact.subject)}</td>
      <td>
        <span>${escapeHtml(contact.message)}</span>
        <small>${formatDateTime(contact.createdAt)}</small>
      </td>
      <td><span class="status-pill status-${contact.status}">${labels[contact.status]}</span></td>
      <td>
        <span>${contact.clientFeedback ? "Feedback recorded" : "No feedback yet"}</span>
        <small>${contact.respondedAt ? formatDateTime(contact.respondedAt) : ""}</small>
      </td>
      <td>
        <div class="row-actions">
          <button class="mini-button primary" data-feedback-contact="${contact.id}">Feedback</button>
          <button class="mini-button" data-contact-status="${contact.id}" data-next-status="archived">Archive</button>
        </div>
      </td>
    </tr>
  `).join("");
}

async function loadDashboard() {
  const appointmentParams = new URLSearchParams({
    status: nodes.appointmentFilter.value,
    search: nodes.appointmentSearch.value
  });
  const contactParams = new URLSearchParams({
    status: nodes.contactFilter.value,
    search: nodes.contactSearch.value
  });

  const [report, appointments, contacts] = await Promise.all([
    api("/api/reports"),
    api(`/api/appointments?${appointmentParams}`),
    api(`/api/contacts?${contactParams}`)
  ]);

  state.appointments = appointments.appointments;
  state.contacts = contacts.contacts;
  renderStats(report);
  renderAppointments();
  renderContacts();
}

async function updateAppointment(id, payload) {
  await api(`/api/appointments/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
  await loadDashboard();
}

async function updateContact(id, payload) {
  await api(`/api/contacts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
  await loadDashboard();
}

function openFeedback(type, item) {
  state.activeFeedback = { type, id: item.id };
  nodes.dialogTitle.textContent = type === "appointment" ? "Booking Feedback" : "Contact Feedback";
  nodes.dialogSubtitle.textContent = `${item.name} • ${type === "appointment" ? item.service : item.subject}`;
  nodes.feedbackText.value = item.clientFeedback || "";
  nodes.internalNotes.value = item.internalNotes || "";
  nodes.dialog.showModal();
}

document.querySelectorAll(".side-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".side-nav button").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".section-panel").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelector(`#${button.dataset.section}`).classList.add("is-active");
  });
});

nodes.refreshBtn.addEventListener("click", async () => {
  await loadDashboard();
  showToast("Dashboard refreshed");
});

[nodes.appointmentFilter, nodes.appointmentSearch, nodes.contactFilter, nodes.contactSearch].forEach((control) => {
  control.addEventListener("input", loadDashboard);
});

nodes.appointmentsTable.addEventListener("click", async (event) => {
  const confirmId = event.target.dataset.confirm;
  const statusId = event.target.dataset.status;
  const feedbackId = event.target.dataset.feedbackAppointment;

  if (confirmId) {
    await updateAppointment(confirmId, { status: "confirmed" });
    showToast("Appointment confirmed");
  }

  if (statusId) {
    await updateAppointment(statusId, { status: event.target.dataset.nextStatus });
    showToast("Appointment updated");
  }

  if (feedbackId) {
    const appointment = state.appointments.find((item) => item.id === feedbackId);
    openFeedback("appointment", appointment);
  }
});

nodes.contactsTable.addEventListener("click", async (event) => {
  const feedbackId = event.target.dataset.feedbackContact;
  const statusId = event.target.dataset.contactStatus;

  if (feedbackId) {
    const contact = state.contacts.find((item) => item.id === feedbackId);
    openFeedback("contact", contact);
  }

  if (statusId) {
    await updateContact(statusId, { status: event.target.dataset.nextStatus });
    showToast("Message archived");
  }
});

nodes.closeDialog.addEventListener("click", () => nodes.dialog.close());

nodes.saveFeedback.addEventListener("click", async () => {
  if (!state.activeFeedback) return;

  const payload = {
    clientFeedback: nodes.feedbackText.value,
    internalNotes: nodes.internalNotes.value
  };

  if (state.activeFeedback.type === "appointment") {
    await updateAppointment(state.activeFeedback.id, payload);
  } else {
    await updateContact(state.activeFeedback.id, payload);
  }

  nodes.dialog.close();
  showToast("Feedback saved");
});

loadDashboard().catch((error) => showToast(error.message));
