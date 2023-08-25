/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className=" p-[30px] bg-black/80 border-[4px] border-pink-400 rounded-[20px]">
      <Link href={"/"} className=" text-pink-500 font-lato font-bold text-sm">
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
      <h3 className="font-lato font-bold text-[10px] leading-4 text-white mt-[20px]">
        Home / About us
      </h3>
      <h1 className="font-nunito text-[40px] font-bold leading-[56px] text-white mt-[20px]">
        ABOUT US
      </h1>
      <p className="font-nunito font-bold text-base leading-[25.6px] tracking-wide text-white">
        Welcome to Zeraverse.io! We are passionate about bringing you the best
        gaming experience possible, and we do that by offering a unique
        synchronous experience across games & devices.
        <br></br>
        Our vision is to create a platform where players can enjoy their
        favorite games & earn rewards seamlessly across multiple games &
        devices, without ever missing a beat. Whether you're playing on your
        desktop, tablet, or mobile phone, our rewards system are designed to
        work flawlessly and synchronously, so you can play a game and bring the
        coin erned to other games, no matter which game you play.<br></br> We
        believe that gaming should be an immersive, social experience, and
        that's why we've built our portal to be more than just a collection of
        games. Our community features allow you to chat in a group with other
        players, share your achievements, and showing your results in a Hall of
        Fame. We're constantly innovating and adding new features to make your
        gaming experience even more enjoyable.<br></br> At our core, we're
        gamers just like you, and we're committed to bringing you the best
        possible gaming experience. So come join us, and let's game together!
      </p>
    </div>
  );
};

export default AboutPage;
