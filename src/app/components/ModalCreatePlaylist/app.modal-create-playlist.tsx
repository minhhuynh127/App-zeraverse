import { IoCloseSharp } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { data } from "@/src/app/components/ModalCreatePlaylist/data";
import { useAuthContext } from "../../context/AuthProvider";
import {
  AddGameToPlaylist,
  createPlaylist,
  deleteItemGamePlaylist,
  deletePlayListById,
  getAllGamePlaylist,
  getAllPlaylist,
} from "../../services/game-service";
import { toast } from "react-toastify";
import { STATUS } from "../../utils/constant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalCreatePlaylist = ({
  game,
  openModal,
  onClick,
}: {
  game: any;
  openModal: boolean;
  onClick: any;
}) => {
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<number>();
  const [status, setStatus] = useState(STATUS.NOT_START);
  const { token, userInfo } = useAuthContext();
  const [allPlaylist, setAllPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState<string>();
  const createPlaylistFormSchema = yup.object({
    name: yup
      .string()
      .required("*Please enter name playlist!")
      .min(5, "*At least 5 characters!")
      .max(20, "*At most 20 characters!"),
  });
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(createPlaylistFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const getPlaylist = async () => {
    try {
      const data = await getAllPlaylist(userInfo?.username, game?.slug);
      setAllPlaylist(data);
      setStatus(STATUS.INIT);
    } catch (e) {}
  };

  useEffect(() => {
    if (userInfo?.username) {
      getPlaylist();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.username]);

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      getPlaylist();
      console.log("allPlaylist", allPlaylist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // Show form create playlist
  const showCreatePlaylist = () => {
    setOpenCreatePlaylist(!openCreatePlaylist);
  };

  const handleCreatePlaylist = async (formData: any) => {
    setStatus(STATUS.IN_PROGRESS);
    try {
      const data = await createPlaylist(token, formData);
      if (data?.success) {
        setStatus(STATUS.SUCCESS);
        setPlaylistName("");
        resetField("name");
        setOpenCreatePlaylist(false);
        toast.success("Create playlist successfully...");
      }
    } catch (e) {
      setStatus(STATUS.FAIL);
      toast.error("Error...");
    }
  };

  // Delete Playlist
  const delPlaylist = async (id: number) => {
    try {
      setStatus(STATUS.IN_PROGRESS);
      const data = await deletePlayListById(token, id);
      if (data?.success) {
        setStatus(STATUS.SUCCESS);
        toast.success("Success...");
      }
    } catch (e) {
      setStatus(STATUS.NOT_START);
      toast.error("Error...");
    }
  };

  // Add Game to Playlist
  const handleAddGameToPlaylist = async (item: any) => {
    try {
      setStatus(STATUS.IN_PROGRESS);
      const formData = { playlist_id: item?.id, game_detail_id: game?.id };
      if (item?.is_added) {
        try {
          const res = await getAllGamePlaylist(item?.id, token);
          const playlistItem = res?.find(
            (e: any) => e?.game_detail_id === game?.id
          );
          const data = await deleteItemGamePlaylist(playlistItem?.id, token);
          if (data.success) {
            setStatus(STATUS.SUCCESS);
          }
        } catch (e) {
          setStatus(STATUS.FAIL);
          toast.error("Error...");
        }
      } else {
        AddGameToPlaylist(token, formData).then((response) => {
          if (response?.success) {
            toast.success("Success...");
            setStatus(STATUS.SUCCESS);
          }
        });
      }
    } catch (e) {
      setStatus(STATUS.NOT_START);
      toast.error("Error...");
    }
  };

  useEffect(() => {
    if (!openModal) {
      setIdSelected(0);
      setOpenCreatePlaylist(false);
    }
  }, [openModal]);

  return (
    <div
      onClick={() => onClick()}
      className={`fixed w-[full] h-full inset-0 bg-black/50 z-50 transition-opacity cursor-default ${
        openModal ? "animate-opacity block" : "hidden"
      }`}
    >
      <div
        className={`mx-auto w-[540px] h-[430px] mt-[80px] bg-transparent relative transition-all ${
          openModal ? "animate-fadeInModalEdit" : "animate-fadeOutModalEdit"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full p-[4px] rounded-[21px] bg-gradient-to-t from-[#EF36C6] via-#C4B5FD to-[#9949FF] "
        >
          <div className=" bg-pink-900 w-full h-auto rounded-[21px] shadow-[rgba(0, 0, 0, 0.2)_0px_3px_3px_0px_inset] px-[36px] py-[20px]">
            <div className="w-full flex justify-end items-start text-pink-400 font-bold">
              <button onClick={() => onClick()} className="">
                <IoCloseSharp size={20} color="white" />
              </button>
            </div>
            <div
              className={`w-full flex flex-col gap-2 transition-all overflow-hidden   ${
                openCreatePlaylist
                  ? "h-[131px] visible animate-openCreatePlaylist"
                  : "h-[40px] animate-closeCreatePlaylist"
              }`}
            >
              <div
                className="w-full flex justify-between items-end
             mt-2"
              >
                <h3 className="text-white font-bold font-nunito text-[28px]">
                  Playlist
                </h3>
                <button
                  onClick={() => showCreatePlaylist()}
                  className="flex justify-center items-center gap-2"
                >
                  <IoIosAdd color="white" size={20} />
                  <span className="text-white font-nunito font-bold text-sm">
                    New list
                  </span>
                </button>
              </div>

              <div className="w-full mt-2 transition-all">
                <form
                  action=""
                  onSubmit={handleSubmit(handleCreatePlaylist)}
                  className=""
                >
                  <div>
                    {errors?.name?.message && (
                      <p className="text-[#f82a2a] text-base">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex justify-between items-center px-[15px] py-[15px] bg-violet-900 rounded-[10px] shadow-[rgba(0,0,0,0.2)_0px_10px_15px] ">
                    <input
                      type="text"
                      {...register("name")}
                      name="name"
                      id="name"
                      placeholder="New list"
                      className="border border-violet-400 rounded-[3px] h-[25px] text-white pl-2 py-3"
                    />
                    <div className="flex justify-center items-center gap-2">
                      <button
                        type="submit"
                        disabled={status === STATUS.IN_PROGRESS}
                      >
                        <span className="text-pink-400">Create</span>
                      </button>
                      <div
                        className="cursor-pointer"
                        onClick={() => showCreatePlaylist()}
                      >
                        <IoCloseSharp size={20} color="white" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full max-h-[400px] mt-4 flex flex-col gap-[2px] shadow-[rgba(0,0,0,0.2)_0px_10px_15px] overflow-y-scroll hide-scrollbar ">
              {allPlaylist?.length > 0 &&
                allPlaylist?.map((item: any) => (
                  <div
                    key={item?.id}
                    className={`w-full max-h-[60px] flex justify-between items-center pl-[15px] py-[15px] bg-violet-900 rounded-[10px]`}
                  >
                    <h3 className="font-lato font-bold text-sm text-white">
                      {item?.name}
                    </h3>
                    <div className="h-[60px] flex justify-center items-center gap-2">
                      {item?.is_added ? (
                        <button onClick={() => handleAddGameToPlaylist(item)}>
                          <IoIosAdd color="#30fa30" size={30} />
                        </button>
                      ) : (
                        <button onClick={() => handleAddGameToPlaylist(item)}>
                          <IoIosAdd color="white" size={30} />
                        </button>
                      )}
                      <div className="mr-3">
                        <button>
                          {idSelected === item?.id ? (
                            <span onClick={() => setIdSelected(0)}>
                              <IoCloseSharp size={20} color="white" />
                            </span>
                          ) : (
                            <span onClick={() => setIdSelected(item?.id)}>
                              <RiDeleteBin5Line color="white" size={20} />
                            </span>
                          )}
                        </button>
                      </div>
                      <div
                        onClick={() => delPlaylist(item?.id)}
                        className={`text-white font-bold cursor-pointer flex justify-center items-center text-sm gap-2 bg-[#C00000] h-full rounded-tr-[10px] rounded-br-[10px] overflow-hidden ${
                          idSelected === item?.id
                            ? "w-[100px] animate-openDelPlaylist opacity-1"
                            : "w-0 animate-closeDelPlaylist opacity-0"
                        }`}
                      >
                        <RiDeleteBin5Line color="white" size={20} />
                        Delete
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreatePlaylist;
