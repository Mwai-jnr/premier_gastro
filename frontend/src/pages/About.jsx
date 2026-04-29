export default function About() {
  return (
    <section style={section}>
      
      {/* HERO */}
      <div style={hero}>
        <h1>About Our Clinic</h1>
        <p>Committed to excellence in gastroenterology care</p>
      </div>

      {/* CONTENT */}
      <div style={grid}>
        
        <div>
          <h2>Who We Are</h2>
          <p>
            We provide advanced diagnostic and treatment services
            with a patient-first approach.
          </p>
        </div>

        <div>
          <h2>Our Mission</h2>
          <p>
            Deliver accurate, compassionate and modern healthcare.
          </p>
        </div>

      </div>

      {/* FAQ */}
      <div style={faq}>
        <h2>Frequently Asked Questions</h2>

        <div style={faqItem}>
          <h4>Do I need an appointment?</h4>
          <p>Yes, booking in advance is recommended.</p>
        </div>

        <div style={faqItem}>
          <h4>Do you accept insurance?</h4>
          <p>We work with major insurance providers.</p>
        </div>

      </div>

    </section>
  );
}

const section = {
  padding: "80px 20px",
  background: "var(--light)"
};

const hero = {
  textAlign: "center",
  marginBottom: "50px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  maxWidth: "1000px",
  margin: "auto"
};

const faq = {
  marginTop: "50px",
  maxWidth: "800px",
  marginInline: "auto"
};

const faqItem = {
  marginBottom: "20px",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px"
};