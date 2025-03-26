"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/carousel/Card";
import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/carousel/Carousel";
import { slides, slide } from "@/data/CarouselImages";
import Image from "next/image";

export function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleScrollNext = () => {
    if (current === slides.length - 1) {
      api?.scrollTo(0);
    } else {
      api?.scrollNext();
    }
  };

  const handleScrollPrev = () => {
    if (current === 0) {
      api?.scrollTo(slides.length - 1);
    } else {
      api?.scrollPrev();
    }
  };

  return (
    <div className="relative w-full px-4 py-6">
      <CarouselPrimitive setApi={setApi} className="w-full">
        <CarouselContent>
          {slides?.map((slide: slide) => (
            <CarouselItem key={slide.id}>
              <Card className="relative aspect-video w-full">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </Card>
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
      <button
        className="absolute left-0 top-1/2 -translate-x-[20px] -translate-y-[40px] transform rounded-full bg-gray-300 p-2 shadow-lg sm:-translate-x-[30px] sm:p-3 md:-translate-x-[40px] md:p-4 lg:-translate-x-[40px] lg:p-4"
        onClick={() => handleScrollPrev()}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-x-[-20px] -translate-y-[40px] transform rounded-full bg-gray-300 p-2 shadow-lg sm:-translate-x-[-30px] sm:p-3 md:-translate-x-[-40px] md:p-4 lg:-translate-x-[-40px] lg:p-4"
        onClick={() => handleScrollNext()}
      >
        &gt;
      </button>
    </div>
  );
}
