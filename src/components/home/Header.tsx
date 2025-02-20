import header_bg from "@/public/assets/home/header.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex h-[50vh] md:h-[75vh] lg:h-[125vh] w-full flex-col items-center justify-center">
      <Image
        src={header_bg}
        alt="Home Header"
        className="min-h-screen top-0 absolute -z-30 w-screen object-fill"
      />
      <div className="flex w-2/3 flex-col items-center justify-center gap-10">
        <div className="text-center font-leap text-5xl md:text-6xl lg:text-8xl font-bold text-leap-dark-green">
          UCR LEAP
        </div>
        <div className="text-center font-leap text-2xl md:text-3xl lg:text-4xl font-semibold text-leap-dark-green">
          Leap!'s mission is to promote and encourage the acknowledgement and
          health of mental health in the Asian & Pacific Islander community of
          UCR.
        </div>
      </div>
    </div>
  );
};
export default Header;