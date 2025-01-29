import Events from "../../components/events/Events";
import Header from "../../components/board/header";

const OurEvents = () => {
  return (
    <div>
      <Events />
      <Header
        title={"Events"}
        subtitle={"Explore when our next event is and make sure to stop by."}
      />
    </div>
  );
};

export default OurEvents;
