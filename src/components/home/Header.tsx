"use client";
import { motion } from "motion/react";
import headerBg from "@/public/assets/home/header.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Image
        src={headerBg}
        alt="Home Header"
        className="absolute top-0 -z-30 min-h-screen w-screen object-fill"
      />
      <div className="flex w-2/3 flex-col items-center justify-center gap-5 sm:mt-[-120vh] md:mt-[-15vh]">
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center font-leap text-4xl font-bold text-leap-dark-green md:text-6xl lg:text-8xl">
            UCR LEAP!
          </div>
        </motion.div>
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
