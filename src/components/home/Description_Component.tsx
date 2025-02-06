import description_bg from "@/public/assets/home/descriptionBg.svg";
import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";
import Image from "next/image";

const Description_Component = () => {
  return (
    <div className="mb-40 flex items-start">
      <Image
        src={description_bg}
        alt="Description Background"
        className="min-w-screen absolute top-[350px] -z-20 min-h-screen"
      />
      <div className="mt-24 flex flex-1 items-start justify-center">
        <Description />
      </div>

      <div className="mt-24 flex flex-1 items-start justify-center">
        <Value_Box />
      </div>
    </div>
  );
};

export default Description_Component;
