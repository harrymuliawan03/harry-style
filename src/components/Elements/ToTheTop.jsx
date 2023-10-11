import { useContext } from "react";
import { Scroll } from "../../Context/ScrollContext";

export default function ToTheTop({id}) {
  const isScroll = useContext(Scroll);

  return (
    <>
      {/*   <!-- Back to top Start --> */}
      <a
        href={`#${id}`}
        className={`fixed bottom-4 right-4 z-20 ${
          isScroll ? "flex" : "hidden"
        } h-14 w-14 items-center justify-center rounded-full bg-primary p-4 animate-bounce`}
      >
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
      </a>
      {/* <!-- Back to top End --> */}
    </>
  );
}
