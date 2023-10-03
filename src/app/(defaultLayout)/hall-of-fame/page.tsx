"use client";
import Link from "next/link";
import TopGamePlayed from "../../components/HallOfFame/TopGamePlayed/app-top-game-played";
import TopPlaysteak from "../../components/HallOfFame/TopPlaysteak/app-top-playsteak";
import TopZera from "../../components/HallOfFame/TopZera/app.top-zera";
import { useState } from "react";

const HallOfFamePage = () => {
  const [filterStatus, setFilterStatus] = useState<string>("Zera");

  const hadleShowTopZera = () => {
    setFilterStatus("Zera");
  };
  const hadleShowTopGamePlayed = () => {
    setFilterStatus("Games-Played");
  };
  const hadleShowTopPlaysteak = () => {
    setFilterStatus("Playstreak");
  };

  return (
    <div className="bg-black/80 h-auto w-full rounded-[20px] border-[4px] border-pink-400  pb-[62px] relative">
      <Link
        href={"/"}
        className=" text-pink-500 font-lato font-bold text-sm mt-[21px] ml-[21px]"
      >
        <div className="flex items-center gap-2 ml-[20px]">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 1L1 6L6 11" stroke="#F472B6" strokeLinecap="round" />
          </svg>
          <span>Back</span>
        </div>
      </Link>
      <div className="min-w-[250.44px] max-h-[55px] rounded-[14px] py-1 px-[42px] bg-pink-700 text-white font-nunito font-semibold text-[28px] leading-[39.2px] shadow-[rgb(0,0,0,0.4)_-4px_-4px_5px_0px_inset] absolute  left-[50%] translate-x-[-50%] top-0 mt-2">
        Hall Of Fame
      </div>

      <div className="w-full p-[60px]">
        <div className="w-full flex gap-4 justify-center items-center">
          <button
            onClick={() => hadleShowTopZera()}
            className={`${
              filterStatus === "Zera" ? "bg-pink-800" : "bg-violet-500"
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap  hover:bg-pink-800 transition-colors flex justify-center items-center`}
          >
            Zera
          </button>
          <button
            onClick={() => hadleShowTopGamePlayed()}
            className={` ${
              filterStatus === "Games-Played" ? "bg-pink-800" : "bg-violet-500"
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap hover:bg-pink-800 transition-colors flex justify-center items-center`}
          >
            Games Played
          </button>
          <button
            onClick={() => hadleShowTopPlaysteak()}
            className={` ${
              filterStatus === "Playstreak" ? "bg-pink-800" : "bg-violet-500"
            }
               w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap hover:bg-pink-800 transition-colors flex justify-center items-center`}
          >
            Playstreak
          </button>
        </div>
        <div className="w-full h-auto rounded-[20px] border-[4px] border-pink-300 p-[60px]">
          {filterStatus === "Zera" ? <TopZera itemsPerPage={10} /> : <></>}
          {filterStatus === "Games-Played" ? (
            <TopGamePlayed itemsPerPage={10} />
          ) : (
            <></>
          )}

          {filterStatus === "Playstreak" ? (
            <TopPlaysteak itemsPerPage={10} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default HallOfFamePage;
