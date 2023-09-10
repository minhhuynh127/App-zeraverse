"use client";
import { useEffect, useState } from "react";
import CategoryItem from "./components/Category/CategoryItem/app.category-item";
import Footer from "./components/Footer/app.footer";
import Game from "./components/Games/app.game";
import ModalDailyGift from "./components/ModalDailyGift/app.modal";
import TopBar from "./components/TopBar/app.top-bar";
import Trending from "./components/Trending/app.trending";
import { useSession } from "next-auth/react";
const Page = () => {
  // const router = useRouter();
  // router.push("/home");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<any>();
  const [token, setToken] = useState<any>();
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    setUsername(localStorage.getItem("username"));
    username && token ? setIsLogin(!isLogin) : setIsLogin(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <div className="bg-body object-cover bg-cover">
      {isLogin && <ModalDailyGift />}
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
