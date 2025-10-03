'use client';

import { Carousel } from "@/once-ui/components";

interface ProjectCardCarouselProps {
  images: string[];
  title: string;
}

export function ProjectCardCarousel({ images, title }: ProjectCardCarouselProps) {
  return (
    <Carousel
      sizes="(max-width: 960px) 100vw, 960px"
      images={images.map((image) => ({
        src: image,
        alt: title,
      }))}
    />
  );
}