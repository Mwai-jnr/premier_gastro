export default function Book() {
  return (
    <section style={section}>
      
      {/* HEADER */}
      <div style={header}>
        <h1>Book Your Appointment</h1>
        <p>Simple, fast and secure scheduling with our specialists</p>
      </div>

      {/* FORM */}
      <div style={card}>
        <form style={formGrid}>

          <Input label="Full Name *" />
          <Input label="Email Address *" />

          <Input label="Phone Number *" />
          <Select label="Department" />

          <Input label="Preferred Date" type="date" />
          <Input label="Preferred Time" type="time" />

          <div style={{ gridColumn: "span 2" }}>
            <Select label="Preferred Doctor (Optional)" />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <textarea placeholder="Additional Notes..." />
          </div>

          <button style={{ gridColumn: "span 2" }}>
            Book Appointment
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
function Input({ label, type = "text" }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={label} />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label>{label}</label>
      <select>
        <option>Select</option>
      </select>
    </div>
  );
}

/* DATA */
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