"use client";
// import { items } from "@/src/app/components/ItemsSimpleShop/images/images";
import price from "@/public/images/shops/price.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AvatarShop from "../../components/ItemsSimpleShop/AvatarShop/app.avatar-shop";
import CoverShop from "../../components/ItemsSimpleShop/CoverShop/app.cover-shop";
import PlaytimesShop from "../../components/ItemsSimpleShop/PlaytimesShop/app.playtime-shop";
import { useAuthContext } from "../../context/AuthProvider";
import { getAllItemByShop } from "../../services/shop.service";

const SimpleShopPageh1 = () => {
  const { token, logOut, userInfo } = useAuthContext();
  const [filterCategoryId, setfilterCategoryId] = useState<number>(1);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [dataCoverShop, setDataCoverShop] = useState<Array<any>>([]);
  const [dataPlaytimesShop, setDataPlaytimesShop] = useState<Array<any>>([]);
  const [dataAvatarShop, setDataAvatarShop] = useState<Array<any>>([]);
  const getAllAvatarShop = async (param: number) => {
    const res = await getAllItemByShop(param, token);
    setDataAvatarShop(res?.data?.rows);
  };
  const getAllCoverShop = async (param: number) => {
    const res = await getAllItemByShop(param, token);
    setDataCoverShop(res?.data?.rows);
  };
  const getAllPlaytimesShop = async (param: number) => {
    const res = await getAllItemByShop(param, token);
    setDataPlaytimesShop(res?.data?.rows);
  };
  useEffect(() => {
    if (token && userInfo) {
      getAllAvatarShop(1);
      getAllCoverShop(2);
      getAllPlaytimesShop(3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userInfo]);
  const hadleShowAvatar = () => {
    setfilterCategoryId(1);
  };
  const hadleShowCoverPage = () => {
    setfilterCategoryId(2);
  };
  const hadleShowPlaytimes = () => {
    setfilterCategoryId(3);
  };

  return (
    <div className="bg-black/80 min-h-[1000px] w-full rounded-[20px] border-[5px] border-violet-300">
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
              filterCategoryId === 1 ? "active" : ""
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap bg-violet-500 transition-all `}
          >
            Avatar
          </button>
          <button
            onClick={() => hadleShowCoverPage()}
            className={` ${
              filterCategoryId === 2 ? "active" : ""
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap bg-violet-500 transition-all `}
          >
            Cover Page
          </button>
          <button
            onClick={() => hadleShowPlaytimes()}
            className={`${
              filterCategoryId === 3 ? "active" : ""
            } w-[150px] h-[48px] py-[10px] px-[37px] font-lato font-bold text-base text-white rounded-tl-[20px] rounded-tr-[20px] text-center whitespace-nowrap bg-violet-500 transition-all `}
          >
            Paytimes
          </button>
        </div>
        <div className="w-full bg-[#5B21B6]/50 border-[4px] border-pink-300 rounded-[30px] px-[54px] pb-[60px]">
          <div className=" flex justify-between items-center gap-4 mt-[18px] mr-[69px]">
            <div className="text-white font-bold text-3xl flex items-center gap-2">
              <span>{userInfo?.zera}</span>
              <div>
                <Image
                  priority={true}
                  src={price}
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="all"
                  name="filter"
                  value="All"
                  className=""
                  onChange={(e) => setFilterStatus(e.target.value)}
                />
                <label className="font-lato font-medium text-sm leading-[22.4px] text-white">
                  All
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="buy"
                  name="filter"
                  value="Buy"
                  className=""
                  onChange={(e) => setFilterStatus(e.target.value)}
                />
                <label className="font-lato font-medium text-sm leading-[22.4px] text-white">
                  Buy
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="owned"
                  name="filter"
                  value="Owned"
                  className=""
                  onChange={(e) => setFilterStatus(e.target.value)}
                />
                <label className="font-lato font-medium text-sm leading-[22.4px] text-white">
                  Owned
                </label>
              </div>
            </div>
          </div>
          <>
            {filterCategoryId === 1 ? (
              <AvatarShop
                filterStatus={filterStatus}
                data={dataAvatarShop}
                itemsPerPage={8}
              ></AvatarShop>
            ) : (
              <></>
            )}
            {filterCategoryId === 2 ? (
              <CoverShop
                filterStatus={filterStatus}
                data={dataCoverShop}
                itemsPerPage={4}
              ></CoverShop>
            ) : (
              <></>
            )}
            {filterCategoryId === 3 ? (
              <PlaytimesShop
                filterStatus={filterStatus}
                data={dataPlaytimesShop}
                itemsPerPage={8}
              ></PlaytimesShop>
            ) : (
              <></>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default SimpleShopPageh1;
