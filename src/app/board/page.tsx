"use client";
import BoardWrapper from "@/components/board/BoardWrapper";
import BoardDecorationsBottom from "@/components/board/BoardDecorationsBottom";
import BoardDecorationsTop from "@/components/board/BoardDecorationsTop";
import BackgroundImg from "@/public/assets/about/bg-about-us.webp";
import { motion } from "motion/react";

const OurBoard = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: `url(${BackgroundImg.src})` }}
    >
      <BoardDecorationsTop />
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-6 mt-3 w-5/6 md:mt-10 lg:mt-12"
      >
        <div className="pb-10 pt-40 font-leap text-3xl font-bold text-leap-dark-green sm:text-5xl lg:text-6xl">
          Our Board
        </div>
        <div className="md:pb-15 px-4 pb-4 pt-4 font-leap font-semibold text-leap-dark-green sm:px-20 sm:pb-10 sm:text-lg md:text-xl lg:pb-10 lg:text-2xl">
          Individuals dedicated to helping students overcome mental health
          issues.
        </div>
      </motion.div>

      <BoardWrapper />
      <BoardDecorationsBottom />
    </div>
  );
};

export default OurBoard;
