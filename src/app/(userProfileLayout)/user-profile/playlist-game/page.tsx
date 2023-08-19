import iconBack from "@/public/left-white.png";
import Button from "@/src/app/components/Buttons/app.button";
import RecentGame from "@/src/app/components/RecentGame/app.recent-game";
import Image from "next/image";
import Link from "next/link";
const PlaylistGamePage = () => {
  return (
    <div className="flex flex-col justify-between gap-6 w-full h-full">
      <div className="mt-28 w-full h-auto bg-black/50 rounded-[10px] flex flex-col justify-center items-center gap-8">
        <div className="w-full h-[74px] px-[20px] py-0 bg-pink-500 rounded-tl-[10px] rounded-tr-[10px]  flex justify-between items-center">
          <Link
            href={"/user-profile"}
            className="flex justify-center items-center text-white gap-[5px] w-[41px] h-[22px]"
          >
            <Image src={iconBack} alt="" className="w-[5px] h-[10px]" />
            Back
          </Link>
          <h3 className="flex-1 text-center font-nunito font-bold text-[32px] leading-[43.65px] text-white">
            Playlist Games
          </h3>
        </div>

        <div className="w-full px-7 pb-[500px]">
          <RecentGame />
        </div>
      </div>
    </div>
  );
};

export default PlaylistGamePage;
