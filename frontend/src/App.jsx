import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

import Esophageal from "./pages/Esophageal";
import PHMonitoring from "./pages/PHMonitoring";
import Anorectal from "./pages/Anorectal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogDetail /></Layout>} />

        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/book" element={<Layout><Book /></Layout>} />

        <Route path="/esophageal" element={<Layout><Esophageal /></Layout>} />
        <Route path="/ph-monitoring" element={<Layout><PHMonitoring /></Layout>} />
        <Route path="/anorectal" element={<Layout><Anorectal /></Layout>} />

      </Routes>
    </BrowserRouter>
  );
}