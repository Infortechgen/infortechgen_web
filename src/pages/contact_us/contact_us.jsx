import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import products from "../../assets/productData.json";
import "../../css/ContactUs.css";
import leadme from "../../assets/MyLeads.png";
import infocloud from "../../assets/InfoCloudLogo.png";
import contactUsBanner from "../../assets/contactus_banner.mp4";
export default function Contact() {
  const logoMap = {
    leadme,
    infocloud,
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* ================= VIDEO HERO ================= */}
      <section className="contact-hero">
        <video autoPlay muted loop className="bg-video">
          <source src={contactUsBanner} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Contact Infortechgen</h1>
          <p>Let’s build something amazing together with modern technology</p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="contact-info">
        <div className="info-card">
          <FaPhoneAlt />
          <h3>Call Us</h3>
          <p>+94 77 000 0000</p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>info@infortechgen.com</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Sri Lanka</p>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section">
        <h2>Send Message</h2>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* ================= AUTO SCROLL PRODUCTS ================= */}
      <section className="product-marquee">
        <h2>Our Products</h2>

        <div className="marquee">
          <div className="marquee-content">
            {products.concat(products).map((p, i) => (
              <div className="product-logo-card" key={i}>
                <img src={logoMap[p.logo]} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
