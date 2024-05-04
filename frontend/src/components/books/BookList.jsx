import BookItem from "./BookItem";

const BookList = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4">
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </div>
  );
};
export default BookList;
