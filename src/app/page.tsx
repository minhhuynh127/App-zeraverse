"use client";
import { useEffect, useState } from "react";
import CategoryItem from "./components/Category/CategoryItem/app.category-item";
import Footer from "./components/Footer/app.footer";
import Game from "./components/Games/app.game";
import ModalDailyGift from "./components/ModalDailyGift/app.modal";
import TopBar from "./components/TopBar/app.top-bar";
import Trending from "./components/Trending/app.trending";
import { useAuthContext } from "./context/AuthProvider";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const { isLoginEmail, userInfo } = useAuthContext();
  const [isLoginGoogle, setisLoginGoogle] = useState<boolean>(false);
  const { data: session } = useSession();
  useEffect(() => {
    if (session && session.user) {
      setisLoginGoogle(!isLoginGoogle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-body object-cover bg-cover ">
        {(isLoginEmail || isLoginGoogle) && <ModalDailyGift />}
        <div className="flex px-[40px] py-[16px] gap-10">
          <div className="max-h-[314px] flex flex-col gap-4 ">
            <TopBar />
          </div>
          <div className="w-full flex flex-col gap-4">
            <Game />
            <CategoryItem />
            <Trending limit={2} page={1} />
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;
