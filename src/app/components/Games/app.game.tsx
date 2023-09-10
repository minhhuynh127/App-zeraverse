"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthProvider";
const Game = () => {
  const { dataGames }: { dataGames: Array<any> } = useAuthContext();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemRef.current]);
  return (
    <div className="flex flex-col justify-between gap-4 flex-1">
      <div
        ref={parentRef}
        className="w-full grid grid-cols-11 grid-flow-dense gap-4"
      >
        {dataGames?.map((game, index) => (
          <button
            className="w-full h-full rounded-xl hover:opacity-70 transition-all hover:scale-105 shine-effect"
            key={index}
          >
            <Image
              src={game?.thumbnail}
              width={500}
              height={500}
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
