import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item");
  
    gsap.to(horSection, {
      xPercent: -120 * (horSection.length - 1),
      ease: "none",
      scrollTrigger: { 
        trigger: "#port",
        start: "top 75",
        end: "+=3000",
        pin: true,
        scrub: 1,
        markers: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });
  }