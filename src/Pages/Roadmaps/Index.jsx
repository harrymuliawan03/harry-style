import BreakLine from "../../components/Elements/BreakLine";
import Header from "../../components/Elements/Header";
import IndexLayout from "../../components/Layouts/Index";
import RoadmapList from "./RoadmapList";

export default function Index({ active }) {
  const title = "Roadmaps";
  const body = "My learning path and free course playlist";
  return (
    <>
      <IndexLayout active={active} aos="fade-up">
        <Header title={title} body={body} />
        <BreakLine className="mx-5 my-5 md:mx-0 border-dashed" />
        <RoadmapList />
      </IndexLayout>
    </>
  );
}
