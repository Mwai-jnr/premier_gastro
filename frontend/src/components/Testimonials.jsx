const testimonials = [
  {
    quote: "The team explained everything clearly and made the procedure feel calm from start to finish.",
    name: "Motility patient"
  },
  {
    quote: "I finally understood what was causing my reflux symptoms. The report helped my doctor plan treatment.",
    name: "Esophageal pH studies patient"
  },
  {
    quote: "Professional, discreet, and reassuring. I felt respected throughout the entire visit.",
    name: "Anorectal testing patient"
  }
];

export default function Testimonials() {
  return (
    <section className="home-section testimonials-section">
      <div className="section-heading">
        <span className="eyebrow">Patient confidence</span>
        <h2>Care that feels clear, private, and well coordinated</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="premium-card testimonial-card" key={testimonial.name}>
            <p>"{testimonial.quote}"</p>
            <strong>{testimonial.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
