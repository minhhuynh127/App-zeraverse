import { StaticImageData } from "next/image";
import carousel1 from "@/public/images/category-article/carousel1.jpeg";
import carousel2 from "@/public/images/category-article/carousel2.png";
import carousel3 from "@/public/images/category-article/carousel3.jpg";
import carousel4 from "@/public/images/category-article/carousel4.jpg";
import carousel5 from "@/public/images/category-article/carousel5.jpg";

export const slides: {
  id: number;
  src: StaticImageData;
  title: string;
  desc: string;
  date: string;
}[] = [
  {
    id: 1,
    src: carousel1,
    title: "The unseen of spending three years at Pixelgrade",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "1 min",
  },
  {
    id: 2,
    src: carousel2,
    title: "The unseen of spending three years at Playgames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "19 min",
  },
  {
    id: 3,
    src: carousel3,
    title: "The unseen of spending three years at Ariticle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "23 min",
  },
  {
    id: 4,
    src: carousel4,
    title: "The unseen of spending three years at Hall of fame",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "31 min",
  },
  {
    id: 5,
    src: carousel5,
    title: "The unseen of spending three years at Category",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "22 min",
  },
];
