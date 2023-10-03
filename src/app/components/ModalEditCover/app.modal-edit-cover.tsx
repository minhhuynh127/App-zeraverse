import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthProvider";
import { getUser, updataUser } from "../../services/user-service";
import { toast } from "react-toastify";

const ModalEditCover = ({
  info,
  openModal,
  onClick,
  tokenUser,
}: {
  info: any;
  openModal: boolean;
  onClick: () => void;
  tokenUser: string;
}) => {
  const { dataPurchaseHistory, userInfo, setUserInfo, token, logOut } =
    useAuthContext();
  const { username } = userInfo || {};
  const { cover } = dataPurchaseHistory;
  const updateCover = async (idCover: number) => {
    const formData = {
      cover: idCover,
    };
    try {
      const res = await updataUser(formData, token);
      if (res) {
        toast.success("Success...");
        const { data } = await getUser(username, token);
        // console.log("data", data);
        setUserInfo({ ...userInfo, ...data });
        onClick();
      } else {
        toast.error("Error...");
      }
    } catch (e) {
      throw e;
    }
  };
  return (
    <div
      onClick={() => onClick()}
      className={`fixed w-[full] h-full inset-0 bg-black/50 z-50 transition-opacity ${
        openModal ? "animate-opacity block" : "hidden"
      }`}
    >
      <div
        className={`mx-auto mt-[80px] px-[100px] bg-transparent relative w-[1340px] h-auto ${
          openModal ? "animate-fadeInModalEdit" : "animate-fadeOutModalEdit"
        }  transition-all`}
      >
        <div className="min-w-[250.44px] max-h-55px] rounded-[20px] py-4 px-[80px] bg-pink-700 text-white font-nunito font-bold text-[28px] leading-[39.2px] absolute top-[-12px] left-[50%] translate-x-[-50%] shadow-[rgb(0,0,0,0.4)_-4px_-4px_5px_0px_inset] whitespace-nowrap flex justify-center items-center">
          Edit Cover Page
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full p-[8px] rounded-[21px] bg-gradient-to-t from-[#EF36C6] via-#C4B5FD to-[#9949FF]"
        >
          <div className=" bg-gradient-to-b from-[#740B99] to-[#2F0652] w-full h-auto rounded-[21px] shadow-[rgba(0, 0, 0, 0.2)_0px_3px_3px_0px_inset] px-[36px] py-[54px] ">
            <div className="w-full flex justify-end items-start text-pink-400 font-bold">
              <button className="" onClick={() => onClick()}>
                <IoCloseSharp size={40} />
              </button>
            </div>
            <div className="w-full mt-[50px] flex justify-center items-center gap-[16px]">
              {cover?.map((item: any, idx: number) => (
                <button
                  type="submit"
                  onClick={() => updateCover(item?.item_info?.id)}
                  key={idx}
                  className="w-[50%] h-[204px] relative group transition-all overflow-hidden rounded-[10px]"
                >
                  <Image
                    priority={true}
                    src={item.item_info.url}
                    width={500}
                    height={500}
                    alt=""
                    className="object-cover cursor-grabbing transition-all group-hover:scale-105 w-full h-full rounded-[10px]"
                  />
                  <div className="absolute animate-opacity w-full h-full bg-black/50 inset-0 border-[4px] border-pink-500 hidden group-hover:block rounded-[10px] transition-all duration-500"></div>
                  {userInfo.cover === item?.item_info.url && (
                    <div className="absolute w-full h-full bg-black/50 inset-0 border-[4px] text-white border-pink-500 z-20 rounded-[10px]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditCover;
