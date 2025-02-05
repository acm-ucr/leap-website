import Events from "../../components/events/Events";
import Header from "../../components/board/header";
import { events } from "@/data/events";

const OurEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <Header
        title={"Events"}
        subtitle={"Explore when our next event is and make sure to stop by."}
      />
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
