"use client";
import PicturesGrid from "./PicturesGrid";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
import { Carousel } from "../Carousel";
import { motion } from "motion/react";

const Gallery = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center">
      <Image
        src={BackgroundImage}
        alt="Gallery Background"
        layout="fill"
        objectFit="cover"
        className="absolute -z-10"
      />
      <div className="relative mt-12 w-5/6 pt-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 py-10 text-center font-leap text-4xl font-bold"
        >
          <div className="text-leap place-self-center pb-10 pt-40 text-5xl text-leap-dark-green">
            <p>Gallery</p>
          </div>
          <div className="text-leap place-self-center px-20 pb-20 pt-4 text-2xl text-leap-dark-green">
            <p>Explore memories and photos from our past events</p>
          </div>
        </motion.h1>

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

export default Gallery;
