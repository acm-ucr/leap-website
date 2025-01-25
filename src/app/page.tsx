import Value_Box from "@/components/home/Value_Box";
import Description from "@/components/home/Description";

const Home = () => {
  return (
    <div className="flex min-h-screen items-start bg-leap-dark-green">
      <div className="flex-1 flex items-start justify-center">
        <Description />
      </div>
      
      <div className="flex-1 flex items-start justify-center">
        <Value_Box />
      </div>
    </div>
  );
};

export default Home;