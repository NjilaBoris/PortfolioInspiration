import React from "react";
import Container from "./Container";

const Navigation = () => {
  return (
    <>
      <Container className="h-screen">
        <div className="flex justify-between mt-10 w-full fixed top-0 right-0 left-0 mx-auto">
          <div>
            <img src="/hero.svg" className="size-10" />
          </div>
          <nav className="flex flex-col gap-1 uppercase text-[12.6481px] font-bold text-right">
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
