interface EventProps {
  date: string;
  time: string;
  title: string;
  desc: string;
}

const Events: React.FC<EventProps> = ({ date, time, title, desc }) => {
  return (
    <div className="grid grid-cols-7 items-center overflow-hidden rounded-lg font-leap sm:h-1/3 sm:w-full">
      <div className="col-span-1 flex h-full items-center justify-center bg-leap-mid-green">
        <div className="flex flex-col items-center justify-center px-10 py-7 text-center text-white">
          <div className="text-xl font-semibold md:text-3xl lg:text-4xl">
            {date}
          </div>
          <div className="text-md md:text-sm lg:text-lg">{time}</div>
        </div>
      </div>
      <div className="col-span-6 h-full bg-[#f7eee3]">
        <div className="p-7">
          <div className="text-3xl font-semibold text-leap-dark-green md:text-4xl lg:text-4xl">
            {title}
          </div>
          <p className="md:text-md mt-2 text-leap-dark-green lg:text-lg">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
