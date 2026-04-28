export default function Testimonials() {
  return (
    <section style={section}>
      <h2 style={title}>What Our Patients Say</h2>

      <div style={grid}>
        <div className="card" style={card}>
          <p>
            “Very professional and caring team. The procedure was smooth and well explained.”
          </p>
          <h4>- Patient A</h4>
        </div>

        <div className="card" style={card}>
          <p>
            “Accurate diagnosis and excellent service. Highly recommend this clinic.”
          </p>
          <h4>- Patient B</h4>
        </div>

        <div className="card" style={card}>
          <p>
            “Clean facility and friendly staff. I felt comfortable throughout.”
          </p>
          <h4>- Patient C</h4>
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const section = {
  padding: "80px 40px",
  background: "#f8fafc",
  textAlign: "center"
};

const title = {
  fontSize: "28px",
  marginBottom: "20px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  padding: "25px",
  borderRadius: "10px",
  background: "#ffffff",
  boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
};