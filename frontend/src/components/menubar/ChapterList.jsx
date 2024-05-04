import ChapterItem from "./ChapterItem";

const ChapterList = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-250px)] px-4 pb-4 overflow-y-auto">
      <ChapterItem isActive={true} />
      <ChapterItem />
      <ChapterItem />
      <ChapterItem />
      <ChapterItem />
      <ChapterItem />
      <ChapterItem />
      <ChapterItem />
      <ChapterItem />
    </div>
  );
};
export default ChapterList;
