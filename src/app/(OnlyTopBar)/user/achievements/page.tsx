import highestPpaystreak from "@/public/images/achievements/highest-Ppaystreak.png";
import iconCoin from "@/public/images/achievements/icon-coin.png";
import totalGamePlayed from "@/public/images/achievements/total-games-played.png";
import zeraCoin from "@/public/images/achievements/zera-coin.png";
import Image from "next/image";
import Link from "next/link";
import { data } from "./images";

const AchievementsPage = () => {
  return (
    <div className="bg-black/80 h-auto w-full rounded-[20px] border-[4px] border-pink-400 px-[62px] pb-[62px]">
      <Link
        href={"/"}
        className=" text-pink-500 font-lato font-bold text-sm mt-[21px] ml-[21px]"
      >
        <div className="flex items-center gap-2">
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
      <div className="min-w-[250.44px] max-h-55px] rounded-[14px] py-1 px-[42px] bg-pink-700 text-white font-nunito font-semibold text-[28px] leading-[39.2px] shadow-[rgb(0,0,0,0.4)_-4px_-4px_5px_0px_inset] absolute  left-[55%] translate-x-[-45%] top-[25px]">
        Achievements
      </div>
      <div className="w-full mt-[100px] bg-gradient-to-tl from-[#FF00E5] via-[#EAC6E6] to-[#950086] rounded-[30px] p-[4px]">
        <div className="w-full h-full bg-gradient-to-b from-[#6300FF]/90 to-[#4F0051]/90 rounded-[30px] px-[110px] py-[64px] flex flex-col justify-center items-center gap-4">
          <div className="flex gap-[25px] justify-center items-center">
            <div className="w-[204px] h-[314px] flex flex-col justify-between items-center gap-[55px] px-[13px] py-[22px] bg-gradient-to-b from-[#D34880]  to-[#2F0652] rounded-[30px]">
              <div className="flex flex-col justify-center items-center gap-[10px] px-[15px] py-[10px]">
                <div>
                  <Image src={zeraCoin} alt="" />
                </div>
                <span className="text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#979BFF] via-[#C4B5FD] to-[#EF36C6]">
                  10000
                </span>
              </div>
              <span className="font-lato font-bold text-base text-white leading-[25.6px]">
                Earned Zera
              </span>
            </div>

            <div className="w-[204px] h-[314px] flex flex-col justify-between items-center gap-[55px] px-[13px] py-[22px] bg-gradient-to-b from-[#D34880]  to-[#2F0652] rounded-[30px]">
              <div className="flex flex-col justify-center items-center gap-[10px] px-[15px] py-[10px]">
                <Image src={totalGamePlayed} alt="" />
                <span className="text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#979BFF] via-[#C4B5FD] to-[#EF36C6]">
                  100
                </span>
              </div>
              <span className="font-lato font-bold text-base text-white leading-[25.6px]">
                Total games played
              </span>
            </div>

            <div className="w-[204px] h-[314px] flex flex-col justify-between items-center gap-[55px] px-[13px] pt-[22px] pb-[8px] bg-gradient-to-b from-[#D34880]  to-[#2F0652] rounded-[30px]">
              <div className="flex flex-col justify-center items-center gap-[10px] px-[15px] py-[10px]">
                <Image src={highestPpaystreak} alt="" />
              </div>
              <div>
                <span className="font-lato font-bold text-base text-white leading-[25.6px]">
                  Highest Playstreak
                </span>
                <p className="font-lato font-normal text-[10px] text-white leading-[16px] text-center">
                  Playstreak: 2 days
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-lato font-semibold text-[28px] text-white leading-[39.2px] text-center">
              Top game played
            </h3>
            <div className="w-full flex justify-between items-center flex-wrap gap-6 mt-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-[435px] flex gap-10 p-[10px] bg-gradient-to-b from-[#8B5CF6] to-[#503098] rounded-[20px]"
                >
                  <div className="flex flex-1 gap-2 items-center">
                    <div>
                      <Image src={item.src} alt="" className="rounded-[10px]" />
                    </div>
                    <span className="font-lato font-bold text-base leading-[25.6px] text-white">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="font-lato font-bold text-base leading-[25.6px] text-white">
                      {item.coin}
                    </span>
                    <div>
                      <Image src={iconCoin} alt=""></Image>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
