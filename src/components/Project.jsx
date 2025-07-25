import React from "react";

const Project = ({ index, title, setModal }) => {
  return (
    <div
      className="uppercase h-full flex justify-between w-[70rem] project  items-center 
       cursor-pointer border-t border-t-[#b7ab98] transition-all duration-200"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <h2 className="text-[110px] font-bold leading-[120px]  transition-all duration-200">
        {title}
      </h2>
      <h3 className=" transition-all duration-200">Design & Development</h3>
    </div>
  );
};

export default Project;
