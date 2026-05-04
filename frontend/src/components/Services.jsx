import { FaDiagnoses, FaVial, FaWaveSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Esophageal Manometry",
    text: "High-resolution pressure testing for swallowing, chest discomfort, and reflux concerns.",
    to: "/esophageal",
    icon: FaWaveSquare
  },
  {
    title: "Esophageal pH studies",
    text: "Objective reflux studies that measure acid exposure and connect symptoms to data.",
    to: "/ph-monitoring",
    icon: FaVial
  },
  {
    title: "Anorectal Manometry",
    text: "Specialized testing for constipation, bowel control, and pelvic floor coordination.",
    to: "/anorectal",
    icon: FaDiagnoses
  }
];

export default function Services() {
  return (
    <section className="home-section services-section">
      <div className="section-heading">
        <span className="eyebrow">Specialized diagnostics</span>
        <h2>Motility and reflux testing with a premium patient experience</h2>
        <p>
          Focused procedures, modern equipment, and clear guidance from preparation to results.
        </p>
      </div>

      <div className="service-card-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link to={service.to} className="premium-card service-card" key={service.to}>
              <Icon />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>Explore service</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
