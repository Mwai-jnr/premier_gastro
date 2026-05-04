import { FaClock, FaMicroscope, FaUserMd } from "react-icons/fa";

const items = [
  {
    icon: FaUserMd,
    title: "Specialist-led care",
    text: "A focused team for gastroenterology and motility diagnostics."
  },
  {
    icon: FaMicroscope,
    title: "Objective results",
    text: "Testing that translates complex symptoms into measurable clinical data."
  },
  {
    icon: FaClock,
    title: "Prepared visits",
    text: "Clear appointment guidance so patients arrive confident and ready."
  }
];

export default function WhyUs() {
  return (
    <section className="home-section why-section">
      <div className="section-heading">
        <span className="eyebrow">Why Premier</span>
        <h2>A calmer path to answers for digestive symptoms</h2>
      </div>

      <div className="why-grid">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article className="why-item" key={item.title}>
              <Icon />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
