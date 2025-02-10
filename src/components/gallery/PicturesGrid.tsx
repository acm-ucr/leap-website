import React from "react";
import { PicturesData } from "./PicturesData";
// import Image from "next/image";

// const FlowerImg = "/assets/home/description.webp";

const PicturesGrid = () => {
  return (
    <div className="grid min-h-screen grid-cols-4 grid-rows-8 gap-1 pb-1 pt-8 text-white sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {PicturesData.map((item, index) => (
        <div
          key={index}
          className={`${item.className}`}
        >
          {/* <Image src={FlowerImg} alt="flower" /> */}
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default PicturesGrid;
