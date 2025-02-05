import React from "react";

interface EventProps {
  date: string;
  time: string;
  title: string;
  desc: string;
}

const Events: React.FC<EventProps> = ({ date, time, title, desc }) => {
  return (
    <div className="grid h-[1/3vh] w-[1050px] grid-cols-7 items-center overflow-hidden rounded-lg font-leap">
      <div className="col-span-1 flex h-full items-center justify-center bg-leap-mid-green">
        <div className="flex flex-col items-center justify-center px-10 py-7 text-center text-white">
          <div className="text-3xl font-semibold">{date}</div>
          <div className="text-sm">{time}</div>
        </div>
      </div>
      <div className="col-span-6 h-full bg-[#f7eee3]">
        <div className="p-7">
          <h1 className="text-4xl font-semibold text-leap-dark-green">
            {title}
          </h1>
          <p className="mt-2 text-leap-dark-green">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
