import Button from "@/src/app/components/Buttons/app.button";
import CategoryItem from "@/src/app/components/Category/CategoryItem/app.category-item";
import GameCategoryAll from "@/src/app/components/Games/GameCategoryAll/app.all-category";
import TrendingCategory from "@/src/app/components/Trending/TrendingCategory/app.trending-category";

const CategoryAllPage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Button className="  bg-gradient-to-t from-[#F265E4] via-#C4B5FD to-[#979BFF] w-[420px] h-[94px] rounded-[10px] hover:opacity-70 transition-opacity font-nunito font-bold leading-[39.px] text-white text-[28px]">
        .io Games
      </Button>
      <GameCategoryAll></GameCategoryAll>
      {/* <CategoryItem /> */}
      <TrendingCategory />
    </div>
  );
};

export default CategoryAllPage;
