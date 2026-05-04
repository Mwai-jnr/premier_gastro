import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Map from "../components/Map";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="eyebrow">Contact Premier Gastro</span>
        <h1>Speak with the clinic team</h1>
        <p>Ask about appointments, preparation, referrals, or the right diagnostic test for your symptoms.</p>
      </section>

      <section className="contact-grid">
        <aside className="contact-card">
          <h2>Get in touch</h2>
          <p>
            <FaMapMarkerAlt />
            <span>Park Medical Centre (PMC), 6th floor, suite 608, 3rd Parklands Avenue, Parklands, Nairobi</span>
          </p>
          <p><FaPhone /> <span>0727737394</span></p>
          <p><FaEnvelope /> <span>Premiergastro@gmail.com</span></p>
        </aside>

        <form className="contact-form">
          <h2>Send a message</h2>
          <input placeholder="Full Name *" />
          <input placeholder="Email Address *" />
          <input placeholder="Phone Number" />
          <input placeholder="Subject *" />
          <textarea placeholder="Message *" rows="5" />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      <section className="contact-map">
        <Map />
      </section>
    </main>
  );
}
