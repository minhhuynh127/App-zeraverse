"use client";
import left from "@/public/images/achievements/Left.png";
import right from "@/public/images/achievements/Right.png";
import iconCoin from "@/public/images/achievements/icon-coin.png";
import totalGamePlayed from "@/public/images/achievements/total-games-played.png";
import zeraCoin from "@/public/images/achievements/zera-coin.png";

import Empty from "@/src/app/components/Empty/app.empty";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import { getAchievementsByUsername } from "@/src/app/services/user-service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const AchievementsByUserNamePage = ({
  params,
}: {
  params: { username: string };
}) => {
  const [achievermentsUser, setAchievermentsUser] = useState<any>();
  const getAchieverments = () => {
    getAchievementsByUsername(params?.username).then((response) => {
      setAchievermentsUser(response?.data);
    });
  };

  useEffect(() => {
    getAchieverments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.username]);
  const { user_info, played_game, total_earned_zera, play_streak } =
    achievermentsUser || {};
  // const items = [...played_game?.rows];

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 4;
  const currentItems = played_game?.rows?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(played_game?.rows?.length / 4);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 4) % played_game?.rows?.length;

    setItemOffset(newOffset);
  };
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
        <div className="w-full h-full bg-gradient-to-b from-[#4005a0]/90 to-[#3b023c]/90 rounded-[30px] px-[110px] py-[64px] flex flex-col justify-center items-center gap-20">
          <div className="w-full max-w-[204px] h-full max-[991px]:mx-auto">
            <Link
              href={`/${user_info?.username}`}
              className="w-full h-full relative group transition-all"
            >
              {user_info?.avatar?.url && (
                <Image
                  src={user_info?.avatar?.url}
                  width={500}
                  height={500}
                  alt=""
                  className="w-[204px] h-[204px] object-cover rounded-[20px]"
                />
              )}
              <div className="absolute w-full h-full inset-0 rounded-[20px] bg-black/50 hidden animate-opacity transition-all group-hover:block"></div>
            </Link>
            <h2 className="text-center font-bold text-base mt-2 text-white">
              {user_info?.username ?? user_info?.username}
            </h2>
            <p className="text-[13px] text-center text-white">
              {user_info?.quote ?? user_info?.quote}{" "}
            </p>
          </div>
          <div className="flex gap-[25px] justify-center items-center">
            <div className="w-[204px] h-[314px] flex flex-col justify-between items-center px-[13px] py-[22px] bg-gradient-to-b from-[#D34880]  to-[#2F0652] rounded-[30px] border-[1px] border-pink-500">
              <div className="flex flex-col justify-between items-center gap-4 w-full mb-[60px]">
                <div>
                  <Image
                    priority={true}
                    src={zeraCoin}
                    alt=""
                    className="w-[128px] h-[118px]"
                  />
                </div>
                <span className="text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#979BFF] via-[#C4B5FD] to-[#EF36C6]">
                  {total_earned_zera ? parseInt(total_earned_zera) : 0}
                </span>
              </div>
              <span className="font-lato font-bold text-base text-white leading-[25.6px]">
                Earned Zera
              </span>
            </div>

            <div className="w-[204px] h-[314px] flex flex-col justify-between items-center border-[1px] border-pink-500 gap-[55px] px-[13px] pt-[22px] pb-[8px] bg-gradient-to-b from-[#D34880]  to-[#2F0652] rounded-[30px]">
              <div className="flex flex-col justify-center items-center gap-[10px] w-full">
                <div className="w-full flex justify-between items-center relative">
                  <Image src={left} alt="" />
                  <span className="absolute left-[50%] translate-x-[-50%] font-nunito font-bold text-[90px] text-transparent bg-clip-text bg-gradient-to-b from-[#979BFF] via-[#C4B5FD] to-[#EF36C6] ">
                    {user_info?.highest_playstreak
                      ? user_info?.highest_playstreak
                      : 1}
                  </span>
                  <Image src={right} alt="" />
                </div>
              </div>
              <div>
                <span className="font-lato font-bold text-base text-white leading-[25.6px]">
                  Highest Playstreak
                </span>
                <p className="font-lato font-normal text-[10px] text-white leading-[16px] text-center">
                  Playstreak: {play_streak ? play_streak : 1} days
                </p>
              </div>
            </div>

            <div className="w-[204px] h-[314px] flex flex-col justify-between items-center px-[13px] py-[22px] bg-gradient-to-b from-[#D34880]  to-[#2F0652] rounded-[30px] border-[1px] border-pink-500">
              <div className="flex flex-col justify-center items-center gap-4 w-full mb-[60px]">
                <Image
                  priority={true}
                  src={totalGamePlayed}
                  width={500}
                  height={500}
                  alt=""
                  className="w-[128px] h-[118px]"
                />
                <span className="text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#979BFF] via-[#C4B5FD] to-[#EF36C6]">
                  {played_game?.count ? played_game?.count : 0}
                </span>
              </div>
              <span className="font-lato font-bold text-base text-white leading-[25.6px]">
                Total games played
              </span>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-lato font-semibold text-[28px] text-white leading-[39.2px] text-center">
              Top game played
            </h3>
            {currentItems?.length > 0 ? (
              <div className="w-full grid grid-cols-2 gap-6 mt-4">
                {currentItems?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className=" flex gap-10 p-[10px] bg-gradient-to-b from-[#8B5CF6] to-[#503098] rounded-[20px]"
                  >
                    <div className="flex flex-1 gap-4 items-center ">
                      <div>
                        {item?.game_detail?.thumbnail && (
                          <Image
                            priority={true}
                            src={item?.game_detail?.thumbnail}
                            width={500}
                            height={500}
                            alt=""
                            className="rounded-[10px] w-[94px] h-[94px]"
                          />
                        )}
                      </div>
                      <span className="font-lato font-bold text-base leading-[25.6px] text-white">
                        {item?.game_detail?.title
                          ? item?.game_detail?.title
                          : ""}
                      </span>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="font-lato font-bold text-base leading-[25.6px] text-white">
                        {item?.zera_earned ? item?.zera_earned : 0}
                      </span>
                      <div>
                        <Image priority={true} src={iconCoin} alt=""></Image>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Empty className={""} />
            )}

            {currentItems?.length > 0 && (
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={7}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="flex justify-center items-center gap-[32px] text-white font-nunito font-bold text-sm mt-10"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                nextClassName="w-[8px] h-[14px]"
                nextLinkClassName="w-[24px] h-[24px]  rounded-[5px] bg-violet-900 shadow-[#8052C7_-3px_-3px_3px_0px_inset] px-2 py-1"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="text-pink-400"
                previousClassName="w-[8px] h-[14px]"
                previousLinkClassName="w-[24px] h-[24px]  rounded-[5px] bg-violet-900 shadow-[#8052C7_-3px_-3px_3px_0px_inset] px-2 py-1 "
                disabledLinkClassName="disabled:opacity-70 cursor-default"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsByUserNamePage;
