"use client";
import ValueBox from "@/components/home/ValueBox";
import Description from "@/components/home/Description";
import { motion } from "motion/react";

const ValuesContainer = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center lg:pb-24 lg:pt-8">
      <motion.div
        className="flex items-center justify-center md:mt-20 lg:mt-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <Description />
      </motion.div>

      <div className="mx-6 flex items-center justify-center md:mx-24 md:mt-20 lg:mx-40 lg:mt-16">
        <ValueBox />
      </div>
    </div>
  );
};

export default ValuesContainer;
