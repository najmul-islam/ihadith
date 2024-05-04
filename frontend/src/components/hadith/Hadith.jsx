import HadithHeader from "./HadithHeader";
import HadithList from "./HadithList";
import ChapterHeader from "./ChapterHeader";
import MenuBar from "./MenuBar";

const Hadith = () => {
  return (
    <div className="rounded-xl flex flex-col gap-3">
      <HadithHeader />
      <MenuBar />
      <ChapterHeader />
      <HadithList />
    </div>
  );
};
export default Hadith;
