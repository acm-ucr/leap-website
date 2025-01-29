import React from "react";
import Image from "next/image";

const ButterflyImg = "/assets/about/bird.webp";

const Leap = () => {
  return (
    <div className="flex items-center p-8">
      <div className="w-2/3 pr-8 text-left">
        <h2 className="font-leap text-5xl font-bold">LEAP</h2>
        <p className="mt-4 text-black">
          We are LEAP!, a.k.a. Loving our Emotions as Asians & Pacific
          Islanders. We are a club committed to mental health wellness &
          awareness within API communities, especially here at UCR. We feel it
          is important we break cultural stigmas of mental health to allow us to
          achieve a strong & healthy well-being, both in mind & body. With this,
          we hope to create a safe & welcoming space to talk about our emotions
          and experiences to grow ourselves in every way.
        </p>
      </div>

      <div className="mr-36 flex w-1/3 justify-end">
        <Image
          src={ButterflyImg}
          alt="Butterfly"
          width={300}
          height={550}
          className=""
        />
      </div>
    </div>
  );
};

export default Leap;
