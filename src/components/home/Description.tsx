import React from "react";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/description.webp";

const Description = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={FlowerImg}
        alt="Flowers"
        className="h-[300px] w-[200px] md:h-[450px] md:w-[375px] lg:h-[650px] lg:w-[480px]"
      />
    </div>
  );
};

export default Description;
