"use client";
import { useState } from "react";
import FilterBox from "./FilterBox";
import BookList from "./BookList";
import ChapterList from "./ChapterList";

const MenuBar = () => {
  const [tab, setTab] = useState("book");

  const handleToggle = (value) => {
    setTab(value);
  };
  return (
    <div className="h-[calc(100vh-110px)] rounded-xl hidden xl:block bg-white">
      <div className="sticky">
        <div className="flex justify-between border-b">
          <button
            onClick={() => handleToggle("book")}
            className={`w-full py-4 rounded-tl-xl text-lg font-semibold  ${
              tab === "book" ? "bg-[#2A9E76] text-white" : "bg-white text-black"
            }`}
          >
            বই
          </button>
          <button
            onClick={() => handleToggle("chapter")}
            className={`w-full py-4 rounded-tr-xl text-lg font-semibold  ${
              tab === "chapter"
                ? "bg-[#2A9E76] text-white"
                : "bg-white text-black"
            }`}
          >
            অধ্যায়
          </button>
        </div>
        <FilterBox />
      </div>

      {tab === "book" && <BookList />}
      {tab === "chapter" && <ChapterList />}
    </div>
  );
};
export default MenuBar;
