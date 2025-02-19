"use client";
import React from "react";
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
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-5 pt-12 text-center font-leap text-4xl font-bold"
        >
          Gallery Page
        </motion.h1>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Carousel />
        </motion.div>

        <div className="mt-5 flex justify-center pt-12">
          <h2 className="inline-block border-b-2 border-black text-center font-leap text-2xl font-bold">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              2024-2025
            </motion.div>
          </h2>
        </div>
        <PicturesGrid />
      </div>
    </div>
  );
};

export default Gallery;
