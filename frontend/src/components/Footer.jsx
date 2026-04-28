import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={container}>
        
        {/* BRAND */}
        <div>
          <h2 style={logo}>Premier Gastro Clinic</h2>
          <p style={text}>
            Providing advanced gastroenterology diagnostics with precision and care.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>
          <p><a href="/">Home</a></p>
          <p><a href="/esophageal">Esophageal</a></p>
          <p><a href="/ph-monitoring">pH Monitoring</a></p>
          <p><a href="/anorectal">Anorectal</a></p>
          <p><a href="/blog">Blog</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/contact">Contact</a></p>
          <p><a href="/book">Book Now</a></p>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>
          <p><FaPhone />  +254 727 737 394</p>
          <p><FaEnvelope /> info@clinic.com</p>
          <p><FaMapMarkerAlt /> 3rd Parklands Nairobi KE, 3rd Parklands Ave, Nairobi, Kenya</p>
        </div>

        {/* SOCIAL */}
        <div>
          <h3>Follow Us</h3>
          <div style={socials}>
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>

      </div>

      <div style={bottom}>
        © {new Date().getFullYear()} Premier Gastro Clinic. All rights reserved.
      </div>
    </footer>
  );
}

/* STYLES */

const footer = {
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  color: "white",
  marginTop: "60px"
};
const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  padding: "60px 40px"
};

const logo = {
  color: "#0ea5e9"
};

const text = {
  opacity: 0.75,
  lineHeight: "1.6"
};

const socials = {
  display: "flex",
  gap: "15px",
  fontSize: "20px",
  marginTop: "10px",
  cursor: "pointer"
};

const bottom = {
  textAlign: "center",
  padding: "15px",
  borderTop: "1px solid rgba(255,255,255,0.1)",
  fontSize: "14px",
  opacity: 0.7
};