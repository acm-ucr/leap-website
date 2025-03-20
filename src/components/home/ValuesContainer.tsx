"use client";
import ValueBox from "@/components/home/ValueBox";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/homepageFlowers.webp";
import lilyPad from "@/public/assets/lilyPad.svg";
import { motion } from "motion/react";

const ValuesContainer = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-5 px-5 py-10 sm:gap-x-10 lg:pb-24">
      <motion.div
        className="flex items-center justify-center md:mt-20 lg:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ x: ["-5%", "0%"], y: ["20%", "0%"], opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src={FlowerImg}
          alt="Flowers"
          className="h-[300px] w-[200px] md:h-[450px] md:w-[300px] lg:h-[650px] lg:w-[475px]"
        />
        <div className="absolute translate-x-[-100%] translate-y-[-200%] md:translate-x-[-170%] md:translate-y-[-280%] lg:translate-x-[-270%] lg:translate-y-[-405%]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image
              src={lilyPad}
              alt="LilyPad"
              className="h-20 w-20 rotate-180"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: ["20%", "0%"], x: ["10%", "0%"], opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ValueBox />
        </motion.div>
      </div>
    </div>
  );
};

export default ValuesContainer;
