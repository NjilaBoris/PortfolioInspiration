import React, { useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "../../lib/useMousePosition";
import TextReveal from "../components/TextReveal";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <div className="h-dvh w-full">
      <motion.div
        className="mask h-screen  absolute text-center w-full flex flex-col justify-center items-center uppercase z-7"
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
          className="text-[120px] cursor-default  font-extrabold  leading-n-2 text-center"
        >
          hiding <br /> bad <br /> shit <br /> since <br /> 2009
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
      <div className="h-screen text-center w-full flex flex-col justify-center items-center uppercase z-7">
        <TextReveal>
          <span className="text-[16px] font-bold">Minh Pham</span>
        </TextReveal>
        <TextReveal delay={0.4}>
          <h1 className="text-[120px]  font-extrabold leading-n-2">making</h1>
          <h1 className="text-[120px]  font-extrabold leading-n-2 text-[#ec4e39]">
            good
          </h1>
          <h1 className="text-[120px]  font-extrabold leading-n-2 text-[#ec4e39]">
            shit
          </h1>
          <h1 className="text-[120px]  font-extrabold leading-n-2">since</h1>
          <h1 className="text-[120px]  font-extrabold leading-n-2">2009</h1>
        </TextReveal>
      </div>
    </div>
  );
};

export default Hero;
