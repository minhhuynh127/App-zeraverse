"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLimitArticle } from "../../services/article.service";
import ArticleItem from "../Article/ArticleItem/app.article-item";

const Trending = ({ limit, page }: { limit: number; page: number }) => {
  const [articleTrend, setArticleTrend] = useState<Array<any>>([]);
  const getArticleTrend = () => {
    getLimitArticle(limit, page).then((response) => {
      setArticleTrend(response?.data?.rows);
    });
  };
  useEffect(() => {
    getArticleTrend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page]);
  return (
    <div
      className={`bg-trending max-w-full pt-4 pb-[100px] px-12 flex flex-col items-start gap-3 mt-[176px]`}
    >
      <h1 className="font-lato font-bold text-[28px] leading-[39.2px] text-[#FFFF]">
        Trending News
      </h1>
      <div className=" w-full grid grid-cols-2 gap-4">
        {articleTrend?.length > 0 &&
          articleTrend?.map((article: any, index: number) => (
            <div key={index} className="w-full">
              <ArticleItem article={article} className={"con-span-1"} />
            </div>
          ))}
      </div>
      <div>
        <h1 className="font-lato font-bold text-[28px] leading-[39.2px] text-[#FFFF]">
          List Article category
        </h1>
        <div className="ml-4 mt-2">
          <ul className="text-pink-500">
            <Link href={"/article/categories"} className="underline list-disc">
              All Article Category
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trending;
