import React from "react";

// Reusable Card Component
interface FAQCardProps {
  text: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ text }) => {
  return (
    <div className="relative m-4 flex flex-col items-center">
      {/*Icon*/}
      <div className="top text-3xl text-leap-mid-green md:text-5xl">♡</div>

      {/*Card*/}
      <div
        className="square-lg aspect-[4/3] w-11/12 bg-leap-mid-green p-6 text-center font-leap text-xl text-white shadow-xl sm:w-64 md:w-72 md:p-8 lg:w-80"
        style={{
          boxShadow: "10px 10px 5px #324935",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FAQCard;
