"use client";
import { items } from "@/src/app/components/ItemsSimpleShop/images/images";
import Link from "next/link";
import { useState } from "react";
import ItemsSimpleShop from "../../components/ItemsSimpleShop/app.items-simple-shop";

const SimpleShopPageh1 = () => {
  // let type = ["Avatar", "Cover-page", "Playtimes"];
  const [itemsState, setItemsState] = useState<any>(items);
  const [filterType, setFilterType] = useState<string>("Avatar");
  const hadleShowAvatar = () => {
    setFilterType("Avatar");
  };
  const hadleShowCoverPage = () => {
    setFilterType("Cover-page");
  };
  const hadleShowPlaytimes = () => {
    setFilterType("Playtimes");
  };
  // console.log(filterType);

  const renderItems = itemsState.filter(
    (item: any) => filterType === item.type
  );
  // console.log(renderItems);

  return (
    <div className="bg-black/80 h-auto w-full rounded-[20px] border-[5px] border-violet-300">
      <Link
        href={"/"}
        className=" text-pink-500 font-lato font-bold text-sm mt-[21px] ml-[21px] block"
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
        Simple Shop
      </div>
      <div className="w-full p-[62px]">
        <div className="w-full flex gap-4 justify-center items-center">
          <button
            onClick={() => hadleShowAvatar()}
            className={`${
              filterType === "Avatar" ? "active" : ""
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap bg-violet-500 transition-all `}
          >
            Avatar
          </button>
          <button
            onClick={() => hadleShowCoverPage()}
            className={` ${
              filterType === "Cover-page" ? "active" : ""
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap bg-violet-500 transition-all `}
          >
            Cover Page
          </button>
          <button
            onClick={() => hadleShowPlaytimes()}
            className={`${
              filterType === "Playtimes" ? "active" : ""
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap bg-violet-500 transition-all `}
          >
            Paytimes
          </button>
        </div>
        <div className="w-full bg-[#5B21B6]/50 border-[4px] border-pink-300 rounded-[30px] px-[54px] pb-[60px]">
          <div className=" flex justify-end gap-4 mt-[18px] mr-[69px]">
            <div className="flex gap-1">
              <input type="radio" id="all" value={"all"} className="" />
              <label className="font-lato font-medium text-sm leading-[22.4px] text-white">
                All
              </label>
            </div>
            <div className="flex gap-1">
              <input type="radio" id="buy" value={"buy"} className="" />
              <label className="font-lato font-medium text-sm leading-[22.4px] text-white">
                Buy
              </label>
            </div>
            <div className="flex gap-1">
              <input type="radio" id="owned" value={"owned"} className="" />
              <label className="font-lato font-medium text-sm leading-[22.4px] text-white">
                Owned
              </label>
            </div>
          </div>
          <ItemsSimpleShop itemsPerPage={8} itemsRender={renderItems} />
        </div>
      </div>
    </div>
  );
};

export default SimpleShopPageh1;
