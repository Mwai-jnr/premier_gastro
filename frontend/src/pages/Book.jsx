import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Book() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    doctor: "",
    notes: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_BASE}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Unable to submit appointment");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        doctor: "",
        notes: ""
      });
      setStatus({
        type: "success",
        message: "Your appointment request has been received. The clinic team will confirm the booking shortly."
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={section}>
      
      {/* HEADER */}
      <div style={header}>
        <h1>Book Your Appointment</h1>
        <p>Simple, fast and secure scheduling with our specialists</p>
      </div>

      {/* FORM */}
      <div style={card}>
        <form style={formGrid} onSubmit={handleSubmit}>

          <Input label="Full Name *" value={form.name} onChange={(value) => updateField("name", value)} />
          <Input label="Email Address *" type="email" value={form.email} onChange={(value) => updateField("email", value)} />

          <Input label="Phone Number *" value={form.phone} onChange={(value) => updateField("phone", value)} />
          <Select label="Select Test *" value={form.service} onChange={(value) => updateField("service", value)} options={tests} />

          <Input label="Preferred Date" type="date" value={form.preferredDate} onChange={(value) => updateField("preferredDate", value)} />
          <Input label="Preferred Time" type="time" value={form.preferredTime} onChange={(value) => updateField("preferredTime", value)} />

          <div style={{ gridColumn: "span 2" }}>
            <Select label="Preferred Doctor (Optional)" value={form.doctor} onChange={(value) => updateField("doctor", value)} options={doctors} placeholder="Select a doctor" />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <textarea
              placeholder="Additional Notes..."
              value={form.notes}
              onChange={(event) => updateField("notes", event.target.value)}
            />
          </div>

          {status.message ? (
            <p style={{ ...notice, ...(status.type === "error" ? errorNotice : successNotice) }}>
              {status.message}
            </p>
          ) : null}

          <button style={{ gridColumn: "span 2" }} disabled={submitting}>
            {submitting ? "Submitting..." : "Book Appointment"}
          </button>

        </form>
      </div>

      {/* GUIDELINES */}
      <div style={guidelines}>
        <h2>Appointment Guidelines</h2>

        <div style={grid}>
          {cards.map((item, i) => (
            <div key={i} style={cardItem}>
              <div style={iconCircle}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

/* REUSABLE INPUT */
function Input({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function Select({ label, options = [], value, onChange, placeholder = "Select a test" }) {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

/* DATA */
const tests = [
  "Esophageal Manometry",
  "Esophageal pH studies",
  "Anorectal Manometry"
];

const doctors = [
  "Any available specialist",
  "Dr. Premier Gastro Team"
];

const cards = [
  { icon: "🕒", title: "Working Hours", text: "Mon–Fri: 8AM–6PM" },
  { icon: "📄", title: "Documents", text: "Carry ID & medical records" },
  { icon: "⏰", title: "Arrive Early", text: "15 minutes before time" },
  { icon: "📞", title: "Confirmation", text: "SMS confirmation sent" },
  { icon: "❌", title: "Cancellation", text: "24 hrs notice required" },
  { icon: "🚑", title: "Emergency", text: "Visit ER if urgent" }
];

/* STYLES */

const section = {
  padding: "100px 20px",
  background: "var(--light)"
};

const header = {
  textAlign: "center",
  marginBottom: "40px"
};

const card = {
  maxWidth: "900px",
  margin: "auto",
  padding: "40px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px"
};

const notice = {
  borderRadius: "12px",
  fontWeight: 700,
  gridColumn: "span 2",
  lineHeight: 1.5,
  margin: 0,
  padding: "14px 16px"
};

const successNotice = {
  background: "#e9fbf4",
  color: "#087653"
};

const errorNotice = {
  background: "#fff0f0",
  color: "#a12626"
};

const guidelines = {
  marginTop: "60px",
  textAlign: "center"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};

const cardItem = {
  background: "#fff",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const iconCircle = {
  width: "50px",
  height: "50px",
  margin: "auto",
  borderRadius: "50%",
  background: "var(--gradient)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  marginBottom: "10px"
};
