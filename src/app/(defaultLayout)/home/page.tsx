import Game from "@/src/app/components/Games/app.game";
import Trending from "@/src/app/components/Trending/app.trending";
import CategoryItem from "@/src/app/components/Category/CategoryItem/app.category-item";
const HomePage = async () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Game />
      <CategoryItem />
      <Trending limit={2} page={2} />
    </div>
  );
};

export default HomePage;
