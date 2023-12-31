import imgage4 from "@/public/images/games/image 6.png";
import imgage5 from "@/public/images/games/image 7.png";
import imgage6 from "@/public/images/games/image 11.png";
import imgage7 from "@/public/images/games/image 13.png";
import imgage8 from "@/public/images/games/image 16.png";
import imgage1 from "@/public/images/games/image 1.png";
import imgage2 from "@/public/images/games/image 2.png";
import imgage3 from "@/public/images/games/image 4.png";

import avatar1 from "@/public/images/shops/shop-1.png";
import avatar2 from "@/public/images/shops/shop-2.png";
import avatar3 from "@/public/images/shops/shop-3.png";

import bg1 from "@/public/images/user-images/bg-profile-1.png";
import bg2 from "@/public/images/user-images/bg-profile-2.png";
import bg3 from "@/public/images/user-images/bg-profile-3.png";

import avatarHistory from "@/public/images/user-images/avatar-history.png";
import coverHistory from "@/public/images/user-images/cover-history.png";

import { StaticImageData } from "next/image";
export const imagesRecentGame: {
  id: number;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    src: imgage4,
  },
  {
    id: 2,
    src: imgage5,
  },
  {
    id: 3,
    src: imgage6,
  },
  {
    id: 4,
    src: imgage7,
  },
  {
    id: 5,
    src: imgage8,
  },
  {
    id: 6,
    src: imgage1,
  },
];

export const imagePlaylists: {
  id: number;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    src: imgage4,
  },
  {
    id: 2,
    src: imgage2,
  },
  {
    id: 3,
    src: imgage3,
  },
];

export const imageAvatar: {
  id: number;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    src: avatar1,
  },
  {
    id: 2,
    src: avatar2,
  },
  {
    id: 3,
    src: avatar3,
  },
  {
    id: 4,
    src: avatar3,
  },
  {
    id: 5,
    src: avatar2,
  },
  {
    id: 6,
    src: avatar1,
  },
];

export const bgBrofile: {
  id: number;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    src: bg1,
  },
  {
    id: 2,
    src: bg2,
  },
  {
    id: 3,
    src: bg3,
  },
];

export const imagesPlaylistGames: {
  id: number;
  src: StaticImageData;
}[] = [
  {
    id: 1,
    src: imgage4,
  },
  {
    id: 2,
    src: imgage5,
  },
  {
    id: 3,
    src: imgage6,
  },
  {
    id: 4,
    src: imgage7,
  },
  {
    id: 5,
    src: imgage8,
  },
  {
    id: 6,
    src: imgage1,
  },
  {
    id: 7,
    src: imgage2,
  },
  {
    id: 8,
    src: imgage3,
  },
  {
    id: 9,
    src: imgage6,
  },
  {
    id: 10,
    src: imgage7,
  },
  {
    id: 11,
    src: imgage8,
  },
  {
    id: 12,
    src: imgage1,
  },
  {
    id: 13,
    src: imgage4,
  },
  {
    id: 14,
    src: imgage5,
  },
  {
    id: 15,
    src: imgage6,
  },
  {
    id: 16,
    src: imgage7,
  },
  {
    id: 17,
    src: imgage8,
  },
  {
    id: 18,
    src: imgage1,
  },
  {
    id: 19,
    src: imgage8,
  },
  {
    id: 20,
    src: imgage1,
  },
];

export const purchaseHistoryAvatar: {
  src: StaticImageData;
  price: number;
  date: string;
}[] = [
  { src: avatarHistory, price: 70, date: "21/08/2023 19:00" },
  { src: avatarHistory, price: 70, date: "23/08/2023 12:00" },
  { src: avatarHistory, price: 70, date: "24/08/2023 05:00" },
  { src: avatarHistory, price: 70, date: "25/08/2023 13:00" },
  { src: avatarHistory, price: 70, date: "26/08/2023 14:00" },
  { src: avatarHistory, price: 70, date: "27/08/2023 15:00" },
  { src: avatarHistory, price: 70, date: "28/08/2023 16:00" },
  { src: avatarHistory, price: 70, date: "11/08/2023 21:00" },
];

export const purchaseHistoryCover: {
  src: StaticImageData;
  price: number;
  date: string;
}[] = [
  { src: coverHistory, price: 70, date: "21/08/2023 19:00" },
  { src: coverHistory, price: 70, date: "23/08/2023 12:00" },
  { src: coverHistory, price: 70, date: "24/08/2023 05:00" },
  { src: coverHistory, price: 70, date: "25/08/2023 13:00" },
  { src: coverHistory, price: 70, date: "26/08/2023 14:00" },
  { src: coverHistory, price: 70, date: "27/08/2023 15:00" },
  { src: coverHistory, price: 70, date: "28/08/2023 16:00" },
  { src: coverHistory, price: 70, date: "11/08/2023 21:00" },
];
