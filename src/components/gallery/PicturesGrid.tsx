"use client";
import { PicturesData } from "@/data/PicturesData";
import { motion } from "motion/react";

const PicturesGrid = () => {
  return (
    <div className="grid h-[1000px] grid-cols-4 grid-rows-5 gap-1 pb-1 pt-8 md:h-[1000px] md:grid-rows-10 lg:h-[1400px] lg:grid-rows-10">
      {PicturesData.map(
        ({ className, imgProperties, pictures, alt }, index) => (
          <motion.div
            key={index}
            className={`${className}`}
            initial={{ scale: 1 / 2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 / 2 }}
          >
            <img
              className={`${imgProperties || "flex h-full w-full items-center justify-center object-cover"}`}
              src={pictures}
              alt={alt}
            />
          </motion.div>
        ),
      )}
    </div>
  );
};

export default PicturesGrid;
