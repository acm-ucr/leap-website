import Events from "@/components/events/Events";
import Header from "@/components/Header";
import { events } from "@/data/EventsData";
import BackgroundImage from "@/public/assets/backgrounds/HeaderEvent.webp";
import UpcomingTitle from "@/components/events/UpcomingTitle";

const OurEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Header
        title={"Events"}
        subtitle={"Explore when our next event is and make sure to stop by."}
        background={BackgroundImage}
      />
      <UpcomingTitle title="Upcoming Events" />
      {events.map(({ title, date, time, description }) => (
        <Events title={title} date={date} time={time} desc={description} />
      ))}
    </div>
  );
};

export default OurEvents;
