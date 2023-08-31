"use client";

import { imagesGame } from "@/src/app/components/Games/GameCategoryAll/images";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const GameCategoryAll = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLButtonElement[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (parentRef.current) {
      itemRef.current = Array.from(
        parentRef.current.children
      ) as HTMLButtonElement[];
    }

    const itemLargeIndex = [0, 1, 2, 3, 4];

    const itemLargeList = itemRef.current.filter((item, index) => {
      // console.log(itemLargeIndex.includes(index));
      return itemLargeIndex.includes(index);
    });
    const itemCategoryImage = itemRef.current.filter((item, index) => {
      // console.log(itemLargeIndex.includes(index));
      return itemLargeIndex.includes(index);
    });

    itemLargeList.forEach((item) => {
      item.classList.add("row-span-2", "flex-col");
    });
    itemCategoryImage.forEach((item) => {
      // console.log(item.children[0]);

      item.children[0].classList.remove("w-[50%]", "rounded-bl-[10px]");
      item.children[0].classList.add("w-full", "rounded-tr-[10px]");
    });
  }, []);

  return (
    <div
      ref={parentRef}
      className="w-full grid grid-cols-11 grid-flow-dense gap-4"
    >
      {imagesGame.map((image, index) => (
        <button
          key={index}
          className="flex justify-center items-center bg-white rounded-[10px] col-span-2"
        >
          <div>
            <Image
              ref={imageRef}
              src={image.src}
              alt="gamePicture"
              className={`w-[50%] rounded-tl-[10px] rounded-bl-[10px] ${index}`}
            />
          </div>
          <span className="text-violet-900 text-base font-semibold py-2">
            Category name
          </span>
        </button>
      ))}
    </div>
  );
};

export default GameCategoryAll;
