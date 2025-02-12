import React from "react";
import { PicturesData } from "./PicturesData";

const PicturesGrid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-1 pb-1 pt-8 h-[900px] md:grid-cols-6 lg:grid-cols-6 lg:grid-rows-3">
      {PicturesData.map((item, index) => (
        <div key={index} className={`${item.className}`}>
          <img
            className={`${item.ImgProperties || "flex h-full w-full items-center justify-center object-cover"}`}
            src={item.Pictures}
            alt={item.Alt}
          />
        </div>
      ))}
    </div>
  );
};

export default PicturesGrid;