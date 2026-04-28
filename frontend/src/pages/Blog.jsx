export default function Blog() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <h1>Health Articles</h1>

      <div style={grid}>
        <div className="card">
          <h3>Understanding Acid Reflux</h3>
          <p>Learn causes and treatments...</p>
        </div>

        <div className="card">
          <h3>Digestive Health Tips</h3>
          <p>Improve your gut health...</p>
        </div>
      </div>
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};