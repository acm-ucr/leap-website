"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
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
        //head_cell:
        //  "text-white w-9 h-9 sm:h-16 sm:w-20 lg:h-20 lg:w-24 xl:h-12 xl:w-32 font-leap text-sm md:text-xl border-x border-black pt-2",
        head_cell:
          "text-white w-full font-leap text-sm md:text-xl border-x border-black pt-2",
        row: "flex w-full",
        //cell: "h-9 w-9 sm:h-16 sm:w-20 lg:h-20 lg:w-24 xl:h-28 xl:w-32 text-sm md:text-lg text-right px-1 border border-black relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        cell: "relative w-full h-9 sm:h-20 lg:h-24 xl:h-32 font-leap text-sm md:text-xl text-right border border-black pt-2",
        // day: cn(
        //   buttonVariants({ variant: "ghost" }),
        //   "h-9 w-9 p-0 font-leap text-xs sm:text-sm md:text-md lg:text-xl aria-selected:opacity-50",
        // ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-1/2 w-1/2 sm:h-1/4 sm:w-1/4 p-0 font-leap text-xs sm:text-sm md:text-md lg:text-xl aria-selected:opacity-50",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
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
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
