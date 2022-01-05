import { useState } from "react";
import Image from "next/image";
import next from "next";

const imgSlider = [
  "/homeimage/slider/slider1.png",
  "/homeimage/slider/slider2.png",
  "/homeimage/slider/slider1.png",
];
let count = 0;

export default function SliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextClick = () => {
    count = Math.abs((count + 1)) % imgSlider.length;
    setCurrentIndex(count);
  };
  const handlePrevClick = () => {
    count = Math.abs((count - 1)) % imgSlider.length;
    setCurrentIndex(count);
  };
  return (
  <div className="bg-red-500 w-full h-full aspect-video relative">
    <Image src={imgSlider[currentIndex]} layout="fill" alt="mainbg" />
    <button className="text-3xl text-white absolute left-0 top-1/2" onClick={handlePrevClick}>{`<`}</button>
    <button className="text-3xl text-white absolute right-0 top-1/2" onClick={handleNextClick}>{`>`}</button>
  </div>
  );
}
