import Game from "@/src/app/components/Games/app.game";
import Trending from "@/src/app/components/Trending/app.trending";
import CategoryItem from "@/src/app/components/CategoryItem/app.category-item";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Game />
      <CategoryItem />
      <Trending />
    </div>
  );
};

export default HomePage;