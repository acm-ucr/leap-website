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
      <div className="flex flex-col items-center p-8 text-center sm:ml-10 md:ml-16 md:flex-row lg:ml-20">
        <div className="text-align: center w-2/3 font-leap">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">LEAP</h2>
          <p className="max-w-1xl text-xl font-semibold text-black md:text-2xl lg:text-3xl">
            We are LEAP!, a.k.a. Loving our Emotions as Asians & Pacific
            Islanders. We are a club committed to mental health wellness &
            awareness within API communities, especially here at UCR. We feel it
            is important we break cultural stigmas of mental health to allow us
            to achieve a strong & healthy well-being, both in mind & body. With
            this, we hope to create a safe & welcoming space to talk about our
            emotions and experiences to grow ourselves in every way.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Image
            src={ButterflyImg}
            alt="Butterfly" //md:mr-18 flex justify-end sm:mr-14 lg:mr-24
            className="h-[400px] w-[250px] md:h-[550px] md:w-[350px] lg:h-[700px] lg:w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Leap;
