"use client";
import bannerAds from "@/public/images/game-screen/Banner ads.png";
import image22 from "@/public/images/game-screen/image-22.png";
import image23 from "@/public/images/game-screen/image-23.png";
import image8 from "@/public/images/game-screen/image-8.png";
import pause from "@/public/images/game-screen/pause.png";
import zen from "@/public/images/game-screen/zen.png";
import imgGameDefault from "@/public/images/games/placeholder.png";
import avatarDefault from "@/public/images/hall-of-fame/avatar1.png";
import logo from "@/public/images/logos/logo-1.png";
import ChatBox from "@/src/app/components/ChatBox/app.chat";
import ModalCreatePlaylist from "@/src/app/components/ModalCreatePlaylist/app.modal-create-playlist";
import ModalReportGame from "@/src/app/components/ModalReportGame/app.modal-report";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import {
  getGameByCategorySlug,
  getGameBySlug,
  loveGamePlayed,
} from "@/src/app/services/game-service";
import { getHalfOfFamesBySlug } from "@/src/app/services/half-of-fames-service";
import { formatDate, getTimeRemaining } from "@/src/app/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdOutlineZoomOutMap, MdReportGmailerrorred } from "react-icons/md";
import { iconShare } from "../images/images";
import {
  TIME_COUNTER_TYPE,
  useSocketContext,
} from "@/src/app/context/socket-context";
import { SOCKET_EVENT } from "@/src/app/utils/constant";

