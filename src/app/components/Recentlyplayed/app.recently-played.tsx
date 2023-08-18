import Image from "next/image";
import React from "react";
import { imagesGame } from "@/src/app/components/Recentlyplayed/images";
const RecentlyPlayed = () => {
  return (
    <div className="w-full flex justify-start items-center gap-2">
      {imagesGame.map((item, index) => (
        <Image key={index} src={item.src} alt="" className="rounded-[10px]" />
      ))}
    </div>
  );
};

export default RecentlyPlayed;
