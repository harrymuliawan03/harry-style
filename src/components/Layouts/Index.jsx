import ToTheTop from "../Elements/ToTheTop";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IndexLayout({ active, children, aos }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false,
    });
  });



  return (
    <>
      <div
        id={active}
        className="flex flex-col justify-center lg:flex-row lg:gap-10 lg:pt-10"
      >
        <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-10">
          {isDesktop ? (
            <header>
              <SideBar active={active} />
            </header>
          ) : (
            <header>
              <Navbar active={active} />
            </header>
          )}

          <main className="lg:max-w-[854px] transition-all scroll-smooth duration-300 w-full lg:min-h-screen no-scrollbar" data-aos={aos}>
            {children}
          </main>
        </div>
      </div>

      <ToTheTop id={active} />
    </>
  );
}
