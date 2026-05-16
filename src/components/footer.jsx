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
          <a href="Aboutus">About Us</a>
          <a href="Aboutus">Our services</a>
          <a href="ProductsPage">Our products</a>
          <a href="ContactUs"> Contact Us</a>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>SERVICES</h4>
          <a href="ContactUs">Web Development</a>
          <a href="ContactUs">Mobile Apps</a>
          <a href="ContactUs">AI & ML</a>
          <a href="ContactUs">Cloud & DevOps</a>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <a href="/">MY Leads</a>
          <a href="/">InforCloud</a>
          <a href="/">InforPos</a>
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
