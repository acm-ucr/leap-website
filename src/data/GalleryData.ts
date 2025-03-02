import ImageOne from "@/public/assets/gallery/carousel/carousel1.webp";
import ImageTwo from "@/public/assets/gallery/carousel/carousel2.webp";
import ImageThree from "@/public/assets/gallery/carousel/carousel3.webp";
import { StaticImageData } from "next/image";

export const slides: slide[] = [
  { image: ImageOne, id: 1 },
  { image: ImageTwo, id: 2 },
  { image: ImageThree, id: 3 },
];

export type slide = {
  image: StaticImageData;
  id: number;
};
