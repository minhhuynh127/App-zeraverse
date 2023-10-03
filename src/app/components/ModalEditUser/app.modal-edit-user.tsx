import avatarDefault from "@/public/images/user-images/avatar-history.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthProvider";
import { getUser, updataUser } from "../../services/user-service";
const ModalEditUser = ({
  info,
  openModal,
  onClick,
  itemsPerPage,
  tokenUser,
}: {
  info: any;
  openModal: boolean;
  onClick: () => void;
  itemsPerPage: number;
  tokenUser: string;
}) => {
  const { userInfo, token, dataPurchaseHistory, setUserInfo, logOut } =
    useAuthContext();
  const checIsMe = info?.username === userInfo?.username;
  const { avatar } = dataPurchaseHistory;
  const { username, quote } = userInfo;
  const [quoteUser, setQuoteUser] = useState<string>();
  const [idAvatarUser, setIdAvatarUser] = useState<number>();
  const [urlAvatar, setUrlAvatarUser] = useState<string>();
  const handleAvatar = (idAvatar: number, urlAvatar: string) => {
    setIdAvatarUser(idAvatar);
    setUrlAvatarUser(urlAvatar);
  };

  useEffect(() => {
    if (!openModal) {
      setUrlAvatarUser(info?.avatar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  useEffect(() => {
    if (checIsMe) setQuoteUser(info.quote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.username]);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username,
      quote,
    },
  });
  const onSubmit = async () => {
    // console.log("idAvatarUser", idAvatarUser);

    try {
      const formData = {
        avatar: idAvatarUser,
        quote: quoteUser,
      };
      const res = await updataUser(formData, token);
      if (res) {
        const { data } = await getUser(username, token);
        setUserInfo({ ...userInfo, ...data });
        toast.success("🦄 Success...!");
        onClick();
      }
    } catch (e) {
      toast.error("🦄 Please Login...!");
    }
  };

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a lo?cal state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = avatar?.slice(itemOffset, endOffset);
  const pageCount =
    avatar?.length > 0 ? Math.ceil(avatar?.length / itemsPerPage) : 0;

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % avatar?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div
      onClick={() => onClick()}
      className={`fixed w-[full] h-full inset-0 bg-black/50 z-50 transition-opacity ${
        openModal ? "animate-opacity block" : "hidden"
      }`}
    >
      <div
        className={`mx-auto mt-[50px] px-[100px] bg-transparent relative w-[1340px] h-auto ${
          openModal ? "animate-fadeInModalEdit" : "animate-fadeOutModalEdit"
        }  transition-all`}
      >
        <div className="min-w-[250.44px] max-h-55px] rounded-[20px] py-4 px-[80px] bg-pink-700 text-white font-nunito font-bold text-[28px] leading-[39.2px] absolute top-[-12px] left-[50%] translate-x-[-50%] shadow-[rgb(0,0,0,0.4)_-4px_-4px_5px_0px_inset] whitespace-nowrap flex justify-center items-center">
          Edit Profile
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-auto mt-[16px] flex justify-start items-start gap-[30px]"
            >
              <div className="w-[200px] flex flex-col justify-center items-center  gap-4">
                {checIsMe && (
                  <button className="w-full h-[200px] rounded-[20px]">
                    {urlAvatar ? (
                      <Image
                        priority={true}
                        src={urlAvatar}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full rounded-[20px]"
                      />
                    ) : (
                      <Image
                        priority={true}
                        src={avatarDefault}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full rounded-[20px]"
                      />
                    )}
                  </button>
                )}
                <div className="w-full bg-[#844E9D] px-4 py-2 text-center rounded-[20px]">
                  <span className="text-black/50 font-bold text-base">
                    {info.username}
                  </span>
                </div>
                <div className="w-full h-[200px] overflow-hidden relative">
                  <textarea
                    className="w-full h-full bg-white/95 rounded-[20px] p-4 text-xl"
                    name="quote"
                    id="quote"
                    value={quoteUser}
                    onChange={(e) => setQuoteUser(e?.target.value)}
                  />
                  <span className="absolute right-2 bottom-2 text-gray-400">
                    <RiEdit2Fill size={30} />
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-[125px] h-9 rounded-[10px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] hover:opacity-70 transition-opacity shadow-[rgba(255,255,255,0.4)_0px_0px_25px_5px]"
                >
                  Save
                </button>
              </div>
              <span className="w-[3px] min-h-[524px] h-auto bg-pink-300"></span>
              <div className="w-full flex justify-center items-center flex-wrap gap-4">
                {currentItems?.map((item: any, idx: number) => (
                  <div
                    onClick={() =>
                      handleAvatar(item?.item_info?.id, item?.item_info?.url)
                    }
                    key={idx}
                    className="w-[200px] h-[200px] relative group transition-all overflow-hidden rounded-[20px]"
                  >
                    {item?.item_info?.url && (
                      <Image
                        priority={true}
                        src={item.item_info.url}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover cursor-grabbing transition-all group-hover:scale-105 w-full h-full rounded-[20px]"
                      />
                    )}
                    <div className="absolute animate-opacity w-full h-full bg-black/50 inset-0 border-[4px] border-pink-500 hidden group-hover:block rounded-[20px] transition-all duration-500"></div>
                    {urlAvatar === item?.item_info.url && (
                      <div className="absolute w-full h-full bg-black/50 inset-0 border-[4px] text-white border-pink-500 z-20 rounded-[20px]"></div>
                    )}
                  </div>
                ))}
                {itemsPerPage > 2 && (
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={7}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName=" w-full flex justify-center items-center gap-[32px] text-white font-nunito font-bold text-sm mt-10"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    nextClassName="w-[8px] h-[14px]"
                    nextLinkClassName="w-[24px] h-[24px]  rounded-[5px] bg-violet-900 shadow-[#8052C7_-3px_-3px_3px_0px_inset] px-2 py-1"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="text-pink-400"
                    previousClassName="w-[8px] h-[14px]"
                    previousLinkClassName="w-[24px] h-[24px]  rounded-[5px] bg-violet-900 shadow-[#8052C7_-3px_-3px_3px_0px_inset] px-2 py-1 "
                    disabledLinkClassName="disabled:opacity-70 cursor-default"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditUser;
