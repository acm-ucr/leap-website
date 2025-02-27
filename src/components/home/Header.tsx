"use client";
import { motion } from "motion/react";
import headerBg from "@/public/assets/home/header.webp";
import Image from "next/image";

const animationY = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const animationScale = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

const Header = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center md:h-[110vh] lg:h-[120vh]">
      <Image
        src={headerBg}
        alt="Home Header"
        className="absolute top-0 -z-30 min-h-screen w-screen object-fill"
      />
      <div className="mt-[-25vh] flex w-2/3 flex-col items-center justify-center gap-4 md:mt-[-30vh] md:gap-10 lg:mt-[-40vh] xl:mt-[0]">
        <motion.div
          variants={animationScale}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial="hidden"
          whileInView="show"
        >
          <div className="text-center font-leap text-4xl font-bold text-leap-dark-green md:text-6xl lg:text-8xl">
            UCR LEAP
          </div>
        </motion.div>
        <motion.div
          variants={animationY}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial="hidden"
          whileInView="show"
        >
          <div className="text-center font-leap text-xl font-semibold text-leap-dark-green md:text-2xl lg:text-3xl">
            Leap!'s mission is to promote and encourage the acknowledgement and
            health of mental health in the Asian & Pacific Islander community of
            UCR.
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Header;
