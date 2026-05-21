import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import logo from "../assets/Infortechgen_Logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const checkActive = ({ isActive }) => (isActive ? "active-page" : "");

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Infortechgen Logo" />
      </div>

      {/* Hamburger Menu Toggle Icon */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Modern Navigation Menu */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" className={checkActive} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/Aboutus" className={checkActive} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/Services" className={checkActive} onClick={closeMenu}>
          Our services
        </NavLink>
        <NavLink to="/ProductsPage" className={checkActive} onClick={closeMenu}>
          Our products
        </NavLink>

        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            `contact-btn ${isActive ? "active-page" : ""}`
          }
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}