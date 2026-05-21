// src/pages/products/ProductsPage.jsx

import { Link } from "react-router-dom";
import "../../css/Products.css";
import products from "../../assets/productData.json";
import leadme from "../../assets/MyLeads.png";
import infocloud from "../../assets/InfoCloudLogo.png";
import our_product_cover_image from "../../assets/our_product_cover_image.png";
export default function ProductsPage() {
  const logoMap = {
    leadme,
    infocloud,
  };
  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="products-hero-content">
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
            <Link to="/ContactUs" className="hero-btn">
              Get Consultation
            </Link>
            <Link to="/services" className="hero-btn-outline">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="hero-image reveal-right">
          <img
            src={our_product_cover_image}
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
            Infortechgen delivers modern software solutions for startups,
            enterprises, and digital businesses. We build scalable, innovative,
            and high-performance systems tailored to business growth.
            Transforming ideas into powerful digital experiences with
            cutting-edge technology.
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
                  <Link to="/ContactUs" className="product-btn">
                    Book Demo
                  </Link>

                  <Link to="/ContactUs" className="product-btn-outline">
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
