import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthProvider";
import { getPurchaseHistory } from "../../services/game-service";
import { buyShopItem, getDetailItemShop } from "../../services/shop.service";
import palytimeDefault from "@/public/images/shops/playtime-default.png";

const ModalBuy = ({
  openModal,
  onClick,
  id,
  title,
}: {
  openModal: boolean;
  onClick: any;
  id: number | undefined;
  title: string;
}) => {
  const [detailItem, setDetailItem] = useState<any>({});

  useEffect(() => {
    if (id) {
      // console.log("idprops", id);
      getDetailItemShop(id, token).then((data: any) => {
        setDetailItem(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const { getUserInfo, setActivitiesInfo, setUserInfo, userInfo, token } =
    useAuthContext();
  const { zera } = userInfo || {};
  const handleBuyItem = async () => {
    try {
      const res = await buyShopItem(
        {
          item: parseInt(detailItem?.id),
        },
        token
      );
      if (res?.success) {
        Promise.all([
          getUserInfo(userInfo?.username, token)?.then((res: any) => {
            setUserInfo((prev: any) => ({ ...prev, ...res?.data }));
          }),
          getPurchaseHistory(userInfo?.username, token)?.then((data) =>
            setActivitiesInfo((prev: any) => {
              return { ...prev, purchaseHistory: data };
            })
          ),
        ]);
        toast.success("🦄 Success...!");
        onClick();
      } else {
      }
    } catch (e) {
      toast.success("🦄 Error...!");
    }
  };
  // console.log("data", detailAvatarShop);
  return (
    <div
      onClick={() => onClick()}
      className={`fixed w-[full] h-full inset-0 bg-black/50 z-50 transition-opacity ${
        openModal ? "animate-opacity block" : "hidden"
      }`}
    >
      <div
        className={`mx-auto w-[540px] h-[430px] mt-[80px] bg-transparent relative transition-all ${
          openModal ? "animate-fadeInModalEdit" : "animate-fadeOutModalEdit"
        }`}
      >
        <div className="min-w-[250.44px] max-h-[55px] rounded-[20px] py-4 px-[80px] bg-pink-700 text-white font-nunito font-bold text-[28px] leading-[39.2px] absolute top-[-12px] left-[50%] translate-x-[-50%] shadow-[rgb(0,0,0,0.4)_-4px_-4px_5px_0px_inset] whitespace-nowrap flex justify-center items-center">
          {title}
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full p-[8px] rounded-[21px] bg-gradient-to-t from-[#EF36C6] via-#C4B5FD to-[#9949FF]"
        >
          <div className=" bg-gradient-to-b from-[#570426] to-[#270010] w-full h-auto rounded-[21px] shadow-[rgba(0, 0, 0, 0.2)_0px_3px_3px_0px_inset] px-[36px] py-[54px] ">
            <div className="w-full flex justify-end items-start text-pink-400 font-bold">
              <button onClick={() => onClick()} className="">
                <IoCloseSharp size={40} />
              </button>
            </div>
            <div className="w-full h-auto flex flex-col gap-4 justify-center items-center">
              <div className="w-full flex flex-col gap-4 justify-center items-center">
                <div className="min-w-[210px] min-h-[210px] p-[6px] rounded-[20px] bg-gradient-to-b from-[#EF36C6] via-#C4B5FD to-[#9949FF]">
                  {detailItem?.url && (
                    <div className="bg-[#350F1E] rounded-[20px]">
                      <Image
                        priority={true}
                        alt=""
                        {...(title === "Playtimes"
                          ? { src: palytimeDefault }
                          : { src: detailItem?.url })}
                        width={500}
                        height={500}
                        className={` ${
                          title === "Cover" ? "w-[440px] " : "w-[204px]"
                        } h-[204px] object-cover rounded-[20px]`}
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-10 items-center justify-between">
                  <p className="text-white font-bold text-base font-nunito">
                    {detailItem?.name}
                  </p>
                  <div className="flex gap-2 items-center">
                    <span className="text-white font-bold text-base font-nunito">
                      {detailItem?.price}
                    </span>
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9846 7.32094C12.0191 4.13113 9.65491 1.51863 6.7041 1.48575C3.75329 1.45287 1.33324 4.01207 1.29876 7.20188C1.26428 10.3917 3.62843 13.0042 6.57924 13.0371C9.53005 13.0699 11.9501 10.5107 11.9846 7.32094Z"
                        fill="#B522E9"
                      />
                      <path
                        d="M4.42737 13.7473C1.11984 12.4295 -0.573463 8.45274 0.64545 4.87729C1.86766 1.30185 5.55075 -0.537721 8.85499 0.776732C12.1625 2.09119 13.8591 6.07134 12.6369 9.64678C11.4147 13.2222 7.73161 15.0618 4.42737 13.7473ZM8.49261 1.84034C5.72864 0.739943 2.64842 2.27849 1.63046 5.26862C0.609212 8.25875 2.02908 11.5867 4.79305 12.6837C7.55372 13.7841 10.6339 12.2456 11.6552 9.25546C12.6732 6.26533 11.2566 2.93739 8.49261 1.84034Z"
                        fill="#F761D6"
                      />
                      <path
                        d="M1.01112 5.02075C2.21027 1.5122 5.77806 -0.324022 9.03618 0.849955C8.97688 0.823198 8.91429 0.799785 8.85499 0.773028C5.55075 -0.538081 1.86766 1.30149 0.64545 4.87693C-0.573463 8.45238 1.11984 12.4292 4.42737 13.747C4.48997 13.7704 4.54926 13.7938 4.61186 13.8172C1.42621 12.4292 -0.188023 8.5293 1.01112 5.02075Z"
                        fill="#F579F8"
                      />
                      <path
                        d="M8.49282 1.83999C8.44011 1.81992 8.38411 1.79985 8.3314 1.77979C10.9899 2.94038 12.334 6.19809 11.3326 9.12801C10.3344 12.0579 7.35298 13.5931 4.63184 12.6165C4.68455 12.6399 4.73726 12.6633 4.78997 12.6834C7.55393 13.7838 10.6342 12.2452 11.6554 9.25511C12.6734 6.26498 11.2568 2.93704 8.49282 1.83999Z"
                        fill="#CE11B0"
                      />
                      <path
                        d="M4.90483 10.6458C4.66801 10.6458 4.47179 10.5983 4.31617 10.5032C4.16731 10.4081 4.06581 10.2813 4.01168 10.1228C3.95755 9.95793 3.95755 9.78041 4.01168 9.59021C4.06581 9.39368 4.17746 9.19714 4.34661 9.00061L7.84815 4.88287V5.37738H4.76274C4.49885 5.37738 4.29925 5.31715 4.16393 5.1967C4.0286 5.0699 3.96094 4.88921 3.96094 4.65464C3.96094 4.42007 4.0286 4.24255 4.16393 4.12209C4.29925 4.00163 4.49885 3.94141 4.76274 3.94141H8.721C8.95782 3.94141 9.15066 3.98896 9.29951 4.08405C9.45514 4.17915 9.56002 4.30595 9.61415 4.46444C9.66828 4.62294 9.66828 4.80046 9.61415 4.99699C9.56002 5.19353 9.44837 5.39006 9.27922 5.5866L5.77768 9.70433V9.20982H9.02548C9.2826 9.20982 9.47882 9.27005 9.61415 9.39051C9.75624 9.51097 9.82728 9.68848 9.82728 9.92306C9.82728 10.1576 9.75624 10.3383 9.61415 10.4651C9.47882 10.5856 9.2826 10.6458 9.02548 10.6458H4.90483Z"
                        fill="#8711A5"
                      />
                      <path
                        d="M4.48589 10.2269C4.24907 10.2269 4.05284 10.1793 3.89722 10.0842C3.74836 9.98911 3.64687 9.86231 3.59274 9.70382C3.53861 9.53898 3.53861 9.36146 3.59274 9.17127C3.64687 8.97473 3.75851 8.7782 3.92767 8.58166L7.42921 4.46393V4.95844H4.34379C4.07991 4.95844 3.88031 4.89821 3.74498 4.77775C3.60965 4.65095 3.54199 4.47027 3.54199 4.23569C3.54199 4.00112 3.60965 3.8236 3.74498 3.70315C3.88031 3.58269 4.07991 3.52246 4.34379 3.52246H8.30205C8.53887 3.52246 8.73171 3.57001 8.88057 3.66511C9.03619 3.76021 9.14107 3.887 9.1952 4.0455C9.24933 4.204 9.24933 4.38151 9.1952 4.57805C9.14107 4.77458 9.02943 4.97112 8.86027 5.16765L5.35873 9.28539V8.79088H8.60654C8.86365 8.79088 9.05988 8.85111 9.1952 8.97156C9.33729 9.09202 9.40834 9.26954 9.40834 9.50411C9.40834 9.73869 9.33729 9.91937 9.1952 10.0462C9.05988 10.1666 8.86365 10.2269 8.60654 10.2269H4.48589Z"
                        fill="#F761D6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {(zera < detailItem?.price || detailItem?.user_inventory) && (
                <p className="text-red-600 ">*Your balance is not enough</p>
              )}
              <div
                className={`w-[125px] h-[42px] rounded-[30px] bg-[#350F1E]  transition-colors text-white border border-white/50 flex justify-center items-center ${
                  zera < detailItem?.price ? "" : "hover:bg-violet-700"
                }`}
              >
                <button
                  disabled={
                    zera < detailItem?.price || detailItem?.user_inventory
                  }
                  className="w-full h-full"
                  onClick={() => handleBuyItem()}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuy;
