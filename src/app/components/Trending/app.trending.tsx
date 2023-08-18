import React from "react";
import trending1 from "@/public/images/trending/trending1.png";
import trending2 from "@/public/images/trending/trending2.png";
import Image from "next/image";
const Trending = () => {
  return (
    <div className="bg-trending max-w-full py-4 px-12 flex flex-col items-start gap-3 mt-[176px]">
      <h1 className="font-lato font-bold text-[28px] leading-[39.2px] text-[#FFFF]">
        Trending News
      </h1>
      <div className="flex justify-start items-center w-full gap-4">
        <div className="flex justify-between items-center max-w-[50%] gap-4 border border-pink-700 p-[5px]">
          <Image src={trending1} alt="trending news" />
          <div className="max-w-[312px]">
            <button className="max-w-[100px] h-[19ox] rounded-[10px] py-[6px] px-[10px] bg-white">
              Car game
            </button>
            <h3 className="font-lato font-bold text-2xl leading-[33.6px] text-[#FFFFFF] break-words ">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="text-[#FFFFFF] font-nunito text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center max-w-[50%] gap-4 border border-pink-700 p-[5px]">
          <Image src={trending2} alt="trending news" />
          <div className="max-w-[312px]">
            <button className="max-w-[100px] h-[19ox] rounded-[10px] py-[6px] px-[10px] bg-white">
              Explore
            </button>
            <h3 className="font-lato font-bold text-2xl leading-[33.6px] text-[#FFFFFF] break-words ">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="text-[#FFFFFF] font-nunito text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-lato font-bold text-[28px] leading-[39.2px] text-[#FFFF]">
          List Article category
        </h1>
        <div className="ml-4 mt-2">
          <ul className="text-pink-500">
            <li className="underline list-disc">
              <a href="">Game</a>
            </li>
            <li className="underline list-disc">
              <a href="">Game play</a>
            </li>
            <li className="underline list-disc">
              <a href="">Tatic game</a>
            </li>
            <li className="underline list-disc">
              <a href="">Gamer</a>
            </li>
          </ul>
          <span className="text-pink-500 mt-4 block text-sm font-normal leading-[22.4px] cursor-pointer">
            View all
          </span>
        </div>
      </div>
    </div>
  );
};

export default Trending;
