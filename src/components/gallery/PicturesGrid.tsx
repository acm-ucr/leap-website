import React from "react";
import { PicturesData } from "./PicturesData";

const PicturesGrid = () => {
  return (
    <div className="grid h-[1000px] grid-cols-4 grid-rows-5 gap-1 pb-1 pt-8 md:h-[1000px] md:grid-rows-10 lg:h-[1400px] lg:grid-rows-10">
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
