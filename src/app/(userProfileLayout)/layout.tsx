"use client";
import avatarProfileUer from "@/public/images/user-images/user-profile-avatar.png";
import bgProfileUer from "@/public/images/user-images/user-profile-bg.png";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer/app.footer";
import TopBar from "../components/TopBar/app.top-bar";
import { useRouter } from "next/navigation";
import { createContext } from "react";
// `https://user-api.zeraverse.io/api/v1/users/profile/${param}`
let userLoginProfile: any = {};
async function getArtist(param: string) {
  fetch(`https://user-api.zeraverse.io/api/v1/users/profile/${param}`)
    .then((response) => {
      // Check if the response status is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((userProfile) => {
      return (userLoginProfile = userProfile.data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
}

export const userContext = createContext(userLoginProfile);
const LayoutUserProfile = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  let username: string = "";
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    const userData: any = localStorage.getItem("userData");
    const userLogin = JSON.parse(userData)?.data;
    if (userData) {
      username = userLogin?.username;
      getArtist(username);
      console.log(userLoginProfile);
    } else {
      router.push("/login");
    }
  }

  return (
    <userContext.Provider value={userLoginProfile}>
      <div className="bg-body object-cover bg-cover">
        <div className="flex px-[13px] py-[16px] gap-4">
          <div className="max-h-[314px]">
            <TopBar />
          </div>
          <div className="flex flex-col justify-between gap-6 w-full h-full">
            <div className="relative">
              <div>
                <Image
                  src={bgProfileUer}
                  alt=""
                  className="w-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex justify-between items-end w-full absolute top-[70%]">
                <div className="flex gap-4 justify-end">
                  <div>
                    <Image
                      src={avatarProfileUer}
                      alt=""
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end mt-16">
                    <h3 className="text-white font-semibold text-[28px] leading-[39.2px]">
                      {username ? username : "Username"}
                    </h3>
                    <p className="font-lato font-medium text-base text-white leading-[25.6px]">
                      {userLoginProfile.quote
                        ? userLoginProfile.quote
                        : "User’s quote:Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et."}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-[10px] py-1 px-[10px] bg-violet-900 rounded-[10px]">
                  <div className="flex gap-[5px]">
                    <span className="font-nunito font-black text-2xl leading-[32.74px] text-white">
                      {userLoginProfile.zera ? userLoginProfile.zera : ""}
                    </span>
                    <svg
                      width="31"
                      height="33"
                      viewBox="0 0 31 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.637 16.5057C27.7182 9.03829 22.15 2.9224 15.2002 2.84543C8.25031 2.76847 2.55051 8.75957 2.4693 16.2269C2.3881 23.6943 7.95624 29.8102 14.9061 29.8872C21.8559 29.9641 27.5557 23.973 27.637 16.5057Z"
                        fill="#B522E9"
                      />
                      <path
                        d="M9.8387 31.5492C2.04867 28.4642 -1.93945 19.1545 0.931378 10.7843C3.80996 2.41415 12.4845 -1.89229 20.2668 1.18486C28.0568 4.262 32.0527 13.5796 29.1741 21.9497C26.2955 30.3199 17.621 34.6263 9.8387 31.5492ZM19.4133 3.67477C12.9035 1.09873 5.64884 4.70048 3.25132 11.7004C0.846029 18.7003 4.19015 26.4911 10.6999 29.0593C17.202 31.6353 24.4566 28.0335 26.8619 21.0336C29.2594 14.0337 25.9231 6.24297 19.4133 3.67477Z"
                        fill="#F761D6"
                      />
                      <path
                        d="M1.79263 11.1203C4.6169 2.90677 13.0199 -1.39184 20.6935 1.35645C20.5539 1.29381 20.4064 1.239 20.2668 1.17636C12.4845 -1.89295 3.80996 2.41349 0.931378 10.7836C-1.93945 19.1538 2.04867 28.4635 9.8387 31.5485C9.98612 31.6033 10.1258 31.6581 10.2732 31.7129C2.77026 28.4635 -1.03165 19.3339 1.79263 11.1203Z"
                        fill="#F579F8"
                      />
                      <path
                        d="M19.4134 3.67414C19.2892 3.62717 19.1573 3.58018 19.0332 3.5332C25.2947 6.25017 28.4603 13.8765 26.1016 20.7355C23.7506 27.5944 16.7287 31.1884 10.3198 28.902C10.444 28.9568 10.5681 29.0117 10.6923 29.0586C17.202 31.6347 24.4567 28.0329 26.862 21.033C29.2595 14.0331 25.9232 6.24235 19.4134 3.67414Z"
                        fill="#CE11B0"
                      />
                      <path
                        d="M10.9636 24.289C10.4058 24.289 9.94366 24.1777 9.57713 23.9551C9.22653 23.7325 8.98749 23.4356 8.86 23.0646C8.73251 22.6787 8.73251 22.2632 8.86 21.8179C8.98749 21.3578 9.25043 20.8977 9.64884 20.4376L17.8958 10.798V11.9556H10.6289C10.0074 11.9556 9.53729 11.8146 9.21856 11.5326C8.89984 11.2358 8.74048 10.8128 8.74048 10.2637C8.74048 9.71454 8.89984 9.29897 9.21856 9.01698C9.53729 8.73499 10.0074 8.59399 10.6289 8.59399H19.9515C20.5093 8.59399 20.9635 8.70531 21.3141 8.92793C21.6806 9.15056 21.9276 9.44739 22.0551 9.81843C22.1826 10.1895 22.1826 10.605 22.0551 11.0651C21.9276 11.5252 21.6647 11.9853 21.2663 12.4454L13.0193 22.0851V20.9274H20.6687C21.2742 20.9274 21.7364 21.0684 22.0551 21.3504C22.3898 21.6324 22.5571 22.0479 22.5571 22.5971C22.5571 23.1462 22.3898 23.5692 22.0551 23.866C21.7364 24.148 21.2742 24.289 20.6687 24.289H10.9636Z"
                        fill="#8711A5"
                      />
                      <path
                        d="M9.97675 23.3081C9.41899 23.3081 8.95684 23.1968 8.59031 22.9741C8.23971 22.7515 8.00067 22.4547 7.87318 22.0836C7.74569 21.6978 7.74569 21.2822 7.87318 20.8369C8.00067 20.3769 8.26362 19.9168 8.66202 19.4567L16.909 9.81702V10.9747H9.64209C9.02058 10.9747 8.55047 10.8337 8.23175 10.5517C7.91302 10.2548 7.75366 9.83186 7.75366 9.28272C7.75366 8.73358 7.91302 8.31802 8.23175 8.03602C8.55047 7.75403 9.02058 7.61304 9.64209 7.61304H18.9647C19.5225 7.61304 19.9767 7.72435 20.3273 7.94697C20.6938 8.1696 20.9408 8.46643 21.0683 8.83747C21.1958 9.20852 21.1958 9.62408 21.0683 10.0842C20.9408 10.5443 20.6779 11.0044 20.2795 11.4644L12.0325 21.1041V19.9464H19.6819C20.2874 19.9464 20.7496 20.0874 21.0683 20.3694C21.403 20.6514 21.5703 21.067 21.5703 21.6161C21.5703 22.1653 21.403 22.5883 21.0683 22.8851C20.7496 23.1671 20.2874 23.3081 19.6819 23.3081H9.97675Z"
                        fill="#F761D6"
                      />
                    </svg>
                  </div>
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_1361_16479)">
                      <circle
                        cx="15.2957"
                        cy="14.5"
                        r="14.5"
                        fill="#2B2B2B"
                        fillOpacity="0.7"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.7957 6C16.3479 6 16.7957 6.44772 16.7957 7V13H22.7957C23.3479 13 23.7957 13.4477 23.7957 14C23.7957 14.5523 23.3479 15 22.7957 15H16.7957V21C16.7957 21.5523 16.3479 22 15.7957 22C15.2434 22 14.7957 21.5523 14.7957 21V15H8.79565C8.24337 15 7.79565 14.5523 7.79565 14C7.79565 13.4477 8.24337 13 8.79565 13H14.7957V7C14.7957 6.44772 15.2434 6 15.7957 6Z"
                      fill="white"
                    />
                    <defs>
                      <filter
                        id="filter0_i_1361_16479"
                        x="0.795654"
                        y="-1"
                        width="29"
                        height="30"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-1" />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_1361_16479"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {children}
          </div>
        </div>
        <Footer />
      </div>
    </userContext.Provider>
  );
};

export default LayoutUserProfile;
