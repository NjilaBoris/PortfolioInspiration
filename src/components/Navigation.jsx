import React from "react";
import Container from "./Container";

const Navigation = () => {
  return (
    <>
      <Container className="">
        <div className="flex justify-between mt-10 w-full">
          <img src="/hero.svg" className="size-10" />
          <nav className="flex flex-col gap-2.5 uppercase">
            <a>About</a>
            <a>Work</a>
            <a>Contacts</a>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default Navigation;
