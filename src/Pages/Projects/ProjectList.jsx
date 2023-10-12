import { PROJECTS } from "../../common/constant/project";
import ProjectCard from "../../components/Elements/ProjectCard";
export default function ProjectsList() {
  return (
    <>
      <section className="flex flex-wrap gap-6 lg:gap-2 mb-20 lg:mb-0 justify-between mx-5 lg:mx-0">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </section>
    </>
  );
}
