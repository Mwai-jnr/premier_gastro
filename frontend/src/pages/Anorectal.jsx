export default function Anorectal() {
  return (
    <section style={section}>
      <h1>Anorectal Manometry</h1>

      <p style={intro}>
        A specialized test used to evaluate the function of the rectum and anal sphincter muscles.
      </p>

      <div style={grid}>
        <div className="card">
          <h3>What It Checks</h3>
          <p>Muscle strength and coordination.</p>
        </div>

        <div className="card">
          <h3>Who Needs It</h3>
          <p>Patients with constipation or incontinence.</p>
        </div>

        <div className="card">
          <h3>Procedure</h3>
          <p>Simple, safe, and minimally invasive.</p>
        </div>

        <div className="card">
          <h3>Outcome</h3>
          <p>Helps guide treatment and improve quality of life.</p>
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