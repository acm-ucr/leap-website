"use client";
import { motion } from "motion/react";
import { valueData } from "@/data/ValueData";
import ValueCard from "@/components/about/ValueCard";
import BackgroundImage from "@/public/assets/about/bg-Value-about.webp";
import Image from "next/image";

export default function ValueSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 pt-28">
      <Image
        src={BackgroundImage}
        alt="questions background"
        className="absolute -z-10 h-full w-full object-cover"
      />

      <motion.div
        className="mb-12 text-3xl font-bold text-leap-dark-green md:text-5xl"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Values
      </motion.div>

      <motion.div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-2 sm:grid-cols-2">
        {valueData.map(({ title, text }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ValueCard key={index} title={title} text={text} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
