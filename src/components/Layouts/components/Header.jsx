import ProfileCircle from "/images/profile-circle.png";
import { useContext, useEffect } from "react";
import { DarkMode } from "../../../Context/DarkModeContext";

export default function Header() {
  const { theme, setTheme } = useContext(DarkMode);

  const handleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 header-active py-3`}
    >
      <div className="overflow-hidden rounded-full" data-aos="zoom-in">
        {/* width={40} height={40} */}
        <img src={ProfileCircle} width={100} height={100} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <a
            href="#home"
            className={`block text-lg font-bold text-slate-900 dark:text-slate-400 transition-all duration-300 ease-in-out`}
          >
            Harry Muliawan
          </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div
            className="h-2 w-2 rounded-full bg-green-400 animate-ping-slow"
          ></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            Available to Hire
          </p>
        </div>
        <div className="flex flex-row items-center">
          <input
            type="checkbox"
            className="hidden"
            id="dark-toggle-lg"
            defaultChecked={theme === "dark" && true}
            onChange={handleDarkMode}
          />
          <label htmlFor="dark-toggle-lg">
            <div className="flex h-7 w-11 cursor-pointer items-center rounded-full bg-slate-500 p-1">
              <div className="toggle-circle-lg h-4 w-4 rounded-full bg-white transition duration-100 ease-in-out"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
