import React from "react";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/description.webp";

const Description = () => {
  return (
    <div className="sm:ml-84 md:ml-90 mt-20 flex items-center justify-center md:mt-24 lg:ml-96 lg:mt-28">
      <Image
        src={FlowerImg}
        alt="Flowers"
        className="sm:h-[350px] sm:w-[200px] md:h-[500px] md:w-[350px] lg:h-[650px] lg:w-[500px]"
      />
    </div>
  );
};

export default Description;
