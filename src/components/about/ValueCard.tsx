import React from "react";

interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  return (
    <div className="my-8 flex flex-col items-center p-3 font-leap">
      <div className="mb-6 text-center text-3xl font-bold text-leap-dark-green">
        {title}
      </div>
      <div className="w-1/4 bg-leap-mid-green p-6 text-center text-lg text-white shadow-lg shadow-leap-light-green">
        {text}
      </div>
    </div>
  );
};

export default ValueCard;
