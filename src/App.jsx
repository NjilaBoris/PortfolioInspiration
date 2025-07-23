import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Navigation from "./components/Navigation";

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
      <div id="smooth-content" className="relative">
        <Navigation />
        <div className="h-screen bg-blue-600s" />
      </div>
    </div>
  );
};

export default App;
