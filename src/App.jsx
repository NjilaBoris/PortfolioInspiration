import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import Navigation from "./components/Navigation";
import Socials from "./components/Socials";
import Hero from "./sections/Hero";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  return (
    <ReactLenis root options={{ duration: 2 }}>
      <div>
        <Navigation />
        <Socials />
        <Hero />
      </div>
    </ReactLenis>
  );
};

export default App;
