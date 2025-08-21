"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

interface GallerySliderProps {
  images: string[];
  width?: number;
  height?: number;
}

export const GallerySlider: React.FC<GallerySliderProps> = ({
  images,
  width = 600,
  height = 400,
}) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[400px]">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-3xl"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
