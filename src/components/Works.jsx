import React, { useState } from "react";
import { works } from "../../constant";
import Project from "./Project";
import Modals from "./Modals";

const Works = ({ setHovered }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div>
        {works.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modals modal={modal} projects={works} setHovered={setHovered} />
    </div>
  );
};

export default Works;
