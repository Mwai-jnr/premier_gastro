import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Preloader from "./components/Preloader";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Esophageal from "./pages/Esophageal";
import PHMonitoring from "./pages/PHMonitoring";
import Anorectal from "./pages/Anorectal";
import WhatsApp from "./components/WhatsApp";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Blog from "./pages/Blog";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Preloader />;

  return (
  <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/esophageal" element={<Layout><Esophageal /></Layout>} />
        <Route path="/ph-monitoring" element={<Layout><PHMonitoring /></Layout>} />
        <Route path="/anorectal" element={<Layout><Anorectal /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/book" element={<Layout><Book /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
      </Routes>

      {/* GLOBAL FLOATING BUTTON */}
      <WhatsApp />
    </>
  </BrowserRouter>
);
  
}

