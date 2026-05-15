import { Link } from "react-router-dom";
import "../../css/About_us.css";

export default function AboutPage() {

  const skills = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Cyber Security",
    "Custom Software",
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      desc: "We create modern software solutions using the latest technologies.",
    },
    {
      icon: "🤝",
      title: "Client Focus",
      desc: "We build long-term relationships through trust and quality service.",
    },
    {
      icon: "⚡",
      title: "Performance",
      desc: "High-speed scalable systems optimized for real business growth.",
    },
    {
      icon: "🔒",
      title: "Security",
      desc: "Enterprise-level security solutions for digital protection.",
    },
  ];

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-badge">
            ABOUT INFORTECHGEN
          </span>

          <h1>
            Building Modern
            <span> Digital Experiences</span>
          </h1>

          <p>
            Infortechgen is a modern IT company delivering powerful software,
            web, mobile, and cloud solutions for startups and enterprises.
            We combine creativity, technology, and innovation to help
            businesses grow in the digital world.
          </p>

          <div className="about-buttons">

            <Link to="/contact" className="about-btn-primary">
              Contact Us
            </Link>

            <Link to="/services" className="about-btn-secondary">
              Our Services
            </Link>

          </div>

        </div>

        <div className="about-hero-image">

          <div className="about-image-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
            alt="IT Company Team"
          />

        </div>

      </section>

      {/* ================= COMPANY STORY ================= */}

      <section className="company-story ">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
            alt="Company Meeting"
          />
        </div>

        <div className="story-content">

          <span>OUR STORY</span>

          <h2>
            We Create Technology
            That Helps Businesses Scale
          </h2>

          <p>
            Founded with a passion for innovation, Infortechgen focuses on
            delivering modern digital products that solve real-world business
            problems. From startups to enterprise companies, we provide
            scalable technology solutions tailored to every client.
          </p>

          <p>
            Our mission is to build user-friendly, secure, and high-performing
            digital systems that improve productivity and business success.
          </p>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-box" key={index}>
                ✔ {skill}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= VALUES ================= */}

      <section className="values-section">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Core Values That Drive Innovation
          </h2>

          <p>
            We combine technology, creativity, and strategy to deliver
            impactful digital solutions.
          </p>

        </div>

        <div className="values-grid">

          {values.map((item, index) => (

            <div className="value-card" key={index}>

              <div className="value-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="about-stats">

        <div className="about-stat-card">
          <h2>50+</h2>
          <p>Completed Projects</p>
        </div>

        <div className="about-stat-card">
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="about-stat-card">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="about-stat-card">
          <h2>24/7</h2>
          <p>Technical Support</p>
        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="about-cta-box">

          <h2>
            Ready To Transform Your Business?
          </h2>

          <p>
            Let’s build modern digital solutions together.
          </p>

          <Link to="/contact" className="about-cta-btn">
            Start Your Project
          </Link>

        </div>

      </section>

    </div>
  );
}