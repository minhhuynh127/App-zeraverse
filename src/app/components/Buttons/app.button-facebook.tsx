"use client";
import React from "react";
import { signIn } from "next-auth/react";

const ButtonFacebook = () => {
  return (
    <button
      onClick={() => signIn()}
      className="w-[192px] h-9 flex justify-around items-center gap-2 py-[8px] px-[14px] rounded-[20px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-white"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_148_7355)">
          <path
            d="M25 12.5C25 5.59649 19.4035 0 12.5 0C5.59648 0 0 5.59639 0 12.5C0 18.7391 4.57109 23.9105 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.7461C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6359 4.88281 18.0664 5.12695 18.0664 5.12695V8.20313H16.4902C14.9373 8.20313 14.4531 9.1667 14.4531 10.1553V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.4289 23.9105 25 18.7392 25 12.5Z"
            fill="#1877F2"
          />
          <path
            d="M17.3657 16.1133L17.9199 12.5H14.4531V10.1553C14.4531 9.1666 14.9374 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6359 4.88281 15.2683 4.88281C12.4131 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C11.193 24.9494 11.846 25.0002 12.5 25C13.154 25.0002 13.807 24.9494 14.4531 24.8481V16.1133H17.3657Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_148_7355">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span className="font-normal text-xs font-lato leading-[19.2px] tracking-[0.2%] text-[#000000]">
        Continue with Facebook
      </span>
    </button>
  );
};

export default ButtonFacebook;
