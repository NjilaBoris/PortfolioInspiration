import React, { useState } from "react";
import useMousePosition from "../../lib/useMousePosition";
import { motion } from "motion/react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <div className="relative">
      <motion.div
        className="h-dvh z-15 mask absolute cursor-default w-full flex justify-center items-center"
        animate={{
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "backOut",
        }}
      >
        <div
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
        >
          <h1 className="uppercase text-[10px] z-15  font-semibold tracking-[0.4rem] mb-3.5">
            about me
          </h1>
          <span className="text-[63.2407px] leading-[66px] font-semibold  font-Garde2">
            A visual designer - with skills that <br /> haven't been replaced by
            A.I <br />
            (yet) - making good shit only if <br /> the paycheck is equally
            good.
          </span>
        </div>
      </motion.div>
      <div className="h-dvh relative w-full flex justify-center items-center">
        <div>
          <h1 className="uppercase text-[10px]  font-semibold tracking-[0.4rem] mb-3.5">
            about me
          </h1>
          <span className="text-[63.2407px] leading-[66px] font-semibold  font-Garde2">
            I’m a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
            product <br /> designer with strong focus on <br />
            producing high quality & <br /> impactful digital experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
