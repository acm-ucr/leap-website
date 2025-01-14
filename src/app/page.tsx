import Demo from "@/components/demo";
import filler from "@/public/filler.webp";

const Home = () => {
  return (
    <div>
      Home
      <Demo name="Kevin" image={filler} />
    </div>
  );
};

export default Home;
