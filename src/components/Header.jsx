import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../assets/Infortechgen_Logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Infortechgen Logo" />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Our services</Link>
        <Link to="/contact" onClick={closeMenu}>Our products</Link>

        <Link to="/contact" className="contact-btn" onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>

    </header>
  );
}