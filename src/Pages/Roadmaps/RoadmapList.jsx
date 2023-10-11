import { ROADMAPS } from "../../common/constant/roadmap";
import RoadmapCard from "../../components/Elements/RoadmapCard";

export default function RoadmapList() {
  let nilai = 0;
  return (
    <section className="flex flex-col space-y-2 mb-20 mx-5 sm:mx-0">
      {ROADMAPS.map((roadmap, index) => (
        <RoadmapCard
          key={index}
          icon={roadmap.icon}
          title={roadmap.title}
          link={roadmap.link}
          delay={nilai+=100}
        />
      ))}
    </section>
  );
}
