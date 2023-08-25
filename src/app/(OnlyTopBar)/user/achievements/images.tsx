import { StaticImageData } from "next/image";

import image1 from "@/public/images/achievements/image-1.png";
import image2 from "@/public/images/achievements/image-2.png";
import image3 from "@/public/images/achievements/image-3.png";
import image4 from "@/public/images/achievements/image-4.png";

export const data: { src: StaticImageData; name: string; coin: number }[] = [
  {
    src: image1,
    name: "Onmyoji The World",
    coin: 1000,
  },
  {
    src: image2,
    name: "Marvel Fight",
    coin: 900,
  },
  {
    src: image3,
    name: "Assasins Creed",
    coin: 900,
  },
  {
    src: image4,
    name: "Raid",
    coin: 100,
  },
];
