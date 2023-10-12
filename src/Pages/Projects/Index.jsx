import BreakLine from "../../components/Elements/BreakLine";
import Header from "../../components/Elements/Header";
import IndexLayout from "../../components/Layouts/Index";
import ProjectList from "./ProjectList";

export default function Index({ active }) {
  const title = "Projects";
  const body = "Showcasing my passion for technology, design, and problem-solving through code.";
  return (
    <>
      <IndexLayout active={active} aos="flip-left">
        <Header title={title} body={body} />
        <BreakLine className="mx-5 my-5 lg:mx-0 border-dashed" />
        <ProjectList />
      </IndexLayout>
    </>
  );
}
