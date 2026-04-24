import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AppointmentForm from "../components/AppointmentForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />

      <section id="book">
        <h2 style={{ textAlign: "center" }}>Book Appointment</h2>
        <AppointmentForm />
      </section>

      <Footer />
    </div>
  );
}