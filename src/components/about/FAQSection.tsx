"use client";
import { motion } from "motion/react";
import { faqData } from "../../data/FAQsData";
import FAQCard from "./FAQCard";
import Image from "next/image";
import BackgroundImage from "@/public/assets/about/bg-about-questions.webp";

export default function FAQSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="questions background"
        className="absolute -z-10 h-full w-full object-cover"
      />

      <motion.div
        className="mt-20 text-2xl font-bold text-leap-dark-green md:mt-32 md:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Recruitment Questions
      </motion.div>

      <div className="mt-6 flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-4">
        {faqData.map(({ text, backText }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FAQCard text={text} backText={backText} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
