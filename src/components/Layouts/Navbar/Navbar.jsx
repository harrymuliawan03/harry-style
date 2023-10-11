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
        className={`${hamburger ? "h-[100vh]" : ""} ${
          isScroll ? "navbar-fixed" : ""
        } z-[9999] fixed top-0 flex md:hidden w-full bg-white dark:bg-dark border-slate-200`}
      >
        <div className={`container p-0 ${hamburger ? "bg-white" : ""} dark:bg-dark px-5`}>
          <div
            className={`relative flex ${
              hamburger ? "flex-col" : "items-center"
            } justify-between mt-3`}
          >
            <HeaderMobile handleHamburger={handleHamburger} hamburger={hamburger} stopScroll={stopScroll} />
            <BreakLine />
            {hamburger &&
            <>
              <Navigation active={active} />
              <BreakLine />
              <SocialMedia />
              <BreakLine />
              <Credit />
            </>
            }
          </div>
        </div>
      </div>
    </>
  );
}
