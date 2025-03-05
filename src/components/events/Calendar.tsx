"use client";

import * as React from "react";
import { EventProps, GoogleEventProps } from "@/components/ui/calendar";
import { Calendar } from "@/components/ui/calendar";
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

  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      if (!apiKey || !calendarId) {
        console.error("API Key or Calendar ID is missing.");
        return;
      }

      const today = new Date();
      const timeMin = new Date(
        today.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
      ).toISOString();
      const timeMax = new Date(
        today.getTime() + 60 * 60 * 24 * 7 * 5 * 1000,
      ).toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
        timeMin,
      )}&timeMax=${encodeURIComponent(timeMax)}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const events = data.items.map(
          ({
            start,
            end,
            location,
            description,
            summary,
          }: GoogleEventProps) => ({
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
        className="w-3/4"
        events={data}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default Events;
