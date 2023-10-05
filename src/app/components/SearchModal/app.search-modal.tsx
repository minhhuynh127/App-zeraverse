import iconLeft from "@/public/left.png";
import Image from "next/image";
import { useAuthContext } from "../../context/AuthProvider";
import PopularWeek from "../Popular/PopularWeek/app.popular-week";
import RecentlyPlayed from "../Recentlyplayed/app.recently-played";
import { useEffect, useState } from "react";
import { Search } from "../../services/game-service";
import { IoClose } from "react-icons/io5";
import imgGameDefaul from "@/public/images/games/placeholder.png";

const SearchModal = ({
  click,
  className,
}: {
  click: () => void;
  className: string;
}) => {
  const { dataCategories } = useAuthContext();
  const [resultSearch, setResultSearch] = useState<any>();
  const [keySearch, setKeySearch] = useState<string>("");
  const handleSearch = (keySearch: string) => {
    Search(keySearch).then((response) => {
      setResultSearch(response?.data);
    });
  };
  useEffect(() => {
    if (keySearch === "") {
      setResultSearch({});
    } else {
      handleSearch(keySearch);
    }
  }, [keySearch]);
  const { game, gameByCategory, category } = resultSearch || {};
  return (
    <div
      onClick={click}
      className={` fixed inset-0 bg-black/50 w-full h-full z-50 animate-opacity `}
    >
      <div
        className={` ${className} bg-[#c4b5fd80] pl-[27px] pr-[59px] w-[684px] h-full py-[20px] transition-transform relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-16 h-16 absolute right-[-8px]" onClick={click}>
          <button className="w-full h-full rounded-[50%] bg-white flex justify-center items-center absolute right-[-30px]">
            <Image priority={true} src={iconLeft} alt="" />
          </button>
        </div>
        <div className="w-full flex justify-between items-center relative">
          <svg
            className="absolute left-4"
            width="42"
            height="37"
            viewBox="0 0 42 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2511_5285)">
              <path
                d="M8.84143 1.18604L7.12521 6.30363H1.61035L6.08443 9.45665L4.36906 14.6328L8.84143 11.4196L13.3164 14.6328L11.5993 9.45665L16.1345 6.30363H10.5577L8.84143 1.18604ZM17.3606 24.4514C13.8669 24.4514 10.9867 27.1871 10.9867 30.638C10.9867 34.0302 13.8678 36.7649 17.3606 36.7649C20.8559 36.7649 23.7344 34.0292 23.7344 30.638C23.7344 27.1871 20.8551 24.4514 17.3606 24.4514ZM28.0861 6.89827C27.1118 6.90136 26.1784 7.27859 25.4899 7.94756C24.8011 8.61653 24.4132 9.52289 24.4107 10.4686C24.4107 12.4307 26.0633 14.0373 28.0861 14.0373C30.1091 14.0373 31.7651 12.4307 31.7651 10.4686C31.7617 9.52251 31.3733 8.61604 30.684 7.94712C29.9945 7.27819 29.0608 6.90112 28.0861 6.89827Z"
                fill="#E165F3"
              />
              <path
                d="M23.4613 11.7865C18.0679 14.1099 12.5513 17.4402 8.13928 21.0708C-0.441864 28.2691 -1.42232 34.0409 5.9311 34.0409C7.28032 34.0409 8.81303 33.8618 10.4672 33.5055C10.0382 32.5546 9.79263 31.5409 9.79263 30.5306C9.79263 29.8163 9.91668 29.2227 10.0382 28.6262C7.95404 27.6152 9.17833 24.6403 13.4095 21.0708C16.8411 18.2155 21.5012 15.7148 25.4833 14.3474C24.5013 13.7519 23.7689 12.8604 23.4613 11.7865ZM37.0678 8.15845C35.7197 8.15845 34.1895 8.33744 32.4723 8.69537C32.6559 9.23147 32.7792 9.76675 32.7792 10.3614C32.7792 11.4319 32.4112 12.4447 31.7358 13.2752C35.3516 13.6934 34.4944 17.0245 29.5904 21.0708C27.5676 22.7368 25.1784 24.2833 22.7255 25.5929C23.4613 26.3056 23.9524 27.1384 24.3212 28.0893C28.0587 26.068 31.7358 23.6894 34.8624 21.0699C43.4419 13.9301 44.4232 8.15845 37.0678 8.15845Z"
                fill="#7C3AED"
              />
              <path
                d="M9.42304 1.45027C9.28167 1.00811 8.63699 1.00812 8.49559 1.45027L7.11836 5.75751C7.05461 5.95691 6.8633 6.09183 6.64823 6.08907L2.0027 6.02956C1.52582 6.02346 1.3266 6.61864 1.7161 6.88579L5.51044 9.48831C5.68611 9.60881 5.75919 9.82711 5.69002 10.0248L4.19618 14.2953C4.04282 14.7336 4.5644 15.1015 4.9465 14.8244L8.66877 12.1257C8.84109 12.0007 9.07755 12.0007 9.2499 12.1257L12.9722 14.8244C13.3543 15.1015 13.8758 14.7336 13.7225 14.2953L12.2286 10.0248C12.1595 9.82711 12.2326 9.60881 12.4082 9.48831L16.2025 6.88579C16.5921 6.61864 16.3928 6.02346 15.916 6.02956L11.2704 6.08907C11.0554 6.09183 10.8641 5.95691 10.8003 5.75751L9.42304 1.45027Z"
                fill="#E165F3"
              />
            </g>
            <defs>
              <clipPath id="clip0_2511_5285">
                <rect width="42" height="37" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            onChange={(e) => setKeySearch(e.target.value)}
            type="text"
            value={keySearch}
            placeholder="What are you playing today?"
            className="text-violet-300 text-[22px] font-nunito font-bold w-full h-16 bg-white rounded-[15px] pl-[80px] placeholder:text-violet-300"
          />
          {keySearch === "" ? (
            <svg
              className="absolute right-4"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.125 19.5H20.7425L20.2525 19.0275C22.0268 16.9695 23.0019 14.3422 23 11.625C23 9.37524 22.3329 7.176 21.083 5.30539C19.8331 3.43478 18.0565 1.97682 15.978 1.11588C13.8995 0.254929 11.6124 0.0296656 9.40585 0.468573C7.19932 0.90748 5.17249 1.99084 3.58167 3.58167C1.99084 5.17249 0.90748 7.19932 0.468573 9.40585C0.0296656 11.6124 0.254929 13.8995 1.11588 15.978C1.97682 18.0565 3.43478 19.8331 5.30539 21.083C7.176 22.3329 9.37524 23 11.625 23C14.4425 23 17.0325 21.9675 19.0275 20.2525L19.5 20.7425V22.125L26.945 29.5551C27.6659 30.2746 28.8335 30.274 29.5538 29.5538C30.274 28.8335 30.2746 27.6659 29.5551 26.945L22.125 19.5ZM11.625 19.5C7.26751 19.5 3.75001 15.9825 3.75001 11.625C3.75001 7.26751 7.26751 3.75001 11.625 3.75001C15.9825 3.75001 19.5 7.26751 19.5 11.625C19.5 15.9825 15.9825 19.5 11.625 19.5Z"
                fill="#8B5CF6"
              />
            </svg>
          ) : (
            <div
              className="absolute right-4 cursor-pointer
            "
              onClick={() => setKeySearch("")}
            >
              <IoClose size={40} fill="#8B5CF6" />
            </div>
          )}
        </div>

        {keySearch === "" ? (
          <>
            <div className="w-full overflow-x-auto hide-scrollbar">
              <div className="flex gap-4 w-fit cursor-grab pl-0 mt-4 whitespace-nowrap overflow-hidden">
                {dataCategories?.map((item: any, index: number) => (
                  <div key={index}>
                    <button className="bg-white rounded-[20px] flex-center h-9 py-2 px-5 font-semibold text-xs cursor-pointer select-none transition-all hover:bg-violet-500 hover:text-white shadow-xxl uppercase whitespace-nowrap">
                      {item?.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start mt-[21px]">
              <h3 className="text-white text-2xl font-bold leading-[32.74px] font-nunito">
                Popular this week
              </h3>
              <PopularWeek />
            </div>
            <div className="flex flex-col gap-4 items-start mt-[21px]">
              <h3 className="text-white text-2xl font-bold leading-[32.74px] font-nunito">
                Recently played
              </h3>
              <RecentlyPlayed />
            </div>
          </>
        ) : (
          <div className="w-full max-h-[544px] grid grid-cols-6 gap-4 mt-4 mb-4 overflow-y-auto hide-scrollbar">
            {category?.length > 0 &&
              category?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="rounded-[10px] col-span-2 flex justify-start items-center transition-all bg-white overflow-hidden cursor-pointer  group"
                >
                  {item?.thumbnail ? (
                    <div className="w-[94px] h-[94px] rounded-tl-[10px] rounded-bl-[10px]">
                      <Image
                        src={item?.thumbnail}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-110  transition-all"
                      />
                    </div>
                  ) : (
                    <div className="w-[94px] h-[94px] col-span-1 rounded-tl-[10px] rounded-bl-[10px]">
                      <Image
                        src={imgGameDefaul}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="h-full flex items-center rounded-tr-[10px] rounded-br-[10px]">
                    <span className="text-violet-900 text-base font-semibold py-2 block w-full text-center max-w-[110px] px-4">
                      {item?.label}
                    </span>
                  </div>
                </div>
              ))}
            {gameByCategory?.length > 0 &&
              gameByCategory?.map((item: any, index: number) => (
                <div
                  key={index}
                  className=" rounded-[10px] col-span-1 relative group"
                >
                  {item?.thumbnail ? (
                    <Image
                      src={item?.thumbnail}
                      alt=""
                      width={500}
                      height={500}
                      className="w-[94px] h-[94px] object-cover rounded-[10px] group-hover:scale-105 transition-all"
                    />
                  ) : (
                    <Image
                      src={imgGameDefaul}
                      alt=""
                      width={500}
                      height={500}
                      className="w-[94px] h-[94px] object-cover rounded-[10px]"
                    />
                  )}
                  <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                    <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                      {item?.title}
                    </span>
                  </div>
                </div>
              ))}
            {game?.length > 0 &&
              game?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="rounded-[10px] col-span-1 relative group"
                >
                  {item?.thumbnail ? (
                    <Image
                      src={item?.thumbnail}
                      alt=""
                      width={500}
                      height={500}
                      className="w-[94px] h-[94px] object-cover rounded-[10px] group-hover:scale-105 transition-all"
                    />
                  ) : (
                    <Image
                      src={imgGameDefaul}
                      alt=""
                      width={500}
                      height={500}
                      className="w-[94px] h-[94px] object-cover rounded-[10px]"
                    />
                  )}
                  <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                    <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                      {item?.title}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
