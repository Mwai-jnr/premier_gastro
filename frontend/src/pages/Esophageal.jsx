export default function Esophageal() {
  return (
    <section style={section}>
      <h1>Esophageal Manometry</h1>

      <p style={intro}>
        A diagnostic procedure used to evaluate the function of the esophagus.
      </p>

      <div style={grid}>
        <div className="card">
          <h3>What it checks</h3>
          <p>Pressure and muscle coordination.</p>
        </div>

        <div className="card">
          <h3>Who needs it</h3>
          <p>Patients with swallowing issues.</p>
        </div>

        <div className="card">
          <h3>Procedure</h3>
          <p>Quick and minimally invasive.</p>
        </div>
      </div>
    </section>
  );
}

const section = {
  padding: "80px 40px",
  textAlign: "center"
};

const intro = {
  maxWidth: "600px",
  margin: "20px auto",
  textAlign: "center"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "40px"
};