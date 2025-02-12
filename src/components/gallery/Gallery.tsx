import React from "react";
import PicturesGrid from "./PicturesGrid";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
import { Carousel } from "../Carousel";

const Gallery = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={BackgroundImage}
        alt="Gallery Background"
        layout="fill"
        objectFit="cover"
        className="absolute -z-10"
      />
      <div className="relative mt-12 pt-12">
        <h1 className="mt-5 pt-12 text-center font-leap text-4xl font-bold">
          Gallery Page
        </h1>
        <Carousel />
        <div className="flex justify-center mt-5 pt-12">
          <h2 className="text-center font-leap text-2xl font-bold border-b-2 border-black inline-block">
            2024-2025
          </h2>
        </div>
        <PicturesGrid />
      </div>
    </div>
  );
};

export default Gallery;