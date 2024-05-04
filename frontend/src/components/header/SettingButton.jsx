"use client";
import { useState } from "react";
import Rodal from "rodal";

const SettingButton = () => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <>
      <button
        onClick={show}
        className=" bg-[#2A9E76] w-10 h-10 flex items-center justify-center rounded-md xl:hidden"
      >
        <img src="/icons/setting.svg" alt="setting" />
      </button>

      <Rodal
        animation="slideRight"
        showMask={true}
        visible={visible}
        onClose={hide}
        customStyles={{
          left: "auto",
          borderRadius: "0",
          height: "100vh",
          zIndex: 999,
        }}
        customMaskStyles={{
          cursor: "pointer",
          backgroundColor: "#3d3d3ecc",
        }}
      >
        <div className="">
          <h2 className="text-xl pl-4">সেটিংস</h2>

          <div className="flex-col gap-3">
            <div className="text-[17px] p-4 bg-white ">
              <form className="flex flex-col gap-6 py-3">
                <div className="flex flex-col">
                  <label htmlFor="font" className="text-black">
                    আরবি ফন্ট সিলেক্ট করুন
                  </label>
                  <select
                    name="font"
                    id="font"
                    className="border p-2 rounded-md focus:outline-0 cursor-pointer"
                  >
                    <option value="KFGQ">KFGQ</option>
                    <option value="Me Quran">Me Quran</option>
                    <option value="Al Mushaf">Al Mushaf</option>
                    <option value="Amiri">Amiri</option>
                    <option value="Arial">Arial</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="fontsize" className="font-kalpursh">
                    এরাবিক ফন্ট সাইজ
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={18}
                      max={40}
                      // value={18}
                      name="fontsize"
                      id="fontsize"
                      className="w-full"
                    />
                    <span>২১</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bnfontsize">অনুবাদ ফন্ট সাইজ</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={14}
                      max={25}
                      // value={16}
                      name="bnfontsize"
                      id="bnfontsize"
                      className="w-full"
                    />
                    <span>২৫</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  নাইট মোড
                  <label
                    htmlFor="theme"
                    class="inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="theme"
                      value="theme"
                      class="sr-only peer"
                    />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                  </label>
                </div>
              </form>
            </div>
            <div className="relative p-4 text-center bg-[#34AB82] rounded-xl text-white">
              <img
                src="/image/mosque.svg"
                alt="mosque"
                className="absolute right-0 bottom-0 fill-[#FFFFFF]  dark:fill-[#626262]"
                width="168"
                height="177"
              />
              <h1 className="text-2xl font-semibold text-start">
                আপনিও সদাকায়ে জারিয়াতে অংশ নিন
              </h1>
              <p className="mt-2 tracking-wide text-start">
                আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা
                করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে
                আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ
                হিসেবে আল্লাহ্&zwnj;র কাছে কবুল হবে।
              </p>
              <button className="bg-white  text-[#34AB82] mt-4  px-7 font-semibold text-[17px] py-2 rounded-lg hover:shadow">
                সাপোর্ট করুন
              </button>
            </div>
          </div>
        </div>
      </Rodal>
    </>
  );
};
export default SettingButton;
