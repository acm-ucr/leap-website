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
import UpcomingTitle from "@/components/events/UpcomingTitle";
import EventsList from "@/components/events/Events";
import BackgroundImage from "@/public/assets/backgrounds/HeaderEvent.webp";
import Image from "next/image";
import { motion } from "motion/react";

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});

  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      const today = new Date();
      const timeMin = new Date(
        today.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
      ).toISOString();
      const timeMax = new Date(
        today.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
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
      <div className="relative h-full text-center">
        <Image
          src={BackgroundImage}
          alt="Events Background"
          className="fixed inset-0 -z-10 h-screen w-full object-cover"
          objectFit="cover"
        />
        <motion.div
          className="pb-10 pt-52 font-leap text-3xl font-bold text-leap-dark-green sm:text-4xl md:pt-60 md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          Events
        </motion.div>
        <motion.div
          className="md:pb-15 px-20 pb-8 pt-4 font-leap font-semibold text-leap-dark-green sm:pb-10 sm:text-lg md:text-xl lg:pb-20 lg:text-2xl"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -30 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          Explore when our next event is and make sure to stop by.
        </motion.div>
      </div>
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
        className="w-5/6 sm:w-3/4"
        events={data}
        setCurrent={setCurrent}
      />

      <UpcomingTitle title="Upcoming Events" />
      <motion.div
        className="mb-10 flex flex-col items-center space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, y: -30 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        {data ? (
          data
            ?.filter((event: GoogleEventProps) => {
              const eventDate = new Date(event.start.toString());
              const currentDate = new Date();
              return eventDate >= currentDate;
            })
            .slice(0, 3)
            .map((event: EventProps, index: number) => {
              return (
                <EventsList
                  key={index}
                  title={event.title || "Untitled Event"}
                  date={
                    new Date(event.start as string).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                      },
                    ) || ""
                  }
                  time={
                    new Date(event.start as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    ) || ""
                  }
                  desc={event.description || ""}
                />
              );
            })
        ) : (
          <p className="sm:text-md mt-1 text-sm sm:mt-5 md:text-xl lg:text-2xl xl:text-3xl">
            {" "}
            No upcoming events.
          </p>
        )}
      </motion.div>
    </>
  );
};

export default Events;
