import React from "react";

const Description_Component = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-leap-light-green to-leap-mid-green">
      <div className="max-w-3xl px-10 text-center md:flex md:flex-col md:items-start">
        <h2 className="font-leap text-[60px] font-bold text-white">
          Our Core Values
        </h2>
        <p className="mt-10 font-leap text-[22px] text-white">
          Loving our Emotions as Asian & Pacific !slanders, otherwise known as
          LEAP!, is a community of friends who advocate for safe spaces and
          mental health. We strive to make a safe space for everyone of every
          background to chat, destress, make friends, and learn about mental
          health in the AAPI community. Come join us to hangout!
        </p>
      </div>
    </div>
  );
};

export default Description_Component;
