"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

export type GoogleEventProps = {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
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

  return (
    <div
      className={`${currentMonth ? "text-black" : "text-gray-400"} h-24 overflow-y-scroll border`}
    >
      <p className="sticky px-2 text-right">{date.getDate()}</p>

      {events?.map(({ title, start, end, location, description }, index) => {
        const startDate = new Date(start as string);

        if (
          startDate.getDate() === date.getDate() &&
          startDate.getMonth() === date.getMonth() &&
          startDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div
              className="text-ellipsis bg-leap-mid-green p-1 text-left text-white"
              key={index}
              onClick={() =>
                setCurrent({ title, start, end, location, description })
              }
            >
              {title} -{" "}
              {startDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          );
        }
      })}
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
      fixedWeeks={true}
      className={cn("w-full p-3", className)}
      classNames={{
        months: "flex flex-col sm:space-x-4 sm:space-y-0",
        month: "space-y-0",
        caption: "flex pt-1 relative mt-3 mb-5",
        caption_label:
          "text-md md:text-xl lg:text-xxl text-leap-mid-green font-leap font-bold tracking-wide ml-16 md:ml-24",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 md:h-16 md:w-16 bg-transparent text-leap-mid-green opacity-100 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute  right-0 md:left-64",
        table: "w-full border-collapse",
        head_row: "flex bg-leap-mid-green w-full text-center items-center",
        head_cell:
          "text-white w-full font-leap text-sm md:text-xl border-x border-t border-t-2 border-black pt-2",
        row: "flex w-full",
        cell: "relative w-full h-9 sm:h-16 lg:h-20 xl:h-28 font-leap text-sm md:text-xl text-right border border-black pt-0 lg:pt-1 xl:pt-2",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-1/2 w-1/2 sm:h-1/4 sm:w-1/4 p-0 font-leap text-xs sm:text-sm md:text-md lg:text-xl",
        ),
        day_range_end: "day-range-end",
        // day_selected:
        //   "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
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
Calendar.displayName = "Calendar"

export { Calendar }
