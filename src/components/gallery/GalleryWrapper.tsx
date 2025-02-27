"use client";
import PicturesGrid from "@/components/gallery/PicturesGrid";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundGallery.webp";
import Image from "next/image";
import { Carousel } from "@/components/gallery/Carousel";
import { motion } from "motion/react";

const GalleryWrapper = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center">
      <Image
        src={BackgroundImage}
        alt="Gallery Background"
        objectFit="cover"
        className="absolute -z-10 h-full w-full"
      />
      <div className="relative mt-3 w-5/6 md:mt-10 lg:mt-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-3 text-center font-leap md:py-8 lg:py-10"
        >
          <div className="pb-10 pt-40 font-leap text-3xl font-bold text-leap-dark-green sm:text-4xl md:text-4xl lg:text-5xl">
            Gallery
          </div>
          <div className="md:pb-15 px-20 pb-4 pt-4 font-leap font-semibold text-leap-dark-green sm:pb-10 sm:text-lg md:text-xl lg:pb-20 lg:text-2xl">
            Explore memories and photos from our past events
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
