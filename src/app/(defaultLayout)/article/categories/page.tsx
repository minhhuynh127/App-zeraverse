"use client";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import Link from "next/link";

const ArticleCategoriesPage = () => {
  const { cateArticle } = useAuthContext();
  return (
    <div className="w-full min-h-[800px] bg-black/80 border-[4px] border-pink-400 p-[40px]">
      <Link href={"/"} className=" text-pink-500 font-lato font-bold text-sm">
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
      <h3 className="font-lato font-bold text-[10px] leading-[16px] text-white mt-[20px]">
        Home / Article category / Article{" "}
      </h3>
      <h1 className="font-nunito font-bold text-[40px] leading-[56px] text-white mt-[20px]">
        All Article Category
      </h1>
      <ul className="text-pink-500 font-lato font-normal text-sm leading-[22.6px] flex flex-col gap-[10px] ml-4">
        {cateArticle?.map((item: any, index: number) => (
          <li key={index} className="underline underline-offset-2 list-disc">
            <Link href={`/article/categories/${item?.slug}`}>
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCategoriesPage;
