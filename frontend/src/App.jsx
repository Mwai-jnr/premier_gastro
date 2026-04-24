import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Preloader from "./components/Preloader";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Esophageal from "./pages/Esophageal";
import PHMonitoring from "./pages/PHMonitoring";
import Anorectal from "./pages/Anorectal";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Preloader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/esophageal" element={<Layout><Esophageal /></Layout>} />
        <Route path="/ph-monitoring" element={<Layout><PHMonitoring /></Layout>} />
        <Route path="/anorectal" element={<Layout><Anorectal /></Layout>} />
      </Routes>
    </BrowserRouter>

  );
  
}

