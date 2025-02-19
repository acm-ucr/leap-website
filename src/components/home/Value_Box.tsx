import React from "react";

const Value_Box = () => {
  const topics = ["Awareness", "Community", "Safety", "Mental Health"];
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid w-full max-w-xs grid-cols-1 gap-4 lg:max-w-md">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex h-20 w-40 items-center justify-center border-2 border-white bg-leap-mid-green p-2 text-center font-leap text-2xl text-white shadow-lg shadow-leap-light-green md:w-56 lg:h-40 lg:w-72 lg:text-3xl"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value_Box;
