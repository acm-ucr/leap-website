import header_bg from "@/public/assets/home/header.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex h-[50vh] w-full flex-col items-center justify-center md:h-[75vh] lg:h-[125vh]">
      <Image
        src={header_bg}
        alt="Home Header"
        className="absolute top-0 -z-30 min-h-screen w-screen object-fill"
      />
      <div className="flex w-2/3 flex-col items-center justify-center gap-10">
        <div className="text-center font-leap text-5xl font-bold text-leap-dark-green md:text-6xl lg:text-8xl">
          UCR LEAP
        </div>
        <div className="text-center font-leap text-2xl font-semibold text-leap-dark-green md:text-3xl lg:text-4xl">
          Leap!'s mission is to promote and encourage the acknowledgement and
          health of mental health in the Asian & Pacific Islander community of
          UCR.
        </div>
      </div>
    </div>
  );
};
export default Header;
