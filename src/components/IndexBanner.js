import Image from "next/image";
import Link from "next/link";
import SliderBanner from "./home/SliderBanner";

function IndexBanner() {
  return (
    <div className="h-screen w-full relative items-center">
      <div className="h-5/6 big-device:h-full w-full relative">
        <SliderBanner/>
        <div className="absolute left-1/2 top-1/2 w-max  transform -translate-x-1/2 -translate-y-1/2 flex flex-col font-body place-items-center">
          <div className="text-left text-noiceyellow medium-tablet:text-7xl big-device:text-8xl big-device:font-base mobile:mb-2 mb-16">
            {"Self Learning"}
          </div>
          <div className="text-left text-white medium-tablet:text-4xl big-device:text-3xl mobile:text-xs font-light mb-2 w-full">
            พื้นที่สำหรับการเรียนออนไลน์
          </div>
          <div className="text-left text-white medium-tablet:text-4xl big-device:text-3xl mobile:text-xs font-light mb-2 w-full">
            ที่มอบให้แก่ผู้ที่ต้องการศึกษาหาความรู้ด้วยตนเอง
          </div>
          <div className="text-left text-white medium-tablet:text-4xl big-device:text-3xl mobile:text-xs font-light mb-2 w-full">
            หรือจะเรียกได้ว่าเป็นพื้นที่สำหรับคนที่ต้องการ
          </div>
          <div className="text-left text-white medium-tablet:text-4xl big-device:text-3xl mobile:text-xs font-light mb-2 w-full">
            “เรียนด้วยตัวเอง” นั่นเอง
          </div>
          <button
            className={`font-thin  bg-buttonblue rounded-full medium-table:w-24 justify-center medium-tablet:p-2 medium-tablet:px-2 big-device:p-2 big-device:px-10 mt-2 text-white`}
          >
            <Link
              className="font-body medium-tablet:text-4xl big-device:text-3xl mobile:text-lg"
              href="/about"
            >
              เลือกวิชา
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexBanner;
