import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";
import { getStatsUser } from "../../services/user-service";
import { getBetweenTwoDate } from "../../utils/helper";
const StatusProfile = ({ info }: { info: object | any }) => {
  const { userInfo } = useAuthContext();
  const [status, setStatus] = useState<any>({});
  const checkIsMine = userInfo?.username === info?.username;
  const getStatus = async () => {
    try {
      if (info) {
        const res = await getStatsUser(info?.username);
        setStatus(res?.data);
      }
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    if (info.username) {
      getStatus();
    }
    // console.log(status);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info.username]);
  return (
    <div className="w-full h-auto bg-black/50 rounded-[20px] overflow-hidden flex flex-col justify-between items-center">
      <div className="w-full h-[75px] bg-pink-500 pl-4 flex justify-start items-center">
        <h3 className="font-nunito text-[28px] font-bold text-white ">Stats</h3>
      </div>
      <div className="w-full text-white pl-[28px] pt-[34px] pb-[140px] flex flex-col gap-3">
        {checkIsMine ? (
          <Link
            href={"/simple-shop"}
            className="font-lato font-medium text-[28px] leading-[39.2px] flex items-center gap-4"
          >
            {Math.floor(info?.playtime / 60)} minutes left
            <CiCirclePlus className="w-9 h-9" />
          </Link>
        ) : (
          <div className="font-lato font-medium text-[28px] leading-[39.2px] flex items-center gap-4">
            {Math.floor(info?.playtime / 60)} minutes left
          </div>
        )}
        <div>
          <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
            Playstreak: {info?.playstreak} days
          </h3>
          <p className="font-lato font-bold text-base leading-[25.6px] text-[#FFFFFF]/50">
            Highest streak: {info?.highest_playstreak} days
          </p>
        </div>
        <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
          {status?.played_game} games played
        </h3>
        <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
          {status?.loved_game} games loved
        </h3>
        <h3 className="font-lato font-medium text-[28px] leading-[39.2px]">
          Joined {getBetweenTwoDate(status?.joined)}
        </h3>
      </div>
      <div className="w-full h-[75px] bg-violet-500 flex justify-start items-center pl-[28px] gap-2">
        <h3 className="font-lato font-semibold text-2xl leading-[33.6px] text-violet-50">
          Referall link:
        </h3>
        <span className="font-lato font-semibold text-xl leading-7 text-pink-200">
          {info ? info?.username : "@Zeraverse"}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16Z"
            fill="#F9A8D4"
          />
        </svg>
      </div>
    </div>
  );
};

export default StatusProfile;
