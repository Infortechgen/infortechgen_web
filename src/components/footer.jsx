import { Link } from "react-router-dom";
import "../css/Footer.css";
import logo from "../assets/Infortechgen_Logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="Infortechgen Logo" />
          </div>
          <p>
            We deliver quality services with real impact. Supporting your
            business at every step.
          </p>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>COMPANY</h4>
          <Link to="/Aboutus">About Us</Link>
          <Link to="/Services">Our services</Link>
          <Link to="/ProductsPage">Our products</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>SERVICES</h4>
          <Link to="/Services">Web Development</Link>
          <Link to="/Services">Mobile Apps</Link>
          <Link to="/Services">AI & ML</Link>
          <Link to="/Services">Cloud & DevOps</Link>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <Link to="/ProductsPage">leadMe</Link>
          <Link to="/ProductsPage">InforCloud</Link>
          <Link to="/ProductsPage">InforPos</Link>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>© 2026 Infortechgen (Pvt) Ltd. All rights reserved.</p>

        <div className="socials">
          <span>in</span>
          <span>tw</span>
          <span>gh</span>
          <span>fb</span>
        </div>
      </div>
    </footer>
  );
}
