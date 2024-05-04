import MenuBar from "@/components/menubar/MenuBar";
import Hadith from "@/components/hadith/Hadith";
import Setting from "@/components/settingbar/Setting";

// const getBook = async (book_name) => {
//   const response = await fetch(`http://localhost:5000/api/books/${book_name}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return response.json();
// };

const SingleBookPage = async ({ params }) => {
  // const { book_name } = params;
  // const book = await getBook(book_name);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[350px,1fr] 2xl:grid-cols-[350px,1fr,335px] gap-4 p-4">
      <MenuBar />
      <div className="h-[calc(100vh-100px)] overflow-y-auto xl:pb-10 pb-20">
        <Hadith />
      </div>
      <Setting />
    </div>
  );
};
export default SingleBookPage;
