// HomePage.jsx

import { Link } from "react-router-dom";
import "../../css/Home.css";
import clients from "../../assets/clientsData.json";
import hoombarlogo from "../../assets/hoombar_logo.webp";
import inforFurnitureicon from "../../assets/inforfurnitureLogo.png";
import homeMainBanner from "../../assets/home_banner.jpg";
import homeAboutImage from "../../assets/home_about_image.jpg";
import StatsBar from "../../components/StatsBar";

import {
  FaGlobe,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaCogs,
  FaLock,
} from "react-icons/fa";

export default function HomePage() {
  

  const services = [
    {
      icon: <FaGlobe />,
      title: "Web Development",
      desc: "Modern responsive websites with high performance and SEO optimization.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Beautiful Android & iOS applications with seamless user experience.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      desc: "Secure cloud infrastructure and scalable enterprise systems.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      desc: "Creative interfaces designed for better engagement and conversion.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Software",
      desc: "Powerful software systems tailored for your business workflow.",
    },
    {
      icon: <FaLock />,
      title: "Cyber Security",
      desc: "Protect your digital assets with advanced security solutions.",
    },
  ];
  /* company logos maping */
  const logoMap = {
    hoombar: hoombarlogo,
    inforfurniture: inforFurnitureicon,
  };
  return (
    <div className="itg-home">
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">#AI-Powered Technology Solution</div>

          <h1>
            Transform Your Business With
            <span> Modern Digital Solutions</span>
          </h1>

          <p>
            Infortechgen is a software development company specializing in
            modern websites, mobile applications, cloud solutions, and custom
            business software for startups and enterprises worldwide.
          </p>

          <div className="hero-buttons">
            <Link to="/ContactUs" className="btn-primary">
              Start Project
            </Link>

            <Link to="/Services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          {/* floating cards */}

          <div className="hero-mini-cards">
            <div className="mini-card">
              <h4>100%</h4>
              <p>Responsive Design</p>
            </div>

            <div className="mini-card">
              <h4>FAST</h4>
              <p>High Performance Delivery</p>
            </div>

            <div className="mini-card">
              <h4>AI</h4>
              <p>Smart Technology</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow"></div>

          <img src={homeMainBanner} alt="Software Development Company" />
        </div>
      </section>

      {/* ================= STATS ================= */}

      <StatsBar />

      {/* ================= SERVICES ================= */}

      <section className="services-section">
        <div className="section-heading">
          <span>OUR SERVICES</span>

          <h2>Building simple and smart digital systems</h2>

          <p>
            We deliver end-to-end software and digital transformation solutions
            that help businesses scale faster.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section">
        <div className="about-image">
          <img src={homeAboutImage} alt="IT Company Team" />
        </div>

        <div className="about-content">
          <span>ABOUT INFORTECHGEN</span>

          <h2>We Build Future Ready Digital Experiences</h2>

          <p>
            Infortechgen is a modern IT company focused on delivering
            high-quality digital products for startups, businesses, and
            enterprises worldwide.
          </p>

          <div className="about-features">
            <div className="feature-box">✔ Modern Technologies</div>

            <div className="feature-box">✔ Scalable Architecture</div>

            <div className="feature-box">✔ User Friendly Design</div>

            <div className="feature-box">✔ 24/7 Technical Support</div>
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="clients-section">
        <div className="section-heading">
          <span>TRUSTED CLIENTS</span>

          <h2>Our Valued Partners</h2>

          <p>
            We work with leading technology partners to deliver secure, stable,
            and scalable mission critical systems. Built on trust and technical
            excellence, we ensure reliable solutions that support business
            continuity and long-term growth.
          </p>
        </div>

        {/* AUTO SCROLL CLIENTS */}

        <div className="clients-slider">
          <div className="clients-track">
            {[...clients, ...clients].map((client, index) => (
              <div className="client-card" key={index}>
                <img
                  src={logoMap[client.imageKey]}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready To Build Your Next Big Project?</h2>

          <p>
            Let's create something innovative together with modern technology.
          </p>

          <Link to="/ContactUs" className="cta-btn">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
