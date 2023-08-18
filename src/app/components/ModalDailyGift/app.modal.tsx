"use client";
import { useState } from "react";
import Button from "../Buttons/app.button";
import DailyGiftList from "../DaiyGrftList/app.daily-gift-list";
const ModalDailyGift = () => {
  const [modal, setModal] = useState<boolean>(true);
  const hadleModal = () => {
    setModal(!modal);
  };
  return (
    // <!-- Modal -->
    <div>
      {modal && (
        <div
          className="fixed w-full h-full inset-0 bg-black/50 z-50"
          onClick={() => hadleModal()}
        >
          <div className="mx-auto mt-[80px] bg-transparent relative max-w-[534px] h-auto">
            <Button className="max-w-[250.44px] max-h-55px] rounded-[14px] py-1 px-[42px] bg-pink-700 text-white font-nunito font-semibold text-[28px] leading-[39.2px] absolute top-[-12px] left-[50%] translate-x-[-50%] shadow-innerBtn">
              Daily Gift
            </Button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full p-[14px] rounded-[21px] bg-gradient-to-t from-[#EF36C6] via-#C4B5FD to-[#9949FF]"
            >
              <div className="bg-gradient-to-t from-[#9949FF] via-#F4BFFF to-[#FDA3FF] w-full h-full rounded-[10px] shadow-inner1 px-[36px] py-[54px] flex justify-center items-center flex-wrap gap-[16px]">
                <DailyGiftList />
              </div>
            </div>
            <Button className="w-[223.89px] h-[86.22px] rounded-[25px] p-[6px]  bg-gradient-to-tl from-[#FF51EB] to-[#EDE342] text-white font-nunito font-semibold text-[28px] leading-[39.2px] absolute top-[90%] left-[50%] translate-x-[-50%] shadow-inner2">
              <span className=" w-full h-full border-[3.5px] border-white rounded-[25px] flex justify-center items-center">
                Clain
              </span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDailyGift;
