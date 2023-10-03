import imageDefaul from "@/public/images/category-article/imageDefault.jpg";

import { getLimitArticle } from "@/src/app/services/article.service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PopularNew = ({ limit, page }: { limit: number; page: number }) => {
  const [popular, setPopular] = useState<Array<any>>([]);
  const getPopular = () => {
    getLimitArticle(limit, page).then((response) => {
      setPopular(response?.data?.rows);
    });
  };
  useEffect(() => {
    getPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="">
      <h3 className="font-lato font-bold text-[32px] leading-[44.6px] text-white">
        Popular News
      </h3>
      <div className="grid grid-cols-3 h-[424px] gap-[20px] mt-4">
        <Link
          href={`/article/${popular[0]?.slug}`}
          className="col-span-2 relative overflow-hidden rounded-[10px]"
        >
          <div>
            {popular[0]?.featured_image && (
              <Image
                priority={true}
                src={popular[0]?.featured_image}
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="absolute w-full h-full flex flex-col justify-end pl-4 pb-4 left-0 bottom-0 bg-gradient-to-b from-black/20 to-black/90">
            <h3 className="font-lato font-bold text-[28px] leading-[39.2px] text-white">
              {popular[0]?.title}
            </h3>
            <p className="font-nunito text-xs font-light text-white leading-[16.8px]">
              {popular[0]?.seo_description}
            </p>
            <span className="font-nunito font-normal tetx-base text-white leading-[25.8px]">
              {popular[0]?.created_at}
            </span>
          </div>
        </Link>
        <Link
          href={`/article/${popular[1]?.slug}`}
          className="col-span-1 p-1 border border-pink-700 bg-black relative rounded-[10px] cursor-pointer"
        >
          <div>
            {popular[1]?.featured_image && (
              <Image
                priority={true}
                src={popular[1]?.featured_image}
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="absolute w-full h-[40%] flex flex-col justify-end p-2 left-0 bottom-0 bg-black rounded-bl-[10px] rounded-br-[10px]">
            <h3 className="font-lato font-bold text-[28px] leading-[39.2px] text-white">
              {popular[1]?.title}
            </h3>
            <p className="font-nunito text-xs font-light text-white leading-[16.8px]">
              {popular[1]?.seo_description}
            </p>
            <span className="font-nunito font-normal tetx-base text-white leading-[25.8px]">
              {popular[1]?.created_at}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularNew;
