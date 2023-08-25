"use client";
import Image from "next/image";
import Button from "../../Buttons/app.button";
import { imagesCategory } from "./images";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const CategoryArticle = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const items = [...imagesCategory];

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
      <div className="w-full grid grid-cols-11 grid-flow-dense gap-4">
        {currentItems.map((image, index) => (
          <div
            key={index}
            className="flex items-center bg-gradient-to-br from-[#89F8FF]/25 via-[#FFA5EB]/25 to-[#FFF59E]/25 p-1 rounded-[10px] col-span-5 row-span-1 gap-4"
          >
            <Image
              src={image.src}
              alt="gamePicture"
              className={`w-[40%] rounded-tl-[10px] rounded-[10px] object-cover`}
            />
            <div className="flex flex-col gap-[10px] justify-center items-start">
              <Button className="w-[80px] h-[24px] px-[10px] py-[6px] rounded-[10px] bg-white font-nunito font-normal text-[10px]">
                Car Game
              </Button>
              <h3 className="font-lato font-bold text-2xl leading-[33.6px] text-white">
                The unseen of spending three years at Pixelgrade
              </h3>
              <p className="font-nunito font-light text-xs leading-[16.8px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
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
    </>
  );
};

export default CategoryArticle;
