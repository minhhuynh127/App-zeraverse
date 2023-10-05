"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { memo, useState } from "react";
import logo from "@/public/images/logos/logo_02.png";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthProvider";
import { createUsername } from "../../services/auth-service";

const schema = yup
  .object({
    username: yup
      .string()
      .required("*Please enter your username")
      .min(5, "*At least 5 characters")
      .max(64, "*At most 64 characters")
      .matches(
        /^[a-zA-z0-9_]{5,64}$/,
        "*Please enter a username following the rules below"
      ),
  })
  .required();
const CreateUsernamePage = () => {
  const [newUsername, setNewUsername] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { token } = useAuthContext();
  const onSubmit = async (data: { username: string }) => {
    data.username = data.username.toLowerCase();
    if (!isValid) return;
    try {
      await createUsername(newUsername, token).then((response: any) => {
        if (response?.success) {
          toast.success("Create username success...");
          router.push("/login");
        } else {
          router.push("/create-username");
        }
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="px-[61px] pt-[17px] pb-[40px] bg-black/70 rounded-[30px] flex flex-col justify-center items-center">
        <div>
          <Image
            priority={true}
            src={logo}
            alt="logo"
            className="w-[200px] h-[108px]"
          />
        </div>
        <form
          action="/forgot-password"
          className="mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold fot-lato text-[28px] leading-[39.2px] text-white">
            Create Username
          </h1>
          <span className="w-full h-[1px] bg-[#8657FF] mt-1 block"></span>
          <div className="flex flex-col gap-1 mt-[25px]">
            <label
              htmlFor=""
              className="text-white font-lato font-bold text-base leading-[25.6px] tracking-wide"
            >
              Please enter your username
            </label>
            <input
              {...register("username")}
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-[400px] h-[45px] bg-white rounded-[10px] pl-4 text-purple-700 text-xl"
            />
            <span className="font-nunito font-bold text-pink-700 text-base">
              {errors.username?.message}
            </span>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`w-[130px] h-9 mt-4 text-center rounded-[30px] px-[30px] py-[5px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] hover:opacity-70 transition-opacity disabled:cursor-not-allowed disabled:opacity-70`}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(CreateUsernamePage);
