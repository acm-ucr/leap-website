'use client'
// import { useEffect, useState } from "react";

// import {
//     Calendar,
//     EventProps,
//     DayProps,
//     GoogleCalendarEventProps
// } from "@/components/ui/calendar";

// const Events = () => {
//     const [events, setEvents] = useState<EventProps[]>([]);

//     useEffect(() => {

//     const fetchEvents = async () => {
//         const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
//         const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

//         if (!apiKey || !calendarId) {
//             console.error("API Key or Calendar ID is missing.");
//             return;
//         }

//         const today = new Date();
//         const timeMin = today.toISOString();
//         const timeMax = new Date(today);
//         timeMax.setMonth(today.getMonth() + 2);
//         const timeMaxISO = timeMax.toISOString();
//         const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
//             timeMin,
//         )}&timeMax=${encodeURIComponent(timeMaxISO)}`;

//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();

//             const formattedEvents: EventProps[] = data.items.map(
//             (event: GoogleCalendarEventProps) => ({
//                 date: new Date(event.start.dateTime || /*event.start.date || */ ""),
//                 startingTime: event.start.dateTime || "",
//                 endingTime: event.start.dateTime || "",
//                 location: event.location || "N/A",
//                 //description:,
//                 title: event.summary || "No Title",
//             }),
//             );

//             setEvents(formattedEvents);
//         } catch(error) {console.error("Error fetching events from Google Calendar:", error);}
//     }
    
//     fetchEvents();
//     }, []);
//     };

import {
    Calendar,
    EventProps,
    GoogleEventProps,
  } from "@/components/ui/calendar";
  import { useQuery } from "@tanstack/react-query";
  import { useState } from "react";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  const Events = () => {
    const [current, setCurrent] = useState<EventProps>({});
  
    const { isPending, error, data } = useQuery({
      queryKey: ["repoData"],
      queryFn: async () => {
        const response =
          await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
            &singleEvents=true&orderBy=startTime&timeMin=${new Date(
              new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
            ).toISOString()}&timeMax=${new Date(
              new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
            ).toISOString()}`).then((res) => res.json());
            console.log(response);//
        const events = response.items.map(
          ({ start, end, location, description, summary }: GoogleEventProps) => ({
            start: start.dateTime,
            end: end.dateTime,
            location,
            description,
            title: summary,
          }),
        );
  
        return events;
      },
    });
  
    // TODO: HANDLE ERROR AND PENDING STATES
    console.log(error, isPending);
  
    return (
      <>
        {
          <Dialog
            open={Object.keys(current).length > 0}
            onOpenChange={() => setCurrent({})}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <p className="text-xl">{current.title}</p>
                  <p className="text-base font-normal">
                    {current.location} from{" "}
                    {new Date(current.start as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}{" "}
                    to{" "}
                    {new Date(current.end as string).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </DialogTitle>
                <DialogDescription>{current.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        }
        <Calendar
          mode="single"
          selected={new Date()}
          className="w-full rounded-md border"
          events={data}
          setCurrent={setCurrent}
        />
      </>
    );
  };
  
  export default Events;