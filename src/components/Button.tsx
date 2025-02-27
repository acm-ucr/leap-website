"use client";
import Link from "next/link";
import { motion } from "motion/react"
interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5}}
      className="inline-block rounded-lg">
      <div className="flex h-1/6 items-center justify-center">
        <Link href={link} target="_blank">
          <div className="h-15 m-0 flex w-40 items-center rounded-lg border-4 border-leap-dark-green bg-leap-mid-green px-4 py-1 text-center font-leap text-lg text-white">
            {text}
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Button;
