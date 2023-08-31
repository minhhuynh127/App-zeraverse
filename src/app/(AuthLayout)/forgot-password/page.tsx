"use client";
import logo from "@/public/images/logos/logo_02.png";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
  })
  .required();

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [disable, setDisable] = useState<boolean>(false);
  const onSubmit = async (data: {}) => {
    try {
      const response = await fetch(
        "https://user-api.zeraverse.io/api/v1/users/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setDisable(!disable);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="px-[61px] pt-[17px] pb-[40px] bg-black/70 rounded-[30px] flex flex-col justify-center items-center">
        <div>
          <Image src={logo} alt="logo" className="w-[200px] h-[108px]" />
        </div>
        <form
          action="/forgot-password"
          className="mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              {...register("email", { required: true })}
              type="text"
              className="w-[400px] h-[45px] bg-white rounded-[10px] pl-4 text-purple-700 text-xl"
            />
            <span className="font-nunito font-bold text-pink-700 text-base">
              {errors.email?.message}
            </span>
          </div>

          <div className="mt-[15px] flex justify-end items-center gap-4 mb-[150px]">
            <Link
              href={"/login"}
              className="w-[130px] h-9 rounded-[30px] px-[30px] py-[5px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-white text-back"
            >
              Back
            </Link>
            <button
              {...(disable ? { disabled: true } : {})}
              type="submit"
              className={`w-[130px] h-9 rounded-[30px] px-[30px] py-[5px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] hover:opacity-70 transition-opacity disabled:cursor-not-allowed disabled:opacity-70`}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
