import React from "react";
import trengdingNew from "@/public/images/trending/trending-new.png";
import Image from "next/image";
const TrendingNew = () => {
  return (
    <div>
      <h3 className="font-lato font-bold text-[32px] leading-[44.8px] text-white">
        Trending News
      </h3>
      <div className="flex items-center justify-center gap-[20px] mt-2">
        <div className="flex items-center bg-black gap-4 p-[2px] border border-pink-700">
          <Image src={trengdingNew} alt="" className="rounded-[10px]" />
          <div className="flex flex-col justify-center items-start gap-2">
            <h3 className="font-lato font-bold text-2xl text-white">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="font-nunito text-xs font-light text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis nostrum aliquam illo praesentium quaerat at
              recusandae nihil nam adipisci officia minus ratione, illum
              perferendis qui quis ab quisquam laboriosam accusamus.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-black gap-4 p-[2px] border border-pink-700">
          <Image src={trengdingNew} alt="" className="rounded-[10px]" />
          <div className="flex flex-col justify-center items-start gap-2">
            <h3 className="font-lato font-bold text-2xl text-white">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="font-nunito text-xs font-light text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis nostrum aliquam illo praesentium quaerat at
              recusandae nihil nam adipisci officia minus ratione, illum
              perferendis qui quis ab quisquam laboriosam accusamus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNew;
