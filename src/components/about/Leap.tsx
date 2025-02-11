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
      <div className="lg:ml-26 flex flex-col items-center p-8 text-center sm:ml-14 md:ml-20 md:flex-row">
        <div className="text-align: center w-2/3 font-leap">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl"> LEAP </h2>
          <p className="max-w-1xl md:text-1.5xl text-xl font-semibold text-black lg:text-3xl">
            <br /> &nbsp; We are LEAP!, a.k.a. Loving our Emotions as Asians &
            Pacific Islanders. We are a club committed to mental health wellness
            & awareness within API communities, especially here at UCR. We feel
            it is important we break cultural stigmas of mental health to allow
            us to achieve a strong & healthy well-being, both in mind & body.
            With this, we hope to create a safe & welcoming space to talk about
            our emotions and experiences to grow ourselves in every way.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Image
            src={ButterflyImg}
            alt="Butterfly"
            className="h-[450px] w-[250px] md:h-[550px] md:w-[300px] lg:h-[700px] lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Leap;