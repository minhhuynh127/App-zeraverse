import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/app.footer";
import TopBar from "../components/TopBar/app.top-bar";
import "react-toastify/dist/ReactToastify.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="">
        <div className="flex py-[16px] gap-10 px-[40px]">
          <div className="max-h-[314px] w-[204px]">
            <TopBar />
          </div>
          <div className="w-full min-h-[1000px]">{children}</div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
