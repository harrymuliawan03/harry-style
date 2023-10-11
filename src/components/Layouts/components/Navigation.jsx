import { BiHomeSmile, BiArchiveIn, BiEditAlt, BiLeaf } from "react-icons/bi";
import { MENUS } from "../../../common/constant/menus";
import Menu from "../../Elements/Menu";

export default function Navigation({active}) {
  return (
    <nav
      id="nav-menu"
      className={`z-[9999] sm:h-auto rounded-lg bg-white py-2 dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:dark:bg-transparent`}
    >
      <div className="flex flex-col space-y-6 lg:p-0">
        {MENUS.map((menu, index) => (
          <Menu key={index} title={menu.title} active={active === menu.active ? active : ""}>
            {menu.icon}
          </Menu>
        ))}
      </div>
    </nav>
  );
}
