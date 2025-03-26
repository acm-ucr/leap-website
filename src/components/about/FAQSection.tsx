"use client";
import { motion } from "motion/react";
import { faqData } from "@/data/FAQs";
import FAQCard from "@/components/about/FAQCard";

export default function FAQSection() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-8">
      <motion.div
        className="mb-6 text-3xl font-bold text-leap-dark-green md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Recruitment Questions
      </motion.div>

      <div className="mt-6 flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-4 pb-10">
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
