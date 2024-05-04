import BookItem from "./BookItem";

const BookList = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-250px)] px-4 pb-4 overflow-y-auto">
      <BookItem isActive={true} />
      <BookItem />
      <BookItem />
      <BookItem />
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
