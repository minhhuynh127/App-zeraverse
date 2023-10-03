"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import imageDefaul from "@/public/images/category-article/imageDefault.jpg";

import { getArticleDetailBySlug } from "@/src/app/services/article.service";
import { formatDate } from "@/src/app/utils/helper";

const ArticleDetailPage = ({ params }: { params: { slug: string } }) => {
  const [articleDetail, setArticleDetail] = useState<any>();
  const divRef = useRef<HTMLDivElement>(null);
  const getArticle = () => {
    getArticleDetailBySlug(params?.slug).then((respone) => {
      setArticleDetail(respone?.data);
    });
  };
  useEffect(() => {
    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.slug]);

  return (
    <div className="w-full bg-black/80 border-[4px] border-pink-400 p-[40px]">
      <Link
        href={"/article/categories"}
        className=" text-pink-500 font-lato font-bold text-sm"
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
      <div className="font-lato font-bold text-[20px] leading-[16px] text-white mt-[20px] flex gap-3">
        <Link href={"/"}>Home</Link>/<Link href={"/article"}>Article</Link>/
        <span>{articleDetail?.title}</span>
      </div>

      <div className="flex gap-4 mt-[20px]">
        {articleDetail?.article_detail_tags?.length > 0 ? (
          articleDetail?.article_detail_tags.map((tag: any, index: number) => (
            <button
              key={index}
              className="bg-white min-w-[96px] h-[19px] text-xs font-lato font-medium rounded-[20px] px-[10px] flex justify-center items-center gap-[10px] whitespace-nowrap"
            >
              {tag?.article_tag?.label}
            </button>
          ))
        ) : (
          <></>
        )}
      </div>
      <h1 className="font-nunito font-bold text-[40px] text-white leading-[56px] mt-[20px]">
        {articleDetail && articleDetail?.title}
      </h1>
      <p className="text-xs mb-2 ml-4 font-nunito font-bold italic text-white opacity-70">
        {formatDate(articleDetail?.created_at)}
      </p>
      <div
        className="w-full font-nunito font-bold text-base leading-[25.6px] text-white flex flex-col justify-center items-center gap-4"
        dangerouslySetInnerHTML={{
          __html: articleDetail?.content
            ?.replaceAll('"', "")
            ?.replaceAll("\\", ""),
        }}
      ></div>
    </div>
  );
};

export default ArticleDetailPage;
