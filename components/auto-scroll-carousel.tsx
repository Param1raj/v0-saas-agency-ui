import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import CardImage from '../public/favicon.png'
import Image from "next/image";

interface AutoScrollCarouselProps {
    children?: React.ReactNode[];
}

export function AutoScrollCarousel({ children }: AutoScrollCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="">
        {children}
      </CarouselContent>
    </Carousel>
  );
}
