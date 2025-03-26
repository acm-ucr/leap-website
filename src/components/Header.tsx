"use client";
import { motion } from "motion/react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex h-[40vh] flex-col items-center justify-center space-y-8 text-center font-leap">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="mt-32 font-leap text-5xl font-bold text-leap-dark-green md:text-6xl"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="font-leap text-lg font-semibold text-leap-dark-green md:text-xl lg:text-2xl"
      >
        {subtitle}
      </motion.div>
    </div>
  );
};

export default Header;
