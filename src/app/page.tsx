import CategoryItem from "./components/CategoryItem/app.category-item";
import Footer from "./components/Footer/app.footer";
import Game from "./components/Games/app.game";
import ModalDailyGift from "./components/ModalDailyGift/app.modal";
import TopBar from "./components/TopBar/app.top-bar";
import Trending from "./components/Trending/app.trending";
const Page = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // router.push("/home");
  return (
    <div className="bg-body object-cover bg-cover">
      <ModalDailyGift />
      <div className="flex px-[13px] py-[16px]">
        <div className="max-h-[314px] flex flex-col gap-4">
          <TopBar />
        </div>
        <div className="w-full ml-4 flex flex-col gap-4">
          <Game />
          <CategoryItem />
          <Trending />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
