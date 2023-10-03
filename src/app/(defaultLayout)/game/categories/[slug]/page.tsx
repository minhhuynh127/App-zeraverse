"use client";

import imgGameDefaul from "@/public/images/games/placehoder.png";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import { getGameByCategorySlug } from "@/src/app/services/game-service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const GameCategory = ({ params }: { params: { slug: string } }) => {
  const [dataGameOfCategory, setDataGameOfCategory] = useState<any>();
  const [slug, setSlug] = useState<string>(params.slug);
  const getGameCategory = () => {
    if (slug) {
      getGameByCategorySlug(slug).then((response) => {
        setDataGameOfCategory(response?.data);
      });
    }
  };

  useEffect(() => {
    getGameCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  const { game_category, other_category } = dataGameOfCategory || {};
  const gameCategory = { ...game_category };
  // const ortherCategory = [...other_category];
  const { dataGames, dataCategories } = useAuthContext();
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col gap-10">
        <div className="w-full grid grid-cols-10 gap-4">
          <div className="col-span-3 bg-gradient-to-t from-[#F265E4] via-#C4B5FD to-[#979BFF] rounded-[10px] font-nunito font-bold leading-[39.px] text-white text-[28px] flex justify-center items-center">
            {gameCategory?.label ?? gameCategory?.label}
          </div>
          {/* Game of Category */}
          {gameCategory?.game_detail?.length > 0 &&
            gameCategory?.game_detail.map((game: any, index: number) => (
              <Link
                href={`/game-screen/${game.slug}`}
                key={index}
                className="col-span-1 w-[94px] h-[94px] rounded-[10px] group relative"
              >
                {game?.thumbnail ? (
                  <Image
                    src={game?.thumbnail}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full rounded-[10px] object-cover group-hover:scale-110 transition-all"
                  />
                ) : (
                  <Image
                    src={imgGameDefaul}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full rounded-[10px] object-cover group-hover:scale-110 transition-all"
                  />
                )}
                <div className="w-full h-full rounded-[10px] absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                  <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                    {game?.title}
                  </span>
                </div>
              </Link>
            ))}
        </div>

        {/* Other Category */}
        <div className="w-full grid grid-cols-10 gap-4">
          {other_category?.length > 0 &&
            other_category.map((cate: any, index: number) => (
              <button
                onClick={() => setSlug(cate?.slug)}
                key={index}
                className="flex justify-center items-center bg-white rounded-[10px] col-span-2 gap-2 overflow-hidden cursor-pointer"
              >
                <div className="w-[50%] h-[94px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
                  <Image
                    priority={true}
                    width={500}
                    height={500}
                    src={cate?.thumbnail}
                    alt="catePicture"
                    className={`w-full h-full object-cover ${index} hover:scale-110 transition-all`}
                  />
                </div>

                <span className="text-violet-900 text-base font-semibold py-2 block w-full text-center">
                  {cate?.label}
                </span>
              </button>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {/* Game */}
        <div className="w-full grid grid-cols-10 gap-4">
          {dataGames?.map((game: any, index: number) => (
            <button
              className="min-w-[94px] min-h-[94px] rounded-xl transition-all hover:scale-105 shine-effect relative group"
              key={index}
            >
              {game?.thumbnail && (
                <Image
                  priority={true}
                  src={game?.thumbnail}
                  width={500}
                  height={500}
                  alt="gamePicture"
                  className={`w-full h-full rounded-xl object-cover ${index}`}
                />
              )}
              <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                  {game.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Category */}
        <div className="w-full grid grid-cols-10 gap-4">
          {dataCategories.map((cate: any, index: number) => (
            <button
              onClick={() => setSlug(cate?.slug)}
              key={index}
              className="flex justify-center items-center bg-white rounded-[10px] col-span-2 gap-2 overflow-hidden cursor-pointer"
            >
              <div className="w-[50%] h-[94px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={cate?.thumbnail}
                  alt="catePicture"
                  className={`w-full h-full object-cover ${index} hover:scale-110 transition-all`}
                />
              </div>

              <span className="text-violet-900 text-base font-semibold py-2 block w-full text-center">
                {cate?.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCategory;
