import React from "react";
import Footer from "../components/Footer/app.footer";
import TopBar from "../components/TopBar/app.top-bar";

const OnlyTopBarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-body object-cover bg-cover">
      <div className="flex py-[16px] gap-10 px-[40px]">
        <div className="max-h-[314px]">
          <TopBar />
        </div>
        <div className="flex flex-col justify-between gap-6 w-full h-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnlyTopBarLayout;
