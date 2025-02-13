import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const ValuesContainer = () => {
  return (
    <div className="flex items-start bg-leap-dark-green">
      <div className="mt-24 flex flex-1 items-start justify-center">
        <Description />
      </div>

      <div className="mt-24 flex flex-1 items-start justify-center">
        <Value_Box />
      </div>
    </div>
  );
};

export default ValuesContainer;
