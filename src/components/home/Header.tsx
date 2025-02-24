import header_bg from "@/public/assets/home/header.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center md:h-[120vh] lg:h-[140vh]">
      <Image
        src={header_bg}
        alt="Home Header"
        className="absolute top-0 -z-30 min-h-screen w-screen object-fill"
      />
      <div className="mt-[-25vh] flex w-2/3 flex-col items-center justify-center gap-4 md:mt-[-30vh] md:gap-10 lg:mt-[-40vh] xl:mt-[0]">
        <div className="text-center font-leap text-4xl font-bold text-leap-dark-green md:text-6xl lg:text-8xl">
          UCR LEAP
        </div>
        <div className="text-center font-leap text-xl font-semibold text-leap-dark-green md:text-2xl lg:text-3xl">
          Leap!'s mission is to promote and encourage the acknowledgement and
          health of mental health in the Asian & Pacific Islander community of
          UCR.
        </div>
      </div>
    </div>
  );
};
export default Header;
