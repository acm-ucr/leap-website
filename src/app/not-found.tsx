"use client";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundError.webp";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="404"
        className="absolute -z-20 min-h-screen w-screen"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mb-2 text-5xl font-bold text-leap-text md:text-7xl"
      >
        404
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        className="mb-3 text-lg font-semibold text-leap-text md:text-2xl"
      >
        Page Not Found
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      >
        <Button
          text="Back to Home"
          link="/">
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
