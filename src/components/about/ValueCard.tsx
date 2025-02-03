import React from "react";

interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  // Assign class names to variables for readability and maintainability
  const containerClasses = "flex flex-col items-center my-8";

  const titleClasses =
    "text-3xl text-leap-dark-green mb-6 text-center font-bold tracking-widest";

  const boxClasses =
    "bg-leap-mid-green p-6 shadow-[0_4px_6px_rgba(0.9,1.9,0.9,1.9)] max-w-[300px] text-center text-white text-base leading-relaxed relative tracking-widest";

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <div className={boxClasses}>{text}</div>
    </div>
  );
};

export default ValueCard;
