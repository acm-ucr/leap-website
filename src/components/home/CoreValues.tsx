"use client";
import { motion } from "motion/react";

const CoreValues = () => {
  return (
    <div className="relative mt-[-15vh] flex items-center justify-center lg:mt-[-10]">
      <div className="w-3/4 text-left">
        <motion.div
          className="font-leap text-4xl font-bold text-white sm:text-5xl lg:text-7xl"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our Core Values
        </motion.div>
        <motion.p
          className="mt-10 font-leap text-xl text-white md:text-2xl"
          initial={{ y: 45, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Loving our Emotions as Asian & Pacific !slanders, otherwise known as
          LEAP!, is a community of friends who advocate for safe spaces and
          mental health. We strive to make a safe space for everyone of every
          background to chat, destress, make friends, and learn about mental
          health in the AAPI community. Come join us to hangout!
        </motion.p>

      </div>
      <p className="mt-10 font-leap text-xl text-white md:text-2xl">
        Loving our Emotions as Asian & Pacific !slanders, otherwise known as
        LEAP!, is a community of friends who advocate for safe spaces and mental
        health. We strive to make a safe space for everyone of every background
        to chat, destress, make friends, and learn about mental health in the
        AAPI community. Come join us to hangout!
      </p>
    </div>
  );
};

export default CoreValues;
