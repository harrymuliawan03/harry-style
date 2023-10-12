import { BiCodeAlt } from "react-icons/bi";
import { SKILLS } from "../../common/constant/skills";
import SkillCard from "../../components/Elements/SkillCard";

export default function SkillList() {
  let delay = 0;
  return (
    <>
      <section className="my-10 mx-4 lg:my-0 lg:mx-0">
        <div className="flex flex-col justify-center space-y-2 my-5">
          <div className="flex items-center gap-1 text-2xl font-medium text-neutral-800 dark:text-neutral-300 ">
            <BiCodeAlt />
            <h2 className="capitalize">Skills</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <p className="dark:text-neutral-400 text-sm">My coding skills.</p>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6 mt-3"
        >
          {SKILLS?.map((skill, index) => (
            <SkillCard key={index} skill={skill} delay={delay+=100} />
          ))}
        </div>
      </section>
    </>
  );
}
