import React from "react";
import Image, { StaticImageData } from "next/image";

const Demo = ({ name, image }: { name: string; image: StaticImageData }) => {
  return (
    <div className="m-10 flex w-1/2 flex-col items-center border-4 border-leap-dark-green p-10">
      <Image className="aspect-square object-contain" src={image} alt="leap" />
      <p>{name} is cool</p>
    </div>
  );
};

export default Demo;
