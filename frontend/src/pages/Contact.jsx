import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Map from "../components/Map";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
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
      const response = await fetch(`${API_BASE}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Unable to send message");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setStatus({
        type: "success",
        message: "Your message has been received. The clinic team will get back to you shortly."
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="eyebrow">Contact Premier Gastro</span>
        <h1>Speak with the clinic team</h1>
        <p>Ask about appointments, preparation, referrals, or the right diagnostic test for your symptoms.</p>
      </section>

      <section className="contact-grid">
        <aside className="contact-card">
          <h2>Get in touch</h2>
          <p>
            <FaMapMarkerAlt />
            <span>Park Medical Centre (PMC), 6th floor, suite 608, 3rd Parklands Avenue, Parklands, Nairobi</span>
          </p>
          <p><FaPhone /> <span>0727737394</span></p>
          <p><FaEnvelope /> <span>Premiergastro@gmail.com</span></p>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <input
            placeholder="Full Name *"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
          <input
            placeholder="Subject *"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
          />
          <textarea
            placeholder="Message *"
            rows="5"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
          {status.message ? (
            <p className={`form-notice ${status.type === "error" ? "is-error" : "is-success"}`}>
              {status.message}
            </p>
          ) : null}
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <section className="contact-map">
        <Map />
      </section>
    </main>
  );
}
