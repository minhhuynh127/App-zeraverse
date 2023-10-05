/* eslint-disable react/no-unescaped-entities */
import playlistDefault from "@/public/images/user-images/playlist-default.png";
import iconRight from "@/public/right.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import Empty from "../Empty/app.empty";
const ActivitiesProfile = ({ info }: { info: any }) => {
  const {
    dataMostPlayed,
    dataRecentPlayed,
    dataLovedGame,
    dataPlaylist,
    dataPurchaseHistory,
    userInfo,
    isLoginEmail,
    getActivities,
    setActivitiesInfo,
    activitiesInfo,
  } = useAuthContext();

  const checkIsMine = info?.username === userInfo?.username;
  const { avatar, cover } = dataPurchaseHistory;
  useEffect(() => {
    getActivities(info?.username, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info?.username]);
  return (
    <div className="w-full h-auto bg-black/50 rounded-[20px] flex flex-col justify-between items-center pb-[162px]">
      <div className="w-full h-[75px] rounded-tl-[20px] rounded-tr-[20px] bg-pink-500 flex justify-center items-center">
        <h3 className="font-nunito text-[28px] font-bold text-white ">
          Activities
        </h3>
      </div>
      <div className="w-full px-[42px] ">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <div className=" flex flex-col justify-center items-center mt-4">
            <h3 className="font-lato font-bold text-2xl leading-[39.2px] text-white">
              Most Played
            </h3>
            {dataMostPlayed && (
              <div className="w-[314px] h-[314px] rounded-[30px] overflow-hidden relative group transition-all">
                {dataMostPlayed?.thumbnail ? (
                  <>
                    <Image
                      priority={true}
                      src={dataMostPlayed?.thumbnail}
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all"
                    />
                    <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden animate-fadeIn delay-500 group-hover:flex transition-all">
                      <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                        {dataMostPlayed.title}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center text-lg text-center text-white">
                    <p className="text-2xl font-bold font-nunito">
                      {checkIsMine ? "You" : "This player"} haven't played any
                      games yet.
                    </p>
                    <div className="flex flex-col items-center mt-2">
                      <Link href={"/"} className="text-lg">
                        <button className="w-[125px] h-9 rounded-[10px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] hover:opacity-70 transition-opacity">
                          Play now!
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Recent Games */}
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-nunito font-bold text-2xl text-white">
                  Recent Games
                </h3>
                {checkIsMine ? (
                  <Link
                    href={"/user-profile/recent-game"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        priority={true}
                        src={iconRight}
                        width={500}
                        height={500}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full flex flex-wrap gap-8 justify-start items-center">
                {dataRecentPlayed?.length > 0 ? (
                  <>
                    {dataRecentPlayed?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="w-[94px] h-[94px] hover:scale-105 transition-all overflow-hidden relative group cursor-pointer"
                      >
                        <div>
                          <Image
                            priority={true}
                            src={item.thumbnail}
                            width={500}
                            height={500}
                            alt=""
                            className="w-full h-full object-cover rounded-[10px]"
                          />
                        </div>
                        <div className="absolute inset-0 justify-start items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                          <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                            {item.title}
                          </span>
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
          {/* Loved games */}
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-nunito font-bold text-2xl text-white">
                  Loved games
                </h3>
                {checkIsMine ? (
                  <Link
                    href={"/user-profile/loved-game"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        priority={true}
                        src={iconRight}
                        width={500}
                        height={500}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full flex gap-8 items-center">
                {dataLovedGame?.length > 0 ? (
                  <div className="w-full flex gap-8 flex-wrap">
                    {dataLovedGame?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center w-[94px] h-[94px] hover:scale-[1.1] transition-all overflow-hidden relative group cursor-pointer"
                      >
                        <Image
                          priority={true}
                          src={item.thumbnail}
                          width={500}
                          height={500}
                          alt=""
                          className="w-full object-cover rounded-[10px]"
                        />

                        <div className="absolute inset-0 justify-start items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                          <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full flex justify-center items-center">
                    <Empty className={""} />
                  </div>
                )}
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
                {checkIsMine ? (
                  <Link
                    href={"/user-profile/playlist-game"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        priority={true}
                        src={iconRight}
                        width={500}
                        height={500}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full flex gap-8 items-center">
                {dataPlaylist?.length > 0 ? (
                  <div className="w-full flex flex-wrap gap-8">
                    {dataPlaylist?.map((item: any, index: number) => (
                      <Link
                        href={`/user-profile/playlist-game/${item?.id}`}
                        key={index}
                        className="flex items-center gap-4 border-[2px] border-pink-400 pr-4 h-[94px] hover:scale-105 transition-all group rounded-[10px] cursor-pointer"
                      >
                        {item?.thumbnail === "" ? (
                          <Image
                            priority={true}
                            src={playlistDefault}
                            width={500}
                            height={500}
                            alt=""
                            className="w-full h-full group-hover:scale-105 object-cover rounded-[10px]"
                          />
                        ) : (
                          <Image
                            priority={true}
                            src={item?.thumbnail}
                            width={500}
                            height={500}
                            alt=""
                            className="w-full h-full group-hover:scale-105 object-cover rounded-[10px]"
                          />
                        )}
                        <div className="text-white text-xl font-bold">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="w-full flex justify-center items-center">
                    <Empty className={""} />
                  </div>
                )}
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
                {checkIsMine ? (
                  <Link
                    href={"/user-profile/purchase-history"}
                    className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
                  >
                    View all
                    <div>
                      <Image
                        priority={true}
                        src={iconRight}
                        width={500}
                        height={500}
                        alt=""
                        className="w-[4px] h-[8px] mr-1"
                      />
                    </div>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
              {avatar?.length > 0 || cover?.length > 0 ? (
                <>
                  <div className="w-full flex gap-4 flex-wrap items-center justify-start">
                    {avatar?.length > 0 &&
                      avatar.map((item: any, index: number) => (
                        <div className="w-[94px] h-[94px]" key={index}>
                          {item?.item_info?.url && (
                            <Image
                              priority={true}
                              src={item.item_info.url}
                              width={500}
                              height={500}
                              alt=""
                              className="object-cover hover:scale-110 cursor-grabbing transition-all rounded-[10px] w-full h-full"
                            />
                          )}
                        </div>
                      ))}
                  </div>
                  <div className="w-full flex gap-8 my-3">
                    {cover?.length > 0 &&
                      cover.map((item: any, index: number) => (
                        <div className=" w-[204px] h-[94px] " key={index}>
                          {item?.item_info?.url && (
                            <Image
                              priority={true}
                              src={item.item_info.url}
                              width={500}
                              height={500}
                              alt=""
                              className="object-cover cursor-grabbing transition-all hover:scale-110 w-full h-full rounded-[10px]"
                            />
                          )}
                        </div>
                      ))}
                  </div>
                </>
              ) : (
                <div className="w-full flex justify-center items-center">
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

export default ActivitiesProfile;
