import React from "react";
import { imagesGame } from "@/src/app/components/Popular/PopularWeek/images";
import Image from "next/image";

const PopularWeek = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      {imagesGame.map((item, index) => (
        <Image key={index} src={item.src} alt="" className="rounded-[10px]" />
      ))}
    </div>
  );
};

export default PopularWeek;
