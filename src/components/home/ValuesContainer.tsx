"use client";
import ValueBox from "@/components/home/ValueBox";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/description.webp";
import lilyPad from "@/public/assets/lilyPad.svg";
import { motion } from "motion/react";

const ValuesContainer = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center lg:pb-24 lg:pt-8">
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
        <div className="absolute translate-x-[-110%] translate-y-[-200%]">
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

      <div className="mx-6 flex items-center justify-center md:mx-24 md:mt-20 lg:mx-40 lg:mt-16">
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
