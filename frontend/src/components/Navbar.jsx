import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const services = [
  { label: "Esophageal Manometry", to: "/esophageal" },
  { label: "Esophageal pH studies", to: "/ph-monitoring" },
  { label: "Anorectal Manometry", to: "/anorectal" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdown(false);
  }, [location.pathname]);

  return (
    <nav className={`site-nav ${scrolled || location.pathname !== "/" ? "is-scrolled" : ""}`}>
      <Link to="/" className="nav-brand" aria-label="Premier Gastro home">
        <img src={logo} alt="Premier Gastroenterology & Motility Centre" />
      </Link>

      <button
        type="button"
        className="nav-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div
          className="nav-dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button type="button" onClick={() => setDropdown((open) => !open)}>
            Services <FaChevronDown />
          </button>
          <div className={`dropdown-menu ${dropdown ? "is-open" : ""}`}>
            {services.map((service) => (
              <Link to={service.to} key={service.to}>
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/book" className="nav-cta">Book</Link>
      </div>
    </nav>
  );
}
