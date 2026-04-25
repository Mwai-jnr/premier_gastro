import { useEffect, useState } from "react";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

const slides = [
  {
    title: "Advanced Gastroenterology Care",
    text: "Accurate diagnostics for digestive health",
    image: hero1
  },
  {
    title: "Modern Diagnostic Procedures",
    text: "Esophageal, pH & Anorectal testing",
    image: hero2
  },
  {
    title: "Patient-Centered Care",
    text: "Comfort, precision and expertise",
    image: hero3
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={heroContainer}>
      
      {/* SLIDE */}
      <div
        style={{
          ...slideStyle,
          backgroundImage: `url(${slides[index].image})`
        }}
      >
        <div style={overlay}>
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>

          <a href="#book" style={button}>
            Book Appointment
          </a>
        </div>
      </div>

      {/* ARROWS */}
      <button style={{ ...arrow, left: "20px" }} onClick={prevSlide}>
        ❮
      </button>

      <button style={{ ...arrow, right: "20px" }} onClick={nextSlide}>
        ❯
      </button>

      {/* DOTS */}
      <div style={dotsContainer}>
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              ...dot,
              background: i === index ? "#0ea5e9" : "white"
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* STYLES */

const heroContainer = {
  position: "relative",
  height: "85vh",
  overflow: "hidden"
};

const slideStyle = {
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "opacity 1s ease-in-out"
};

const overlay = {
  background: "rgba(0,0,0,0.5)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
  padding: "20px"
};

const button = {
  marginTop: "20px",
  padding: "12px 25px",
  background: "#0ea5e9",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold"
};

const arrow = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  fontSize: "30px",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "50%"
};

const dotsContainer = {
  position: "absolute",
  bottom: "20px",
  width: "100%",
  textAlign: "center"
};

const dot = {
  display: "inline-block",
  width: "12px",
  height: "12px",
  margin: "0 5px",
  borderRadius: "50%",
  cursor: "pointer"
};