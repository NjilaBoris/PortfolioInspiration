import React from "react";
import { SocialLinks } from "../../constant";
import MagneticButton from "./MagneticButton";
const Socials = () => {
  return (
    <>
      <div className="flex z-30  max-w-[79rem] justify-between  items-center  w-full fixed bottom-20 right-0 left-0 mx-auto">
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
        <div className="font-Nunito  uppercase font-bold rotate-90 flex gap-1.5  text-[12.6481px]">
          <h6 className="text-[#B7AB98]">off</h6>
          <h6 className="text-[#B7AB98]">Sound</h6>
        </div>
      </div>
    </>
  );
};

export default Socials;
