import FilterBox from "./FilterBox";

const BookHeader = () => {
  return (
    <div className="flex items-center justify-between h-24 p-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-[#404040]">সকল বই</h1>
      <FilterBox />
    </div>
  );
};
export default BookHeader;
