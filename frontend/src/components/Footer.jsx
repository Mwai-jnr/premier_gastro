import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footer}>
      
      <div style={container}>

        {/* LEFT - ABOUT */}
        <div>
          <h2 style={logo}>Gastro Clinic</h2>
          <p style={text}>
            Providing specialized gastroenterology diagnostics with precision,
            care, and patient comfort at the core of our services.
          </p>

          <div style={socials}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>
          <ul style={list}>
            <li>Home</li>
            <li>Services</li>
            <li>Appointments</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact Info</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 0790 000 300</p>
          <p>✉️ info@gastroclinic.com</p>
          <p>🕒 Open 24/7</p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3>Newsletter</h3>
          <div style={newsletter}>
            <input
              type="email"
              placeholder="Your email"
              style={input}
            />
            <button style={button}>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={bottom}>
        © 2026 Gastro Clinic. All rights reserved.
      </div>

    </footer>
  );
}

/* STYLES */

const footer = {
  background: "#1e1b4b",
  color: "white",
  marginTop: "60px"
};

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  padding: "50px 40px"
};

const logo = {
  marginBottom: "10px"
};

const text = {
  fontSize: "14px",
  lineHeight: "1.6"
};

const socials = {
  marginTop: "15px",
  display: "flex",
  gap: "10px",
  fontSize: "18px",
  color: "#f97316",
  cursor: "pointer"
};

const list = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2"
};

const newsletter = {
  display: "flex",
  gap: "10px",
  marginTop: "10px"
};

const input = {
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  flex: 1
};

const button = {
  padding: "10px 15px",
  background: "#0ea5e9",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const bottom = {
  textAlign: "center",
  padding: "15px",
  borderTop: "1px solid rgba(255,255,255,0.1)",
  fontSize: "14px"
};