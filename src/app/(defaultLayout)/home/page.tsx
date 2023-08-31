import Game from "@/src/app/components/Games/app.game";
import Trending from "@/src/app/components/Trending/app.trending";
import CategoryItem from "@/src/app/components/Category/CategoryItem/app.category-item";
const HomePage = async () => {
  await console.log(123123);
  fetch(`https://user-api.zeraverse.io/api/v1/game/categories?page=1&limit=40`)
    .then((response) => {
      // Check if the response status is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((categories) => {
      console.log(categories);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });

  return (
    <div className="w-full flex flex-col gap-4">
      <Game />
      <CategoryItem />
      <Trending />
    </div>
  );
};

export default HomePage;
