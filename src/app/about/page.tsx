"use client";
import Leap from "@/components/about/Leap";
import FAQSection from "@/components/about/FAQSection";
import ValueSection from "@/components/about/ValueSection";
import BackgroundImg from "@/public/assets/about/background.webp";
import Header from "@/components/Header";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-cover bg-center bg-no-repeat text-center">
      <Image
        src={BackgroundImg}
        alt="Gallery Background"
        objectFit="cover"
        className="absolute -z-10 h-full w-full"
      />
      <Header title="About Us" subtitle="Learn more about LEAP! @ UCR." />
      <Leap />
      <FAQSection />
      <ValueSection />
    </div>
  );
};

export default AboutUs;
