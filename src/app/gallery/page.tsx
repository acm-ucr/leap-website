"use client";
import PicturesGrid from "@/components/gallery/PicturesGrid";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundGallery.webp";
import Image from "next/image";
import { Carousel } from "@/components/gallery/Carousel";
import { motion } from "motion/react";
import Header from "@/components/Header";

const Gallery = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center">
      <Image
        src={BackgroundImage}
        alt="Gallery Background"
        objectFit="cover"
        className="absolute -z-10 h-full w-full"
      />
      <div className="h-full w-5/6">
        <Header
          title="Gallery"
          subtitle="Explore memories and photos from our past events"
        />

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto sm:w-3/4 md:w-3/4 lg:w-1/2"
        >
          <Carousel />
        </motion.div>

        <div className="mt-0 flex justify-center pt-8 sm:mt-5 sm:pt-12">
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

export default Gallery;
