import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initGSAPScroll() {
  const elements = document.querySelectorAll(".gsap-reveal");

  elements.forEach((el) => {
    let type = "up";

    if (el.classList.contains("from-left")) type = "left";
    if (el.classList.contains("from-right")) type = "right";
    if (el.classList.contains("zoom")) type = "zoom";
    if (el.classList.contains("rotate3d")) type = "3d";

    let animation = {};

    switch (type) {
      case "left":
        animation = { x: -80, opacity: 0 };
        break;
      case "right":
        animation = { x: 80, opacity: 0 };
        break;
      case "zoom":
        animation = { scale: 0.8, opacity: 0 };
        break;
      case "3d":
        animation = { rotateX: 25, y: 80, opacity: 0 };
        break;
      default:
        animation = { y: 60, opacity: 0 };
    }

    gsap.fromTo(
      el,
      animation,
      {
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
}