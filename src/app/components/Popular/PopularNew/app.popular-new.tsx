import Image from "next/image";
import React from "react";
import popular1 from "@/public/images/popular/popular-new.jpeg";
import popular2 from "@/public/images/popular/popular-new1.jpg";
const PopularNew = () => {
  return (
    <div className="">
      <h3 className="font-lato font-bold text-[32px] leading-[44.6px] text-white">
        Popular News
      </h3>
      <div className="flex w-full h-[424px] gap-[20px] mt-4">
        <div className="max-w-[804px] w-full relative ">
          <div>
            <Image
              src={popular1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full flex flex-col justify-end p-2 left-0 bottom-0 bg-gradient-to-b from-transparent to-black/90">
            <h3 className="font-lato font-bold text-[28px] leading-[39.2px] text-white">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="font-nunito text-xs font-light text-white leading-[16.8px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <span className="font-nunito font-normal tetx-base text-white leading-[25.8px]">
              08/23/2023 4:13PM
            </span>
          </div>
        </div>
        <div className="max-w-[354px] w-full p-1 border border-pink-700 bg-black relative">
          <div>
            <Image
              src={popular2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-[40%] flex flex-col justify-end p-2 left-0 bottom-0 bg-black">
            <h3 className="font-lato font-bold text-[28px] leading-[39.2px] text-white">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="font-nunito text-xs font-light text-white leading-[16.8px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <span className="font-nunito font-normal tetx-base text-white leading-[25.8px]">
              08/23/2023 4:13PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularNew;
