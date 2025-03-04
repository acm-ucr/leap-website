import Header from "@/components/home/Header";
import CoreValues from "@/components/home/CoreValues";
import ValuesContainer from "@/components/home/ValuesContainer";

import valuesBg from "@/public/assets/home/valuesBg.svg";

import Image from "next/image";

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src={valuesBg}
        alt="Background Image"
        className="absolute top-[218px] -z-20 h-full w-full object-cover md:top-[250px] lg:top-[300px] xl:top-[420px]"
      />
      <Header />
      <CoreValues />
      <ValuesContainer />
    </div>
  );
};

export default Home;
