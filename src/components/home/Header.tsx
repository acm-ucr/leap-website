"use client";
import { motion } from "motion/react";
import headerBg from "@/public/assets/home/header.webp";
import lilyPad from "@/public/assets/lilyPad.svg";
import pinkFlower from "@/public/assets/pinkFlower.svg";
import redFlower from "@/public/assets/redFlower.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center md:h-[110vh] lg:h-[120vh]">
      <Image
        src={headerBg}
        alt="Home Header"
        className="absolute top-0 -z-30 min-h-screen w-screen object-fill"
      />
      <div className="mt-[-25vh] flex w-2/3 flex-col items-center justify-center gap-4 md:mt-[-20vh] md:gap-10 lg:mt-[-10vh] xl:mt-[-5vh]">
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center font-leap text-5xl font-bold text-leap-dark-green md:text-7xl lg:text-8xl"
        >
          UCR LEAP!
        </motion.div>
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center font-leap text-lg font-semibold text-leap-dark-green md:text-2xl lg:text-3xl"
        >
          LEAP!'s mission is to promote and encourage the acknowledgement and
          health of mental health in the Asian & Pacific Islander community of
          UCR.
        </motion.div>
        <div className="invisible absolute flex translate-x-[80%] translate-y-[240%] items-center justify-center gap-5 sm:visible sm:translate-x-[180%] sm:translate-y-[300%] md:translate-x-[200%] md:translate-y-[370%] lg:translate-x-[180%] lg:translate-y-[310%] xl:translate-x-[250%] xl:translate-y-[280%]">
          <motion.div
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          >
            <Image
              src={pinkFlower}
              alt="Pink Flower"
              className="relative h-10 w-10 translate-y-[-10%] sm:translate-y-[40%] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </motion.div>
          <motion.div
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          >
            <Image
              src={lilyPad}
              alt="Lily Pad"
              className="h-20 w-20 md:w-20 lg:h-[110px] lg:w-[110px]"
            />
          </motion.div>
        </div>
        <div className="absolute translate-x-[-170%] translate-y-[210%] sm:translate-x-[-340%] sm:translate-y-[230%] md:translate-x-[-330%] md:translate-y-[210%] lg:translate-y-[185%] xl:translate-x-[-450%] xl:translate-y-[160%]">
          <motion.div
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          >
            <Image
              src={redFlower}
              alt="Red Flower"
              className="h-20 w-20 md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Header;
