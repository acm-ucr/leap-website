import React from "react";

interface EventProps {
  date: string;
  time: string;
  title: string;
  desc: string;
}

const Events: React.FC<EventProps> = ({ date, time, title, desc }) => {
  return (
    <div className="flex h-[1/3vh] w-[1050px] items-center overflow-hidden rounded-lg">
      <div className="h-full bg-[#2A7860] p-7">
        <div className="flex flex-col items-center justify-center px-10 py-7 text-center text-white">
          <div className="text-3xl font-semibold">{date}</div>
          <div className="text-sm">{time}</div>
        </div>
      </div>
      <div className="h-full] bg-[#f7eee3] p-7">
        <div className="">
          <h1 className="text-4xl font-semibold text-[#203e4e]">{title}</h1>
          <p className="mt-2 text-[#203e4e]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
