import Link from "next/link";

const ChapterItem = ({ isActive }) => {
  return (
    <Link href="/books/bukhari">
      <div
        className={` hover:bg-[#EBFCF6] group cursor-pointer px-4 py-4 mb-2 rounded-xl flex items-center gap-2 ${
          isActive ? "bg-[#EBFCF6]" : "bg-[#ffffff]"
        }`}
      >
        <div className="relative h-12 w-12 flex justify-center items-center">
          <h3
            className={` group-hover:text-white absolute text-xl font-medium ${
              isActive ? "text-white" : "text-gray-400"
            }`}
          >
            ১
          </h3>

          <svg
            className={` group-hover:fill-[#2A9E76] dark:fill-dark-bg-lite group-hover:fill-subcat-hover ${
              isActive ? "fill-[#2A9E76]" : "fill-[#f1f5f4]"
            }`}
            width="56"
            height="62"
            viewBox="0 0 56 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className=" text-black text-[17px]">ওহীর সূচনা অধ্যায়</h2>
          <h6 className="text-[#40404099] text-[15px]">হাদিসের রেঞ্জ: ১ - ৭</h6>
        </div>
      </div>
    </Link>
  );
};
export default ChapterItem;
