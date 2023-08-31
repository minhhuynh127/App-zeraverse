import CategoryArticle from "@/src/app/components/Category/CategoryArticle/app.category-article";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="bg-trending max-w-full pt-4 pb-[100px] px-12 flex flex-col items-start gap-3 mt-[176px]">
      <h1 className="font-lato font-bold text-[28px] leading-[39.2px] text-[#FFFF]">
        Trending News
      </h1>
      <div className="flex justify-evenly items-center w-full gap-4">
        <CategoryArticle itemsPerPage={2} />
      </div>
      <div>
        <h1 className="font-lato font-bold text-[28px] leading-[39.2px] text-[#FFFF]">
          List Article category
        </h1>
        <div className="ml-4 mt-2">
          <ul className="text-pink-500">
            <Link href={"/article"} className="underline list-disc">
              All Article
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trending;
