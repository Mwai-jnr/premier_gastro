import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logo from "../assets/images/logo.png";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

const slides = [
  {
    eyebrow: "Premier Gastroenterology & Motility Centre",
    title: "Advanced Gastro & Motility Services",
    text: "High-resolution motility testing, reflux studies, and patient-centered care delivered with calm precision.",
    image: hero1,
    stat: "Specialized motility care"
  },
  {
    eyebrow: "Esophageal Manometry",
    title: "Clear Answers for Swallowing and Chest Symptoms",
    text: "Measure esophageal muscle coordination and sphincter function with modern, specialist-led testing.",
    image: hero2,
    stat: "High-resolution testing"
  },
  {
    eyebrow: "Esophageal pH studies and Anorectal Manometry",
    title: "Accurate Testing for Reflux and Bowel Function",
    text: "Objective diagnostic studies that help your doctor choose the right treatment with confidence.",
    image: hero3,
    stat: "Evidence-led decisions"
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="premium-hero">
      {slides.map((slide, i) => (
        <div
          className={`hero-slide ${i === index ? "is-active" : ""}`}
          key={slide.title}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="hero-shade" />

      <div className="hero-content">
        <div className="hero-copy">
          <img src={logo} alt="Premier Gastroenterology & Motility Centre" className="hero-logo" />
          <span className="eyebrow">{slides[index].eyebrow}</span>
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>

          <div className="hero-actions">
            <Link to="/book" className="btn-primary">
              Book Appointment <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Clinic
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Clinic highlights">
          <div>
            <span>01</span>
            <strong>{slides[index].stat}</strong>
            <p>Personalized preparation guidance before every procedure.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Focused procedures</strong>
            <p>Esophageal, pH, and anorectal studies in one specialist centre.</p>
          </div>
        </aside>
      </div>

      <div className="hero-controls" aria-label="Hero controls">
        <button type="button" onClick={prevSlide} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <div className="hero-dots">
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.title}
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={nextSlide} aria-label="Next slide">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
