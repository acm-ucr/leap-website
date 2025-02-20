import Header from "@/components/home/Header";
import CoreValues from "@/components/home/CoreValues";
import ValuesContainer from "@/components/home/ValuesContainer";

import valuesBg from "@/public/assets/home/valuesBg.svg";

import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen overflow-hidden">
      <Image
        src={valuesBg}
        alt="Background Image"
        className="absolute -z-20 h-full w-full object-cover top-[240px] md:top-[400px] lg:top-[300px]"
      />
      <Header /> 
      <CoreValues />
      <ValuesContainer />
    </div>
  );
};

export default Home;