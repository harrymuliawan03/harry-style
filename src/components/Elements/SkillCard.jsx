import React from "react";

import Tooltip from "./ToolTip";
import { STACKS } from "../../common/constant/stacks";

export default function SkillCard({ skill, className = "", delay }) {
  return (
    <div
      className={className ? className : "w-8 sm:w-11"}
      data-aos="fade-down-right"
      data-aos-delay={delay}
      data-aos-anchor="#Home"
    >
      <Tooltip title={skill}>{STACKS[skill]}</Tooltip>
    </div>
  );
}
