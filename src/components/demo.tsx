import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const Demo = ({ text, image }: { text: string; image: StaticImageData }) => {
  return (
    <div className="m-5 flex w-1/5 flex-col items-center border-2 border-black bg-leap-light-green p-5">
      <Link href="/about" target="_blank">
        {text}
      </Link>
      <Image
        className="aspect-square w-1/3 object-contain"
        src={image}
        alt="cool image"
      />
    </div>
  );
};

export default Demo;
