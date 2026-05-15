// src/pages/products/ProductsPage.jsx

import { Link } from "react-router-dom";
import "../../css/Products.css";
import products from "../../assets/productData.json";
import leadme from "../../assets/MyLeads.png";
import infocloud from "../../assets/InfoCloudLogo.png";

export default function ProductsPage() {
  const logoMap = {
    leadme,
    infocloud,
  };
  return (
    <div className="products-page">
      <section className="products-hero reveal">
        <div className="hero-content">
          <span className="hero-tag">OUR DIGITAL PRODUCTS</span>
          <h1>
            Smart Software Products
            <span> For Modern Businesses</span>
          </h1>
          <p>
            We create modern software products that help businesses automate
            workflows, improve productivity, and scale faster.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn">
              Get Consultation
            </Link>
            <Link to="/services" className="hero-btn-outline">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="hero-image reveal-right">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="Products"
          />
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="products-section">
        <div className="section-heading reveal">
          <span>OUR PRODUCTS</span>

          <h2>Powerful Solutions Built For Growth</h2>

          <p>
            Modern software systems designed for startups, enterprises, and
            digital businesses.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card reveal" key={product.id}>
              <div className="product-logo">
                <img src={logoMap[product.logo]} alt={product.name} />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>

                <h4>{product.headline}</h4>

                <p>{product.description}</p>

                <div className="product-buttons">
                  <Link to="/contact" className="product-btn">
                    Book Demo
                  </Link>

                  <Link to="/contact" className="product-btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
