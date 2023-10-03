import { getLimitArticle } from "@/src/app/services/article.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArticleItem from "../../Article/ArticleItem/app.article-item";

const TrendingArticle = ({ limit, page }: { limit: number; page: number }) => {
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
    <div className={`max-w-full flex flex-col items-start gap-4`}>
      <h1 className="font-lato font-bold text-[32px] leading-[44.6px] text-white">
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
    </div>
  );
};

export default TrendingArticle;
