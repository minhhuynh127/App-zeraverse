import logo from "@/public/images/logos/logo_02.png";
import Image from "next/image";
import Button from "@/src/app/components/Buttons/app.button";

const ForgotPasswordPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="px-[61px] pt-[17px] pb-[40px] bg-black/70 rounded-[30px] flex flex-col justify-center items-center">
        <Image src={logo} alt="logo" className="w-[200px] h-[108px]" />
        <form action="" className="mt-4">
          <h1 className="font-bold fot-lato text-[28px] leading-[39.2px] text-white">
            Submit to your email
          </h1>
          <span className="w-full h-[1px] bg-[#8657FF] mt-1 block"></span>
          <div className="flex flex-col gap-1 mt-[25px]">
            <label
              htmlFor=""
              className="text-white font-lato font-bold text-base leading-[25.6px] tracking-wide"
            >
              Please enter your email
            </label>
            <input
              type="text"
              className="w-[400px] h-[45px] bg-white rounded-[10px]"
            />
          </div>

          <div className="mt-[15px] flex justify-end items-center gap-4 mb-[150px]">
            <button className="w-[130px] h-9 rounded-[30px] px-[30px] py-[5px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-white text-back">
              Back
            </button>
            <Button className="w-[130px] h-9 rounded-[30px] px-[30px] py-[5px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] hover:opacity-70 transition-opacity">
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
