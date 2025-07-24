import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import Navigation from "./components/Navigation";

import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from "./sections/About";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  return (
    <ReactLenis root options={{ duration: 2 }}>
      <div className="relative">
        <Hero />
        <About />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
