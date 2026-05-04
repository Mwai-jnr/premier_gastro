import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={container}>
        <div>
          <h2 style={logo}>Premier Gastro</h2>
          <p style={text}>
            Specialist gastroenterology and motility diagnostics delivered with precision, privacy, and care.
          </p>
        </div>

        <div>
          <h3 style={heading}>Services</h3>
          <p><Link to="/esophageal">Esophageal Manometry</Link></p>
          <p><Link to="/ph-monitoring">Esophageal pH studies</Link></p>
          <p><Link to="/anorectal">Anorectal Manometry</Link></p>
          <p><Link to="/book">Book Appointment</Link></p>
        </div>

        <div>
          <h3 style={heading}>Contact</h3>
          <p style={contactLine}>
            <FaMapMarkerAlt /> Park Medical Centre (PMC), 6th floor, suite 608, 3rd Parklands Avenue, Parklands, Nairobi
          </p>
          <p style={contactLine}><FaPhone /> 0727737394</p>
          <p style={contactLine}><FaEnvelope /> Premiergastro@gmail.com</p>
        </div>

        <div>
          <h3 style={heading}>Follow</h3>
          <div style={socials}>
            <a href="https://wa.me/254727737394" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="/" aria-label="Facebook"><FaFacebook /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div style={bottom}>
        Copyright {new Date().getFullYear()} Premier Gastroenterology & Motility Centre. All rights reserved.
      </div>
    </footer>
  );
}

const footer = {
  background: "linear-gradient(135deg, #031530, #052a66)",
  color: "white",
  marginTop: 0
};

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  padding: "58px clamp(20px, 5vw, 56px)"
};

const logo = {
  color: "#16b8c7",
  marginBottom: "12px"
};

const heading = {
  marginBottom: "14px"
};

const text = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: "1.7",
  maxWidth: "340px"
};

const contactLine = {
  alignItems: "center",
  color: "rgba(255,255,255,0.78)",
  display: "flex",
  gap: "10px",
  marginBottom: "10px"
};

const socials = {
  display: "flex",
  gap: "12px",
  fontSize: "22px"
};

const bottom = {
  borderTop: "1px solid rgba(255,255,255,0.1)",
  color: "rgba(255,255,255,0.62)",
  fontSize: "14px",
  padding: "16px 20px",
  textAlign: "center"
};
