import React from "react";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/description.webp";

const Description = () => {
  return (
    <div className="md:ml-88 flex items-start justify-center sm:ml-80 sm:mt-20 md:mt-24 lg:ml-96 lg:mt-28">
      <Image
        src={FlowerImg}
        alt="Flowers"
        className="sm:h-[350px] sm:w-[250px] md:h-[450px] md:w-[350px] lg:h-[600px] lg:w-[450px]"
      />
    </div>
  );
};

export default Description;
