import BreakLine from "../../Elements/BreakLine";
import Credit from "../../Elements/Credit";
import Navigation from "../components/Navigation";
import SocialMedia from "../components/SocialMedia";
import Header from "../components/Header";

export default function SideBar({active}) {

  return (
    <>
      <div className="hidden sm:sticky transition-all duration-300 top-0 z-10 sm:flex flex-col lg:py-8">
        <nav className={`hidden sm:block`}>
          <Header />
          <BreakLine />
          <Navigation active={active} />
          <BreakLine />
          <SocialMedia />
          <BreakLine />
          <Credit />
        </nav>
      </div>
    </>
  );
}
