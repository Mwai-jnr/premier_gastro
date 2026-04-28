import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

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
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
        key={index}
        style={{
          ...slideStyle,
          backgroundImage: `url(${slides[index].image})`
        }}
      >
        <div style={overlay}>
          
          {/* LOGO ONLY ON FIRST SLIDE */}
          {index === 0 && (
            <img src={logo} alt="logo" style={logoStyle} />
          )}

          <h1 style={title}>{slides[index].title}</h1>
          <p style={text}>{slides[index].text}</p>

          <a href="/book" style={button}>
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
              background: i === index ? "#0ea5e9" : "white",
              transform: i === index ? "scale(1.3)" : "scale(1)"
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const heroContainer = {
  position: "relative",
  height: "85vh",
  overflow: "hidden"
};

const slideStyle = {
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 1s ease-in-out"
};

const overlay = {
  background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
  padding: "20px"
};

const logoStyle = {
  width: "200px",
  marginBottom: "20px",
  animation: "fadeIn 1.5s ease"
};

const title = {
  fontSize: "52px",
  fontWeight: "700",
  letterSpacing: "1px"
};

const text = {
  fontSize: "18px",
  opacity: 0.9,
  maxWidth: "500px"
};

const button = {
  marginTop: "25px",
  padding: "14px 30px",
  background: "rgba(14,165,233,0.9)",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  backdropFilter: "blur(6px)",
  transition: "0.3s"
};

const arrow = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  fontSize: "28px",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "50%",
  zIndex: 2
};

const dotsContainer = {
  position: "absolute",
  bottom: "25px",
  width: "100%",
  textAlign: "center"
};

const dot = {
  display: "inline-block",
  width: "12px",
  height: "12px",
  margin: "0 6px",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "all 0.3s ease"
};