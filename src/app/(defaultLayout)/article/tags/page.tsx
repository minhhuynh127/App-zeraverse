import Link from "next/link";
import React from "react";

const ArticleTagsPage = () => {
  return (
    <div className="w-full min-h-[500px] bg-black/80 border-[5px] border-pink-400 rounded-[20px]">
      <div className="font-lato font-bold text-lg text-white leading-[25.6px] pt-[60px] pl-[40px] flex gap-2">
        <Link href={"/"}>Home</Link>
        <span>/</span>
        <Link href={"/game/tags"}>All Game Tags</Link>
      </div>
      <h3 className="text-white font-lato font-bold text-[50px] pt-[40px] pl-[40px]">
        All Article Tags
      </h3>
    </div>
  );
};

export default ArticleTagsPage;
