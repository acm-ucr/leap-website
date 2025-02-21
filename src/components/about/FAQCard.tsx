"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface FAQCardProps {
  text: string;
  backText: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ text, backText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      className="relative m-4 flex cursor-pointer flex-col items-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Icon */}
      <div
        className="top text-4xl text-leap-mid-green md:text-5xl"
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <div style={{ backfaceVisibility: "hidden" }}>♡</div>
        <Heart
          fill="#4F8C6C" //Leap light-green
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        ></Heart>
      </div>

      {/* Card */}
      <div
        className="square-lg flex aspect-[4/3] w-8/12 items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-xl text-white shadow-lg shadow-leap-dark-green sm:w-64 md:w-72 md:text-lg lg:w-80 lg:text-2xl"
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute flex h-full w-full items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {text}
        </div>
        <div
          className="absolute flex h-full w-full items-center justify-center text-sm"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {backText}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQCard;
