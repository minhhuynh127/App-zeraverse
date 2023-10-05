import { IoCloseSharp } from "react-icons/io5";
import InputCheckbox from "../InputCheckboc/app.input-checkbox";
import { useForm, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import { STATUS } from "../../utils/constant";
import { toast } from "react-toastify";
import { reportGame } from "../../services/game-service";
import { useAuthContext } from "../../context/AuthProvider";

const ModalReportGame = ({
  game,
  openModal,
  onClick,
}: {
  game: any;
  openModal: boolean;
  onClick: any;
}) => {
  const [status, setStatus] = useState(STATUS.NOT_START);
  const { token } = useAuthContext();
  const { handleSubmit, register, control } = useForm();

  const reasonReports = [
    "Lag",
    "Sound Quality",
    "Functions",
    "Text",
    "Animations",
  ];

  const onSubmit = async (formData: any) => {
    setStatus(STATUS.IN_PROGRESS);
    const title = Object?.keys(formData)?.filter(
      (key) => formData[key] === true
    );
    const content = formData?.content;

    try {
      const { data } = await reportGame(token, { title, content }, game?.slug);
      if (!data?.error) {
        setStatus(STATUS.SUCCESS);
      }
    } catch (e) {
      setStatus(STATUS.NOT_START);
      toast.error("Error...");
    }
  };

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      onClick();
      toast.success("You reported successful!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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
          className="w-full p-[4px] rounded-[21px] bg-[#9F9F9F]"
        >
          <div className=" bg-[#515151] w-full h-auto rounded-[21px] shadow-[rgba(0, 0, 0, 0.2)_0px_3px_3px_0px_inset] px-[36px] pt-[20px] pb-[60px]">
            <div className="w-full flex justify-between items-center text-pink-400 font-bold">
              <h3 className="font-lato font-semibold text-2xl text-white leading-[33.6px]">
                Report
              </h3>
              <button onClick={() => onClick()} className="">
                <IoCloseSharp size={20} color="white" />
              </button>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mt-3 gap-2">
                {reasonReports.map((item, index) => (
                  <div
                    key={index}
                    className="mb-[0.125rem] w-full cursor-pointer min-h-[1.5rem] pl-[1.5rem] flex justify-start items-center gap-2"
                  >
                    <InputCheckbox name={item} id={item} control={control}>
                      <p className="text-base">{item}</p>
                    </InputCheckbox>
                  </div>
                ))}

                <div className="w-full">
                  <label
                    htmlFor="content"
                    className="text-white font-semibold text-base font-lato"
                  >
                    Else
                  </label>
                  <textarea
                    placeholder="Write something..."
                    {...register("content")}
                    name="content"
                    id="content"
                    className="w-full h-[80px] text-black placeholder:text-violet-500 bg-white rounded-xl mt-1 p-3 outline-none resize-none"
                  ></textarea>
                </div>
                <div className="w-full flex justify-center items-center ">
                  <button className="py-[5px] px-[41px] bg-violet-500 font-lato font-bold text-white text-base rounded-[20px] w-[200px] h-[42px] hover:opacity-70 transition-opacity disabled:cursor-not-allowed disabled:opacity-70">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReportGame;
