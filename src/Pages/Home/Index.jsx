import SkillList from "./SkillList";
import Introduction from "./Introduction";
import BreakLine from "../../components/Elements/BreakLine";
import IndexLayout from "../../components/Layouts/Index";

export default function Index({ active }) {
  return (
    <>
      <IndexLayout active={active} aos="fade-up">
        <Introduction />
        <BreakLine className="mx-4 lg:mx-0" />
        <SkillList />
      </IndexLayout>
    </>
  );
}
