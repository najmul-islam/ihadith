import Image from "next/image";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import SupportButton from "./SupportButton";
import ThemeButton from "./ThemeButton";
import SettingButton from "./SettingButton";

const Navbar = () => {
  return (
    <nav className="fixed font-kalpurush top-0 flex items-center justify-between w-full h-16 md:h-20 px-4 ">
      <div className="flex items-center cursor-pointer">
        <div className="w-11 lg:w-fit">
          <Image
            src="/logo/home-logo.png"
            alt="iHadith"
            height={44}
            width={44}
            className="w-9 md:w-11 h-9 md:h-11"
          />
        </div>
        <div className="ml-6 hidden md:block">
          <h3 className="text-xl  font-bold text-black dark:text-hadith-deepoffwhite">
            হাদিস সমূহ
          </h3>
          <h6 className="text-sm text-[#404040] dark:text-hadith-deepoffwhite">
            হাদিস পড়ুন শিখুন এবং জানুন
          </h6>
        </div>
        <div className="block ml-3 md:hidden">
          <h1 className="sm:text-[1.7rem] leading-7 text-[#1fa471] text-xl">
            আল হাদিস
          </h1>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <SearchBar />
        <SearchButton />
        <SupportButton />
        {/* <ThemeButton /> */}
        <SettingButton />
      </div>
    </nav>
  );
};
export default Navbar;
