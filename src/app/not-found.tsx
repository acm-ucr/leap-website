"use client";
import Link from "next/link";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="404"
        className="absolute -z-20 min-h-screen w-screen"
      />
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="mb-2 text-5xl font-bold text-leap-text md:text-7xl"
      >
        404
      </motion.div>
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="mb-6 text-lg font-semibold text-leap-text md:text-2xl"
      >
        Page Not Found
      </motion.div>
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="/" className="bg-leap-mid-green p-4 text-leap-text">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
