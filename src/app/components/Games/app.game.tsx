"use client";

import { imagesGame } from "@/src/app/components/Games/images";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "../Buttons/app.button";

const Game = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLButtonElement[]>([]);
  useEffect(() => {
    if (parentRef.current) {
      // console.log(parentRef.current.children);
      itemRef.current = Array.from(
        parentRef.current.children
      ) as HTMLButtonElement[];
      // console.log(itemRef.current);
    }

    const itemLargeIndex = [0, 10, 16, 29, 30];
    const itemMediumIndex = [5, 8, 9, 14, 15, 27, 28];
    const itemLargeList = itemRef.current.filter((item, index) => {
      // console.log(itemLargeIndex.includes(index));
      // console.log(itemLargeIndex.includes(index));
      return itemLargeIndex.includes(index);
    });
    const itemMediumList = itemRef.current.filter((item, index) => {
      // console.log(itemMediumIndex.includes(index));
      return itemMediumIndex.includes(index);
    });
    itemLargeList.forEach((item) => {
      item.classList.add("col-span-3", "row-span-3");
    });
    itemMediumList.forEach((item) => {
      item.classList.add("col-span-2", "row-span-2");
    });
  }, []);
  return (
    <div className="flex flex-col justify-between gap-4 flex-1">
      <div
        ref={parentRef}
        className="w-full grid grid-cols-11 grid-flow-dense gap-4"
      >
        {imagesGame.map((image, index) => (
          <button className="" key={index}>
            <Image
              src={image.src}
              alt="gamePicture"
              className={`w-full h-full rounded-xl object-cover ${index}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
