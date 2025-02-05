import { faqData } from "./faqData";
import FAQCard from "./FAQCard";
import BackgroundImage from "@/public/assets/about/bg-about-questions.webp";
import Image from "next/image";

export default function FAQSection() {
  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="questions background"
        className="absolute -z-10 min-h-screen w-screen"
      />
      <h1 className="ml-10 text-left text-4xl font-bold text-leap-dark-green">
        Recruitment Questions
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {faqData.map((FAQItem, index) => (
          <FAQCard key={index} text={FAQItem.text} />
        ))}
      </div>
    </div>
  );
}
