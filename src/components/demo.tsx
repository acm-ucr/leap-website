import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const Demo = ({ text, image }: { text: string; image: StaticImageData }) => {
  return (
    <div className="h-1/3 w-1/3 border-2 border-leap-mid-green py-9">
      <Image src={image} alt="wee" />
      <Link
        className="text-center font-leap text-leap-yellow"
        href="https://github.com/acm-ucr/leap-website/pull/30/files"
        target="_blank"
      >
        {text}
      </Link>
    </div>
  );
};

export default Demo;
