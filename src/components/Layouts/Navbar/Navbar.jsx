import { useContext, useState } from "react";
import { Scroll } from "../../../Context/ScrollContext";
import BreakLine from "../../Elements/BreakLine";
import Credit from "../../Elements/Credit";
import SocialMedia from "../components/SocialMedia";
import Navigation from "../components/Navigation";
import HeaderMobile from "../components/HeaderMobile";

export default function Navbar({active}) {
  const isScroll = useContext(Scroll);

  const [hamburger, setHamburger] = useState(false);
  const [stopScroll, setStopScroll] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
    setStopScroll(!stopScroll);
  };

  stopScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <div
        className={`${hamburger ? "h-screen" : ""} ${
          isScroll ? "navbar-fixed" : ""
        } z-[9999] fixed shadow-sm xl:shadow-none w-full lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark `}
      >
        <div
          className={`py-0 ${hamburger ? "h-screen bg-white" : ""} dark:bg-dark px-5`}
        >
          <div
            className={`relative flex ${
              hamburger ? "flex-col" : "items-center"
            } justify-between mt-3`}
          >
            <HeaderMobile
              handleHamburger={handleHamburger}
              hamburger={hamburger}
              stopScroll={stopScroll}
            />
            <BreakLine />
            {hamburger && (
              <>
                <Navigation active={active} />
                <BreakLine />
                <SocialMedia />
                <BreakLine />
                <Credit />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
