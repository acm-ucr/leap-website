"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

export type GoogleEventProps = {
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location?: string;
  description?: string;
  title?: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
}

const Day = ({ date, displayMonth, events, setCurrent }: DayProps) => {
  const currentMonth = displayMonth.getMonth() === date.getMonth();
  const currentDate = new Date();
  const isToday =
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();

  return (
    <div
      className={`${currentMonth ? "text-black" : "text-gray-400"} h-full text-[9px] sm:text-xs md:text-sm lg:text-lg`}
    >
      <div
        className={
          isToday ? "m-0 h-full bg-leap-light-green/30 pr-1 font-bold" : "pr-1"
        }
      >
        <p className="">{date.getDate()}</p>

        {events?.map(({ start, end, location, description, title }, index) => {
          const startDate = new Date(start as string);

          if (
            startDate.getDate() === date.getDate() &&
            startDate.getMonth() === date.getMonth() &&
            startDate.getFullYear() === date.getFullYear()
          ) {
            return (
              <div
                className="md:text-md mb-1 overflow-x-scroll bg-leap-mid-green text-left text-[9px] text-white hover:cursor-pointer hover:bg-leap-mid-green/30 sm:text-[12px] md:text-sm"
                key={index}
                onClick={() =>
                  setCurrent({ title, start, end, location, description })
                }
              >
                {title} {" - "}
                {startDate.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      fixedWeeks={false}
      className={cn("w-full", className)}
      classNames={{
        months: "flex flex-col sm:space-x-4 sm:space-y-0",
        month: "space-y-0",
        caption:
          "flex relative mt-3 mb-5 items-center justify-center md:items-x-start md:justify-start",
        caption_label:
          "text-md md:text-xl lg:text-xxl text-leap-mid-green font-leap font-bold tracking-wide md:ml-24",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 md:h-16 md:w-16 bg-transparent text-leap-mid-green opacity-100 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0 md:left-64",
        table: "flex flex-col flex-shrink w-full",
        head_row:
          "flex flex-row flex-shrink overflow-clip bg-leap-mid-green w-full text-center items-center",
        head_cell:
          "text-white w-full font-leap text-[10px] sm:text-sm md:text-md md:text-xl border-x border-t border-t-2 border-black pt-2",
        row: "flex w-full",
        cell: "bg-leap-white-green relative overflow-x-scroll w-full h-9 sm:h-16 lg:h-20 xl:h-28 font-leap text-sm md:text-xl text-right border border-black [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-full w-full p-0 font-leap text-xs sm:text-sm md:text-md lg:text-xl",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-leap-light-green text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      formatters={{
        formatWeekdayName: (date) => {
          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          return days[date.getDay()];
        },
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
        Day: ({ displayMonth, date }) => (
          <Day
            date={date}
            displayMonth={displayMonth}
            events={events}
            setCurrent={setCurrent}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
