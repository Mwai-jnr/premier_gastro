import "./preloader.css";
import logo from "../assets/logo.png";

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={logo} alt="Clinic Logo" className="logo" />
    </div>
  );
}