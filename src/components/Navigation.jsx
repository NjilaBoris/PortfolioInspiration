import MagneticButton from "./MagneticButton";

const Navigation = () => {
  return (
    <>
      <div className="flex z-30  max-w-[79rem] justify-between mt-9 w-full fixed top-0 right-0 left-0 mx-auto">
        <div className="">
          <MagneticButton>
            <img src="/hero.svg" className="size-10 cursor-pointer " />
          </MagneticButton>
        </div>
        <nav className="flex font-Nunito leading-n-1 flex-col gap-2 uppercase text-[12.6481px] font-bold text-right">
          <a>About</a>
          <a>Work</a>
          <a>Contacts</a>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
