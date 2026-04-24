import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Gastro Clinic</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/esophageal">Esophageal</Link>
        <Link to="/ph-monitoring">pH Monitoring</Link>
        <Link to="/anorectal">Anorectal</Link>
      </div>
    </nav>
  );
}