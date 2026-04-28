export default function About() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <h1>About Us</h1>

      <p>
        We specialize in advanced gastroenterology diagnostics with modern equipment and expert care.
      </p>

      <h2 style={{ marginTop: "40px" }}>FAQs</h2>

      <div style={faq}>
        <details>
          <summary>What services do you offer?</summary>
          <p>We offer esophageal, pH monitoring and anorectal diagnostics.</p>
        </details>

        <details>
          <summary>How do I book?</summary>
          <p>You can book via our website or WhatsApp.</p>
        </details>

        <details>
          <summary>Do I need a referral?</summary>
          <p>Not always, but it’s recommended.</p>
        </details>
      </div>
    </section>
  );
}

const faq = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};