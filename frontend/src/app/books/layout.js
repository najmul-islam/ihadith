import Header from "@/components/header/Header";
import BottomBar from "@/components/sidebar/BottomBar";
import Sidebar from "@/components/sidebar/Sidebar";

const BooksLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex items-center bottom-0 h-[calc(100vh-80px)] w-full fixed">
        <Sidebar />
        <div className="bg-slate-100 h-[calc(100vh-80px)] lg:rounded-s-2xl">
          {children}
        </div>
        <BottomBar />
      </div>
    </>
  );
};
export default BooksLayout;
