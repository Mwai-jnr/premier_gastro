import { FaUserMd, FaMicroscope, FaClock } from "react-icons/fa";

export default function WhyUs() {
  return (
    <div style={section}>
      <h2>Why Choose Our Clinic</h2>

      <div style={grid}>
        <div style={card}>
          <FaUserMd size={40} color="#0ea5e9" />
          <h3>Expert Specialists</h3>
          <p>Highly trained gastroenterology professionals.</p>
        </div>

        <div style={card}>
          <FaMicroscope size={40} color="#0ea5e9" />
          <h3>Advanced Diagnostics</h3>
          <p>State-of-the-art equipment and accurate testing.</p>
        </div>

        <div style={card}>
          <FaClock size={40} color="#0ea5e9" />
          <h3>Quick Appointments</h3>
          <p>Fast and convenient scheduling for all patients.</p>
        </div>
      </div>
    </div>
  );
}

const section = {
  padding: "60px 40px",
  textAlign: "center"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  transition: "0.3s",
  cursor: "pointer"
  
};

