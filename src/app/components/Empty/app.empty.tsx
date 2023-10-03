import Image from "next/image";
import React from "react";
import emptyImg from "@/public/images/empty.png";
const Empty = ({ className }: { className: string | null }) => {
  return (
    <div
      className={`flex flex-col items-center mx-auto w-full h-full ${className}`}
    >
      <Image priority={true} alt="" src={emptyImg} className="block mx-auto" />
      <h3 className="text-xl font-bold text-white">No data</h3>
    </div>
  );
};

export default Empty;
