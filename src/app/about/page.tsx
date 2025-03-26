"use client";
import Leap from "@/components/about/Leap";
import FAQSection from "@/components/about/FAQSection";
import ValueSection from "@/components/about/ValueSection";
import BackgroundImg from "@/public/assets/about/background.webp";
import Header from "@/components/Header";

const AboutUs = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: `url(${BackgroundImg.src})` }}
    >
      <Header title="About Us" subtitle="Learn more about LEAP! @ UCR." />
      <Leap />
      <FAQSection />
      <ValueSection />
    </div>
  );
};

export default AboutUs;
