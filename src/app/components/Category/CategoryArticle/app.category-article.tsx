"use client";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import Image from "next/image";
import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "../../Buttons/app.button";

const CategoryArticle = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const { dataArticles } = useAuthContext();
  // console.log(dataArticles);

  const items = [...dataArticles];
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
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="flex flex-wrap gap-4 w-full">
        {currentItems.map((article, index) => (
          <div
            key={index}
            className="w-[49%] max-w-full h-[250px] max-h-full flex items-center bg-gradient-to-br from-[#89F8FF]/25 via-[#FFA5EB]/25 to-[#FFF59E]/25 p-1 rounded-[20px] col-span-5 row-span-1 gap-4 border border-pink-700"
          >
            <Image
              src={article.featured_image}
              width={500}
              height={500}
              alt="gamePicture"
              className={`w-[40%] h-full rounded-[20px] object-cover`}
            />
            <div className="flex flex-col gap-[10px] justify-center items-start">
              <Button className="w-[80px] h-[24px] px-[10px] py-[6px] rounded-[10px] bg-white font-nunito font-normal text-[10px]">
                Car Game
              </Button>
              <h3 className="font-lato font-bold text-2xl leading-[33.6px] text-white">
                {article.title}
              </h3>
              <p className="font-nunito font-light text-xs leading-[16.8px] text-white">
                {article.seo_description}
              </p>
              <span className="font-nunito font-light text-xs leading-[16.8px] text-white">
                {article.created_at}
              </span>
            </div>
          </div>
        ))}
      </div>
      {itemsPerPage > 2 && (
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
    </>
  );
};

export default memo(CategoryArticle);
