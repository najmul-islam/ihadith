"use client";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed lg:hidden bottom-0 w-full h-16 bg-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] py-2">
      <ul className="flex flex-row justify-between w-10/12 m-auto items-center gap-8">
        <li>
          <SidebarItem
            icon="home.svg"
            link="/"
            isActive={pathname === "/" ? true : false}
          />
        </li>

        <li>
          <SidebarItem
            icon="book.svg"
            link="/books"
            isActive={pathname.startsWith("/books") ? true : false}
          />
        </li>
        <li>
          <SidebarItem icon="subject.svg" />
        </li>
        <li>
          <SidebarItem icon="bookmark.svg" />
        </li>
        <li>
          <SidebarItem icon="others.svg" link="/" />
        </li>
        <li>
          <SidebarItem icon="goto.svg" />
        </li>
      </ul>
    </div>
  );
};
export default BottomBar;
