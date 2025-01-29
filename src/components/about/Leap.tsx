import React from "react";
import Image from "next/image";

const ButterflyImg = "/assets/about/bird.webp";

const Leap = () => {
  return (
    <div>
      <Image
        src={ButterflyImg}
        alt="Butterfly"
        width={300}
        height={550}
        className=""
      />
    </div>
  );
};

export default Leap;
