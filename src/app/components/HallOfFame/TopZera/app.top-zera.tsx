"use client";
import React, { useState } from "react";

import avatar1 from "@/public/images/hall-of-fame/avatar1.png";
import avatar2 from "@/public/images/hall-of-fame/avatar2.png";
import avatar3 from "@/public/images/hall-of-fame/avatar3.png";
import gold from "@/public/images/hall-of-fame/gold.png";
import bronze from "@/public/images/hall-of-fame/bronze.png";
import silvar from "@/public/images/hall-of-fame/silver.png";
import zeraCoin from "@/public/images/hall-of-fame/zera-coin.png";
import Image from "next/image";
import { dataFecth } from "../dataFecth";
import ReactPaginate from "react-paginate";
const TopZera = ({
  ItemsRender,
  itemsPerPage,
}: {
  ItemsRender: { id: number; name: string; zeraCoin: number; status: string }[];
  itemsPerPage: number;
}) => {
  const items = [...ItemsRender];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* Zera */}
      <div className="flex gap-[30px] justify-center py-[50px] px-[60px] animate-translateFadeIn transition-all">
        <div className="relative flex flex-col-reverse gap-[10px] bg-black-300/80 w-[233px] h-[314px] mt-16">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-4 z-10">
            <div>
              <Image src={avatar1} alt="" />
            </div>
            <h3 className=" font-lato font-medium text-base leading-[25.6px] text-white">
              Hugn000
            </h3>
            <div>
              <Image src={silvar} alt="" />
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src={zeraCoin}
                  alt=""
                  className="w-[29px] h-[29px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="font-lato font-bold text-[28px] text-white">
                  10000
                </span>
                <p className="font-lato font-medium text-sm text-white">zera</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[133px] bg-gradient-to-b from-[#742856] to-transparent shadow-[rgb(0,0,0,0.4)_0.5px_0.5px_1px_0px_inset] relative">
            <div className="absolute w-full h-[35px] bg-gradient-to-b from-[#C74488] to-[#963C6B]/50 top-[-35px] border-b-[35px] border-l-[15px] border-r-[15px] border-l-black border-r-black border-b-[#C74488]"></div>
          </div>
        </div>
        <div className="relative flex flex-col-reverse gap-[10px] bg-black-300/80 w-[233px] h-[314px]">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-4 z-10">
            <Image src={avatar2} alt="" />
            <h3 className=" font-lato font-medium text-base leading-[25.6px] text-white">
              Hugn000
            </h3>
            <Image src={gold} alt="" />
            <div className="flex gap-4 items-center">
              <Image
                src={zeraCoin}
                alt=""
                className="w-[29px] h-[29px] object-cover"
              />
              <div className="flex flex-col justify-center items-center">
                <span className="font-lato font-bold text-[28px] text-white">
                  10000
                </span>
                <p className="font-lato font-medium text-sm text-white">zera</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[133px] bg-gradient-to-b from-[#742856] to-transparent shadow-[rgb(0,0,0,0.4)_0.5px_0.5px_1px_0px_inset] relative">
            <div className="absolute w-full h-[35px] bg-gradient-to-b from-[#C74488] to-[#963C6B]/50 top-[-35px] border-b-[35px] border-l-[15px] border-r-[15px] border-l-black border-r-black border-b-[#C74488]"></div>
          </div>
        </div>
        <div className="relative flex flex-col-reverse gap-[10px] bg-black-300/80 w-[233px] h-[314px] mt-16">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-4 z-10">
            <div>
              <Image src={avatar3} alt="" />
            </div>
            <h3 className=" font-lato font-medium text-base leading-[25.6px] text-white">
              Hugn000
            </h3>
            <div>
              <Image src={bronze} alt="" />
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src={zeraCoin}
                  alt=""
                  className="w-[29px] h-[29px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="font-lato font-bold text-[28px] text-white">
                  10000
                </span>
                <p className="font-lato font-medium text-sm text-white">zera</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[133px] bg-gradient-to-b from-[#742856] to-transparent shadow-[rgb(0,0,0,0.4)_0.5px_0.5px_1px_0px_inset] relative">
            <div className="absolute w-full h-[35px] bg-gradient-to-b from-[#C74488] to-[#963C6B]/50 top-[-35px] border-b-[35px] border-l-[15px] border-r-[15px] border-l-black border-r-black border-b-[#C74488]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-cente font-lato font-medium text-base leading-[25.6px] text-pink-400 px-[68px]">
          <h3>Place</h3>
          <h3>Username</h3>
          <h3>ZERA</h3>
        </div>
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center font-lato font-medium text-base leading-[25.6px] text-white px-[68px] w-full h-[55px] bg-[#831843]/50 rounded-[10px]"
          >
            <h3>{index + 1}</h3>
            <h3>{item.name}</h3>
            <span>{item.zeraCoin}</span>
          </div>
        ))}
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
      </div>
    </>
  );
};

export default TopZera;
