"use client";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundError.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import pinkFlower from "@/public/assets/pinkFlower.svg";

const NotFound = () => {
  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="500"
        className="absolute -z-20 min-h-screen w-screen"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mb-2 text-5xl font-bold text-leap-text md:text-7xl"
      >
        500
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        className="mb-3 text-lg font-semibold text-leap-text md:text-2xl"
      >
        an error occurred
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      >
        <Button
          asChild
          className="h-15 m-0 flex w-40 items-center rounded-lg border-4 border-leap-dark-green bg-leap-mid-green px-4 py-1 text-center font-leap text-lg text-white hover:bg-leap-mid-green"
        >
          <Link href="/">Back to Home</Link>
        </Button>
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
