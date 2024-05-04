"use client";
import Link from "next/link";
import { useState } from "react";

const SidebarItem = ({ icon, link = "#", isActive = false }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    if (!isActive) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => setIsHover(false);
  return (
    <Link
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer ${
        isActive ? "bg-[#2b9e76]" : "hover:bg-slate-100"
      }`}
    >
      {isHover ? (
        <img src={`/icons/hover/${icon}`} />
      ) : isActive ? (
        <img src={`/icons/active/${icon}`} />
      ) : (
        <img src={`/icons/${icon}`} />
      )}
    </Link>
  );
};
export default SidebarItem;
