import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const ValuesContainer = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-leap-dark-green">
      <div className="flex items-center justify-center sm:mt-16 md:mt-20 lg:mt-16">
        <Description />
      </div>

      <div className="mx-6 flex items-center justify-center sm:mt-16 md:mx-24 md:mt-20 lg:mx-40 lg:mt-16">
        <Value_Box />
      </div>
    </div>
  );
};

export default ValuesContainer;
