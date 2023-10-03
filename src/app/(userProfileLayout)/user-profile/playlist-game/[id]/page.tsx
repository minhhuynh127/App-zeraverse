"use client";
import iconBack from "@/public/left-white.png";
import { imagesPlaylistGames } from "@/src/app/(userProfileLayout)/user-profile/data/images";
import Button from "@/src/app/components/Buttons/app.button";
import DelPlaylist from "@/src/app/components/DelPlaylist/app.del-playlist";
import Empty from "@/src/app/components/Empty/app.empty";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import {
  deleteItemGamePlaylist,
  getAllGamePlaylist,
} from "@/src/app/services/game-service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const PlaylistGameDetail = ({ params }: { params: { id: number } }) => {
  const [openDel, setOpenDel] = useState<boolean>(false);
  const showMenuDel = () => {
    setOpenDel(!openDel);
  };
  const [acceptDel, setacceptDel] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<Array<any>>([]);
  const { token, dataPlaylist } = useAuthContext();
  const hadleDel = () => {
    setacceptDel(!acceptDel);
  };
  const getPlaylist = async () => {
    try {
      if (params.id) {
        setPlaylist([]);
        getAllGamePlaylist(params?.id, token).then((data) => {
          setPlaylist((prev) => {
            return [...prev, { data, info: params }];
          });
        });
      }
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    if (token) {
      getPlaylist();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleDelItem = async (id: number) => {
    try {
      if (id) {
        deleteItemGamePlaylist(id, token).then((data) => {
          if (data.success) {
            setPlaylist([]);
            getAllGamePlaylist(params?.id, token).then((data) => {
              setPlaylist((prev) => {
                return [...prev, { data, info: params }];
              });
            });
            setacceptDel(false);
          }
        });
      }
    } catch (error) {}
  };
  return (
    <div className="flex flex-col justify-between gap-6 w-full h-full">
      <div className="mt-28 w-full h-auto bg-black/50 rounded-[10px] flex flex-col justify-center items-center gap-4 pb-[400px]">
        <div className="w-full h-[74px] px-[20px] py-0 bg-pink-500 rounded-tl-[10px] rounded-tr-[10px]  flex justify-between items-center">
          <Link
            href={"/user-profile/playlist-game"}
            className="flex justify-center items-center text-white gap-[5px] w-[41px] h-[22px]"
          >
            <div>
              <Image
                priority={true}
                src={iconBack}
                alt=""
                className="w-[5px] h-[10px]"
              />
            </div>
            Back
          </Link>
          <h3 className="flex-1 text-center font-nunito font-bold text-[32px] leading-[43.65px] text-white">
            Playlist Games /
            {dataPlaylist?.map((item: any, idx: number) => (
              <span
                key={idx}
                className="font-nunito font-bold text-2xl leading-[33.6px] text-[#FFFFFF]"
              >
                {item.id === params.id && item.name}
              </span>
            ))}
          </h3>
          <div
            className="p-2 relative cursor-pointer"
            onClick={() => showMenuDel()}
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7867 6.96227e-08C14.2997 0.000130632 14.7997 0.158743 15.2158 0.453369C15.6319 0.747996 15.9431 1.1637 16.1052 1.6416L16.7689 3.6H20.7778C21.1019 3.6 21.4128 3.72643 21.642 3.95147C21.8712 4.17652 22 4.48174 22 4.8C22 5.11826 21.8712 5.42348 21.642 5.64853C21.4128 5.87357 21.1019 6 20.7778 6L20.7741 6.0852L19.7144 20.6568C19.6483 21.5647 19.2343 22.4144 18.5558 23.0347C17.8773 23.655 16.9847 23.9999 16.0576 24H5.94244C5.01534 23.9999 4.12269 23.655 3.44418 23.0347C2.76568 22.4144 2.35169 21.5647 2.28556 20.6568L1.22589 6.084C1.22368 6.05605 1.22245 6.02803 1.22222 6C0.898069 6 0.587192 5.87357 0.357981 5.64853C0.128769 5.42348 0 5.11826 0 4.8C0 4.48174 0.128769 4.17652 0.357981 3.95147C0.587192 3.72643 0.898069 3.6 1.22222 3.6H5.23111L5.89478 1.6416C6.05696 1.16351 6.36831 0.747662 6.78468 0.453018C7.20104 0.158374 7.70131 -0.000121273 8.21455 6.96227e-08H13.7867ZM18.3297 6H3.67033L4.72389 20.4852C4.74583 20.7878 4.88372 21.0711 5.10982 21.2779C5.33591 21.4848 5.63341 21.5999 5.94244 21.6H16.0576C16.3666 21.5999 16.6641 21.4848 16.8902 21.2779C17.1163 21.0711 17.2542 20.7878 17.2761 20.4852L18.3297 6ZM8.55556 9.6C8.85492 9.60004 9.14386 9.70795 9.36757 9.90326C9.59128 10.0986 9.7342 10.3677 9.76922 10.6596L9.77778 10.8V16.8C9.77743 17.1059 9.65815 17.4 9.4443 17.6224C9.23044 17.8448 8.93817 17.9787 8.62718 17.9966C8.3162 18.0145 8.00998 17.9152 7.77109 17.7189C7.53221 17.5226 7.37868 17.2441 7.34189 16.9404L7.33333 16.8V10.8C7.33333 10.4817 7.4621 10.1765 7.69131 9.95147C7.92053 9.72643 8.2314 9.6 8.55556 9.6ZM13.4444 9.6C13.7686 9.6 14.0795 9.72643 14.3087 9.95147C14.5379 10.1765 14.6667 10.4817 14.6667 10.8V16.8C14.6667 17.1183 14.5379 17.4235 14.3087 17.6485C14.0795 17.8736 13.7686 18 13.4444 18C13.1203 18 12.8094 17.8736 12.5802 17.6485C12.351 17.4235 12.2222 17.1183 12.2222 16.8V10.8C12.2222 10.4817 12.351 10.1765 12.5802 9.95147C12.8094 9.72643 13.1203 9.6 13.4444 9.6ZM13.7867 2.4H8.21333L7.80633 3.6H14.1937L13.7867 2.4Z"
                fill="white"
              />
            </svg>
            {openDel && (
              <DelPlaylist
                onClick={() => hadleDel()}
                className={`${openDel} ? "block" : "hidden"`}
              ></DelPlaylist>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-10 px-[44px] pt-[68px] mb-6">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-wrap gap-4 items-center justify-between">
              {playlist?.map((item, index) => (
                <div className="w-full" key={index}>
                  {item?.data?.length > 0 ? (
                    <div className="w-full flex gap-8">
                      {item?.data?.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="w-[94px] h-[94px] group relative cursor-pointer"
                        >
                          {item?.thumbnail && (
                            <Image
                              priority={true}
                              src={item?.thumbnail}
                              width={500}
                              height={500}
                              alt=""
                              className="w-full object-cover transition-all rounded-[10px] group-hover:opacity-70"
                            />
                          )}
                          <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden animate-fadeIn delay-500 group-hover:flex transition-all">
                            <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                              {item?.title}
                            </span>
                          </div>
                          {acceptDel && (
                            <span
                              className={`absolute w-full h-full bg-black/70 top-0 left-0 flex justify-end items-start text-white animate-opacity transition-opacity ${acceptDel} ? "block" : "hidden"`}
                            >
                              <svg
                                onClick={() => handleDelItem(item?.id)}
                                className="mt-2 mr-2"
                                width="20"
                                height="20"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.5293 0.470721C13.9017 -0.156907 12.8841 -0.156907 12.2564 0.470721L7.5 5.22716L2.74356 0.470721C2.11594 -0.156907 1.09835 -0.156907 0.470721 0.470721C-0.156907 1.09835 -0.156907 2.11594 0.470721 2.74356L5.22716 7.5L0.470721 12.2564C-0.156907 12.8841 -0.156907 13.9017 0.470721 14.5293C1.09835 15.1569 2.11594 15.1569 2.74356 14.5293L7.5 9.77284L12.2564 14.5293C12.8841 15.1569 13.9017 15.1569 14.5293 14.5293C15.1569 13.9017 15.1569 12.8841 14.5293 12.2564L9.77284 7.5L14.5293 2.74356C15.1569 2.11594 15.1569 1.09835 14.5293 0.470721Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center ">
                      <Empty className={""} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistGameDetail;
