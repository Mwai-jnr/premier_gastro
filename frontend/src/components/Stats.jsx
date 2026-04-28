<h1 style={{color: "red"}}>STATS LOADED</h1>
export default function Stats() {
  return (

    <section style={section}>
      <div style={grid}>
        <div style={card} className="card">
          <h2 style={{ fontSize: "32px", color: "#0ea5e9" }}>500+</h2>
          <p>Procedures Done</p>
        </div>

        <div style={card} className="card">
          <h2 style={{ fontSize: "32px", color: "#0ea5e9" }}>98%</h2>
          <p>Patient Satisfaction</p>
        </div>

        <div style={card} className="card">
          <h2 style={{ fontSize: "32px", color: "#0ea5e9" }}>10+</h2>
          <p>Years Experience</p>
        </div>

        <div style={card} className="card">
          <h2 style={{ fontSize: "32px", color: "#0ea5e9" }}>24/7</h2>
          <p>Support</p>
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const section = {
  padding: "80px 40px",
  background: "#ffffff",
  borderTop: "1px solid #e2e8f0"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "40px 20px",
  borderRadius: "12px",
  background: "#f8fafc",
  boxShadow: "0 5px 20px rgba(0,0,0,0.04)"
};

