"use client";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import Image from "next/image";
import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "../../Buttons/app.button";
import imageDefaul from "@/public/images/category-article/imageDefault.jpg";

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
      <div className="grid grid-cols-2 gap-4 w-full">
        {currentItems.map((article, index) => (
          <div
            key={index}
            className="col-span-1 h-[250px] max-h-full flex items-center bg-gradient-to-br from-[#89F8FF]/25 via-[#FFA5EB]/25 to-[#FFF59E]/25 p-1 rounded-[20px]  gap-4 border border-pink-700"
          >
            {article?.featured_image ? (
              <Image
                priority={true}
                src={article.featured_image}
                width={500}
                height={500}
                alt="gamePicture"
                className={`w-[40%] h-full rounded-[20px] object-cover`}
              />
            ) : (
              <Image
                priority={true}
                src={imageDefaul}
                width={500}
                height={500}
                alt="gamePicture"
                className={`w-[40%] h-full rounded-[20px] object-cover`}
              />
            )}

            <div className="w-[60%] overflow-hidden flex flex-col gap-[10px] justify-center items-start px-4">
              <Button className="w-[80px] h-[24px] px-[10px] py-[6px] rounded-[10px] bg-white font-nunito font-normal text-[10px]">
                Car Game
              </Button>
              <h3 className="w-full  truncate font-lato font-bold text-2xl leading-[33.6px] text-white ">
                {article.title}
              </h3>
              <p className="w-full break-words font-nunito font-light text-xs leading-[16.8px] text-white">
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
