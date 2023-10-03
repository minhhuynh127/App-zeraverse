import imageDefaul from "@/public/images/category-article/image-default.jpg";
import Image from "next/image";
import Link from "next/link";

const ArticleItem = ({
  article,
  className,
}: {
  article: any;
  className: string;
}) => {
  return (
    <>
      <Link
        href={`/article/${article?.slug}`}
        className={`${className} h-[250px] max-h-full flex items-center bg-gradient-to-br from-[#89F8FF]/25 via-[#FFA5EB]/25 to-[#FFF59E]/25 p-1 rounded-[20px]  gap-4 border border-pink-700 cursor-pointer`}
      >
        {article?.featured_image ? (
          <Image
            priority={true}
            src={article.featured_image}
            width={500}
            height={500}
            alt="gamePicture"
            className={`w-[40%] h-full rounded-[20px] object-cover`}
          />
        ) : (
          <Image
            priority={true}
            src={imageDefaul}
            width={500}
            height={500}
            alt="gamePicture"
            className={`w-[40%] h-full rounded-[20px] object-cover`}
          />
        )}

        <div className="w-[60%] h-full overflow-hidden flex flex-col gap-[10px] justify-center items-start px-4">
          <button className="w-[80px] h-[24px] px-[10px] py-[6px] rounded-[10px] bg-white font-nunito font-normal text-[10px]">
            Car Game
          </button>
          <h3 className="w-full  truncate font-lato font-bold text-2xl leading-[33.6px] text-white ">
            {article?.title}
          </h3>
          <p className="w-full break-words font-nunito font-light text-xs leading-[16.8px] text-white text-truncate">
            {article?.seo_description}
          </p>
          <span className="font-nunito font-light text-xs leading-[16.8px] text-white">
            {article?.created_at}
          </span>
        </div>
      </Link>
    </>
  );
};

export default ArticleItem;
