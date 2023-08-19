"use client";
import logoTopbar from "@/public/images/logos/logo_02.png";
import Category from "@/src/app/components/CategoryTopBar/app.category";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Button from "../Buttons/app.button";
import SearchModal from "../SearchModal/app.search-modal";
import TopBarLogin from "../TopBarLogin/app.tap-bar-login";
import userImage from "@/public/images/user-images/user-image-1.png.png";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./fonts/digital-7.ttf",
  display: "swap",
});

const TopBar = () => {
  const check: boolean = false;
  // Open menu
  const [open, setOpen] = useState<boolean>(false);
  const hadleShowCategory = () => {
    setOpen(!open);
  };

  // Search
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const hadleSearch = () => {
    setIsSearch(!isSearch);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-top-bar object-cover w-[204px] ml-[11px] rounded-[20px] flex flex-col items-center px-[20px] py-[11px] box-border">
        <Image
          src={logoTopbar}
          alt="logo top bar"
          className="max-w-[134px] max-h-[72px] mt-[10px]"
        />
        <ul className="flex justify-between items-center gap-4 mt-[3px] py-[7px] px-[5.25px]">
          <li className="relative">
            <button onClick={() => hadleShowCategory()}>
              <svg
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 26.25C0.25 27.2165 1.0335 28 2 28L30 28C30.9665 28 31.75 27.2165 31.75 26.25C31.75 25.2835 30.9665 24.5 30 24.5L2 24.5C1.0335 24.5 0.25 25.2835 0.25 26.25ZM0.25 14C0.25 14.9665 1.0335 15.75 2 15.75L14.67 15.75C15.6365 15.75 16.42 14.9665 16.42 14C16.42 13.0335 15.6365 12.25 14.67 12.25L2 12.25C1.0335 12.25 0.25 13.0335 0.25 14ZM0.25 1.75C0.25 2.7165 1.0335 3.5 2 3.5L30 3.5C30.9665 3.5 31.75 2.7165 31.75 1.75C31.75 0.783503 30.9665 1.90735e-06 30 1.90735e-06L2 1.90735e-06C1.0335 1.90735e-06 0.25 0.783503 0.25 1.75Z"
                  fill="#C4B5FD"
                />
              </svg>
              <svg
                className="block absolute top-[50%] translate-y-[-50%] right-0"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.200195 0.48002L4.8202 5.52002L9.4402 0.48002L0.200195 0.48002Z"
                  fill="#C4B5FD"
                />
              </svg>
            </button>
          </li>
          <li>
            <button>
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3125 2.97477e-08C27.3102 -0.000122538 28.2708 0.378517 29.0001 1.0594C29.7293 1.74028 30.173 2.67262 30.2413 3.668L30.25 3.9375V23.625C30.2496 23.8437 30.3311 24.0545 30.4784 24.2161C30.6257 24.3777 30.8282 24.4783 31.0459 24.498C31.2637 24.5178 31.481 24.4553 31.655 24.3229C31.8289 24.1904 31.947 23.9977 31.986 23.7825L32 23.625V5.2745C32.9134 5.37663 33.7623 5.79506 34.3996 6.4573C35.0369 7.11954 35.4225 7.98386 35.4895 8.9005L35.5 9.1875V22.3125C35.5001 23.7652 34.9443 25.163 33.9466 26.2189C32.9489 27.2749 31.5849 27.909 30.1345 27.9913L29.8125 28H6.1875C4.73476 28.0001 3.33705 27.4443 2.2811 26.4466C1.22514 25.4489 0.590998 24.0849 0.50875 22.6345L0.5 22.3125V3.9375C0.499877 2.93978 0.878517 1.97921 1.5594 1.24993C2.24028 0.52065 3.17262 0.0770387 4.168 0.00875023L4.4375 2.97477e-08H26.3125ZM13.184 12.25H7.059C6.7109 12.25 6.37706 12.3883 6.13092 12.6344C5.88478 12.8806 5.7465 13.2144 5.7465 13.5625V19.6875C5.7465 20.412 6.3345 21 7.059 21H13.184C13.5321 21 13.8659 20.8617 14.1121 20.6156C14.3582 20.3694 14.4965 20.0356 14.4965 19.6875V13.5625C14.4965 13.2144 14.3582 12.8806 14.1121 12.6344C13.8659 12.3883 13.5321 12.25 13.184 12.25ZM23.691 18.375H19.3195L19.141 18.3872C18.8116 18.4326 18.5116 18.6013 18.3018 18.8592C18.0919 19.1172 17.9878 19.4452 18.0105 19.777C18.0331 20.1087 18.1809 20.4195 18.4239 20.6465C18.6669 20.8736 18.987 20.9999 19.3195 21H23.691L23.8695 20.9878C24.1989 20.9424 24.4989 20.7737 24.7087 20.5158C24.9186 20.2578 25.0227 19.9298 25 19.598C24.9774 19.2663 24.8296 18.9555 24.5866 18.7285C24.3436 18.5014 24.0235 18.3751 23.691 18.375ZM11.8715 14.875V18.375H8.3715V14.875H11.8715ZM23.6875 12.25L19.316 12.2587L19.1375 12.2692C18.8049 12.3113 18.5009 12.4792 18.2881 12.7382C18.0753 12.9973 17.9697 13.328 17.993 13.6625C18.0163 13.997 18.1667 14.3099 18.4133 14.537C18.66 14.7641 18.9842 14.8881 19.3195 14.8837L23.6928 14.875L23.8695 14.8628C24.1991 14.8174 24.4992 14.6486 24.709 14.3904C24.9189 14.1323 25.0229 13.8041 25 13.4722C24.9771 13.1403 24.829 12.8294 24.5857 12.6026C24.3424 12.3757 24.0219 12.2497 23.6893 12.25H23.6875ZM23.6893 6.132H7.059L6.8805 6.14425C6.55106 6.18958 6.25111 6.35826 6.04126 6.61623C5.8314 6.87419 5.72729 7.20219 5.74996 7.53396C5.77262 7.86573 5.92038 8.17652 6.16336 8.40355C6.40635 8.63057 6.72646 8.7569 7.059 8.757H23.691L23.8695 8.7465C24.2018 8.70436 24.5053 8.53678 24.7181 8.2781C24.9308 8.01941 25.0366 7.68918 25.0138 7.35503C24.991 7.02088 24.8413 6.7081 24.5954 6.48072C24.3495 6.25335 24.0242 6.12859 23.6893 6.132Z"
                  fill="#C4B5FD"
                />
              </svg>
            </button>
          </li>
          <li>
            <button onClick={() => hadleSearch()}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3926 19.7671H21.0101L20.5201 19.2946C22.2944 17.2366 23.2695 14.6093 23.2676 11.8921C23.2676 9.64233 22.6004 7.44309 21.3505 5.57248C20.1006 3.70187 18.3241 2.24391 16.2456 1.38297C14.1671 0.522019 11.88 0.296756 9.67343 0.735662C7.4669 1.17457 5.44006 2.25793 3.84924 3.84875C2.25842 5.43958 1.17506 7.46641 0.736151 9.67294C0.297244 11.8795 0.522507 14.1666 1.38345 16.2451C2.2444 18.3236 3.70236 20.1002 5.57297 21.3501C7.44358 22.6 9.64282 23.2671 11.8926 23.2671C14.7101 23.2671 17.3001 22.2346 19.2951 20.5196L19.7676 21.0096V22.3921L26.7676 29.3746L29.3751 26.7671L22.3926 19.7671ZM11.8926 19.7671C7.53508 19.7671 4.01758 16.2496 4.01758 11.8921C4.01758 7.53459 7.53508 4.01709 11.8926 4.01709C16.2501 4.01709 19.7676 7.53459 19.7676 11.8921C19.7676 16.2496 16.2501 19.7671 11.8926 19.7671Z"
                  fill="#C4B5FD"
                />
              </svg>
              {isSearch && <SearchModal onClick={() => hadleSearch()} />}
            </button>
          </li>
        </ul>

        <span className="w-full h-[2px] bg-[#8657FF] mt-4"></span>
        {open && <Category />}
        {open && <span className="w-full h-[2px] bg-[#8657FF] mt-4"></span>}
        {/* user login */}
        {check && (
          <div className="flex flex-col justify-center items-center mt-[18px]">
            <div>
              <Image src={userImage} alt="" />
            </div>
            <span className="font-lato font-medium text-base leading-[25.6px] tracking-[.2%] text-[#FFFFFF]">
              Username
            </span>
            <div className="w-full bg-pink-700 h-[34px] rounded-[10px] flex justify-center items-center mt-[20px]">
              <span
                className={`${myFont.className} text-[#FFFF] text-base font-normal leading-[20.66px] tracking-[2px]`}
              >
                00:60:00
              </span>
            </div>
          </div>
        )}

        {!check && (
          <div className="flex flex-col justify-between items-center mt-[18px]">
            <div className="flex flex-col justify-between items-center">
              <Link href={"/login"}>
                <Button className="flex justify-center items-center w-[125px] h-9 rounded-[10px] font-nunito font-semibold text-base tracking-[0.2%] text-center leading-[25.6px] bg-gradient-to-tl from-[#AF1BA0] via-#BB37AE to-[#4341D1] text-[#FFFFFF] hover:opacity-70 transition-opacity">
                  Login
                </Button>
              </Link>
              <Link
                href={"/register"}
                className="font-nunito font-normal text-sm leading-[22.4px] tracking-[0.2%] text-center text-violet-400 mt-[3px]"
              >
                Register
              </Link>
            </div>
            <div className="w-full bg-pink-700 h-[34px] rounded-[10px] flex justify-center items-center mt-[59px]">
              <span
                className={`${myFont.className} text-[#FFFF] text-base font-normal leading-[20.66px] tracking-[2px]`}
              >
                00:60:00
              </span>
            </div>
          </div>
        )}
      </div>
      {check && <TopBarLogin />}
    </div>
  );
};
export default TopBar;
