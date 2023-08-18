import image1 from "@/public/images/games/image 11.png";
import image2 from "@/public/images/games/image 13.png";
import image3 from "@/public/images/games/image 16.png";
import image4 from "@/public/images/games/image 5.png";
import image5 from "@/public/images/games/image 2.png";
import image6 from "@/public/images/games/image 4.png";
import { StaticImageData } from "next/image";
export const imagesGame: {
  id: number;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image3,
  },
  {
    id: 4,
    src: image4,
  },
  {
    id: 5,
    src: image5,
  },
  {
    id: 6,
    src: image6,
  },
];
