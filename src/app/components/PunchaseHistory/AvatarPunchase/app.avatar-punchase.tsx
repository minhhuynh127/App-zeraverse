"use client";
import Image from "next/image";
import React, { useState } from "react";
import priceImage from "@/public/images/shops/price.png";

import { purchaseHistoryAvatar } from "../images";
import ReactPaginate from "react-paginate";
import { getBetweenTwoDate } from "@/src/app/utils/helper";

const AvatarPunchase = ({
  data,
  itemsPerPage,
}: {
  data: Array<any>[];
  itemsPerPage: number;
}) => {
  console.log("dataprops", data);
  // const items = [...data];
  // console.log("item", items);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-nunito font-bold text-2xl text-white">Avatar</h3>
      </div>
      <div className="w-full flex gap-4 items-center justify-start flex-wrap">
        {currentItems?.map((item: any, index: number) => (
          <div
            className="flex justify-between items-center gap-4 pr-[80px]"
            key={index}
          >
            <div className="w-[94px] h-[94px]">
              <Image
                priority={true}
                src={item?.item_info.url}
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <span className="text-white font-nunito font-black text-[22px]">
                  {item?.item_info.price}
                </span>
                <div>
                  <Image priority={true} src={priceImage} alt="" />
                </div>
              </div>
              <div className="text-white text-base font-bold">
                {getBetweenTwoDate(item?.created_at)}
              </div>
              <p className="font-nunito font-normal text-white italic text-[8px] whitespace-normal">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      {itemsPerPage > 8 && (
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
  );
};

export default AvatarPunchase;
