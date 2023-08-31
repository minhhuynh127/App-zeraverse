"use client";
import imageMostPlayed from "@/public/images/games/image 25.png";
import iconRight from "@/public/right.png";
import {
  bgBrofile,
  imageAvatar,
  imagePlaylists,
  imagesRecentGame,
} from "@/src/app/(userProfileLayout)/user-profile/data/images";
import Image from "next/image";
import Link from "next/link";
import { userContext } from "@/src/app/(userProfileLayout)/layout";
import { useContext } from "react";

const UserProfilePage = () => {
  const userProfile = useContext(userContext);
  console.log(userProfile);

  return (
    <div className="mt-28 w-full h-auto flex items-start gap-[18px]">
      <div className="w-[40%] flex flex-col gap-4">
        <div className="w-full h-auto bg-black/50 rounded-[20px] overflow-hidden flex flex-col justify-between items-center">
          <div className="w-full h-[75px] bg-pink-500 pl-4 flex justify-start items-center">
            <h3 className="font-nunito text-[28px] font-bold text-white ">
              Status
            </h3>
          </div>
          <div className="w-full text-white pl-[28px] pt-[34px] pb-[140px] flex flex-col gap-3">
            <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
              77 minutes left
            </h3>
            <div>
              <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
                Playstreak: 5 days
              </h3>
              <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
                Highest streak: 15 days
              </p>
            </div>
            <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
              12 games played
            </h3>
            <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
              6 games loved
            </h3>
            <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
              Joined 6 years ago
            </h3>
          </div>
          <div className="w-full h-[75px] bg-violet-500 flex justify-start items-center pl-[28px] gap-2">
            <h3 className="font-lato font-semibold text-2xl leading-[33.6px] text-violet-50">
              Referall link:
            </h3>
            <span className="font-lato font-semibold text-xl leading-7 text-pink-200">
              @Zeraverse
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16Z"
                fill="#F9A8D4"
              />
            </svg>
          </div>
        </div>
        <div className="w-full h-auto bg-black/50 rounded-[20px] overflow-hidden flex flex-col justify-between items-center">
          <div className="w-full h-[75px] bg-pink-500 pl-4 flex justify-start items-center">
            <h3 className="font-nunito text-[28px] font-bold text-white ">
              Rewards
            </h3>
          </div>
          <div className="w-full text-white pl-[28px] pt-[34px] pb-[108px] flex flex-col gap-[35px]">
            <div>
              <h3 className="font-lato font-medium text-[20px] leading-[32px]">
                Earn 5 ZERA from playing game X
              </h3>
              <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
                5 minutes ago
              </p>
            </div>
            <div>
              <h3 className="font-lato font-medium text-[20px] leading-[32px]">
                Spend 2 ZERA to buy avatar “Yellow Dog”
              </h3>
              <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
                5 minutes ago
              </p>
            </div>
            <div>
              <h3 className="font-lato font-medium text-[20px] leading-[32px]">
                Earn 20 ZERA from refering a friend
              </h3>
              <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
                5 minutes ago
              </p>
            </div>
            <div>
              <h3 className="font-lato font-medium text-[20px] leading-[32px]">
                Spend 20 ZERA to buy 20 play minutes
              </h3>
              <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
                5 minutes ago
              </p>
            </div>
            <div>
              <h3 className="font-lato font-medium text-[20px] leading-[32px]">
                Earn 5 ZERA from playing game X
              </h3>
              <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
                5 minutes ago
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-auto bg-black/50 rounded-[20px] overflow-hidden flex flex-col justify-between items-center pb-[162px]">
        <div className="w-full h-[75px] bg-pink-500 flex justify-center items-center">
          <h3 className="font-nunito text-[28px] font-bold text-white ">
            Activities
          </h3>
        </div>
        <div className="w-full px-[42px] ">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className=" flex flex-col justify-center items-center">
              <h3 className="font-lato font-bold text-2xl leading-[39.2px] text-white">
                Most Played
              </h3>
              <div>
                <Image src={imageMostPlayed} alt="" />
              </div>
            </div>
            {/* Recent Games */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-nunito font-bold text-2xl text-white">
                    Recent Games
                  </h3>
                  <Link
                    href={"/user-profile/recent-game"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all{" "}
                    <div>
                      <Image
                        src={iconRight}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex gap-8 items-center">
                  {imagesRecentGame.map((item, index) => (
                    <button
                      className="hover:opacity-70 transition-opacity"
                      key={index}
                    >
                      <div>
                        <Image
                          src={item.src}
                          alt=""
                          className="w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Loved games */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-nunito font-bold text-2xl text-white">
                    Loved games
                  </h3>
                  <Link
                    href={"/user-profile/loved-game"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        src={iconRight}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex gap-8 items-center">
                  {imagesRecentGame.map((item, index) => (
                    <button
                      className="hover:opacity-70 transition-opacity"
                      key={index}
                    >
                      <div>
                        <Image
                          src={item.src}
                          alt=""
                          className="w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Playlist */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-nunito font-bold text-2xl text-white">
                    Playlist
                  </h3>
                  <Link
                    href={"/user-profile/playlist-game"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        src={iconRight}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex gap-8 items-center">
                  {imagePlaylists.map((item, index) => (
                    <div
                      className=" flex justify-between rounded-[10px] items-center w-[204px] h-[94px] border-t-[3px] border-r-[3px] border-b-[3px] border-l-0 border-pink-400 pr-2"
                      key={index}
                    >
                      <div>
                        <Image
                          src={item.src}
                          alt=""
                          className="object-cover rounded-[10px]"
                        />
                      </div>
                      <div className="flex flex-col gap-2 justify-center items-center">
                        <h3 className="font-lato font-bold text-xl text-white leading-[28px]">
                          Bad game
                        </h3>
                        <Link
                          href={""}
                          className="hover:opacity-70 transition-opacity font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                        >
                          View all
                          <div>
                            <Image
                              src={iconRight}
                              alt=""
                              className="w-[4px] h-[8px] mr-1"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Purchase history */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-nunito font-bold text-2xl text-white">
                    Purchase history
                  </h3>
                  <Link
                    href={""}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        src={iconRight}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex gap-8 items-center">
                  {imageAvatar.map((item, index) => (
                    <button className="" key={index}>
                      <div>
                        <Image
                          src={item.src}
                          alt=""
                          className="object-cover rounded-[10px]"
                        />
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-8 items-center">
                  {bgBrofile.map((item, index) => (
                    <button className="" key={index}>
                      <div>
                        <Image
                          src={item.src}
                          alt=""
                          className="object-cover rounded-[10px]"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
