import React from "react";

interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  // Assign class names to variables for readability and maintainability
  const containerClasses = "flex flex-col items-center my-5 font-bold";
  const titleClasses = "text-2xl text-[#3a593e] mb-4 text-center font-bold";
  const boxClasses =
    "bg-[#5e9679] p-5 shadow-[0_8px_10px_rgba(0.9,0.9,0.9,0.9)] max-w-[300px] text-center text-white text-base leading-relaxed relative";

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <div className={boxClasses}>{text}</div>
    </div>
  );
};

export default ValueCard;
