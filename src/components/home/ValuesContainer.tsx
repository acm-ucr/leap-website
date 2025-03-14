"use client";
import ValueBox from "@/components/home/ValueBox";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/description.webp";
import lilyPad from "@/public/assets/lilyPad.svg";
import { motion } from "motion/react";

const ValuesContainer = () => {
  return (
    <div className="md:pt-15 flex h-full w-full flex-row items-center justify-evenly pb-11 lg:pt-20">
      <motion.div
        className="flex items-center justify-evenly"
        initial={{ opacity: 0 }}
        whileInView={{ x: ["-5%", "0%"], y: ["20%", "0%"], opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src={FlowerImg}
          alt="Flowers"
          className="h-full w-[200px] object-fill md:w-[300px] lg:w-[475px]"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute translate-x-[-100%] translate-y-[-200%] md:translate-x-[-170%] md:translate-y-[-280%] lg:translate-x-[-270%] lg:translate-y-[-405%]"
        >
          <Image src={lilyPad} alt="LilyPad" className="h-20 w-20 rotate-180" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: ["20%", "0%"], x: ["10%", "0%"], opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mr-6 mt-20 flex items-center justify-center md:mr-24 lg:mr-40 lg:mt-16"
      >
        <ValueBox />
      </motion.div>
    </div>
  );
};

export default ValuesContainer;
