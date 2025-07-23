import React, { useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "../../lib/useMousePosition";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 560 : 40;
  return (
    <div className="h-screen w-full">
      <motion.div
        className="mask h-screen absolute text-center w-full flex flex-col justify-center items-center uppercase z-20"
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
        <span className="text-[15px] font-bold">Minh Pham</span>
        <h1
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          className="text-[120px] font-extrabold max-w-[23rem] leading-n-2 text-center"
        >
          hiding bad shit since 2009
        </h1>
      </motion.div>
      <div className="h-screen w-full absolute overflow-hidden -z-1">
        <video
          muted
          autoPlay
          loop
          src="/video/Minh Pham - Multidisciplinary Designer.mp4"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-screen text-center w-full flex flex-col justify-center items-center uppercase z-30">
        <span className="text-[16px] font-bold">Minh Pham</span>
        <h1 className="text-[120px] pointer-events-none font-extrabold max-w-[28rem] leading-n-2 text-center">
          making <span className="text-[#ec4e39]">good shit</span> since 2009
        </h1>
      </div>
    </div>
  );
};

export default Hero;
