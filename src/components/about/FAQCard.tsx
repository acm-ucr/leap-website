"use client";
import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
interface FAQCardProps {
  text: string;
  backText: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ text, backText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1 / 2 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      className="relative m-4 flex flex-col items-center"
    >
      {/* Icon */}
      <div className="top text-4xl text-leap-mid-green md:text-5xl">♡</div>

      {/* Card */}
      <div className="square-lg flex aspect-[4/3] w-8/12 items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-xl text-white shadow-lg shadow-leap-dark-green sm:w-64 md:w-72 md:text-lg lg:w-80 lg:text-2xl">
        <p>{flipped ? backText : text}</p>
      </div>
    </motion.div>
  );
};

export default FAQCard;
