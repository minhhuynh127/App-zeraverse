import Button from "@/src/app/components/Buttons/app.button";
import CategoryArticle from "@/src/app/components/Category/CategoryArticle/app.category-article";
import React from "react";

const CategoryArticlePage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Button className="bg-gradient-to-t from-[#F265E4] via-#C4B5FD to-[#979BFF] w-[420px] h-[94px] rounded-[10px] hover:opacity-70 transition-opacity font-nunito font-bold leading-[39.px] text-white text-[28px]">
        Article
      </Button>
      <CategoryArticle itemsPerPage={4} />
    </div>
  );
};

export default CategoryArticlePage;
