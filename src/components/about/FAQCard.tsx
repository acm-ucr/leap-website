'use client';
import React from "react";
import { motion } from "motion/react"

// Reusable Card Component
interface FAQCardProps {
  text: string;
}
const FAQCard: React.FC<FAQCardProps> = ({ text }) => {
  return (
    <div className="relative m-4 flex flex-col items-center">
      <div className=" top text-5xl text-leap-mid-green">♡</div>
      <motion.div
        initial={{
          scale : 0
        }}
        animate={{
          scale : 1
        }}
        whileInView={{scale:2}}
        className="square-lg aspect-[4/3] w-64 bg-leap-mid-green p-8 text-center font-leap text-lg text-white shadow-lg"
        style={{
          boxShadow: "10px 10px 5px #324935",
        }}
      >
        <p>{text}</p>
      </motion.div>
    </div>
  );
};

export default FAQCard;
