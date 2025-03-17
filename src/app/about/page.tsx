"use client";
import Leap from "@/components/about/Leap";
import FAQSection from "@/components/about/FAQSection";
import ValueSection from "@/components/about/ValueSection";
import BackgroundImg from "@/public/assets/about/background.webp";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: `url(${BackgroundImg.src})` }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-6 mt-3 w-5/6 md:mt-10 lg:mt-12"
      >
        <div className="pb-5 pt-40 font-leap text-6xl font-bold text-leap-dark-green sm:text-5xl lg:text-6xl">
          About Us
        </div>
        <div className="md:pb-15 px-4 pb-4 pt-4 font-leap text-xl font-semibold text-leap-dark-green sm:px-20 sm:pb-10 sm:text-lg md:text-xl lg:pb-10 lg:text-2xl">
          Learn more about LEAP! @ UCR
        </div>
      </motion.div>
      <Leap />
      <FAQSection />
      <ValueSection />
    </div>
  );
};

export default AboutUs;
