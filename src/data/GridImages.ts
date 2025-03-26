import { StaticImageData } from "next/image";
interface PicturesData {
  className: string;
  pictures: StaticImageData;
  alt: string;
}
import grid1 from "@/public/assets/gallery/grid/grid1.webp";
import grid2 from "@/public/assets/gallery/grid/grid2.webp";
import grid3 from "@/public/assets/gallery/grid/grid3.webp";
import grid4 from "@/public/assets/gallery/grid/grid4.webp";
import grid5 from "@/public/assets/gallery/grid/grid5.webp";
import grid6 from "@/public/assets/gallery/grid/grid6.webp";
import grid7 from "@/public/assets/gallery/grid/grid7.webp";
import grid8 from "@/public/assets/gallery/grid/grid8.webp";
import grid9 from "@/public/assets/gallery/grid/grid9.webp";
import grid10 from "@/public/assets/gallery/grid/grid10.webp";
import grid11 from "@/public/assets/gallery/grid/grid11.webp";
import grid12 from "@/public/assets/gallery/grid/grid12.webp";
import grid13 from "@/public/assets/gallery/grid/grid13.webp";
import grid14 from "@/public/assets/gallery/grid/grid14.webp";
import grid15 from "@/public/assets/gallery/grid/grid15.webp";

export const PicturesData: PicturesData[] = [
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid1,
    alt: "Image 1",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid2,
    alt: "Image 2",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid3,
    alt: "Image 3",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid5,
    alt: "Image 5",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid6,
    alt: "Image 6",
  },
  {
    className:
      "flex justify-center items-center row-span-2 col-span-2  md:row-span-4 lg:row-span-4",
    pictures: grid4,
    alt: "Image 4",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid7,
    alt: "Image 7",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid8,
    alt: "Image 8",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid9,
    alt: "Image 9",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid10,
    alt: "Image 10",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid11,
    alt: "Image 11",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid12,
    alt: "Image 12",
  },
  {
    className: "flex justify-center items-center md:row-span-2 lg:row-span-2",
    pictures: grid13,
    alt: "Image 13",
  },
  {
    className:
      "flex justify-center items-center col-span-2 md:row-span-2 lg:row-span-2",
    pictures: grid14,
    alt: "Image 14",
  },
  {
    className:
      "flex justify-center items-center col-span-2 md:row-span-2 lg:row-span-2",
    pictures: grid15,
    alt: "Image 15",
  },
];
