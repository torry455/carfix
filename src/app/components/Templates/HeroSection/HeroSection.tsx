"use client";
import React, { useEffect, useState } from "react";
import { GallerySlider } from "../../Molecules/GallerySlider/GallerySlider";
import { BookButton } from "../../Atoms/Buttons/BookButton";

export const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const galleryImages = [
    "img/herogallery/car1.jpg",
    "img/herogallery/car2.jpg",
    "img/herogallery/car3.jpg",
    "img/herogallery/car4.jpg",
    "img/herogallery/car5.jpg",
  ];

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex flex-col items-center justify-center px-4 text-[#E5E4E4] max-w-[1500px] mx-auto min-h-screen overflow-hidden transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <h1 className="lg:text-[100px] md:text-[70px] sm:text-[55px] text-[36px] font-[Manrope-ExtraBold] leading-tight tracking-[4px] uppercase text-center drop-shadow-lg mb-10 mt-40">
        Видалення вм&apos;ятин без пофарбування
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full uppercase font-[Manrope-Bold] flex-1 h-full">
        <div className="flex-1 w-full h-full flex flex-col justify-between py-0">
          <ul className="text-lg text-[#CFCFCF] font-[Manrope-Bold] space-y-9 my-10">
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#BE7D00] flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Від 30 хв</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#BE7D00] flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Швидка безкоштовна консультація</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#BE7D00] flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0L15.75 17.25m-8.58-5.75h-.008v-.008h.008v.008Zm12.75 0h-.008v-.008h.008v.008ZM18.75 6.75h-.008v-.008h.008v.008ZM16.5 6.75h-.008v-.008h.008v.008ZM14.25 6.75h-.008v-.008h.008v.008ZM12 6.75h-.008v-.008h.008v.008ZM10.5 6.75h-.008v-.008h.008v.008ZM18 10.5h-.008v-.008h.008v.008ZM16.5 10.5h-.008v-.008h.008v.008ZM15 10.5h-.008v-.008h.008v.008ZM13.5 10.5h-.008v-.008h.008v.008ZM12 10.5h-.008v-.008h.008v.008Z"
                />
              </svg>
              <span>Попередня оцінка пошкоджень по фото</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#BE7D00] flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 10.5h.008v.008H12v-.008ZM12 13.5h.008v.008H12v-.008Z"
                />
              </svg>
              <span> онлайн запис на послугу</span>
            </li>
          </ul>
          <div className="flex gap-6 mt-4">
            <div>
              <BookButton
                buttonName="записатись онлайн"
                onClickFn={() => {
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
            {/* <button
              className="bg-[#BE7D00] text-[#17181C] uppercase font-[Manrope-Bold] px-8 py-4 rounded-xl shadow-xl hover:scale-105 hover:bg-[#a36600] transition-all duration-300 text-base md:text-lg"
              onClick={() => {
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Записатись онлайн
            </button> */}
            <button
              className="border border-[#BE7D00] text-[#BE7D00] uppercase font-[Manrope-Bold] px-6 py-3 rounded-xl hover:bg-[#BE7D0020] transition-colors duration-300 text-base md:text-lg"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Наші послуги
            </button>
          </div>
        </div>
        <div className="flex-1 w-full h-full min-h-[300px] rounded-3xl shadow-2xl border-4 border-[#BE7D00] overflow-hidden box-border relative z-10 flex items-center justify-center">
          <GallerySlider images={galleryImages} />
        </div>
      </div>
    </section>
  );
};
