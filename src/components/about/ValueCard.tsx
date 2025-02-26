"use client";
import { motion } from "framer-motion";
interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  return (
    <motion.div
      className="relative m-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-3 text-center text-4xl font-semibold text-leap-dark-green">
        {title}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex aspect-[4/3] w-full items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-white shadow-lg shadow-black sm:text-lg md:text-xl lg:text-2xl"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default ValueCard;
