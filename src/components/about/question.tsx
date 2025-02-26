import { faqData } from "../../data/faqData";
import FAQCard from "./FAQCard";
import BackgroundImage from "@/public/assets/about/bg-about-questions.webp";
import Image from "next/image";

export default function FAQSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="questions background"
        className="absolute -z-10 h-full w-full object-cover"
      />

      <div className="mt-20 text-2xl font-bold text-leap-dark-green md:mt-32 md:text-4xl">
        Recruitment Questions
      </div>

      <div className="mt-6 flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-4">
        {faqData.map(({ text, backText }, index) => (
          <FAQCard key={index} text={text} backText={backText} />
        ))}
      </div>
    </div>
  );
}
