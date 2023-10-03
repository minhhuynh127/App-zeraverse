"use client";
import iconBack from "@/public/left-white.png";
import Empty from "@/src/app/components/Empty/app.empty";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import Image from "next/image";
import Link from "next/link";
const LovedGamesPage = () => {
  const { dataLovedGame } = useAuthContext();
  return (
    <div className="flex flex-col justify-between gap-6 w-full h-full">
      <div className="mt-28 w-full h-auto bg-black/50 rounded-[10px] flex flex-col justify-center items-center gap-8">
        <div className="w-full h-[74px] px-[20px] py-0 bg-pink-500 rounded-tl-[10px] rounded-tr-[10px] flex justify-between items-center">
          <Link
            href={"/user-profile"}
            className="flex justify-center items-center text-white gap-[5px] w-[41px] h-[22px]"
          >
            <div>
              <Image
                priority={true}
                src={iconBack}
                alt=""
                className="w-[5px] h-[10px]"
              />
            </div>
            Back
          </Link>
          <h3 className="flex-1 text-center font-nunito font-bold text-[32px] leading-[43.65px] text-white">
            Loved Games
          </h3>
        </div>

        <div className="w-full px-7 pb-[500px]">
          <div className="flex">
            {dataLovedGame?.length > 0 ? (
              dataLovedGame?.map((item: any, index: number) => (
                <div
                  className="w-[94px] h-[94px] cursor-grabbing relative group"
                  key={index}
                >
                  <div>
                    <Image
                      priority={true}
                      src={item.thumbnail}
                      width={500}
                      height={500}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-all rounded-[10px]"
                    />
                  </div>
                  <div className="absolute inset-0 hidden group-hover:flex items-end justify-center px-[8px]">
                    <span className="text-white text-bold text-base whitespace-nowrap truncate">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center items-center">
                <Empty className={""} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovedGamesPage;
