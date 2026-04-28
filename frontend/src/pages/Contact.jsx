import Map from "../components/Map";

export default function Contact() {
  return (
    <section style={section}>
      <h1 style={title}>Contact Us</h1>
      <p style={subtitle}>
        Get in touch with us for any inquiries or appointments
      </p>

      <div style={container}>
        
        {/* LEFT INFO CARD */}
        <div style={infoCard}>
          <h3>Get In Touch</h3>

          <p><strong>📍 Address</strong><br/>
          Park Medical Centre (PMC), Parklands, Nairobi</p>

          <p><strong>📞 Phone</strong><br/>
          0790 000 300</p>

          <p><strong>✉ Email</strong><br/>
          info@clinic.com</p>

          <p><strong>🕒 Working Hours</strong><br/>
          Open 24/7</p>
        </div>

        {/* FORM */}
        <form style={form}>
          <h3>Send a Message</h3>

          <input placeholder="Full Name *" />
          <input placeholder="Email Address *" />
          <input placeholder="Phone Number" />
          <input placeholder="Subject *" />
          <textarea placeholder="Message *" />

          <button button style={{ gridColumn: "span 2" }}>Send Message</button>
        </form>
      </div>

      {/* MAP */}
      <div style={mapSection}>
        {/* <h2>Visit Us</h2> */}
        <Map />
      </div>
    </section>
  );
}

/* STYLES */

const section = {
  padding: "80px 20px",
  background: "#f8fafc",
  textAlign: "center"
};

const title = {
  fontSize: "32px",
  fontWeight: "700"
};

const subtitle = {
  marginBottom: "40px",
  opacity: 0.7
};

const container = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  maxWidth: "1100px",
  margin: "auto"
};

const infoCard = {
  background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "left",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const form = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
};

const mapSection = {
  marginTop: "60px"
};