"use client";
import Link from "next/link";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="404"
        className="absolute -z-20 min-h-screen w-screen"
      />
      <motion.div
        initial={{ x: "-100vw", y: "-100vh", scale: 0.5 }}
        animate={{ x: 0, y: 0, scale: [1, 2, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="mb-2 text-5xl font-bold text-leap-text md:text-7xl"
      >
        404
      </motion.div>
      <motion.div
        initial={{ x: "-100vw", y: "-100vh", scale: 0.5 }}
        animate={{ x: 0, y: 0, scale: [1, 2, 1] }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        className="mb-6 text-lg font-semibold text-leap-text md:text-2xl"
      >
        Page Not Found
      </motion.div>
      <motion.div
        initial={{ x: "-100vw", y: "-100vh", scale: 0.5 }}
        animate={{ x: 0, y: 0, scale: [1, 2, 1] }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
      >
        <Link href="/" className="bg-leap-mid-green p-4 text-leap-text">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
