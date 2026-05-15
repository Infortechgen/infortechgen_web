// layout/MainLayout.jsx

import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./footer";
import "../css/Layout.css";
// import useReveal from "../hooks/useReveal";
import initGSAPAnimations from "../animations/gsapScroll";
export default function MainLayout() {
  // useReveal();
  useEffect(() => {
    initGSAPAnimations();
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Animated Background Bubbles */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor"></div>

      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
