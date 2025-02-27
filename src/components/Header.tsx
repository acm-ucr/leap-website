import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  subtitle: React.ReactNode;
  background: StaticImageData;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, background }) => {
  return (
    <div className="relative w-full text-center">
      <Image
        src={background}
        layout="fill"
        className="absolute -z-20"
        alt="header background"
      />
      <div className="text-leap place-self-center pb-10 pt-52 text-3xl font-bold text-leap-dark-green sm:text-4xl md:pt-60 md:text-4xl lg:text-5xl">
        {title}
      </div>
      <div className="text-leap md:pb-15 place-self-center px-20 pb-8 pt-4 text-base font-semibold text-leap-dark-green sm:pb-10 sm:text-lg md:text-xl lg:pb-20 lg:text-2xl">
        <p> {subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
