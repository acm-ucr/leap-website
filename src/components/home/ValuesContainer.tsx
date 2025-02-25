"use client";
import ValueBox from "@/components/home/ValueBox";
import Description from "@/components/home/Description";
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
        <Description />
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
