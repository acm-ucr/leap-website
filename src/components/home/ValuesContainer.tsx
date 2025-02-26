import ValueBox from "@/components/home/ValueBox";
import Image from "next/image";
import FlowerImg from "@/public/assets/home/description.webp";

const ValuesContainer = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center lg:pb-24 lg:pt-8">
      <div className="flex items-center justify-center md:mt-20 lg:mt-16">
        <div className="ml-5 flex items-center justify-center">
          <Image
            src={FlowerImg}
            alt="Flowers"
            className="h-[300px] w-[200px] md:h-[450px] md:w-[300px] lg:h-[650px] lg:w-[475px]"
          />
        </div>
      </div>

      <div className="mx-6 flex items-center justify-center md:mx-24 md:mt-20 lg:mx-40 lg:mt-16">
        <ValueBox />
      </div>
    </div>
  );
};

export default ValuesContainer;
