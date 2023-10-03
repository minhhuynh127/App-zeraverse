"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { memo } from "react";
import { TbLogout2 } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthProvider";
const SubUserMenu = ({ className }: { className: string }) => {
  const currentPath = usePathname();
  const { logOut } = useAuthContext();
  const hadleLogOut = () => {
    logOut();
    localStorage.removeItem("userLoginGoogle");
    currentPath === "/user-profile" ? redirect("/login") : redirect("/");
    signOut();
  };
  return (
    <div
      className={`w-[204px] min-h-[150px] z-20 bg-black/80 absolute flex flex-col gap-4 px-4 py-[20px] bottom-[-150px] rounded-[20px] border border-pink-900 animate-bottomToTop transition-all`}
    >
      <Link
        href={"/user-profile"}
        className="flex gap-4 justify-start ml-4 items-center whitespace-nowrap font-lato font-semibold text-violet-400 text-base leading-[22.4px] hover:text-violet-700 transition-colors"
      >
        <svg
          width="682.667"
          height="682.667"
          viewBox="0 0 15 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px]"
        >
          <path d="M7.5 1.25c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25Zm0 2.5a2.19 2.19 0 0 1 2.188 2.188A2.19 2.19 0 0 1 7.5 8.124a2.19 2.19 0 0 1-2.188-2.188A2.19 2.19 0 0 1 7.5 3.75Zm0 8.75a5.005 5.005 0 0 1-3.837-1.8 6.217 6.217 0 0 1 7.675 0A5.005 5.005 0 0 1 7.5 12.5Z"></path>
        </svg>

        <span>User Profile</span>
      </Link>
      <Link
        href={"/user/achievements"}
        className="flex gap-4 justify-start ml-4 items-center whitespace-nowrap font-lato font-semibold text-violet-400 text-base leading-[22.4px] hover:text-violet-700  transition-colors"
      >
        <svg
          width="682.667"
          height="682.667"
          viewBox="0 0 15 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px]"
        >
          <path d="M7.5 1.25c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25Zm0 2.5a2.19 2.19 0 0 1 2.188 2.188A2.19 2.19 0 0 1 7.5 8.124a2.19 2.19 0 0 1-2.188-2.188A2.19 2.19 0 0 1 7.5 3.75Zm0 8.75a5.005 5.005 0 0 1-3.837-1.8 6.217 6.217 0 0 1 7.675 0A5.005 5.005 0 0 1 7.5 12.5Z"></path>
        </svg>
        <span>Achievements</span>
      </Link>
      <span className="h-[1px] w-full bg-violet-400 px-[38px] text-white"></span>
      <Link
        href={`${currentPath === "/user-profile" ? "/login" : "/"}`}
        onClick={hadleLogOut}
        className="flex gap-2 justify-center items-center font-lato font-semibold text-violet-200 text-[20px] leading-[22.4px] text-center hover:text-violet-700  transition-colors"
      >
        <TbLogout2 />
        LogOut
      </Link>
    </div>
  );
};

export default memo(SubUserMenu);
