import { DarkMode } from "../../../Context/DarkModeContext";
import { useContext } from "react";
import ProfileCircle from "/images/profile-circle.png";

export default function HeaderMobile({hamburger, stopScroll, handleHamburger}) {
  const { theme, setTheme } = useContext(DarkMode);

  const handleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <div
      className={`flex ${
        stopScroll ? "flex-col" : "flex-row justify-center items-center"
      } gap-2 header-active py-3`}
    >
      <div
        className={`overflow-hidden rounded-full ${
          hamburger ? "translate-x-36" : ""
        } transition-all duration-300 ease-in-out`}
      >
        {/* width={40} height={40} */}
        <img
          src={ProfileCircle}
          width={stopScroll ? 80 : 50}
          height={stopScroll ? 80 : 50}
          alt=""
        />
      </div>
      <div className="flex justify-between">
        <div>
          <a
            href="#home"
            className={`block ${
              hamburger ? "my-2" : ""
            } text-lg font-bold text-slate-600 dark:text-slate-400 transition-all duration-300 ease-in-out`}
          >
            Harry Muliawan
          </a>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-ping-slow"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Available to Hire
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center ml-16">
          <input
            type="checkbox"
            className="hidden"
            id="dark-toggle"
            defaultChecked={theme === "dark" && true}
            onChange={handleDarkMode}
          />
          <label htmlFor="dark-toggle">
            <div className="flex h-7 w-11 cursor-pointer items-center rounded-full bg-slate-500 p-1">
              <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-100 ease-in-out"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="absolute -right-4 top-5">
        <button
          id="hamburger"
          name="hamburger"
          type="button"
          className={`${
            hamburger ? "hamburger-active" : ""
          } absolute right-4 block lg:hidden`}
          onClick={handleHamburger}
        >
          <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
}
