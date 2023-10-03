import React from "react";
import { imagesGame } from "@/src/app/components/Popular/PopularWeek/images";
import Image from "next/image";
import { useAuthContext } from "@/src/app/context/AuthProvider";

const PopularWeek = () => {
  const { popularWeekGame } = useAuthContext();
  return (
    <div className="w-full overflow-x-auto btn-list">
      <div className="w-fit flex gap-4 items-center overflow-hidden">
        {popularWeekGame.map((item: any, index: number) => (
          <div
            key={index}
            className="w-[94px] h-[94px] rounded-[10px] relative group transition-all cursor-pointer"
          >
            {item?.game_detail?.thumbnail && (
              <Image
                priority={true}
                key={index}
                src={item?.game_detail?.thumbnail}
                width={500}
                height={500}
                alt=""
                className="rounded-[10px] w-full h-full group-hover:scale-105 object-cover transition-all"
              />
            )}
            <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
              <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                {item?.game_detail?.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularWeek;
