import { Link } from "react-router-dom";

export default function Menu({children, title, active}) {
    return (
      <Link to={`/${title}`}>
        <div className={`flex items-center gap-2 py-2 px-4 ${active ? 'bg-neutral-100 dark:bg-neutral-700' : ''} text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 hover:dark:bg-neutral-700 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg hover:gap-3 hover:scale-105 transition-all duration-300`}>
          <div className="text-xl">{children}</div>
          <div className="flex-grow ml-0.5 capitalize">{title}</div>
        </div>
      </Link>
    );
}