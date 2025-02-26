"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slides, slide } from "@/data/Gallery";

export function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full px-4 py-6">
      <CarouselPrimitive setApi={setApi} className="w-full">
        <CarouselContent>
          {slides?.map((slide: slide) => (
            <CarouselItem key={slide.id}>
              <Card className={`aspect-video w-full ${slide.color}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="py-2 text-center">
          <div className="flex justify-center gap-5">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${current === index ? "bg-black" : "bg-gray-300"}`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </CarouselPrimitive>
    </div>
  );
}
