"use client";
import React, { useEffect, useMemo, useState } from "react";

import avatar2 from "@/public/images/hall-of-fame/avatar2.png";
import gold from "@/public/images/hall-of-fame/gold.png";
import bronze from "@/public/images/hall-of-fame/bronze.png";
import silver from "@/public/images/hall-of-fame/silver.png";
import playstreakLeft from "@/public/images/hall-of-fame/playstreak-left.png";
import playstreakRight from "@/public/images/hall-of-fame/playstreak-right.png";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const TopPlaysteak = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const [topThreePlaystreak, setTopThreePlaystreak] = useState<Array<any>>([]);
  const [isReverse, setIsReverse] = useState(false);
  const { topPlaystreak } = useAuthContext();
  const [listPlaystreakFilter, setListPlaystreakFilter] = useState<Array<any>>(
    []
  );

  const ranks = [1, 0, 2];
  const listFilter: Array<any> = useMemo(
    () => topPlaystreak?.filter((e: any) => ![1, 2, 3].includes(e?.rank)),
    [topPlaystreak]
  );
  useEffect(() => {
    setTopThreePlaystreak(topPlaystreak.slice(0, 3));
    setListPlaystreakFilter(listFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topPlaystreak]);

  const handleReverseItems = () => {
    setIsReverse((prev) => !prev);
    let itemsReverse: Array<any> = [];
    itemsReverse = listFilter.reverse();

    setListPlaystreakFilter(itemsReverse);
  };
  const items = [...listPlaystreakFilter];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      {/* Playsteak */}
      <div className="flex gap-[30px] justify-center py-[50px] px-[60px] animate-translateFadeIn transition-all">
        {ranks.map((e: any, i: number) => (
          <div key={i}>
            <Item data={topThreePlaystreak[e]} places={+e + 1} />
          </div>
        ))}
      </div>
      <div className="w-full mx-auto underline max-w-[1000px]">
        <header>
          <div className="flex justify-between items-center font-lato font-medium text-base leading-[25.6px] text-pink-400">
            <div className="w-full flex justify-between relative mb-5 px-[66px] max-[551px]:px-1 max-[660px]:px-5 max-[1210px]:px-6">
              <span className="text-base text-pink-400 font-medium">Place</span>
              <span className="text-base text-pink-400 font-medium absolute left-1/2 -translate-x-1/2">
                Username
              </span>
              <button
                onClick={() => handleReverseItems()}
                className="flex items-center gap-2"
              >
                {isReverse ? <AiFillCaretUp /> : <AiFillCaretDown />}
                <span>Playsteak</span>
              </button>
            </div>
          </div>
        </header>
        <section>
          <div className="flex flex-col gap-[6px]">
            {currentItems.map((item, index) => (
              <Link
                href={`/user/achievements/${item?.user?.username}`}
                key={index}
              >
                <div className="bg-[#83184380] w-full relative flex justify-between rounded-[10px] py-[15px] px-20 max-[551px]:px-1 max-[660px]:px-5 max-[1210px]:px-6 text-white">
                  <span className="max-w-[52px] w-full">{item?.rank}</span>
                  <span className="px-3 hover:underline-offset-1 hover:underline hover:text-pink-500 text-center text-ellipsis whitespace-nowrap overflow-hidden w-full absolute left-1/2 -translate-x-1/2 max-[550px]:max-w-[120px] max-[660px]:max-w-[200px] max-[1320px]:max-w-[250px] min-[1320px]:max-w-[500px]">
                    {item?.user?.username}
                  </span>
                  <span className="text-right">
                    {parseFloat(item?.user?.highest_playstreak)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
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
    </>
  );
};

export default TopPlaysteak;
const MEDAL_BASE_PLACES: any = { 1: gold, 2: silver, 3: bronze };
const Item = ({ data, places }: { data: any; places: any }) => {
  const placeStyle = useMemo(
    () => ([2, 3].includes(places) ? "mt-16" : ""),
    [places]
  );
  return (
    <div
      className={`relative flex flex-col-reverse gap-[10px] bg-black-300/80 w-[233px] h-[314px] ${placeStyle}`}
    >
      <div className="w-full absolute top-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-4 z-10">
        <Link
          href={`/user/achievements/${data?.user?.username}`}
          className="flex flex-col gap-2 justify-center items-center"
        >
          {data?.user?.avatar?.url ? (
            <Image
              priority={true}
              src={data?.user?.avatar?.url}
              width={500}
              height={500}
              alt=""
              className="w-[94px] h-[94px] rounded-[10px] object-cover"
            />
          ) : (
            <Image
              priority={true}
              src={avatar2}
              width={500}
              height={500}
              alt=""
              className="w-[94px] h-[94px] rounded-[10px] object-cover"
            />
          )}
          <h3 className=" font-lato font-medium text-base leading-[25.6px] text-white">
            {data?.user?.username ? data?.user?.username : ""}
          </h3>
        </Link>
        <div className="w-[40px] h-[45px]">
          <Image
            priority={true}
            src={MEDAL_BASE_PLACES[places]}
            width={500}
            height={500}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex gap-1 items-center justify-center">
          <div>
            <Image
              priority={true}
              src={playstreakLeft}
              width={500}
              height={500}
              alt=""
              className="w-[25px] h-[56px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-nunito font-bold text-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#6165f0] via-[#b5a5f7] to-[#EF36C6]">
              {data?.user?.highest_playstreak
                ? parseFloat(data?.user?.highest_playstreak)
                : 0}
            </span>
          </div>

          <div>
            <Image
              priority={true}
              src={playstreakRight}
              width={500}
              height={500}
              alt=""
              className="w-[25px] h-[56px] object-cover"
            />
          </div>
        </div>
        <p className="font-lato font-medium text-sm text-white">playstreak</p>
      </div>
      <div className=" w-full h-[133px] bg-gradient-to-b from-[#742856] to-transparent shadow-[rgb(0,0,0,0.4)_0.5px_0.5px_1px_0px_inset] relative">
        <div className="absolute w-full h-[35px] bg-gradient-to-b from-[#C74488] to-[#963C6B]/50 top-[-35px] border-b-[35px] border-l-[20px] border-r-[20px] border-l-black border-r-black border-b-[#C74488]"></div>
      </div>
    </div>
  );
};
