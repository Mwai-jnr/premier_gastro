export default function PHMonitoring() {
  return (
    <section style={section}>
      <h1>24-Hour pH Monitoring</h1>

      <p style={intro}>
        This test measures acid levels in your esophagus over 24 hours to diagnose acid reflux (GERD).
      </p>

      <div style={grid}>
        <div className="card">
          <h3>What It Detects</h3>
          <p>Acid reflux frequency and severity.</p>
        </div>

        <div className="card">
          <h3>Who Needs It</h3>
          <p>Patients with persistent heartburn or chest discomfort.</p>
        </div>

        <div className="card">
          <h3>Procedure</h3>
          <p>A small probe monitors acid levels over a day.</p>
        </div>

        <div className="card">
          <h3>Benefits</h3>
          <p>Accurate diagnosis and better treatment planning.</p>
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