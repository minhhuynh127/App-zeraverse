"use client";
import { useEffect, useState } from "react";
import DailyGiftList from "../DaiyGrftList/app.daily-gift-list";
import { useAuthContext } from "../../context/AuthProvider";
import { claimDailyBonus } from "../../services/user-service";
import { toast } from "react-toastify";
const ModalDailyGift = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { token, userInfo } = useAuthContext();
  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    if (userInfo.isClaimDailyBonus) {
      setModal(false);
    } else {
      setModal(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.isClaimDailyBonus]);
  const handleClaimDailyBonus = () => {
    token &&
      claimDailyBonus(token).then((response) => {
        if (response?.data) {
          handleModal();
          toast.success("Success...");
        }
      });
  };
  return (
    // <!-- Modal -->
    <div>
      {modal && (
        <div
          onClick={() => handleModal()}
          className={`fixed w-full h-full inset-0 bg-black/50 z-50 ${
            modal ? "animate-opacity" : "animate-opacityOut"
          }  transition-opacity`}
        >
          <div className="mx-auto mt-[80px] bg-transparent relative max-w-[534px] h-auto">
            <button className="max-w-[250.44px] max-h-55px] rounded-[14px] py-1 px-[42px] bg-pink-700 text-white font-nunito font-semibold text-[28px] leading-[39.2px] absolute top-[-12px] left-[50%] translate-x-[-50%] shadow-[rgb(0,0,0,0.4)_-4px_-4px_5px_0px_inset] ">
              Daily Gift
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full p-[14px] rounded-[21px] bg-gradient-to-t from-[#EF36C6] via-#C4B5FD to-[#9949FF]"
            >
              <div className="bg-gradient-to-t from-[#9949FF] via-#F4BFFF to-[#FDA3FF] w-full h-full rounded-[10px] shadow-[rgba(0, 0, 0, 0.2)_0px_3px_3px_0px_inset] px-[36px] py-[54px] flex justify-center items-center flex-wrap gap-[16px]">
                <DailyGiftList />
              </div>
            </div>
            <button
              onClick={() => handleClaimDailyBonus()}
              className="w-[223.89px] h-[86.22px] rounded-[25px] p-[6px]  bg-gradient-to-tl from-[#FF51EB] to-[#EDE342] text-white font-nunito font-semibold text-[28px] leading-[39.2px] absolute top-[90%] left-[50%] translate-x-[-50%] shadow-[rgba(255,255,255,0.4)_0px_0px_25px_10px]"
            >
              <span className=" w-full h-full border-[3.5px] border-white rounded-[25px] flex justify-center items-center">
                Clain
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDailyGift;
