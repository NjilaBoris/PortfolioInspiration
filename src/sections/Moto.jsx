import React, { useState } from "react";
import useMousePosition from "../../lib/useMousePosition";
import { motion } from "motion/react";
import { FadeIn } from "../components/FadeIn";

const Experience = ({ setHovered }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 0;
  return (
    <div className="relative h-dvh">
      <div className="h-dvh absolute inset-0 overflow-hidden">
        <img
          src="/images/banner-bottom-1600.jpg"
          fill
          className="h-full w-full object-cover -z-1  object-center"
        />
      </div>
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
            setHovered({ active: false });
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            setHovered({ active: true });
          }}
          className="text-center"
        >
          <h1 className="uppercase text-[10px] text-center  font-semibold tracking-[0.4rem] mb-3.5">
            my motto
          </h1>
          <span className="uppercase text-[100px] text-center leading-[80px] font-semibold  font-Garde2">
            Not all <br /> honest design <br /> is good design
          </span>
          <h1 className="text-[10px] text-center  font-semibold tracking-[0.4rem] mt-3.5">
            Minh Pham
          </h1>
        </div>
      </motion.div>
      <FadeIn>
        <div className="h-dvh relative w-full text-center flex justify-center items-center">
          <div>
            <h1 className="uppercase text-[10px] text-center  font-semibold tracking-[0.4rem] mb-3.5">
              my motto
            </h1>
            <span className="uppercase text-[120px] text-center leading-[105px] font-semibold  font-Garde2">
              good design <br /> is honesty
            </span>
            <h1 className="text-[10px] text-center  font-semibold tracking-[0.4rem] mt-3.5">
              Dieter Rams
            </h1>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Experience;
