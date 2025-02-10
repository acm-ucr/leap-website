import { faqData } from "./faqData";
import FAQCard from "./FAQCard";
import BackgroundImage from "@/public/assets/about/bg-about-questions.webp";
import Image from "next/image";

export default function FAQSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src={BackgroundImage}
        alt="questions background"
        className="absolute -z-10 h-full w-full object-cover"
      />

      {/* Title */}
      <h1 className="mt-20 text-2xl font-bold text-leap-dark-green md:mt-32 md:text-4xl">
        Recruitment Questions
      </h1>

      {/* FAQ Cards */}
      <div className="mt-6 grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {faqData.map((FAQItem, index) => (
          <FAQCard key={index} text={FAQItem.text} />
        ))}
      </div>
    </div>
  );
}
