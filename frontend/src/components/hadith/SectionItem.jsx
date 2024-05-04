const SectionItem = () => {
  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-xl">
      <div className="flex gap-2 items-center">
        <img src="/image/book.svg" alt="book" />
        <h3 className="text-lg font-semibold">১/১. অধ্যায়ঃ</h3>
      </div>
      <h3 className="text-base">
        আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে ওয়াহী
        [১] শুরু হয়েছিল।
      </h3>
      <hr />
      <p>
        এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ
        করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”।
        (সূরা আন-নিসা ৪/১৬৩)
      </p>
    </div>
  );
};
export default SectionItem;
