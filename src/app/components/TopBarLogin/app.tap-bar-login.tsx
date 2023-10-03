import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import { getAllItemByShop } from "../../services/shop.service";
import ModalBuy from "../ModalBuyAvatar/app.modal-buy";
const TopBarLogin = () => {
  const { userInfo, token } = useAuthContext();
  const [itemShops, setItemShops] = useState<Array<any>>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idAvatarDetail, setIdAvatarDetail] = useState<number>();
  const [zera, setZera] = useState<number>();
  const handleModalBuyAvatarShop = async (id: number) => {
    setIsOpenModal(!isOpenModal);
    setIdAvatarDetail(id);
  };
  const getItemAvatarShop = async (param: number) => {
    const res = await getAllItemByShop(param, token);
    setItemShops(res?.data?.rows);
  };
  useEffect(() => {
    if (token && userInfo) {
      getItemAvatarShop(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setZera(userInfo?.zera);
  }, [userInfo?.zera]);
  return (
    <div className="bg-top-bar object-cover w-[204px] h-[340px] max-h-full  rounded-[20px] flex flex-col items-center py-[16.38px] box-border ">
      <div className="flex gap-2 ">
        <h3
          className="font-nutito font-black
         text-[#FFFFFF] text-base leading-[21px]"
        >
          {userInfo?.zera}
        </h3>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3781 11.4913C22.4452 5.27274 17.837 0.179766 12.0855 0.115835C6.33406 0.0519054 1.61719 5.04123 1.55013 11.2598C1.48307 17.4784 6.09122 22.5714 11.8427 22.6353C17.5942 22.6992 22.3111 17.7099 22.3781 11.4913Z"
            fill="#AB29CC"
          />
          <path
            d="M19.6221 11.4899C19.6783 6.29166 15.8256 2.03425 11.0169 1.98067C6.20816 1.9271 2.26437 6.09764 2.20818 11.2958C2.15199 16.494 6.00468 20.7514 10.8134 20.805C15.6221 20.8586 19.5659 16.6881 19.6221 11.4899Z"
            fill="#B522E9"
          />
          <path
            d="M7.30756 21.9622C1.91751 19.8146 -0.841937 13.3339 1.14444 7.50727C3.13618 1.68062 9.13825 -1.31718 14.5229 0.824885C19.913 2.96695 22.6778 9.45312 20.6861 15.2798C18.6943 21.1064 12.6922 24.1042 7.30756 21.9622ZM13.9324 2.55817C9.42815 0.764932 4.40853 3.27219 2.74964 8.14499C1.08538 13.0178 3.39924 18.4411 7.90347 20.2289C12.4023 22.0221 17.422 19.5148 19.0862 14.6421C20.7451 9.76925 18.4366 4.34595 13.9324 2.55817Z"
            fill="#F761D6"
          />
          <path
            d="M1.74035 7.74131C3.69451 2.02367 9.50868 -0.968682 14.8182 0.944464C14.7216 0.900859 14.6196 0.862706 14.5229 0.819102C9.13825 -1.31752 3.13618 1.68029 1.14444 7.50694C-0.841937 13.3336 1.91751 19.8143 7.30756 21.9618C7.40956 22 7.5062 22.0381 7.6082 22.0763C2.41679 19.8143 -0.213814 13.4589 1.74035 7.74131Z"
            fill="#F579F8"
          />
          <path
            d="M13.9326 2.55807C13.8467 2.52537 13.7554 2.49266 13.6695 2.45996C18.002 4.3513 20.1924 9.66015 18.5603 14.4348C16.9336 19.2095 12.0751 21.7113 7.64062 20.1198C7.72652 20.1579 7.81242 20.1961 7.89832 20.2288C12.4026 22.022 17.4222 19.5148 19.0864 14.642C20.7453 9.76916 18.4368 4.34586 13.9326 2.55807Z"
            fill="#CE11B0"
          />
          <path
            d="M8.08605 16.9081C7.70012 16.9081 7.38035 16.8306 7.12674 16.6756C6.88416 16.5207 6.71876 16.314 6.63055 16.0557C6.54234 15.7871 6.54234 15.4978 6.63055 15.1879C6.71876 14.8676 6.9007 14.5473 7.17636 14.227L12.8826 7.51666V8.32253H7.85449C7.42446 8.32253 7.09918 8.22438 6.87865 8.02808C6.65812 7.82145 6.54785 7.527 6.54785 7.14473C6.54785 6.76246 6.65812 6.47317 6.87865 6.27687C7.09918 6.08057 7.42446 5.98242 7.85449 5.98242H14.305C14.6909 5.98242 15.0052 6.05991 15.2477 6.21488C15.5014 6.36986 15.6723 6.57649 15.7605 6.83478C15.8487 7.09307 15.8487 7.38235 15.7605 7.70263C15.6723 8.02291 15.4903 8.34319 15.2147 8.66347L9.50846 15.3738V14.568H14.8012C15.2202 14.568 15.5399 14.6661 15.7605 14.8624C15.992 15.0587 16.1078 15.348 16.1078 15.7303C16.1078 16.1126 15.992 16.407 15.7605 16.6136C15.5399 16.8099 15.2202 16.9081 14.8012 16.9081H8.08605Z"
            fill="#8711A5"
          />
          <path
            d="M7.40343 16.2255C7.0175 16.2255 6.69773 16.148 6.44412 15.993C6.20154 15.838 6.03614 15.6314 5.94793 15.3731C5.85972 15.1045 5.85972 14.8152 5.94793 14.5053C6.03614 14.185 6.21808 13.8647 6.49374 13.5444L12.1999 6.83405V7.63991H7.17187C6.74184 7.63991 6.41656 7.54176 6.19603 7.34546C5.9755 7.13883 5.86523 6.84438 5.86523 6.46211C5.86523 6.07984 5.9755 5.79056 6.19603 5.59426C6.41656 5.39795 6.74184 5.2998 7.17187 5.2998H13.6224C14.0083 5.2998 14.3225 5.37729 14.5651 5.53227C14.8187 5.68724 14.9896 5.89387 15.0779 6.15216C15.1661 6.41045 15.1661 6.69974 15.0779 7.02002C14.9896 7.3403 14.8077 7.66058 14.532 7.98085L8.82584 14.6912V13.8854H14.1186C14.5376 13.8854 14.8573 13.9835 15.0779 14.1798C15.3094 14.3761 15.4252 14.6654 15.4252 15.0477C15.4252 15.4299 15.3094 15.7244 15.0779 15.931C14.8573 16.1273 14.5376 16.2255 14.1186 16.2255H7.40343Z"
            fill="#F761D6"
          />
        </svg>
      </div>
      <span className="w-[80%] h-[1.5px] bg-[#8657FF] mt-[10px]"></span>
      <div className="h-[200px]  overflow-y-scroll item-shop-scrollbar grid grid-cols-2 gap-2 mt-[10px] px-2">
        {itemShops?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="w-[80px] h-[80px] relative group transition-all">
              {item?.url && (
                <Image
                  priority={true}
                  src={item?.url}
                  width={500}
                  height={500}
                  alt=""
                  className="w-full h-full rounded-[10px] "
                />
              )}
              <div
                onClick={() => handleModalBuyAvatarShop(item?.id)}
                className="w-full h-full absolute animate-opacity hidden inset-0 bg-black/40 group-hover:flex justify-center items-center transition-all cursor-pointer"
              >
                <span className="w-[60px] py-[6px] text-[10px] font-bold bg-pink-800 rounded-[10px] shadow-sm shadow-[#9D174D] text-white/80 flex justify-center items-center">
                  Buy now
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-white">{item?.price}</span>

              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9846 7.32094C12.0191 4.13113 9.65491 1.51863 6.7041 1.48575C3.75329 1.45287 1.33324 4.01207 1.29876 7.20188C1.26428 10.3917 3.62843 13.0042 6.57924 13.0371C9.53005 13.0699 11.9501 10.5107 11.9846 7.32094Z"
                  fill="#B522E9"
                />
                <path
                  d="M4.42737 13.7473C1.11984 12.4295 -0.573463 8.45274 0.64545 4.87729C1.86766 1.30185 5.55075 -0.537721 8.85499 0.776732C12.1625 2.09119 13.8591 6.07134 12.6369 9.64678C11.4147 13.2222 7.73161 15.0618 4.42737 13.7473ZM8.49261 1.84034C5.72864 0.739943 2.64842 2.27849 1.63046 5.26862C0.609212 8.25875 2.02908 11.5867 4.79305 12.6837C7.55372 13.7841 10.6339 12.2456 11.6552 9.25546C12.6732 6.26533 11.2566 2.93739 8.49261 1.84034Z"
                  fill="#F761D6"
                />
                <path
                  d="M1.01112 5.02075C2.21027 1.5122 5.77806 -0.324022 9.03618 0.849955C8.97688 0.823198 8.91429 0.799785 8.85499 0.773028C5.55075 -0.538081 1.86766 1.30149 0.64545 4.87693C-0.573463 8.45238 1.11984 12.4292 4.42737 13.747C4.48997 13.7704 4.54926 13.7938 4.61186 13.8172C1.42621 12.4292 -0.188023 8.5293 1.01112 5.02075Z"
                  fill="#F579F8"
                />
                <path
                  d="M8.49282 1.83999C8.44011 1.81992 8.38411 1.79985 8.3314 1.77979C10.9899 2.94038 12.334 6.19809 11.3326 9.12801C10.3344 12.0579 7.35298 13.5931 4.63184 12.6165C4.68455 12.6399 4.73726 12.6633 4.78997 12.6834C7.55393 13.7838 10.6342 12.2452 11.6554 9.25511C12.6734 6.26498 11.2568 2.93704 8.49282 1.83999Z"
                  fill="#CE11B0"
                />
                <path
                  d="M4.90483 10.6458C4.66801 10.6458 4.47179 10.5983 4.31617 10.5032C4.16731 10.4081 4.06581 10.2813 4.01168 10.1228C3.95755 9.95793 3.95755 9.78041 4.01168 9.59021C4.06581 9.39368 4.17746 9.19714 4.34661 9.00061L7.84815 4.88287V5.37738H4.76274C4.49885 5.37738 4.29925 5.31715 4.16393 5.1967C4.0286 5.0699 3.96094 4.88921 3.96094 4.65464C3.96094 4.42007 4.0286 4.24255 4.16393 4.12209C4.29925 4.00163 4.49885 3.94141 4.76274 3.94141H8.721C8.95782 3.94141 9.15066 3.98896 9.29951 4.08405C9.45514 4.17915 9.56002 4.30595 9.61415 4.46444C9.66828 4.62294 9.66828 4.80046 9.61415 4.99699C9.56002 5.19353 9.44837 5.39006 9.27922 5.5866L5.77768 9.70433V9.20982H9.02548C9.2826 9.20982 9.47882 9.27005 9.61415 9.39051C9.75624 9.51097 9.82728 9.68848 9.82728 9.92306C9.82728 10.1576 9.75624 10.3383 9.61415 10.4651C9.47882 10.5856 9.2826 10.6458 9.02548 10.6458H4.90483Z"
                  fill="#8711A5"
                />
                <path
                  d="M4.48589 10.2269C4.24907 10.2269 4.05284 10.1793 3.89722 10.0842C3.74836 9.98911 3.64687 9.86231 3.59274 9.70382C3.53861 9.53898 3.53861 9.36146 3.59274 9.17127C3.64687 8.97473 3.75851 8.7782 3.92767 8.58166L7.42921 4.46393V4.95844H4.34379C4.07991 4.95844 3.88031 4.89821 3.74498 4.77775C3.60965 4.65095 3.54199 4.47027 3.54199 4.23569C3.54199 4.00112 3.60965 3.8236 3.74498 3.70315C3.88031 3.58269 4.07991 3.52246 4.34379 3.52246H8.30205C8.53887 3.52246 8.73171 3.57001 8.88057 3.66511C9.03619 3.76021 9.14107 3.887 9.1952 4.0455C9.24933 4.204 9.24933 4.38151 9.1952 4.57805C9.14107 4.77458 9.02943 4.97112 8.86027 5.16765L5.35873 9.28539V8.79088H8.60654C8.86365 8.79088 9.05988 8.85111 9.1952 8.97156C9.33729 9.09202 9.40834 9.26954 9.40834 9.50411C9.40834 9.73869 9.33729 9.91937 9.1952 10.0462C9.05988 10.1666 8.86365 10.2269 8.60654 10.2269H4.48589Z"
                  fill="#F761D6"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={"/simple-shop"}
        className="flex justify-center items-center w-[149px] h-[31px] bg-pink-700 text-white py-[3px] px-[30px] rounded-[10px] text-xs font-nunito font-bold leading-[19.2px] mt-4 hover:opacity-70 transition-opacity"
      >
        Shop
      </Link>
      <ModalBuy
        title={"Avatar"}
        openModal={isOpenModal}
        onClick={(id: number) => handleModalBuyAvatarShop(id)}
        id={idAvatarDetail}
      />
    </div>
  );
};

export default TopBarLogin;
