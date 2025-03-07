"use client";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface FAQCardProps {
  text: string;
  backText: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ text, backText }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotateY: 180 }}
      transition={{ duration: 0.5 }}
      className="relative m-4 flex cursor-pointer flex-col items-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="top pb-5 text-4xl text-leap-mid-green md:text-5xl"
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <Heart style={{ backfaceVisibility: "hidden" }} />
        <Heart
          fill="#4F8C6C"
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        />
      </div>

      <div
        className="square-lg flex aspect-[4/3] w-64 items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-xl text-white shadow-lg shadow-black md:w-72 md:text-lg lg:w-80 lg:text-2xl"
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute flex h-full w-full items-center justify-center px-1 leading-loose"
          style={{ backfaceVisibility: "hidden" }}
        >
          {text}
        </div>
        <div
          className="absolute flex h-full w-full items-center justify-center px-2 py-1 text-[13px]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {backText}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQCard;
