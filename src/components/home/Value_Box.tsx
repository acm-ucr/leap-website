import React from "react";

const Value_Box = () => {
  const topics = ["Awareness", "Community", "Safety", "Mental Health"];
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-xs lg:w-md grid w-full grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="w-15/16 md:w-14/15 lg:w-21/24 flex h-20 items-center justify-center border-2 border-white bg-leap-mid-green p-2 text-center font-leap text-2xl text-white shadow-lg shadow-leap-light-green lg:h-40 lg:text-3xl"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value_Box;
