import BreakLine from "../../components/Elements/BreakLine";
import Header from "../../components/Elements/Header";
import IndexLayout from "../../components/Layouts/Index";
import About from "./About";

export default function Index({active}) {
  const title = "About Me";
  const body = "Showcasing my passion for technology, design, and problem-solving through code.";
    
    return (
      <IndexLayout active={active} aos="fade-up">
        <Header title={title} body={body} />
        <BreakLine className="mx-5 my-5 sm:mx-0 border-dashed" />
        <About />
      </IndexLayout>
    );
}