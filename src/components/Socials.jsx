import React, { useEffect, useRef, useState } from "react";
import { SocialLinks } from "../../constant";
import MagneticButton from "./MagneticButton";
import { motion } from "motion/react";

const Socials = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElementRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isPlaying]);
  return (
    <footer>
      <div className="flex  mix-blend-difference z-9 w-fit justify-between  items-center  fixed bottom-20 right-0 left-15 ">
        <div>
          {SocialLinks.map((link, index) => (
            <a href="#" key={index} className="">
              <MagneticButton>
                <img
                  src={link.icon}
                  alt={link.label}
                  className="size-5 mt-[1.6rem]"
                />
              </MagneticButton>
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="flex  overflow-hidden z-9 -rotate-90 right-15 bottom-30 fixed uppercase text-[13px] font-bold gap-2"
      >
        <span className="text-[#4d4d4d] hover:text-[#b7ab98] transition duration-150 cursor-pointer">
          sound
        </span>
        <span className="relative cursor-pointer overflow-hidden">
          <motion.span
            className="block"
            variants={{
              initial: { y: 0 },
              clicked: { y: "-100%" },
            }}
            initial="initial"
            animate={isPlaying ? "clicked" : "initial"}
          >
            off
          </motion.span>
          <motion.span
            className="block absolute inset-0"
            variants={{
              initial: { y: 0 },
              clicked: { y: "100%" },
            }}
            initial="initial"
            animate={isPlaying ? "initial" : "clicked"}
          >
            on
          </motion.span>
        </span>
        <audio
          src="audio/golden hour piano - chilled pig.m4a"
          loop
          ref={audioElementRef}
          className="hidden"
        />
      </button>
    </footer>
  );
};

export default Socials;
