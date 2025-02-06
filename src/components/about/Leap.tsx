import React from "react";
import Image from "next/image";
import ButterflyImg from "@/public/assets/about/bird.webp";
import BackgroundImg from "@/public/assets/about/background.webp";

const Leap = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImg.src})` }}
    >
      <div className="flex items-center p-8 text-center sm:ml-12 md:ml-16 lg:ml-20">
        <div className="w-2/3 font-leap">
          <h2 className="sm:text-6x1 font-bold sm:mb-6 md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            LEAP
          </h2>
          <p className="max-w-1xl md:text-3x1 font-semibold leading-loose text-black sm:mt-8 sm:text-2xl md:mt-12 lg:mt-16 lg:text-4xl">
            We are LEAP!, a.k.a. Loving our Emotions as Asians & Pacific
            Islanders. We are a club committed to mental health wellness &
            awareness within API communities, especially here at UCR. We feel it
            is important we break cultural stigmas of mental health to allow us
            to achieve a strong & healthy well-being, both in mind & body. With
            this, we hope to create a safe & welcoming space to talk about our
            emotions and experiences to grow ourselves in every way.
          </p>
        </div>

        <div className="md:mr-18 flex justify-end sm:mr-14 lg:mr-24">
          <Image
            src={ButterflyImg}
            alt="Butterfly"
            className="sm:h-[450px] sm:w-[250px] md:h-[650px] md:w-[350px] lg:h-[800px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Leap;
