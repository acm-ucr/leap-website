import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const ValuesContainer = () => {
  return (
    <div className="flex items-center bg-leap-dark-green">
      <div className="flex flex-1 items-center justify-center sm:mt-16 md:mt-20 lg:mt-24">
        <Description />
      </div>

      <div className="mt-24 flex flex-1 items-center justify-center sm:mt-16 md:mt-20">
        <Value_Box />
      </div>
    </div>
  );
};

export default ValuesContainer;
