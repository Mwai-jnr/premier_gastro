import Hero from "../components/Hero";
import Services from "../components/Services";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      {/* WHY CHOOSE US */}
      <section style={{ padding: "60px 40px", background: "#ffffff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Why Choose Us
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          <div className="card">
            <h3>Experienced Specialists</h3>
            <p>Highly trained professionals in gastroenterology diagnostics.</p>
          </div>

          <div className="card">
            <h3>Advanced Technology</h3>
            <p>State-of-the-art diagnostic equipment for accurate results.</p>
          </div>

          <div className="card">
            <h3>Patient-Centered Care</h3>
            <p>Comfortable procedures with personalized attention.</p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section style={{ padding: "60px", textAlign: "center", background: "#0ea5e9", color: "white" }}>
        <h2>Book an Appointment Today</h2>
        <p style={{ marginTop: "10px" }}>
          Early diagnosis leads to better outcomes. Schedule your visit now.
        </p>

        <a
          href="#book"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "white",
            color: "#0ea5e9",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Book Now
        </a>
      </section>

      {/* MAP */}
      <Map />
    </>
  );
}