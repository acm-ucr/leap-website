import React from "react";

const Value_Box = () => {
  const topics = ["Awareness", "Community", "Safety", "Mental Health"];
  return (
    <div className="flex min-h-screen items-start justify-end">
      <div className="grid w-full max-w-xs grid-cols-1 gap-4 sm:mr-44 md:mr-48 lg:mr-52">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="md:h-35 sm:h-30 md:text-2x1 sm:text-x1 flex w-72 items-center justify-center border-2 border-white bg-leap-mid-green p-2 text-center font-leap text-white shadow-lg shadow-leap-light-green lg:h-40 lg:text-3xl"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value_Box;
