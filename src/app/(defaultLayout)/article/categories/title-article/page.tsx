/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerPlacehoder from "@/public/images/category-article/placehoder.png";
const ArticleTitlePage = () => {
  return (
    <div className="w-full bg-black/80 border-[4px] border-pink-400 p-[40px]">
      <Link
        href={"/article/categories"}
        className=" text-pink-500 font-lato font-bold text-sm"
      >
        <div className="flex items-center gap-2">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 1L1 6L6 11" stroke="#F472B6" strokeLinecap="round" />
          </svg>
          <span>Back</span>
        </div>
      </Link>
      <h3 className="font-lato font-bold text-[10px] leading-[16px] text-white mt-[20px]">
        Home / Article category / Article
      </h3>
      <div className="flex gap-4 mt-[20px]">
        <button className="bg-white w-[96px] h-[19px] text-xs font-lato font-medium rounded-[20px] px-[10px] flex justify-center items-center gap-[10px]">
          Article Tag
        </button>
        <button className="bg-white w-[122px] h-[19px] text-xs font-lato font-medium rounded-[20px] px-[10px] flex justify-center items-center">
          Shooting Game
        </button>
      </div>
      <h1 className="font-nunito font-bold text-[40px] text-white leading-[56px] mt-[20px]">
        Article Title
      </h1>
      <p className="font-nunito font-bold text-base leading-[25.6px] text-white">
        Welcome to Zeraverse.io! We are passionate about bringing you the best
        gaming experience possible, and we do that by offering a unique
        synchronous experience across games & devices.
        <br />
        Our vision is to create a platform where players can enjoy their
        favorite games & earn rewards seamlessly across multiple games &
        devices, without ever missing a beat. Whether you're playing on your
        desktop, tablet, or mobile phone, our rewards system are designed to
        work flawlessly and synchronously, so you can play a game and bring the
        coin erned to other games, no matter which game you play.
        <br />
        We believe that gaming should be an immersive, social experience, and
        that's why we've built our portal to be more than just a collection of
        games. Our community features allow you to chat in a group with other
        players, share your achievements, and showing your results in a Hall of
        Fame. We're constantly innovating and adding new features to make your
        gaming experience even more enjoyable.
        <br />
        At our core, we're gamers just like you, and we're committed to bringing
        you the best possible gaming experience. So come join us, and let's game
        together!
      </p>
      <div className="flex justify-center items-center mt-2">
        <Image src={bannerPlacehoder} alt="" />
      </div>
    </div>
  );
};

export default ArticleTitlePage;
