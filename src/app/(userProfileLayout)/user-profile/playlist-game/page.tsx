/* eslint-disable react/no-unescaped-entities */
"use client";
import iconBack from "@/public/left-white.png";
import iconRight from "@/public/right.png";
import Empty from "@/src/app/components/Empty/app.empty";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import { getAllGamePlaylist } from "@/src/app/services/game-service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PlaylistGamePage = () => {
  const { activitiesInfo, token, dataPlaylist } = useAuthContext();
  const [playlist, setPlaylist] = useState<Array<any>>([]);
  const getPlaylist = async () => {
    try {
      if (dataPlaylist) {
        setPlaylist([]);
        dataPlaylist?.map((e: any) => {
          getAllGamePlaylist(e?.id, token).then((data) => {
            setPlaylist((prev) => {
              return [...prev, { data, info: e }];
            });
          });
        });
      }
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    getPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPlaylist]);
  return (
    <div className="flex flex-col justify-between gap-6 w-full h-full">
      <div className="mt-28 w-full h-auto bg-black/50 rounded-[10px] flex flex-col justify-center items-center gap-8 pb-[100px]">
        <div className="w-full h-[74px] px-[20px] py-0 bg-pink-500 rounded-tl-[10px] rounded-tr-[10px]  flex justify-between items-center">
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
            Playlist Games
          </h3>
        </div>

        <div className="w-full flex flex-col gap-10 px-[44px] mb-6">
          <div className="w-full flex justify-center items-center gap-4">
            <div className="w-full flex flex-col gap-4 items-center justify-between">
              {playlist?.length > 0 ? (
                <>
                  {playlist?.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="w-full flex flex-col gap-4 items-start justify-start"
                    >
                      <div className="w-full flex justify-between items-center text-white text-xl">
                        <h3 className="">{item?.info?.name}</h3>
                        <Link
                          href={`/user-profile/playlist-game/${item?.info?.id}`}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <span>View All</span>
                          <Image priority={true} src={iconRight} alt="" />
                        </Link>
                      </div>
                      <div className="w-full flex gap-8">
                        {item?.data?.length > 0 ? (
                          <div className="flex gap-8">
                            {item?.data
                              ?.slice(0, 10)
                              ?.map((item: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="w-[94px] h-[94px] cursor-pointer rounded-[10px] relative transition-all group"
                                >
                                  <Image
                                    priority={true}
                                    src={item?.thumbnail}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-full h-full rounded-[10px] group-hover:scale-105"
                                  />

                                  <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden animate-fadeIn delay-500 group-hover:flex transition-all">
                                    <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                                      {item?.title}
                                    </span>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ) : (
                          <div className="w-full flex justify-center items-center ">
                            <Empty className={""} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="w-full flex justify-center items-center ">
                  <Empty className={""} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistGamePage;
