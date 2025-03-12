"use client";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundError.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/Button";
import pinkFlower from "@/public/assets/pinkFlower.svg";

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
        <Button text="Back to Home" link="/" />
      </motion.div>
      <div className="pointer-events-none absolute translate-x-[190%] translate-y-[80%] md:translate-y-[120%]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Image src={pinkFlower} alt="Pink Flower" className="h-10 w-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
