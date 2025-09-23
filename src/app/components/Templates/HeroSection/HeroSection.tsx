"use client";

import React from "react";
import { BookButton } from "../../Atoms/Buttons/BookButton";
import { HeroItems } from "../../Atoms/Constants/heroItems";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col gap-[2rem] items-center justify-center text-[#E5E4E4] max-w-6xl mx-auto overflow-hidden animate-fadeInUp"
    >
      <h1
        className="text-[35px] md:text-[70px] lg:text-[100px] font-[Manrope-ExtraBold] text-center uppercase text-[#E5E4E4] 
                     tracking-widest
                     mt-[8rem]"
      >
        <span className="block leading-tight">видалення вм&apos;ятин</span>
        <span className="block text-sm font-[Manrope-Medium] leading-10">
          без пофарбування
        </span>
      </h1>

      {/* <h1 className=" text-[36px] font-[Manrope-ExtraBold] leading-tight tracking-[4px] uppercase text-left drop-shadow-lg ">
        Видалення вм&apos;ятин без пофарбування
      </h1> */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full uppercase font-[Manrope-Bold] flex-1 h-full">
        <div className="flex flex-col gap-10">
          <ul className="text-sm text-[#CFCFCF] font-[Manrope-Medium] space-y-6 leading-relaxed tracking-widest">
            {HeroItems.map((item) => (
              <li
                key={item.text}
                className="flex flex-row gap-3 items-center"
              >
                <item.icon />
                <span>{item.text}</span>
              </li>
            ))}
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
            <button
              className="border border-[#BE7D00] text-[#BE7D00] uppercase font-[Manrope-ExtraBold] px-6 py-2 rounded-full hover:bg-[#BE7D0020] transition-colors duration-300 text-base text-md tracking-wide md:text-lg"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              наші послуги
            </button>
          </div>
        </div>
        <div className="flex-1 w-full h-full min-h-[300px] rounded-3xl shadow-2xl border-4 border-[#BE7D00] overflow-hidden box-border relative z-10 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-label="Carfix hero background video"
            className="absolute top-0 left-0 object-cover -z-1"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/videos/carfix-hero-vid.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};






