import React from "react";
import Image, { StaticImageData } from "next/image";

const Demo = ({ name, image }: { name: string; image: StaticImageData }) => {
  return (
    <div className=" bg-black m-30 flex w-1/2 flex-col items-center border-4 border-leap-dark-green p-1">
      <Image className="aspect-square object-contain" src={image} alt="leap" />
      <p>{name} is cool</p>
    </div>
  );
};

export default Demo;
