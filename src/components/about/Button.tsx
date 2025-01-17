import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <div className="flex items-center justify-center w-1/6 h-1/6">
      <Link href={link} target="_blank">
        <div
          className="flex items-center rounded-lg border-4 border-leap-dark-green
           bg-leap-mid-green text-white font-leap m-0 text-center text-lg h-15 w-40 px-4 py-1"
        >
            {text}
        </div>
      </Link>
    </div>
  );
};

export default Button;
