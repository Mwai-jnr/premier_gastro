import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Map from "../components/Map";
import AppointmentForm from "../components/AppointmentForm";

export default function Home() {
  return (
    <>
    <h1>HOME WORKING</h1>
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <Testimonials />
      {/* <Map />
      <AppointmentForm /> */}
    </>
  );
}