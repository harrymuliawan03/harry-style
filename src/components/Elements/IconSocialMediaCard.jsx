import { Link } from "react-router-dom";
import { STACKS_SOCIAL_MEDIA } from "../../common/constant/StacksSocialMedia";
import Tooltip from "./ToolTip";


export default function IconSocialMediaCard({social_media}) {
  return (
    <>
        <Tooltip title={social_media}>{STACKS_SOCIAL_MEDIA[social_media]}</Tooltip>
    </>
  );
}
