"use client";
import { PicturesData } from "@/data/PicturesData";
import { motion } from "motion/react";
import Image from "next/image";

const PicturesGrid = () => {
  return (
    <div className="grid h-[100vh] grid-cols-4 grid-rows-5 gap-1 pb-16 pt-8 md:h-[145vh] md:grid-rows-10 lg:grid-rows-10">
      {PicturesData.map(({ className, pictures, alt }, index) => (
        <motion.div
          key={index}
          className={`${className}`}
          initial={{ scale: 1 / 2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 / 2 }}
        >
          <Image
            className="flex h-full w-full items-center justify-center object-cover"
            src={pictures}
            alt={alt}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PicturesGrid;
