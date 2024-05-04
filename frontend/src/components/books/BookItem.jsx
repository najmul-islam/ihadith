import Link from "next/link";

const BookItem = () => {
  return (
    <Link href="/books/bukhari">
      <div className="bg-[#ffffff] hover:bg-[#EBFCF6] group cursor-pointer px-4 py-6 rounded-xl flex items-center gap-2">
        <div className="relative h-12 w-12 flex justify-center items-center">
          <h3 className="text-gray-400 group-hover:text-white absolute text-xl font-medium">
            B
          </h3>

          <svg
            class="fill-[#f1f5f4] group-hover:fill-[#2A9E76] dark:fill-dark-bg-lite group-hover:fill-subcat-hover false    "
            width="56"
            height="62"
            viewBox="0 0 56 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
        <div>
          <h2 className="font-semibold leading-7 text-black text-[15px]">
            সহিহ বুখারী
          </h2>
          <h6 className="text-[#40404099] text-sm leading-[26px]">
            হাদিসের রেঞ্জ: ৭৫৬৩
          </h6>
        </div>
      </div>
    </Link>
  );
};
export default BookItem;
