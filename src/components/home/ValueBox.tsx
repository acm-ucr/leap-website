"use client";

import { motion } from "motion/react";
import Image from "next/image";
import redFlower from "@/public/assets/redFlower.svg";

const ValueBox = () => {
  const topics = ["Awareness", "Community", "Safety", "Mental Health"];

  return (
    <div className="flex min-h-[300px] items-center justify-center md:min-h-[450px] lg:min-h-[650px]">
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 * index }}
          >
            <div className="flex h-[150px] w-full items-center justify-center border-4 border-white bg-leap-mid-green p-6 text-center font-leap text-2xl text-white shadow-xl shadow-leap-light-green sm:h-[200px] sm:text-3xl lg:h-[300px] lg:text-4xl">
              {topic}
            </div>
          </motion.div>
        ))}
        <div className="absolute translate-x-[150%] translate-y-[300%] sm:translate-x-[170%] lg:translate-x-[210%] lg:translate-y-[600%]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image src={redFlower} alt="Red Flower" className="h-20 w-20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ValueBox;
