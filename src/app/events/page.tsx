import Events from "../../components/events/Events";
import Header from "@/components/Header";
import { events } from "@/data/events";
import BackgroundImage from "@/public/assets/header-background-about.webp";
import UpcomingTitle from "@/components/events/UpcomingTitle";

const OurEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <Header
        title={"Events"}
        subtitle={"Explore when our next event is and make sure to stop by."}
        background={BackgroundImage}
      />
      <UpcomingTitle title="Upcoming Events" />
      {events.map((event) => (
        <Events
          title={event.title}
          date={event.date}
          time={event.time}
          desc={event.description}
        />
      ))}
    </div>
  );
};

export default OurEvents;
