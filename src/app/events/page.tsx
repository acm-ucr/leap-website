import Events from "../../components/events/Events";

const events = [
  {
    id: 1,
    title: "Life in the Industry: PM",
    date: "FEB 29",
    time: "7:00 PM",
    description:
      "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position.",
  },
  {
    id: 2,
    title: "Life in the Industry: PM",
    date: "FEB 29",
    time: "7:00 PM",
    description:
      "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position.",
  },
  {
    id: 3,
    title: "Life in the Industry: PM",
    date: "FEB 29",
    time: "7:00 PM",
    description:
      "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position.",
  },
  {
    id: 4,
    title: "Life in the Industry: PM",
    date: "FEB 29",
    time: "7:00 PM",
    description:
      "For our second installment of the Life in the Industry series: Learn all about the role as a Product Manager, from the details of the day-to-day work schedule to the ranking status, salaries, and the people you work with in this position.",
  },
];

const OurEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      {events.map((event) => (
        <Events
          key={event.id}
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
