import React from "react";

const Value_Box = () => {
  const topics = ["Awareness", "Community", "Safety", "Mental Health"];
  return (
    <div className="flex min-h-screen items-start justify-end">
      <div className="md:mr-46 mr-40 grid w-full max-w-xs grid-cols-1 gap-4 lg:mr-52">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex h-40 w-72 items-center justify-center border-2 border-white bg-leap-mid-green p-2 text-center font-leap text-white shadow-lg shadow-leap-light-green lg:text-3xl"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value_Box;
