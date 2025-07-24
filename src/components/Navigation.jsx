import MagneticButton from "./MagneticButton";
import { motion } from "motion/react";
const Navigation = () => {
  return (
    <>
      <div className="flex z-8  max-w-[79rem] justify-between mt-9 w-full fixed top-0 right-0 left-0 mx-auto">
        <div className="">
          <MagneticButton>
            <img src="/hero.svg" className="size-10 cursor-pointer " />
          </MagneticButton>
        </div>
        <nav
          className="flex cursor-pointer font-Nunito leading-n-1 flex-col gap-2 uppercase
         text-[12.6481px] font-bold text-right"
        >
          <FlipLink>About</FlipLink>
          <FlipLink>Work</FlipLink>
          <FlipLink>Contacts</FlipLink>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

export const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      variants={{
        initial: {},
        hovered: {},
      }}
      href={href}
      style={{ lineHeight: "11px" }}
      initial="initial"
      whileHover="hovered"
      className="block  relative cursor-pointer text-[#4d4d4d] overflow-hidden whitespace-nowrap font-Nunito  flex-col gap-3 uppercase
         text-[14px] font-bold text-right"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-[#b7ab98]"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};
