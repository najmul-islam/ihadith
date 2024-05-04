import BookHeader from "@/components/books/BookHeader";
import BookList from "@/components/books/BookList";

// const getBooks = async () => {
//   const response = await fetch("http://localhost:5000/api/books");
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return response.json();
// };

const BooksPage = async () => {
  // const books = await getBooks();
  // console.log("books", books);
  return (
    <div className="xl:w-8/12 h-[calc(100vh-115px)] m-auto overflow-y-auto py-6 px-6">
      <BookHeader />
      <BookList books={books} />
    </div>
  );
};
export default BooksPage;
