import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const Demo = ({ text, image }: { text: string; image: StaticImageData }) => {
  return (
    <div className="m-10 w-full border-2 border-black bg-leap-light-green p-10">
      <Link href="/about" target="_blank">
        {text}
      </Link>
      <Image className="object-fil aspec-square" src={image} alt="oops!" />
    </div>
  );
};

export default Demo;
