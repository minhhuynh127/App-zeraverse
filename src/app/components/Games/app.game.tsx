"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import imgGameDefault from "@/public/images/games/placehoder.png";
import Link from "next/link";
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
          <Link
            href={`/game-screen/${game.slug}`}
            className="min-w-[94px] min-h-[94px] rounded-xl transition-all hover:scale-105 shine-effect relative group"
            key={index}
          >
            {game?.thumbnail ? (
              <Image
                priority={true}
                src={game?.thumbnail}
                width={500}
                height={500}
                alt="gamePicture"
                className={`w-full h-full rounded-xl object-cover ${index}`}
              />
            ) : (
              <Image
                priority={true}
                src={imgGameDefault}
                width={500}
                height={500}
                alt="gamePicture"
                className={`w-full h-full rounded-xl object-cover ${index}`}
              />
            )}
            <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
              <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                {game.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Game;
