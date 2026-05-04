import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ServicePage({
  eyebrow,
  title,
  summary,
  heroImage,
  highlights,
  evaluatesTitle,
  evaluates,
  symptomsTitle,
  symptoms,
  conditionsTitle,
  conditions,
  processTitle,
  process,
  importance,
  supportingImage
}) {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="hero-actions">
            <Link to="/book" className="btn-primary">
              Book This Test <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary dark">
              Ask a Question
            </Link>
          </div>
        </div>

        <div className="service-visual service-visual-diagram">
          <img src={heroImage} alt="" />
          <div className="service-visual-card">
            <strong>Specialist-led diagnostic testing</strong>
            <span>Clear preparation guidance and results your doctor can act on.</span>
          </div>
        </div>
      </section>

      <section className="service-highlights" aria-label="Service highlights">
        {highlights.map((item) => (
          <article className="premium-card" key={item.title}>
            <span>{item.kicker}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="service-grid-section">
        <article className="content-panel">
          <span className="eyebrow">{evaluatesTitle}</span>
          <h2>What the test evaluates</h2>
          <ul className="check-list">
            {evaluates.map((item) => (
              <li key={item}><FaCheckCircle /> {item}</li>
            ))}
          </ul>
        </article>

        <article className={`content-panel tinted ${supportingImage ? "with-image" : ""}`}>
          {supportingImage && <img src={supportingImage} alt="" />}
          <span className="eyebrow">{symptomsTitle}</span>
          <h2>When doctors recommend it</h2>
          <ul className="check-list">
            {symptoms.map((item) => (
              <li key={item}><FaCheckCircle /> {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="split-feature">
        <div>
          <span className="eyebrow">{conditionsTitle}</span>
          <h2>Conditions it can help clarify</h2>
          <div className="condition-list">
            {conditions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">{processTitle}</span>
          <h2>How the test works</h2>
          <div className="timeline">
            {process.map((step, index) => (
              <div key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div>
          <span className="eyebrow">Why it matters</span>
          <h2>{importance.title}</h2>
          <p>{importance.text}</p>
        </div>
        <Link to="/book" className="btn-primary">
          Schedule a Visit <FaArrowRight />
        </Link>
      </section>
    </main>
  );
}
