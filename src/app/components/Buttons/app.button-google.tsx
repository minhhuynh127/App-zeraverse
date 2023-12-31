"use client";
import { signIn } from "next-auth/react";
import { memo } from "react";

const ButtonGoogle = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-[189px] h-9 flex justify-around items-center gap-2 py-[8px] px-[20px] rounded-[20px] font-lato font-bold text-base tracking-[0.2%] leading-[25.6px] bg-white"
    >
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_148_7334)">
          <path
            d="M23.9888 12.7338C23.9888 11.7095 23.9071 10.9621 23.7304 10.187H12.2393V14.8099H18.9843C18.8484 15.9588 18.114 17.6889 16.4821 18.8515L16.4592 19.0063L20.0925 21.8711L20.3442 21.8966C22.656 19.7236 23.9888 16.5262 23.9888 12.7338Z"
            fill="#4285F4"
          />
          <path
            d="M12.2393 24.9142C15.5438 24.9142 18.3179 23.8069 20.3442 21.8969L16.4821 18.8517C15.4486 19.5853 14.0615 20.0974 12.2393 20.0974C9.00273 20.0974 6.25576 17.9244 5.27654 14.9209L5.13301 14.9333L1.35507 17.9092L1.30566 18.049C3.31829 22.1182 7.45238 24.9142 12.2393 24.9142Z"
            fill="#34A853"
          />
          <path
            d="M5.27634 14.9209C5.01797 14.1458 4.86844 13.3153 4.86844 12.4572C4.86844 11.599 5.01797 10.7685 5.26275 9.99343L5.25591 9.82835L1.43062 6.80469L1.30547 6.86528C0.475969 8.55392 0 10.4502 0 12.4572C0 14.4641 0.475969 16.3603 1.30547 18.049L5.27634 14.9209Z"
            fill="#FBBC05"
          />
          <path
            d="M12.2393 4.8167C14.5374 4.8167 16.0877 5.8271 16.9717 6.67147L20.4258 3.23884C18.3044 1.23187 15.5438 0 12.2393 0C7.45238 0 3.31829 2.7959 1.30566 6.86517L5.26295 9.99332C6.25576 6.98979 9.00273 4.8167 12.2393 4.8167Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_148_7334">
            <rect width="24" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="font-normal text-xs font-lato leading-[19.2px] tracking-[0.2%] text-[#000000]">
        Continue with Google
      </span>
    </button>
  );
};

export default memo(ButtonGoogle);
