"use client";
import { useState } from "react";
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
      <div
        className="top pb-5 text-4xl text-leap-mid-green md:text-5xl"
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <Heart style={{ backfaceVisibility: "hidden" }}></Heart>
        <Heart
          fill="#4F8C6C"
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        ></Heart>
      </div>

      <div
        className="square-lg flex aspect-[4/3] w-72 items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-2xl text-white shadow-lg shadow-black md:w-80"
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute flex h-full w-3/4 items-center justify-center px-1"
          style={{ backfaceVisibility: "hidden" }}
        >
          {text}
        </div>
        <div
          className="absolute flex h-full w-11/12 items-center justify-center px-2 py-1 text-sm md:w-5/6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {backText}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQCard;
