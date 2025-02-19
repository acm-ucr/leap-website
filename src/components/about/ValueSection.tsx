import { valueData } from "./ValueData";
import ValueCard from "./ValueCard";
import BackgroundImage from "@/public/assets/about/bg-Value-about.webp";
import Image from "next/image";

export default function ValueSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* Background */}
      <Image
        src={BackgroundImage}
        alt="questions background"
        className="absolute -z-10 h-full w-full object-cover"
      />

      {/* Title */}
      <h1 className="mb-12 text-5xl font-bold text-leap-dark-green md:text-4xl">
        Values
      </h1>

      {/* Cards Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-11 px-4 sm:grid-cols-2">
        {valueData.map((item, index) => (
          <ValueCard key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
