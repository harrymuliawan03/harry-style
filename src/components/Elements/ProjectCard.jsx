import SkillCard from "./SkillCard";

export default function ProjectCard({thumbnail, title, description, skills}) {
    return (
      <div className="block mb-3 w-[400px] h-[380px] md:w-[350px] lg:w-[400px] rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border dark:border-neutral-600 dark:bg-neutral-700 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="overflow-hidden">
          <img
            className="rounded-t-xl w-[400px] h-[200px]"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
          <div className="flex gap-4">
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} className="w-8" />
            ))}
          </div>
        </div>
      </div>
    );
}