const GameScreenPage = ({ params }: { params: { slug_game: string } }) => {
  const [game, setGame] = useState<any>();
  const [gameRelates, setGameRelates] = useState<any>();
  const [halfOfFames, setHalfOfFames] = useState<Array<any>>([]);
  const [playGames, setPlayGames] = useState<boolean>(false);
  const [isOpenModalPlaylist, setIsOpenModalPlaylist] =
    useState<boolean>(false);
  const [isOpenModalReport, setIsOpenModalReport] = useState<boolean>(false);
  const refFullscreen = useRef<HTMLDivElement>(null);
  const {
    token,
    dataLovedGame,
    dataRecentPlayed,
    activitiesInfo,
    setActivitiesInfo,
  } = useAuthContext();

  const { socketCLI, setConnect, setIsCountdown, playedTime } =
    useSocketContext();

  const [isLoveGame, setIsLoveGame] = useState<boolean>(false);
  const {
    created_at,
    description,
    developer,
    game_category,
    love_count,
    superslug,
    slug,
    trailer_url,
    title,
    game_tags,
    play_url,
    thumbnail,
  } = game ?? {};

  const playedTimeFormat: TIME_COUNTER_TYPE = getTimeRemaining(playedTime);
  const gameCategory: Array<any> =
    gameRelates?.game_category?.game_detail || [];

  // Connect
  useEffect(() => {
    setConnect(true);
    return () => setConnect(false);
  });

  const getGame = () => {
    getGameBySlug(params.slug_game).then((response) => {
      setGame(response?.data);
    });
  };

  const getGameRelate = () => {
    getGameByCategorySlug(game_category?.slug).then((response) => {
      setGameRelates(response?.data);
    });
  };

  const getHalfOfFame = () => {
    getHalfOfFamesBySlug(params.slug_game).then((response) => {
      setHalfOfFames(response?.data);
    });
  };
  useEffect(() => {
    getGame();

    getHalfOfFame();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug_game]);
  useEffect(() => {
    getGameRelate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game_category?.slug]);

  // Click love game
  const handleLoveGame = () => {
    loveGamePlayed(token, game?.id).then((response) => {
      setIsLoveGame(response?.data);
    });
  };

  // Check game love
  useEffect(() => {
    if (game?.id) {
      dataLovedGame.map((item: any, index: number) => {
        if (game?.id === item?.id) {
          setIsLoveGame(true);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLovedGame, game?.id]);

  const handlePlayGame = () => {
    setPlayGames(!playGames);

    socketCLI.emit(SOCKET_EVENT.USER_PLAY_GAME);
    setIsCountdown(true);
  };
  const handleStopGame = () => {
    setPlayGames(!playGames);

    socketCLI.emit(SOCKET_EVENT.USER_STOP_PLAY);
    setIsCountdown(false);
  };

  // Modal playlist
  const handleOpenModal = () => {
    setIsOpenModalPlaylist(!isOpenModalPlaylist);
  };

  // Modal Report
  const handleModalReport = () => {
    setIsOpenModalReport(!isOpenModalReport);
  };

  // Zoom out
  const handleZommOut = () => {
    if (!document.fullscreenElement) {
      refFullscreen.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div className="grid grid-cols-11 gap-4">
      <div className="col-span-1 row-span-7 w-full h-full">
        <Image
          priority={true}
          src={bannerAds}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      <div className="col-span-7 row-span-7 h-full">
        <div className="grid grid-rows-7 gap-4">
          <div className="row-span-5 col-span-7">
            <div className="w-full h-full flex flex-col relative">
              <div ref={refFullscreen} className="w-full h-full">
                <iframe className="w-full h-full" src={play_url}></iframe>
              </div>
              <div className="h-[67px] bg-[#373737] w-full flex justify-between items-center p-4">
                <div className="flex gap-4 h-full w-full items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleStopGame()}
                  >
                    <Image
                      priority={true}
                      src={pause}
                      alt=""
                      className="object-cover w-[32px] h-[32px]"
                    />
                  </div>
                  <div className="">
                    {thumbnail ? (
                      <Image
                        priority={true}
                        src={thumbnail}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-[10px]"
                      />
                    ) : (
                      <Image
                        priority={true}
                        src={imgGameDefault}
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-[10px]"
                      />
                    )}
                  </div>
                  <span className="font-lato font-bold text-base leading[25.6px] text-[#FFFFFF] truncate">
                    {title}
                  </span>
                </div>
                <div className="flex gap-6 h-full w-full items-center justify-end">
                  <span className="w-[110px] h-[29px] rounded-[10px] px-[10px] py-[5px] bg-[#5B5B5B] text-[#FFFFFF] font-semibold font-inter text-base flex justify-center items-center">
                    {`${playedTimeFormat.hours} : ${playedTimeFormat.minutes} : ${playedTimeFormat.seconds}`}
                  </span>

                  {/* Love Game */}
                  <div
                    onClick={() => handleLoveGame()}
                    title="Love Game"
                    className="cursor-pointer"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 52 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.7975 47.6252L22.0902 44.2503C8.92263 32.31 0.229492 24.4095 0.229492 14.7703C0.229492 6.86978 6.41696 0.707886 14.2919 0.707886C18.7408 0.707886 23.0106 2.7789 25.7975 6.02604C28.5844 2.7789 32.8543 0.707886 37.3032 0.707886C45.1781 0.707886 51.3656 6.86978 51.3656 14.7703C51.3656 24.4095 42.6724 32.31 29.5049 44.2503L25.7975 47.6252Z"
                        fill={`${isLoveGame ? "#d01a1a" : "#929292"}`}
                      />
                    </svg>
                  </div>
                  {/* Playlist */}
                  <div
                    onClick={() => handleOpenModal()}
                    title="Playlist"
                    className="cursor-pointer"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 47 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.5667 27.0064H27.1301V43.443C27.1301 44.3149 26.7838 45.151 26.1673 45.7675C25.5508 46.384 24.7146 46.7304 23.8428 46.7304C22.9709 46.7304 22.1348 46.384 21.5183 45.7675C20.9018 45.151 20.5555 44.3149 20.5555 43.443V27.0064H4.11886C3.24701 27.0064 2.41087 26.6601 1.79438 26.0436C1.17789 25.4271 0.831543 24.591 0.831543 23.7191C0.831543 22.8473 1.17789 22.0111 1.79438 21.3946C2.41087 20.7781 3.24701 20.4318 4.11886 20.4318H20.5555V3.99521C20.5555 3.12335 20.9018 2.28721 21.5183 1.67072C22.1348 1.05423 22.9709 0.707886 23.8428 0.707886C24.7146 0.707886 25.5508 1.05423 26.1673 1.67072C26.7838 2.28721 27.1301 3.12335 27.1301 3.99521V20.4318H43.5667C44.4385 20.4318 45.2747 20.7781 45.8912 21.3946C46.5077 22.0111 46.854 22.8473 46.854 23.7191C46.854 24.591 46.5077 25.4271 45.8912 26.0436C45.2747 26.6601 44.4385 27.0064 43.5667 27.0064Z"
                        fill="#929292"
                      />
                    </svg>
                    <ModalCreatePlaylist
                      game={game}
                      openModal={isOpenModalPlaylist}
                      onClick={handleOpenModal}
                    />
                  </div>
                  {/* Zomm out */}
                  <div
                    onClick={() => handleZommOut()}
                    title="Zoom out"
                    className="cursor-pointer"
                  >
                    <MdOutlineZoomOutMap color="#929292" size={30} />
                  </div>
                  {/* Report */}
                  <div
                    title="Report"
                    onClick={() => handleModalReport()}
                    className="cursor-pointer"
                  >
                    <MdReportGmailerrorred size={35} color="#929292" />
                    <ModalReportGame
                      game={game}
                      openModal={isOpenModalReport}
                      onClick={handleModalReport}
                    />
                  </div>
                </div>
              </div>
              {/* Modal Play now */}
              <div
                className={`absolute inset-0 bg-black/80 flex-col justify-start items-center pt-[80px] gap-28 ${
                  playGames ? "hidden" : "flex"
                }`}
              >
                <div>
                  <Image src={logo} alt=""></Image>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <h3 className="font-nunito text-white font-bold text-[40px]">
                    {title}
                  </h3>
                  <div
                    onClick={() => handlePlayGame()}
                    className="mt-2 bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] flex justify-center items-center w-fit h-fit px-5 py-2 rounded-[20px] z-10 hover:scale-105 transition-all cursor-pointer text-2xl"
                  >
                    Play now
                    <svg
                      width="22"
                      height="22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M9.389 15.678c-.249.169-.5.179-.756.03-.255-.149-.382-.378-.383-.69V6.982c0-.31.128-.54.383-.69a.66.66 0 0 1 .756.03l6.087 4.018a.756.756 0 0 1 .336.66.756.756 0 0 1-.336.66L9.39 15.678Z"
                        fill="#fff"
                      ></path>
                      <circle
                        cx="11"
                        cy="11"
                        r="8.625"
                        stroke="#fff"
                        strokeWidth="2"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-7 w-full">
            <div className="grid grid-cols-7 grid-flow-dense gap-4 w-full h-full">
              <div className="col-span-4 full bg-pink-900 border border-pink-300 rounded-[10px] flex flex-col justify-center items-center gap-4">
                <div className="flex items-center gap-2 justify-center">
                  <h3 className="font-lato font-bold text-base text-white">
                    Share
                  </h3>
                  <span className="font-lato font-semibold text-[11px] text-white">
                    for 1
                  </span>
                </div>
                <div className="flex justify-center items-center gap-10">
                  {iconShare.map((item: any, index: number) => (
                    <Image priority={true} key={index} src={item.src} alt="" />
                  ))}
                </div>
              </div>
              <div className="col-span-2 h-full bg-pink-900 flex- flex-col justify-center items-center overflow-hidden rounded-[10px]">
                <Image
                  priority={true}
                  src={image22}
                  alt=""
                  className="object-cover w-full h-full rounded-[10px]"
                />
              </div>
              <div className="col-span-1 h-full bg-pink-900 flex- flex-col justify-center items-center overflow-hidden rounded-[10px]">
                <Image
                  priority={true}
                  src={image23}
                  alt=""
                  className="object-cover w-full h-full rounded-[10px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full row-span-1 col-span-7">
            <div className=" bg-[#8F2A89] w-full h-full rounded-[10px]">
              <Image
                priority={true}
                src={image8}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="col-span-3 row-span-7 w-full">
        <div className="grid grid-rows-7 grid-cols-3 gap-4 w-full h-full">
          <div className="row-span-3 col-span-3 flex flex-col justify-between bg-[#585858]/50 rounded-[10px]">
            <ChatBox game={game} />
          </div>

          <div className="row-span-3 col-span-3  ">
            <div className="grid grid-cols-3 w-full h-full gap-4">
              <div className="col-span-2 row-span-3 bg-[#D9D9D9] flex items-center justify-center rounded-[10px]">
                <h1 className="font-semibold font-inter text-base">ADS</h1>
              </div>
              <div className="row-span-3 col-span-1">
                <div className="grid grid-rows-3 w-full h-full gap-4">
                  {gameCategory?.length > 0 &&
                    gameCategory
                      ?.slice(0, 3)
                      ?.map((item: any, index: number) => (
                        <Link
                          href={`/game-screen/${item.slug}`}
                          key={index}
                          className="row-span-1 col-span-1 relative group"
                        >
                          {item?.thumbnail ? (
                            <Image
                              priority={true}
                              src={item?.thumbnail}
                              width={500}
                              height={500}
                              alt=""
                              className="object-cover w-full h-full rounded-[10px] group-hover:scale-105 transition-all"
                            />
                          ) : (
                            <Image
                              priority={true}
                              src={imgGameDefault}
                              width={500}
                              height={500}
                              alt=""
                              className="object-cover w-full h-full rounded-[10px] group-hover:scale-110 transition-all"
                            />
                          )}
                          <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                            <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                              {title}
                            </span>
                          </div>
                        </Link>
                      ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" row-span-1 col-span-3">
            <div className="grid grid-cols-3 grid-rows-1 gap-4 w-full h-full">
              {gameCategory?.length > 0 &&
                gameCategory?.slice(3, 6)?.map((item: any, index: number) => (
                  <Link
                    href={`/game-screen/${item.slug}`}
                    key={index}
                    className="row-span-1 col-span-1 relative group"
                  >
                    {item?.thumbnail ? (
                      <Image
                        priority={true}
                        src={item?.thumbnail}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px] group-hover:scale-105 transition-all"
                      />
                    ) : (
                      <Image
                        priority={true}
                        src={imgGameDefault}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px] group-hover:scale-110 transition-all"
                      />
                    )}
                    <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                      <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                        {title}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="col-span-11 row-span-1">
        <div className="grid grid-cols-11 gap-4 w-full">
          {gameCategory?.slice(6, 17).map((item: any, index: number) => (
            <Link
              href={`/game-screen/${item.slug}`}
              key={index}
              className="row-span-1 col-span-1 relative group"
            >
              {item?.thumbnail ? (
                <Image
                  priority={true}
                  src={item?.thumbnail}
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover w-full h-full rounded-[10px] group-hover:scale-105 transition-all"
                />
              ) : (
                <Image
                  priority={true}
                  src={imgGameDefault}
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover w-full h-full rounded-[10px] group-hover:scale-110 transition-all"
                />
              )}
              <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                  {title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3 */}
      <div className="col-span-11 row-span-5 w-full">
        <div className="grid grid-cols-11 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-5">
            <div className="grid grid-rows-5 grid-cols-2 gap-4">
              {gameCategory?.length > 0 &&
                gameCategory?.slice(17, 27)?.map((item: any, index: number) => (
                  <Link
                    href={`/game-screen/${item.slug}`}
                    key={index}
                    className="row-span-1 col-span-1 relative group"
                  >
                    {item?.thumbnail ? (
                      <Image
                        priority={true}
                        src={item?.thumbnail}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px] group-hover:scale-105 transition-all"
                      />
                    ) : (
                      <Image
                        priority={true}
                        src={imgGameDefault}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px] group-hover:scale-110 transition-all"
                      />
                    )}
                    <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                      <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                        {title}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Ìnfo */}
          <div className="col-span-4 row-span-5  bg-[#181818]/60 border-2 border-[#FF00E5] p-[22px] rounded-[20px]">
            <div className="font-lato font-semibold text-sm leading-[22.4px] text-white flex gap-2">
              <Link href={"/"}>Home</Link>
              <span>/</span>
              <Link href={`/game/categories/${game_category?.slug}`}>
                {game_category?.label}
              </Link>
              <span>/</span>
              <Link href={`/game-screen/${slug}`}>{title}</Link>
            </div>
            <h1 className="font-lato font-semibold text-[28px] text-white mt-3">
              {title}
            </h1>
            <p className="font-lato font-semibold text-[10px] text-white italic leading-4">
              Posted date: {formatDate(created_at)}
            </p>

            <div className="flex gap-4 mt-4 items-center">
              <h3 className="font-lato font-medium tetx-base leading-[25.6px] text-white">
                Developed by: {developer ? developer : ""}
              </h3>
            </div>
            <div className="font-lato font-bold text-base text-white leading-[25.6px]">
              <h3>{love_count} players loved this game </h3>
              <h3>Decription of the game: </h3>
              <p>{description ? description : ""}</p>
            </div>
            <div className="w-full flex items-center justify-center mt-8 ">
              {trailer_url ? <iframe src={trailer_url}></iframe> : <></>}
            </div>
          </div>

          {/* Half of fames */}
          <div className="col-span-4 row-span-5  bg-[#181818]/60 border-2 border-[#FF00E5] rounded-[20px] overflow-x-hidden flex flex-col gap-3 pb-4">
            <div className="h-[61px] w-full bg-black/50 font-lato font-semibold text-[28px] leading-[39.2px] text-white flex justify-center items-center">
              Hall of Fame
            </div>
            <div className="flex flex-col gap-3 max-h-[550px] overflow-y-auto btn-list px-3">
              {halfOfFames.map((item: any, index: number) => (
                <Link
                  href={`/${item?.user?.username}`}
                  key={index}
                  className="flex gap-4 bg-black/50  px-[10px] py-3 rounded-[10px]"
                >
                  <div>
                    {item?.user?.avatar?.url ? (
                      <Image
                        priority={true}
                        src={item?.user?.avatar?.url}
                        width={500}
                        height={500}
                        alt=""
                        className="w-[63px] h-[63px] rounded-[130px]"
                      />
                    ) : (
                      <Image
                        priority={true}
                        src={avatarDefault}
                        alt=""
                        className="w-[63px] h-[63px] rounded-[130px]"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-lato font-bold text-base leading-[25.6px] text-white">
                      {item?.user?.username ? item?.user?.username : "Username"}
                    </h3>
                    <p className="w-full font-lato font-medium text-xs leading-[19.2px] text-white text-truncate">
                      {item?.user?.quote ? item?.user?.quote : ""}
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center items-center border border-l-white border-t-0 border-r-0 border-b-0 px-4">
                    <span className="text-white font-nunito font-bold text-[14px] leading-[22.4px]">
                      {item?.zera_earned ? item.zera_earned : 0}
                    </span>
                    <div>
                      <Image
                        priority={true}
                        src={zen}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 row-span-5 ">
            <div className="grid grid-rows-5 grid-cols-1 gap-4">
              {gameCategory?.length > 0 &&
                gameCategory?.slice(27, 32)?.map((item: any, index: number) => (
                  <Link
                    href={`/game-screen/${item.slug}`}
                    key={index}
                    className="row-span-1 col-span-1 relative group"
                  >
                    {item?.thumbnail ? (
                      <Image
                        priority={true}
                        src={item?.thumbnail}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px] group-hover:scale-105 transition-all"
                      />
                    ) : (
                      <Image
                        priority={true}
                        src={imgGameDefault}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover w-full h-full rounded-[10px] group-hover:scale-110 transition-all"
                      />
                    )}
                    <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                      <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                        {title}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreenPage;
