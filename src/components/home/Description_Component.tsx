import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const Description_Component = () => {
  return (
    <div className="flex min-h-screen items-start bg-leap-dark-green">
      <div className="flex flex-1 items-start justify-center">
        <Description />
      </div>

      <div className="flex flex-1 items-start justify-center">
        <Value_Box />
      </div>
    </div>
  );
};

export default Description_Component;