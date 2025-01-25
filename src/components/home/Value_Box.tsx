import React from "react";

const Value_Box = () => {
  const topics = ["Awareness", "Community", "Safety", "Mental Health"];
  return (
    <div className="flex min-h-screen items-start justify-end"> 
      <div className="mr-52 grid w-full max-w-xs grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex h-52 w-72 items-center justify-center border-2 border-white bg-leap-mid-green p-2 text-center font-leap text-5xl text-white shadow-lg shadow-leap-light-green"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value_Box;