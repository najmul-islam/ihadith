"use client";
import { useState } from "react";
import Rodal from "rodal";
import FilterBox from "../menubar/FilterBox";
import BookList from "../menubar/BookList";
import ChapterList from "../menubar/ChapterList";

const MenuBar = () => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const [tab, setTab] = useState("book");

  const handleToggle = (value) => {
    setTab(value);
  };
  return (
    <>
      <div
        onClick={show}
        className="flex xl:hidden items-center bg-white gap-3 p-3 rounded-xl text-xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
        সহিহ বুখারী
      </div>

      <Rodal
        animation="slideLeft"
        showMask={true}
        visible={visible}
        onClose={hide}
        customStyles={{
          right: "auto",
          borderRadius: "0",
          height: "100%",
          padding: "0",
        }}
        customMaskStyles={{
          cursor: "pointer",
          backgroundColor: "#3d3d3ecc",
        }}
      >
        <h2 className="text-2xl p-3 my-3">ক্যাটাগরি</h2>
        <div>
          <div className="flex justify-between border-b border-t">
            <button
              onClick={() => handleToggle("book")}
              className={`w-full py-4  text-lg font-semibold  ${
                tab === "book"
                  ? "bg-[#2A9E76] text-white"
                  : "bg-white text-black"
              }`}
            >
              বই
            </button>
            <button
              onClick={() => handleToggle("chapter")}
              className={`w-full py-4  text-lg font-semibold  ${
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
      </Rodal>
    </>
  );
};
export default MenuBar;
