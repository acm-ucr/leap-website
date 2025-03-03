"use client";

import * as React from "react";
import {
  CalendarProps,
  EventProps,
  GoogleEventProps,
} from "@/components/ui/calendar";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



const Events = () => {  
  const [current, setCurrent] = useState<EventProps>({});

   const { isPending, error, data } = useQuery({
     queryKey: ["repoData"],
     queryFn: async () => {

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;
  
      if (!apiKey || !calendarId) {
        console.error("API Key or Calendar ID is missing.");
        return;
      }
      
      const today = new Date();
      const timeMin = today.toISOString();
      const timeMax = new Date(today);
      timeMax.setMonth(today.getMonth() + 2);
      const timeMaxISO = timeMax.toISOString();
  
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
        timeMin,
      )}&timeMax=${encodeURIComponent(timeMaxISO)}`;
  
      try {
       const response = await fetch(url);
       if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const events = data.items.map(
          ({ start, end, location, description, summary }: GoogleEventProps) => ({
            start: start.dateTime,
            end: end.dateTime,
            location,
            description,
            title: summary,
          }),
        );
        return events;
      } catch (error) {
        console.error("Error fetching events from Google Calendar:", error);
      }
    }});
   

  //     const events = response.items.map(
  //       ({ start, end, location, description, summary }: GoogleEventProps) => ({
  //         start: start.dateTime,
  //         end: end.dateTime,
  //         location,
  //         description,
  //         title: summary,
  //       }),
  //     );

  //     return events;
  //   },
  // });

  //useEffect(() => {
  //  const fetchEvents = async () => {
      
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  
  //       const data = await response.json();
  
  //       // const formattedEvents: EventProps[] = data.items.map(
  //       //   (event: GoogleCalendarEvent) => ({
  //       //     date: new Date(event.start.dateTime || ""),
  //       //     title: event.summary || "No Title",
  //       //     startTime: event.start.dateTime || "",
  //       //     location: event.location || "N/A",
  //       //   }),
  //       // );
  
  //       // setEvents(formattedEvents);
  //       const events = data.items.map(
  //               ({ start, end, location, description, summary }: GoogleEventProps) => ({
  //                 start: start.dateTime,
  //                 end: end.dateTime,
  //                 location,
  //                 description,
  //                 title: summary,
  //               }),
  //             );

  //         return events;
        
  //     } catch (error) {
  //       console.error("Error fetching events from Google Calendar:", error);
  //     }
  //   };
  
  //   //fetchEvents();
  // }, []);


  
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