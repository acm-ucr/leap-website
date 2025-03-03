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
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}`).then((res) => res.json());

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