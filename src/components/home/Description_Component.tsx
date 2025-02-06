import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const Description_Component = () => {
  return (
    <div className="flex items-start bg-leap-dark-green">
      <div className="flex flex-1 items-start justify-center sm:mt-16 md:mt-20 lg:mt-24">
        <Description />
      </div>

      <div className="flex flex-1 items-start justify-center sm:mt-16 md:mt-20 lg:mt-24">
        <Value_Box />
      </div>
    </div>
  );
};

export default Description_Component;
