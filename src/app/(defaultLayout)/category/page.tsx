import Button from "../../components/Buttons/app.button";
import CategoryItem from "../../components/CategoryItem/app.category-item";
import GameCategory from "../../components/Games/GameCategory/app.game-catgory";
import TrendingCAtegory from "../../components/Trending/TrendingCategory/app.trending-category";

const Category = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <GameCategory>
        <Button className="col-span-4 row-span-1 bg-gradient-to-t from-[#F265E4] via-#C4B5FD to-[#979BFF] w-[420px] h-[94px] rounded-[10px] hover:opacity-70 transition-opacity font-nunito font-bold leading-[39.px] text-white text-[28px]">
          .io Games
        </Button>
      </GameCategory>
      <CategoryItem />
      <TrendingCAtegory />
    </div>
  );
};

export default Category;
