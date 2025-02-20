import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const ValuesContainer = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center lg:pb-24 lg:pt-8">
      <div className="flex items-center justify-center  md:mt-20 lg:mt-16">
        <Description />
      </div>

      <div className="mx-6 flex items-center justify-center md:mx-24 md:mt-20 lg:mx-40 lg:mt-16">
        <Value_Box />
      </div>
    </div>
  );
};

export default ValuesContainer;
