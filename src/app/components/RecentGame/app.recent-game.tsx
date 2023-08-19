import React from "react";
import { imagesRecentGame } from "@/src/app/components/RecentGame/images";
import Button from "../Buttons/app.button";
import Image from "next/image";
const RecentGame = () => {
  return (
    <div className="grid grid-cols-10 gap-4">
      {imagesRecentGame.map((item, index) => (
        <Button
          className="col-span-1 hover:opacity-70 transition-opacity"
          key={index}
        >
          <Image
            src={item.src}
            alt=""
            className="w-full object-cover rounded-[10px]"
          />
        </Button>
      ))}
    </div>
  );
};

export default RecentGame;
