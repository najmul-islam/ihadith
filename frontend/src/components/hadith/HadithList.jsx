import HadithItem from "./HadithItem";
import SectionItem from "./SectionItem";

const HadithList = () => {
  return (
    <div className="flex flex-col gap-3">
      <SectionItem />
      <HadithItem />

      <SectionItem />
      <HadithItem />

      <SectionItem />
      <HadithItem />

      <SectionItem />
      <HadithItem />
    </div>
  );
};
export default HadithList;
