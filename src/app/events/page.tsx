import Header from "@/components/Header";
import Calendar from "@/components/events/Calendar";
import BackgroundImage from "@/public/assets/backgrounds/HeaderEvent.webp";

const OurEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Header
        title={"Events"}
        subtitle={"Explore when our next event is and make sure to stop by."}
        background={BackgroundImage}
      />
      <Calendar />
    </div>
  );
};

export default OurEvents;
