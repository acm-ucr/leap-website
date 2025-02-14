"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="bg-leap-white-green">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border shadow w-[76vw]"
    />
    </div>
  )
}
