"use client";
import { motion } from "motion/react";
interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  return (
    <motion.div
      className="relative m-4 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="mb-3 text-center text-4xl font-semibold text-leap-dark-green">
        {title}
      </div>

      <motion.div className="flex aspect-[4/3] w-full items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-lg text-white shadow-lg shadow-black md:text-xl lg:text-2xl">
        {text}
      </motion.div>
    </motion.div>
  );
};

export default ValueCard;
