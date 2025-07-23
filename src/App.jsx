import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2.5,
        effects: true,
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} id="smooth-wrapper">
      <div id="smooth-content" className="relative"></div>
    </div>
  );
};

export default App;
