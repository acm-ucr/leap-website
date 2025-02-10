import React from "react";
import PicturesGrid from "./PicturesGrid";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
import { Carousel } from "../Carousel";

const Gallery = () => {
  return (
    <div>
      <Image
        src={BackgroundImage}
        alt="Gallery Background"
        className="absolute -z-10 h-screen min-h-screen w-screen"
      />
      <div className="mt-12 pt-12">
        <h1 className="mt-5 pt-12 text-center font-leap text-4xl font-bold">
          Gallery Page
        </h1>
        <Carousel />
        <PicturesGrid />
      </div>
    </div>
  );
};

export default Gallery;
