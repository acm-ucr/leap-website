import Demo from "@/components/demo";
import filler from "@/public/filler.webp";

const Home = () => {
  return (
    <div className="flex h-screen flex-col items-center">
      Home
      <Demo text="kevin is cool" image={filler} />
    </div>
  );
};

export default Home;
