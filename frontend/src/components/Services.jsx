import { FaHeartbeat, FaProcedures, FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section style={section}>
      <h2 style={title}>Our Services</h2>

      <div style={grid}>
        
        <Link to="/esophageal" className="card" style={card}>
          <FaHeartbeat size={40} color="#0ea5e9" />
          <h3>Esophageal Manometry</h3>
          <p>Measures esophageal pressure and function.</p>
        </Link>

        <Link to="/ph-monitoring" className="card" style={card}>
          <FaStethoscope size={40} color="#0ea5e9" />
          <h3>pH Monitoring</h3>
          <p>Detects acid reflux over time.</p>
        </Link>

        <Link to="/anorectal" className="card" style={card}>
          <FaProcedures size={40} color="#0ea5e9" />
          <h3>Anorectal Manometry</h3>
          <p>Evaluates rectal muscle function.</p>
        </Link>

      </div>
    </section>
  );
}

/* STYLES */

const section = {
  padding: "80px 40px",
  textAlign: "center",
  background: "#f8fafc"
};

const title = {
  fontSize: "28px",
  marginBottom: "20px",
  color: "#1e293b"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
  marginTop: "30px"
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#1e293b",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
};