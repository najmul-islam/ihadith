"use client";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="h-full hidden lg:flex items-center px-4 bg-[#ffffff]">
      <ul className="flex flex-col items-center justify-center gap-8 w-16">
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
    </aside>
  );
};
export default Sidebar;
