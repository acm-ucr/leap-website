import Header from "@/components/home/Header";
import CoreValues from "@/components/home/CoreValues";
import ValuesContainer from "@/components/home/ValuesContainer";

import valuesBg from "@/public/assets/home/valuesBg.webp";

import Image from "next/image";

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src={valuesBg}
        alt="Background Image"
        className="absolute top-[30vh] -z-10 h-full w-full object-cover sm:top-[35vh] sm:object-fill md:top-[40vh] lg:top-[45vh]"
      />
      <Header />
      <CoreValues />
      <ValuesContainer />
    </div>
  );
};

export default Home;
