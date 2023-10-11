import { STACKS } from "../../common/constant/stacks";
import Tooltip from "./ToolTip";

export default function RoadmapCard({icon, title, link, delay}) {
    return (
      <div
        className="rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex justify-between p-4 border text-sm border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 "
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-anchor="#Roadmaps"
      >
        <div className="flex space-x-2">
          <div className="w-5">{STACKS[icon]}</div>
          <span>{title}</span>
        </div>
        <div>
          <Tooltip title="Youtube Channel">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              className="font-bold text-center rounded-full px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700"
            >
              Indonesia
            </a>
          </Tooltip>
        </div>
      </div>
    );
}