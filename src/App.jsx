import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import Navigation from "./components/Navigation";

import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from "./sections/About";
import Works from "./components/Works";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "../lib/useMousePosition";
import Experience from "./sections/Experience";
import Moto from "./sections/Moto";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState({ active: false });
  const { x, y } = useMousePosition();

  return (
    <ReactLenis root options={{ duration: 2 }}>
      <motion.div
        className={`bg-[#ec4e3954] rounded-full pointer-events-none fixed flex items-center justify-center
         translate-x-[-50%] translate-y-[-50%] z-4 ${
           hovered.active ? "size-[100px]" : "size-[40px]"
         }`}
        style={{ scale: hovered.active ? 0 : 1 }}
        animate={{ x: x, y: y }}
        ref={cursorRef}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "backOut",
        }}
      />
      <div className="relative">
        <Hero setHovered={setHovered} />
        <About setHovered={setHovered} />
        <div>
          <Works />
        </div>
        <Experience setHovered={setHovered} />
        <div className="h-[10rem]" />
        <Moto setHovered={setHovered} />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
