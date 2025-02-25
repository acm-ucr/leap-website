"use client";
import PicturesGrid from "@/components/gallery/PicturesGrid";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
import { Carousel } from "@/components/Carousel";
import { motion } from "motion/react";

const GalleryWrapper = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center">
      <Image
        src={BackgroundImage}
        alt="Gallery Background"
        layout="fill"
        objectFit="cover"
        className="absolute -z-10"
      />
      <div className="relative mt-3 w-5/6 md:mt-10 lg:mt-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center font-leap py-3 md:py-8 lg:py-10"
        >
          <div className="text-leap place-self-center pb-10 pt-40 text-3xl font-bold text-leap-dark-green sm:text-4xl md:text-4xl lg:text-5xl">
            <p>Gallery</p>
          </div>
          <div className="text-leap md:pb-15 place-self-center px-20 pb-4 pt-4 text-base font-semibold text-leap-dark-green sm:pb-10 sm:text-lg md:text-xl lg:pb-20 lg:text-2xl">
            <p>Explore memories and photos from our past events</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Carousel />
        </motion.div>

        <div className="mt-5 flex justify-center pt-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="inline-block border-b-2 border-black text-center font-leap text-2xl font-bold"
          >
            2024-2025
          </motion.div>
        </div>
        <PicturesGrid />
      </div>
    </div>
  );
};

export default GalleryWrapper;
