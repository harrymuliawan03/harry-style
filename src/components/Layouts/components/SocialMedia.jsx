
import { SOCIAL_MEDIA } from "../../../common/constant/socialMedia";
import IconSocialMediaCard from "../../Elements/IconSocialMediaCard";

export default function SocialMedia() {
  return (
    <div
      className={`flex flex-col gap-4 dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full`}
    >
      <div>
        <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
          Let`s Connect
        </span>
      </div>
      <div className="flex mt-2 gap-3 px-3 text-3xl sm:text-2xl justify-center text-neutral-700 dark:text-neutral-400">
        {SOCIAL_MEDIA.map((item, index) => (
          <IconSocialMediaCard social_media={item} key={index} />
        ))}
      </div>
    </div>
  );
}
