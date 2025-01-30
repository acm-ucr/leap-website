import React from "react";
import Image from "next/image";

const ButterflyImg = "/assets/about/bird.webp";

const Leap = () => {
  return (
    <div className="ml-24 flex items-center p-8 text-center">
      <div className="w-2/3">
        <h2 className="mb-14 font-leap text-7xl font-bold">LEAP</h2>
        <p className="max-w-1xl mt-14 font-leap text-3xl font-semibold leading-loose text-black">
          We are LEAP!, a.k.a. Loving our Emotions as Asians & Pacific
          Islanders. We are a club committed to mental health wellness &
          awareness within API communities, especially here at UCR. We feel it
          is important we break cultural stigmas of mental health to allow us to
          achieve a strong & healthy well-being, both in mind & body. With this,
          we hope to create a safe & welcoming space to talk about our emotions
          and experiences to grow ourselves in every way.
        </p>
      </div>

      <div className="mr-28 flex w-1/3 justify-end">
        <Image
          src={ButterflyImg}
          alt="Butterfly"
          width={400}
          height={1000}
          className=""
        />
      </div>
    </div>
  );
};

export default Leap;
