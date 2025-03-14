interface EventProps {
  date?: string;
  time?: string;
  title?: string;
  desc?: string;
}

const EventsList: React.FC<EventProps> = ({ date, time, title, desc }) => {
  return (
    <div className="grid w-3/4 grid-cols-7 items-center overflow-hidden rounded-lg pb-2 font-leap">
      <div className="col-span-3 flex h-full items-center justify-center bg-leap-mid-green lg:col-span-1">
        <div className="flex flex-col items-center justify-center px-10 py-7 text-center text-white">
          <div className="text-xl font-semibold md:text-3xl lg:text-4xl">
            {date}
          </div>
          <div className="text-md md:text-lg">{time}</div>
        </div>
      </div>
      <div className="col-span-4 h-full bg-[#f7eee3] lg:col-span-6">
        <div className="p-7">
          <div className="text-xl font-semibold text-leap-dark-green sm:text-3xl md:text-4xl lg:text-4xl">
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

export default EventsList;
