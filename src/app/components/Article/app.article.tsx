"use client";

import logoNew from "@/public/images/category-article/new-logo.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import PopularNew from "../../components/Popular/PopularNew/app.popular-new";
import CategoryArticle from "../Category/CategoryArticle/app.category-article";
import { allArticleImages } from "./images";

const CarouselArticle = dynamic(
  () => import("@/src/app/components/Carousel/app.carousel"),
  {
    ssr: false,
  }
);
const ArticleAll = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const items = [...allArticleImages];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full flex flex-col gap-[30px] px-[46px]">
      <CarouselArticle />
      <div className="flex flex-col justify-between gap-[30px]">
        <h1 className="font-lato font-bold text-[32px] leading-[44.6px] text-white">
          Trending News
        </h1>
        <div className="flex justify-evenly items-center w-full gap-4">
          <CategoryArticle itemsPerPage={2} />
        </div>
        <PopularNew></PopularNew>
        <div className="w-full flex gap-6 justify-start items-center">
          <div>
            <Image src={logoNew} alt="" className="" />
          </div>
          <button className="text-white font-lato text-[20px] leading-[28px]-[101px] h-[44px] px-[10px] py-[10px] bg-pink-700">
            All Article
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#89F8FF]/25 via-[#FFA5EB]/25 to-[#FFF59E]/25 p-2 rounded-[10px]"
            >
              <div>
                <Image
                  src={item.src}
                  alt=""
                  className="w-full h-[244px] object-cover rounded-[10px]"
                />
              </div>
              <div className="w-full flex flex-col">
                <h3 className="font-lato font-bold text-[24px] leading-[33.9px] text-white">
                  {item.title}
                </h3>
                <p className="font-nunito font-light text-xs text-white leading-[16.8px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default ArticleAll;
