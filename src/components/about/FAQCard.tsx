import React from "react";

interface FAQCardProps {
  text: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ text }) => {
  return (
    <div className="relative m-4 flex flex-col items-center">
      {/* Icon */}
      <div className="top text-4xl text-leap-mid-green md:text-5xl">♡</div>

      {/* Card */}
      <div className="square-lg flex aspect-[4/3] w-8/12 items-center justify-center bg-leap-mid-green p-6 text-center font-leap text-xl text-white shadow-lg shadow-leap-dark-green sm:w-64 md:w-72 md:text-lg lg:w-80 lg:text-2xl">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FAQCard;
