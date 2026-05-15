import { Link } from "react-router-dom";
import "../../css/Our_Services.css";
import {
    FaGlobe,
    FaMobileAlt,
    FaCloud,
    FaPalette,
    FaCogs,
    FaLock,
  } from "react-icons/fa";
export default function ServicesPage() {
  

  const services = [
    {
      icon: <FaGlobe />,
      title: "Web Development",
      desc: "High-performance, SEO optimized modern websites for all industries.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Android & iOS apps with smooth UI/UX and real-world performance.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      desc: "Secure, scalable cloud systems for modern businesses.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      desc: "Creative designs focused on user engagement and conversion.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      icon: <FaCogs />,
      title: "Custom Software",
      desc: "Business automation software tailored to your workflow.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      icon: <FaLock />,
      title: "Cyber Security",
      desc: "Advanced protection for your digital systems and data.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
  ];

  return (
    <div className="services-page">
      {/* ================= BANNER ================= */}
      <section className="services-banner ">
        <div className="banner-content ">
          <h1 className="gsap-reveal from-left">Our Services</h1>
          <p className="reveal reveal-3d">
            We deliver modern digital solutions that help startups and
            enterprises grow faster, smarter, and stronger in the digital world.
          </p>

          <Link to="/contact" className="banner-btn  reveal reveal-zoom">
            Get Free Consultation
          </Link>
        </div>

        <div className="banner-image  gsap-reveal zoom">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team Work"
          />
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="services-intro gsap-reveal from-left">
        <h2>What We Do Best</h2>
        <p>
          We combine technology, creativity, and strategy to build powerful
          digital solutions. Our goal is to help businesses transform ideas into
          scalable products.
        </p>
      </section>

      {/* ================= SERVICES CARDS ================= */}
      <section className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-img">
              <img src={s.img} alt={s.title} />
            </div>

            <div className="service-content">
              <div className="service-icon react-icon">{s.icon}</div>{" "}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-link">Learn More →</div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="cta-box  reveal reveal-top">
          <h2>Need a Custom Solution?</h2>
          <p>
            Let’s build something powerful together that grows your business.
          </p>

          <Link to="/contact" className="cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
