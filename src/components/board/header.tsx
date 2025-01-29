import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full bg-transparent">
      <div className="text-leap place-self-center pt-32 text-5xl text-leap-dark-green">
        {title}
      </div>
      ;
      <div className="text-leap place-self-center pt-4 text-2xl text-leap-dark-green">
        <p> {subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
