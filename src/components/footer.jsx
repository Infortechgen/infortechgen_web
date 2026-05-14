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
            Building the software that powers tomorrow. <br />
            Headquartered in Sri Lanka, serving clients worldwide.
          </p>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>COMPANY</h4>
          <a href="/">About Us</a>
          <a href="/">Our Customers</a>
          <a href="/">Careers</a>
          <a href="/">Blog</a>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>SERVICES</h4>
          <a href="/">Web Development</a>
          <a href="/">Mobile Apps</a>
          <a href="/">AI & ML</a>
          <a href="/">Cloud & DevOps</a>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <a href="/">NexDesk</a>
          <a href="/">FlowPay LK</a>
          <a href="/">DataPulse</a>
          <a href="/">HireFlow</a>
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
