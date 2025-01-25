import React from "react";
import Image from "next/image";

const FlowerImg = "/assets/home/description.webp";

const Description = () => {
  return (
    <div className="flex items-start justify-center ml-44"> 
      <Image
        src={FlowerImg}
        alt="Flowers"
        width={450}
        height={550}
        className=""
      />
    </div>
  );
};

export default Description;
