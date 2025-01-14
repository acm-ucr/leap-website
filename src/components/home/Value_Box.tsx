import React from "react";

const Value_Box = () => {
    const topics = ["Awareness", "Community", "Safety", "Mental Health"];
    return (
        <div className="flex justify-end items-center min-h-screen">
            <div className="grid grid-cols-1 gap-4 w-full max-w-xs mr-52">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className="bg-leap-mid-green w-72 h-52 flex justify-center items-center p-2 text-5xl font-normal text-center text-white border-2 border-white rounded-lg"
                    >
                        {topic}
                    </div>
                ))}
            </div>
        </div>
        );
};

export default Value_Box;