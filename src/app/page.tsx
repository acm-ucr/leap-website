import CoreValues from "../components/home/CoreValues";
import ValuesContainer from "@/components/home/ValuesContainer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <CoreValues />
      <ValuesContainer />
    </div>
  );
};

export default Home;
