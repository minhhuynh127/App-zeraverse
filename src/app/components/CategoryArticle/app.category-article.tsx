import React from "react";
import { imagesCategory } from "./images";
import Image from "next/image";
import Button from "../Buttons/app.button";

const CategoryArticle = () => {
  return (
    <div className="w-full grid grid-cols-11 grid-flow-dense gap-4">
      {imagesCategory.map((image, index) => (
        <div
          key={index}
          className="flex items-center bg-black p-1 rounded-[10px] col-span-5 row-span-1 gap-4"
        >
          <Image
            src={image.src}
            alt="gamePicture"
            className={`w-[40%] rounded-tl-[10px] rounded-bl-[10px] object-cover`}
          />
          <div className="flex flex-col gap-[10px] justify-center items-start">
            <Button className="w-[80px] h-[24px] px-[10px] py-[6px] rounded-[10px] bg-white font-nunito font-normal text-[10px]">
              Car Game
            </Button>
            <h3 className="font-lato font-bold text-2xl leading-[33.6px] text-white">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="font-nunito font-light text-xs leading-[16.8px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryArticle;
