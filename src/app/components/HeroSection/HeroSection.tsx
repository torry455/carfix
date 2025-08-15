"use client";

import React from "react";
import { GallerySlider } from "../GallerySlider/GallerySlider";

export const HeroSection: React.FC = () => {
  const galleryImages = [
    "img/herogallery/car1.jpg",
    "img/herogallery/car2.jpg",
    "img/herogallery/car3.jpg",
    "img/herogallery/car4.jpg",
    "img/herogallery/car5.jpg",
  ];

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-10 py-20 bg-gradient-to-tr from-[#17181C] via-[#222327] to-[#3D3D3D] text-[#E5E4E4]"
    >
      {/* Ліва колонка з текстом */}
      <div className="space-y-6 max-w-xl justify-self-center md:justify-self-start">
        <h1 className="text-3xl font-extrabold leading-tight tracking-wide uppercase">
          Видалення вм&#39;ятин без пофарбування
        </h1>
        <p className="text-lg text-[#CFCFCF]">
          Від 30 хв <br />Швидка безкоштовна консультація, попередня оцінка
          пошкоджень по фото та запису на послугу.
        </p>
        <div className="flex gap-6">
          <button className="bg-[#BE7D00] text-[#17181C] font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-[#a36600] transition-colors duration-300">
            Записатись онлайн
          </button>
          <button className="border border-[#BE7D00] text-[#BE7D00] font-semibold px-8 py-3 rounded-xl hover:bg-[#BE7D0020] transition-colors duration-300">
            Наші послуги
          </button>
        </div>
      </div>

      {/* Права колонка зі слайдером */}
      <div className="w-full h-full max-w-lg rounded-3xl shadow-2xl border-4 border-[#BE7D00] overflow-hidden box-border justify-self-center md:justify-self-end h-[400px] relative">
        <GallerySlider images={galleryImages} />
      </div>
    </section>
  );
};
