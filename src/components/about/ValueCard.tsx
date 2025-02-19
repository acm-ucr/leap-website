import React from "react";

interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  return (
    <div className="relative m-4 flex flex-col items-center">
      {/* Title */}
      <h2 className="mb-3 text-center text-4xl font-semibold text-leap-dark-green">
        {title}
      </h2>

      {/* Box */}
      <div className="flex aspect-[5/4] w-full items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-3xl text-white shadow-lg shadow-leap-dark-green">
        {text}
      </div>
    </div>
  );
};

export default ValueCard;
