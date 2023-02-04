import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const useStaggerAnimationFromTo = (parent: HTMLElement) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: "top 80%",
      toggleActions: "play pause resume reverse",
      // markers: true,
    },
  });

  tl.fromTo(
    parent.children,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      stagger: 0.2,
      opacity: 1,
    }
  );
};
export { useStaggerAnimationFromTo };
