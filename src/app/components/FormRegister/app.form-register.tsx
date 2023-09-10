"use client";

import logo from "@/public/images/logos/logo_02.png";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ButtonFacebook from "../Buttons/app.button-facebook";
import ButtonGoogle from "../Buttons/app.button-google";

const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(5),
  })
  .required();

const FormRegister = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isAccept, setIsAccept] = useState<boolean>(false);
  const [hidePass, setHidePass] = useState<boolean>(false);

  const onSubmit = (data: {}, e: any) => {
    e.preventDefault();

    fetch("https://user-api.zeraverse.io/api/v1/auth/register-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          router.push("/login");
        } else {
          alert("Có lỗi!!!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className=" h-[100vh] bg-cover flex justify-center items-center ">
      <div className="px-[61px] pt-[17px] pb-[40px] bg-black/70 rounded-[30px] flex flex-col justify-center items-center">
        <Image src={logo} alt="logo" className="w-[220px] h-[108px]" />
        <form
          action="/register"
          className="mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-white font-lato font-bold text-base leading-[25.6px] tracking-wide"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              id="email"
              className="w-[400px] h-[45px] bg-white rounded-[10px] pl-2 text-violet-700 text-xl"
            />

            <span className="text-pink-700 font-bold text-base">
              {errors.email?.message}
            </span>
          </div>
          <div className="flex flex-col gap-1 mt-[10px]">
            <label
              htmlFor=""
              className="text-white font-lato font-bold text-base leading-[25.6px] tracking-wide flex justify-between"
            >
              Password
              {/* <span className="font-inter text-xs font-normal text-pink-800 leading-4 flex justify-center items-end">
                *password not entered
              </span> */}
            </label>
            <div className="w-[400px] h-[45px] relative">
              <input
                {...register("password")}
                {...(hidePass ? { type: "text" } : { type: "password" })}
                id="password"
                className=" bg-white rounded-[10px] w-full h-full pl-2 text-violet-700 text-xl"
              />
              <div
                className="cursor-pointer"
                onClick={() => {
                  setHidePass(!hidePass);
                }}
              >
                <svg
                  className="absolute right-0 top-[50%] translate-y-[-50%] mr-4"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3372 6.7875C18.6021 4.88603 17.326 3.24164 15.6665 2.05755C14.007 0.873472 12.0369 0.201608 9.99973 0.125C7.96256 0.201608 5.99248 0.873472 4.33299 2.05755C2.67349 3.24164 1.39733 4.88603 0.662234 6.7875C0.612589 6.92482 0.612589 7.07518 0.662234 7.2125C1.39733 9.11397 2.67349 10.7584 4.33299 11.9424C5.99248 13.1265 7.96256 13.7984 9.99973 13.875C12.0369 13.7984 14.007 13.1265 15.6665 11.9424C17.326 10.7584 18.6021 9.11397 19.3372 7.2125C19.3869 7.07518 19.3869 6.92482 19.3372 6.7875ZM9.99973 11.0625C9.19625 11.0625 8.41081 10.8242 7.74273 10.3778C7.07466 9.93145 6.55395 9.29698 6.24647 8.55465C5.93899 7.81233 5.85854 6.99549 6.01529 6.20745C6.17205 5.4194 6.55896 4.69553 7.12711 4.12738C7.69526 3.55923 8.41913 3.17231 9.20718 3.01556C9.99523 2.85881 10.8121 2.93926 11.5544 3.24674C12.2967 3.55422 12.9312 4.07492 13.3776 4.743C13.824 5.41107 14.0622 6.19651 14.0622 7C14.0606 8.07693 13.632 9.10929 12.8705 9.8708C12.109 10.6323 11.0767 11.0608 9.99973 11.0625Z"
                    fill="#A78BFA"
                  />
                </svg>
                <svg
                  className="absolute right-0 top-[50%] translate-y-[-50%] mr-[23px]"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"
                    fill="#A78BFA"
                  />
                </svg>
              </div>
            </div>

            <span className="text-pink-700 font-bold text-base">
              {errors.password?.message}
            </span>
          </div>
          <div className="mt-1 flex justify-center items-center">
            <input
              onClick={() => setIsAccept(!isAccept)}
              type="checkbox"
              id="accept"
              className="relative appearance-none flex justify-center items-center w-[17px] h-[17px] rounded-[4px] border border-white bg-black/60 cursor-pointer focus:outline-none checked:bg-pink-900"
            />
            <label
              htmlFor=""
              className="text-xs font-medium font-lato leading-[19.2px] tracking-[0.2%] text-pink-50 ml-1"
            >
              I accept the
              <span className="text-violet-300">
                Terms & Conditions
              </span> and <span className="text-violet-300">Privacy</span>
            </label>
          </div>
          <div className="mt-[15px]">
            <button
              // {...(!isAccept && { disabled: true })}
              type="submit"
              className="w-[400px] h-9 py-[5px] px-[80px] rounded-[20px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-gradient-to-tl from-[#5200FF] via-#7270FF to-[#F265E4] text-[#FFFFFF] hover:opacity-70 transition-opacity disabled:cursor-not-allowed"
            >
              Register
            </button>
          </div>
        </form>
        <span className="text-sm font-semibold font-lato leading-[22.4px] tracking-[0.2%] text-[#FFFFFF] mt-[11px]">
          or sign in with
        </span>
        <div className="flex justify-between items-center gap-5 mt-[7px]">
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
        <div className="flex justify-center items-center gap-4 mt-[30px] text-base font-lato font-bold leading-[25.6px] tracking-[0.2%]">
          <h3 className="text-[#FFFFFF]">Already registered?</h3>
          <Link href={"/login"} className="text-violet-300">
            Sign in
          </Link>
        </div>
      </div>
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </div>
  );
};

export default memo(FormRegister);
