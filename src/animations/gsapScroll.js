import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initGSAPAnimations = () => {

  const elements = document.querySelectorAll(".gsap-reveal");

  elements.forEach((el) => {

    let animation = {
      opacity: 0,
      y: 80,
    };

    // LEFT
    if (el.classList.contains("from-left")) {
      animation = {
        opacity: 0,
        x: -100,
      };
    }

    // RIGHT
    if (el.classList.contains("from-right")) {
      animation = {
        opacity: 0,
        x: 100,
      };
    }

    // ZOOM
    if (el.classList.contains("zoom")) {
      animation = {
        opacity: 0,
        scale: 0.7,
      };
    }

    // 3D
    if (el.classList.contains("rotate3d")) {
      animation = {
        opacity: 0,
        rotateX: 30,
        y: 100,
      };
    }

    gsap.fromTo(
      el,
      animation,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,

        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export default initGSAPAnimations;