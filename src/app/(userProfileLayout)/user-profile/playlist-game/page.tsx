import iconBack from "@/public/left-white.png";
import iconRight from "@/public/right.png";
import Button from "@/src/app/components/Buttons/app.button";
import Image from "next/image";
import Link from "next/link";
import { imagesPlaylistGames } from "../data/images";

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

        <div className="w-full flex flex-col gap-10 px-[44px] mb-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-nunito font-bold text-2xl text-white">
                2 Players
              </h3>
              <Link
                href={"/user-profile/playlist-game/2-player"}
                className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
              >
                View all
                <Image
                  src={iconRight}
                  alt=""
                  className="w-[4px] h-[8px] mr-1"
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {imagesPlaylistGames.map((item, index) => (
                <Button
                  className="hover:opacity-70 transition-opacity"
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt=""
                    className="w-full object-cover rounded-[10px]"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-10 px-[44px] mb-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-nunito font-bold text-2xl text-white">
                Bad Game
              </h3>
              <Link
                href={""}
                className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
              >
                Bad Game
                <Image
                  src={iconRight}
                  alt=""
                  className="w-[4px] h-[8px] mr-1"
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {imagesPlaylistGames.map((item, index) => (
                <Button
                  className="hover:opacity-70 transition-opacity"
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt=""
                    className="w-full object-cover rounded-[10px]"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-10 px-[44px] pb-[400px] mb-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-nunito font-bold text-2xl text-white">
                Bad Game
              </h3>
              <Link
                href={""}
                className="font-lato text-xs font-medium leading-[19.2px] text-white flex items-center gap-2"
              >
                View all
                <Image
                  src={iconRight}
                  alt=""
                  className="w-[4px] h-[8px] mr-1"
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {imagesPlaylistGames.map((item, index) => (
                <Button
                  className="hover:opacity-70 transition-opacity"
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt=""
                    className="w-full object-cover rounded-[10px]"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistGamePage;
