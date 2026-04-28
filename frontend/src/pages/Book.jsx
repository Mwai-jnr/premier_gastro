import { FaClock, FaFileAlt, FaUserCheck, FaPhone, FaTimes, FaAmbulance } from "react-icons/fa";

export default function Book() {
  return (
    <section style={section}>
      <h1 style={title}>Book Your Appointment</h1>
      <p style={{
  color: "#64748b",
  marginBottom: "30px"
}}>
  Schedule your visit with our specialists
</p>
      {/* <p style={subtitle}>
        Schedule a convenient time to visit our healthcare professionals
      </p> */}

      {/* FORM CARD */}
      <div style={card}>
   <form style={formGrid}>
  
  <div>
    <label>Full Name *</label>
    <input placeholder="Enter your full name" />
  </div>

  <div>
    <label>Email Address *</label>
    <input placeholder="Enter your email" />
  </div>

  <div>
    <label>Phone Number *</label>
    <input placeholder="Enter phone number" />
  </div>

  <div>
    <label>Department</label>
    <select>
      <option>Select Department</option>
      <option>Esophageal</option>
      <option>pH Monitoring</option>
      <option>Anorectal</option>
    </select>
  </div>

  <div>
    <label>Preferred Date</label>
    <input type="date" />
  </div>

  <div>
    <label>Preferred Time</label>
    <input type="time" />
  </div>

  <div style={{ gridColumn: "span 2" }}>
    <label>Preferred Doctor</label>
    <select>
      <option>Select Doctor (Optional)</option>
    </select>
  </div>

  <div style={{ gridColumn: "span 2" }}>
    <label>Additional Notes</label>
    <textarea placeholder="Describe your symptoms..." />
  </div>

  <button style={{ gridColumn: "span 2" }}>
    Book Appointment
  </button>

</form>
      </div>

      {/* GUIDELINES */}
      <div style={guidelines}>
  <h2 style={guideTitle}>Appointment Guidelines</h2>
  <p style={guideSubtitle}>
    Please review before your visit to ensure a smooth experience
  </p>

  <div style={guideGrid}>
    
    <div style={guideCard}>
      <span style={icon}>🕒</span>
      <h4>Working Hours</h4>
      <p>Mon – Fri: 8AM – 6PM<br/>Sat: 9AM – 3PM</p>
    </div>

    <div style={guideCard}>
      <span style={icon}>📄</span>
      <h4>Bring Documents</h4>
      <p>Carry ID, insurance card and previous medical records</p>
    </div>

    <div style={guideCard}>
      <span style={icon}>⏰</span>
      <h4>Arrive Early</h4>
      <p>Arrive at least 15 minutes before your appointment</p>
    </div>

    <div style={guideCard}>
      <span style={icon}>📞</span>
      <h4>Confirmation</h4>
      <p>You will receive an SMS confirmation after booking</p>
    </div>

    <div style={guideCard}>
      <span style={icon}>❌</span>
      <h4>Cancellation</h4>
      <p>Please cancel at least 24 hours in advance</p>
    </div>

    <div style={guideCard}>
      <span style={icon}>🚑</span>
      <h4>Emergency</h4>
      <p>Visit emergency or call us for urgent cases</p>
    </div>

  </div>
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
  fontSize: "32px"
};

// const subtitle = {
//   marginBottom: "30px",
//   opacity: 0.7
// };

const card = {
  maxWidth: "900px",
  margin: "auto",
  background: "#ffffff",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  border: "1px solid #f1f5f9"
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px"
};

const guidelines = {
  marginTop: "60px",
  padding: "40px 20px",
  background: "#f8fafc",
  borderRadius: "16px"
};

const guideGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  maxWidth: "1100px",
  margin: "auto"
};

const guideTitle = {
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "700"
};

const guideSubtitle = {
  textAlign: "center",
  color: "#64748b",
  marginBottom: "30px"
};

const guideCard = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "14px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "all 0.3s ease",
  cursor: "pointer"
};

const icon = {
  fontSize: "28px",
  display: "block",
  marginBottom: "10px"
};