import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ ...nav, ...(scrolled || !isHome ? navScrolled : {}) }}>
      
      {/* LOGO */}
      <img src={logo} alt="logo" style={logoStyle} />

      {/* HAMBURGER */}
      <div style={hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* LINKS */}
      <div style={{ ...links, ...(menuOpen ? mobileMenu : {}) }}>
        
        <Link to="/" style={link}>Home</Link>
        <Link to="/about" style={link}>About</Link>

        {/* DROPDOWN */}
        <div
          style={dropdownContainer}
          onMouseEnter={() => setDropdown(true)}
        >
          <span style={link}>Services ▾</span>

          <div
            style={{
              ...dropdownMenu,
              opacity: dropdown ? 1 : 0,
              visibility: dropdown ? "visible" : "hidden",
              transform: dropdown ? "translateY(0)" : "translateY(10px)"
            }}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link to="/esophageal" style={dropdownItem}>Esophageal</Link>
            <Link to="/ph-monitoring" style={dropdownItem}>pH Monitoring</Link>
            <Link to="/anorectal" style={dropdownItem}>Anorectal</Link>
          </div>
        </div>

        <Link to="/blog" style={link}>Blog</Link>
        <Link to="/contact" style={link}>Contact</Link>
        <Link to="/book" style={cta}>Book</Link>

      </div>
    </nav>
  );
}

/* STYLES */

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  zIndex: 1000,
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease"
};

const navScrolled = {
  background: "#ffffff",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  padding: "10px 40px"
};

const logoStyle = {
  height: "50px",
  transition: "0.3s"
};

const links = {
  display: "flex",
  gap: "25px",
  alignItems: "center"
};

const link = {
  textDecoration: "none",
  color: "#1e293b",
  fontWeight: "500",
  transition: "0.3s"
};

const cta = {
  padding: "10px 20px",
  background: "#0ea5e9",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600"
};

/* DROPDOWN */

const dropdownContainer = {
  position: "relative"
};

const dropdownMenu = {
  position: "absolute",
  top: "35px",
  left: 0,
  background: "white",
  padding: "10px",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease"
};

const dropdownItem = {
  display: "block",
  padding: "8px 15px",
  textDecoration: "none",
  color: "#1e293b"
};

/* MOBILE */

const hamburger = {
  display: "none",
  fontSize: "24px",
  cursor: "pointer"
};

const mobileMenu = {
  position: "absolute",
  top: "70px",
  left: 0,
  width: "100%",
  background: "white",
  flexDirection: "column",
  padding: "20px"
};