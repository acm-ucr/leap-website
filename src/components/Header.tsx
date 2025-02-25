import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  subtitle: string;
  background: StaticImageData;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, background }) => {
  return (
    <div className="relative w-full">
      <Image
        src={background}
        className="absolute -z-20 h-[60vh] w-full md:flex"
        alt="header background"
      />
      <div className="text-leap place-self-center pt-40 text-5xl text-leap-dark-green">
        {title}
      </div>
      ;
      <div className="text-leap place-self-center px-20 pb-32 pt-4 text-2xl text-leap-dark-green">
        <p> {subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
