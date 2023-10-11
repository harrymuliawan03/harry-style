import React from "react";

import Tooltip from "./ToolTip";
import { STACKS } from "../../common/constant/stacks";

export default function SkillCard({ skill, className = "" }) {
  return (
    <div className={className ? className : "w-8 sm:w-11"}>
      <Tooltip title={skill}>{STACKS[skill]}</Tooltip>
    </div>
  );
}
