"use client";

import logoNew from "@/public/images/category-article/new-logo.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import PopularNew from "../../components/Popular/PopularNew/app.popular-new";
import { useAuthContext } from "../../context/AuthProvider";
import TrendingArticle from "../Trending/TrendingArticle/app.trend-article";
import imageDefaul from "@/public/images/category-article/imageDefault.jpg";
import ArticleItem from "./ArticleItem/app.article-item";

const CarouselArticle = dynamic(
  () => import("@/src/app/components/Carousel/app.carousel"),
  {
    ssr: false,
  }
);
const ArticleAll = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const { dataArticles } = useAuthContext();
  console.log("dataArticles", dataArticles);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataArticles?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataArticles?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % dataArticles?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full flex flex-col gap-[30px] pb-[100px]">
      <CarouselArticle limit={5} page={1} />
      <div className="flex flex-col justify-between gap-[30px]">
        <TrendingArticle limit={2} page={3}></TrendingArticle>
        <PopularNew limit={2} page={2} />
        <div className="w-full flex gap-6 justify-start items-center">
          <div>
            <Image priority={true} src={logoNew} alt="" className="" />
          </div>
          <button className="text-white font-lato text-[20px] leading-[28px] h-[44px] px-[10px] py-[10px] bg-pink-700">
            All Article
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {currentItems.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#89F8FF]/25 via-[#FFA5EB]/25 to-[#FFF59E]/25 p-2 rounded-[10px]"
            >
              <ArticleItem article={item} className=""></ArticleItem>
            </div>
          ))}
        </div>

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
  );
};

export default ArticleAll;
