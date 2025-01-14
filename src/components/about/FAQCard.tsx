import React from "react";

// Reusable Card Component
interface FAQCardProps {
  text: string;
}
const FAQCard: React.FC<FAQCardProps> = ({ text }) => {
  return (
    <div className="relative m-4 flex flex-col items-center">
      <div className="top text-5xl text-green-700">♡</div>
      <div
        className="square-lg aspect-[4/3] w-64 bg-green-700 p-8 text-center text-lg font-semibold text-white shadow-lg"
        style={{
          boxShadow: "10px 10px 5px #888888",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FAQCard;
