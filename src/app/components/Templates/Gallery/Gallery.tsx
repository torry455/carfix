"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LeftArrowButton from "../../Atoms/Buttons/LeftArrowBtn";
import RightArrowButton from "../../Atoms/Buttons/RightArrowBn";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { videoPairs } from "./VideoPairsOptiona";


const Gallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoPairs.length);
      setSliderPosition(50);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoPairs.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoPairs.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const { before, after } = videoPairs[currentIndex];

  return (
    <div
      id="gallery"
      className="relative w-full max-w-6xl mx-auto py-10 md:py-16 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Заголовок */}
      <h2 className="text-[32px] md:text-[45px]
                       font-[Manrope-ExtraBold] text-center py-10 uppercase 
                       tracking-wider text-[var(--color-brand-gold)]">
        Наше &quot;До та Після&quot;
      </h2>

      {/* Основний блок */}
      <div className="relative flex items-center gap-4 sm:gap-6 lg:gap-8">
        <LeftArrowButton onClick={prevSlide} />
        <BeforeAfterSlider
          before={before}
          after={after}
          sliderPosition={sliderPosition}
          setSliderPosition={setSliderPosition}
        />
        <RightArrowButton onClick={nextSlide} />
      </div>

      {/* Підписи */}
      <div className="flex justify-between mt-3 text-xs sm:text-sm md:text-base font-[Manrope-Bold] uppercase tracking-widest text-[#CFCFCF] max-w-[calc(100%-100px)] mx-auto">
        <span className="pl-2">До</span>
        <span className="pr-2">Після</span>
      </div>

      {/* Кнопка */}
      <div className="text-center mt-6 md:mt-8">
        <Link href="/gallery" passHref>
          <button className="inline-block bg-[#BE7D00] text-[#17181C] px-6 py-2 sm:px-8 sm:py-2 rounded-full font-[Manrope-ExtraBold] text-sm sm:text-base md:text-lg shadow-md hover:bg-[#d28f0a] transition-colors uppercase">
            Переглянути всю галерею
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
