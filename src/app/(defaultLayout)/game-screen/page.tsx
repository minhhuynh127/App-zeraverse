import Image from "next/image";
import React from "react";
import bannerAds from "@/public/images/game-screen/Banner ads.png";
import banner from "@/public/images/game-screen/banner.png";
import pause from "@/public/images/game-screen/pause.png";
import imgage1 from "@/public/images/game-screen/image-14.png";
import heart from "@/public/images/game-screen/heart.png";
import add from "@/public/images/game-screen/add.png";
import drag from "@/public/images/game-screen/drag.png";
import report from "@/public/images/game-screen/report.png";
import image8 from "@/public/images/game-screen/image-8.png";
import image22 from "@/public/images/game-screen/image-22.png";
import image23 from "@/public/images/game-screen/image-23.png";
import zen from "@/public/images/game-screen/zen.png";

import {
  iconShare,
  imgaeGame3,
  imgaeGame5,
  imgaeGame11,
  imgaeGame10,
  avatars,
} from "./images/images";
import Button from "../../components/Buttons/app.button";

const GameScreenPage = () => {
  return (
    <div className="grid grid-cols-11 grid-flow-row gap-4">
      <div className="col-span-1 row-span-7 w-full h-full">
        <Image src={bannerAds} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="col-span-7 row-span-7">
        <div className="grid grid-rows-7 gap-4">
          <div className=" row-span-5 col-span-7 w-full h-full">
            <Image src={banner} alt="" className=" object-cover w-full" />
            <div className="h-[67px] bg-[#373737] w-full flex justify-between items-center p-4">
              <div className="flex gap-4 h-full w-full items-center">
                <Image
                  src={pause}
                  alt=""
                  className="object-cover w-[32px] h-[32px]"
                />
                <Image
                  src={imgage1}
                  alt=""
                  className="object-cover h-[50px] w-[50px]"
                />
                <span className="font-lato font-bold text-base leading[25.6px] text-[#FFFFFF]">
                  Game title
                </span>
              </div>
              <div className="flex gap-4 h-full w-full items-center justify-end">
                <span className="w-[110px] h-[29px] rounded-[10px] px-[10px] py-[5px] bg-[#5B5B5B] text-[#FFFFFF] font-semibold font-inter text-base flex justify-center items-center">
                  00 : 00 : 00
                </span>
                <Image src={heart} alt="" />
                <Image src={add} alt="" />
                <Image src={drag} alt="" />
                <Image src={report} alt="" />
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-7 w-full">
            <div className="grid grid-cols-7 grid-flow-dense gap-4 w-full">
              <div className="col-span-4 full bg-pink-900 border border-pink-300 rounded-[10px] flex flex-col justify-center items-center gap-4">
                <div className="flex items-center gap-2 justify-center">
                  <h3 className="font-lato font-bold text-base text-white">
                    Share
                  </h3>
                  <span className="font-lato font-semibold text-[11px] text-white">
                    for 1
                  </span>
                </div>
                <div className="flex justify-center items-center gap-10">
                  {iconShare.map((item, index) => (
                    <Image key={index} src={item.src} alt="" />
                  ))}
                </div>
              </div>
              <div className="col-span-2 h-full bg-pink-900 flex- flex-col justify-center items-center">
                <Image
                  src={image22}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="col-span-1 h-full bg-pink-900 flex- flex-col justify-center items-center">
                <Image
                  src={image23}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full row-span-1 col-span-7">
            <div className=" bg-[#8F2A89] w-full rounded-[10px]">
              <Image src={image8} alt="" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-7 w-full">
        <div className="grid grid-rows-7 gap-4 w-full h-full">
          <div className="row-span-3 col-span-3  flex flex-col justify-between bg-[#585858]/50">
            <div className="h-8 rounded-[10px] bg-[#52495D] py-2 px-[10px] flex justify-between items-center">
              <Image
                src={imgage1}
                alt=""
                className="object-cover h-[24px] w-[24px] rounded-[50%]"
              />
              <span className="font-inter font-normal text-xs leading-[14.52px] text-white">
                +100 More
              </span>
            </div>
            <div className="flex-1"></div>
            <div className="h-8 rounded-[10px] bg-[#52495D] py-2 px-[10px] flex justify-between items-center">
              <input
                type="text"
                className="w-[320px] h-[37px] rounded-[10px] py-[10px] px-[20px] placeholder-white/50 text-[#FFFFFF]/50"
                placeholder="Say something ... "
              />
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.119902 11.9469C0.120677 12.6868 0.896959 13.1697 1.56103 12.8433L14.4683 6.4988L1.56089 0.154257C0.896848 -0.172146 0.120598 0.31064 0.119756 1.05056L0.115775 4.54974C0.115191 5.06321 0.503577 5.49368 1.0144 5.54573L10.3673 6.4988L1.06486 6.97276C0.532635 6.99988 0.115184 7.4396 0.115742 7.97251L0.119902 11.9469Z"
                  fill="#BD1ECB"
                />
              </svg>
            </div>
          </div>
          <div className="row-span-3 col-span-3  ">
            <div className="grid grid-cols-3 w-full h-full gap-4">
              <div className="col-span-2 row-span-3 bg-[#D9D9D9] flex items-center justify-center rounded-[10px]">
                <h1 className="font-semibold font-inter text-base">ADS</h1>
              </div>
              <div className="row-span-3 col-span-1">
                <div className="grid grid-rows-3 w-full h-full gap-4">
                  {imgaeGame3.map((item, index) => (
                    <div key={index} className="row-span-1 col-span-1">
                      <Image
                        src={item.src}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" row-span-1 col-span-3">
            <div className="grid grid-cols-3 grid-rows-1 gap-4 w-full h-full">
              {imgaeGame3.map((item, index) => (
                <div key={index} className="col-span-1">
                  <Image
                    src={item.src}
                    alt=""
                    className="object-cover w-full h-full rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="col-span-11 row-span-1">
        <div className="grid grid-cols-11 gap-4 w-full ">
          {imgaeGame11.map((item, index) => (
            <div key={index} className="col-span-1 ">
              <Image src={item.src} alt="" className="w-full rounded-[10px]" />
            </div>
          ))}
        </div>
      </div>

      {/* 3 */}
      <div className="col-span-11 row-span-5 w-full">
        <div className="grid grid-cols-11 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-5 w-full">
            <div className="grid grid-rows-5 grid-cols-2 gap-4">
              {imgaeGame10.map((item, index) => (
                <div key={index} className="col-span-1 row-span-1 w-full">
                  <Image
                    src={item.src}
                    alt=""
                    className="w-full rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 row-span-5 w-full bg-[#181818]/60 border border-[#FF00E5] p-[22px]">
            <h3 className="font-lato font-semibold text-sm leading-[22.4px] text-white ">
              Game Category / .io Game
            </h3>
            <h1 className="font-lato font-semibold text-[28px] text-white mt-3">
              Game title
            </h1>
            <p className="font-lato font-semibold text-[10px] text-white italic leading-4">
              Posted date: 12/2/2022
            </p>
            <div className="flex gap-4 mt-[14px]">
              <Button className="w-[93px] h-[29px] rounded-[20px] py-2 px-[10px] bg-white flex items-center">
                Car Game
              </Button>
              <Button className="w-[132px] h-[29px] rounded-[20px] py-2 px-[10px] bg-white flex items-center">
                Shooting Game
              </Button>
            </div>
            <div className="flex gap-4 mt-4 items-center">
              <h3 className="font-lato font-medium tetx-base leading-[25.6px] text-white">
                Developed by
              </h3>
              <h3 className="font-lato font-medium tetx-base leading-[25.6px] text-white">
                Someone
              </h3>
              <button className="w-[48px] h-[48px] bg-white rounded-[10px]"></button>
            </div>
            <div className="font-lato font-bold text-base text-white leading-[25.6px]">
              <h3>1000 players loved this game </h3>
              <h3>Decription of the game: </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien.
              </p>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src={banner} alt="" className="w-[289px] h-[183px]" />
            </div>
          </div>

          <div className="col-span-4 row-span-5 w-full bg-[#181818]/60 border border-[#FF00E5]">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className=" h-[61px] w-full bg-black/50 font-lato font-semibold text-[28px] leading-[39.2px] text-white flex justify-center items-center">
                Hall of Fame
              </div>
              {avatars.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 bg-black/50 py-[5px] px-[10px] rounded-[10px]"
                >
                  <Image
                    src={item.src}
                    alt=""
                    className="w-[63px] h-[63px] rounded-[130px]"
                  />
                  <div className="flex-1">
                    <h3 className="font-lato font-bold text-base leading-[25.6px] text-white">
                      Username
                    </h3>
                    <p className="font-lato font-medium text-xs leading-[19.2px] text-white">
                      User’s quote:Lorem ipsum dolor sit amet consectetur
                      adipiscing elit Ut et.
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center items-center border border-l-white border-t-0 border-r-0 border-b-0 px-4">
                    <span className="text-white font-nunito font-bold text-[14px] leading-[22.4px]">
                      1000
                    </span>
                    <Image src={zen} alt="" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 row-span-5 w-full">
            <div className="grid grid-rows-5 grid-cols-1 gap-4">
              {imgaeGame5.map((item, index) => (
                <div key={index} className="row-span-1 col-span 1 w-full">
                  <Image
                    src={item.src}
                    alt=""
                    className="rounded-[10px] w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreenPage;
