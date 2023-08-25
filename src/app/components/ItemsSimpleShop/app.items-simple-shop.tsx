"use client";
import price from "@/public/images/shops/price.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.

const ItemsSimpleShop = ({
  itemsRender,
  itemsPerPage,
}: {
  itemsRender: {
    name: string;
    type: string;
    price: number;
    src: StaticImageData;
    status: number;
  }[];
  itemsPerPage: number;
}) => {
  const items = [...itemsRender];

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
      <div className="flex justify-center items center flex-wrap gap-4  animate-translateFadeIn transition-all">
        {currentItems.map((item, inx) => (
          <div key={inx} className="mt-[27px]">
            <div className="p-[10px] bg-pink-900 rounded-[30px] border border-pink-400">
              <Image src={item?.src} alt="" className="rounded-[20px]" />
              <h3 className="font-lato font-bold text-base text-white mt-2">
                {item.name}
              </h3>
              <div className="flex justify-end items-center gap-2 mt-2">
                {item.price > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="font-nunito font-extrabold text-sm text-white">
                      {item.price === 0 ? "" : item.price}
                    </span>
                    <Image src={price} alt="" />
                  </div>
                )}

                <div
                  className={`w-[96px] h-[32px] flex justify-center items-center rounded-[30px] border border-violet-50  text-white ${
                    item.status === 1
                      ? "bg-[#350F1E]"
                      : "bg-violet-700 cursor-pointer"
                  }`}
                >
                  {item.status === 0 ? "Buy" : "Owned"}
                </div>
              </div>
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

export default ItemsSimpleShop;
