import Demo from "@/components/demo";
import filler from "@/public/filler.webp";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      Home
      <Demo
        text="avia is asdha as dasd a sda sd asd a sd a sd a sd"
        image={filler}
      />
    </div>
  );
};

export default Home;
