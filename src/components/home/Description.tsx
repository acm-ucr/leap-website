import React from "react";
import Image from "next/image";

const FlowerImg = "/assets/home/description.webp";

const Description = () => {
  return (
    <div className="ml-44 flex items-start justify-center">
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
