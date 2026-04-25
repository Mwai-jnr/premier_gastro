import { FaHeartbeat, FaProcedures, FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div style={{ padding: "60px 40px", textAlign: "center" }}>
      <h2>Our Services</h2>

      <div style={grid}>
        <Link to="/esophageal" style={card}>
          <FaHeartbeat size={40} color="#0ea5e9" />
          <h3>Esophageal Manometry</h3>
          <p>Measures esophageal pressure and function.</p>
        </Link>

        <Link to="/ph-monitoring" style={card}>
          <FaStethoscope size={40} color="#0ea5e9" />
          <h3>pH Monitoring</h3>
          <p>Detects acid reflux over time.</p>
        </Link>

        <Link to="/anorectal" style={card}>
          <FaProcedures size={40} color="#0ea5e9" />
          <h3>Anorectal Manometry</h3>
          <p>Evaluates rectal muscle function.</p>
        </Link>
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  textDecoration: "none",
  color: "#1e293b",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  transition: "0.3s"
};