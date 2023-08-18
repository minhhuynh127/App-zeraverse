import image1 from "@/public/images/shops/shop-1.png";
import image2 from "@/public/images/shops/shop-2.png";
import image3 from "@/public/images/shops/shop-3.png";
import { StaticImageData } from "next/image";

export const images: { id: number; src: StaticImageData }[] = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image2 },
  { id: 4, src: image3 },
  { id: 5, src: image1 },
  { id: 6, src: image2 },
];
