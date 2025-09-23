"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviews } from "../../Atoms/Constants/reviews";
import { ReviewCard } from "./ReviewCard";

export const ReviewsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (sliderRef.current) {
      const amount = dir === "left" ? -360 : 360;
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="text-[var(--foreground)] px-6 relative animate-fadeInUp">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <h2
          className="text-[32px] md:text-[45px]
        font-[Manrope-ExtraBold] text-center uppercase tracking-wide text-[var(--color-brand-gold)]"
        >
          Відгуки клієнтів
        </h2>

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 xl:left-5 2xl:left-30 top-1/2 -translate-y-1/2 z-10
          bg-black/40 hover:bg-black/70 text-[var(--color-brand-gold)] transition
          p-[10px] 
          rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 xl:right-5 2xl:right-30 top-1/2 -translate-y-1/2 z-10 
          bg-black/40 hover:bg-black/70 text-[var(--color-brand-gold)] transition
          p-[10px] 
          rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth 
          mx-[15px] md:mx-[20px] lg:mx-[25px] xl:mx-[30px]
         [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        <div
          className="bg-[#BE7D00] hover:bg-[#a36600] transition-colors duration-300
         rounded-lg shadow-md
         p-2
         mx-auto
         mt-1
         w-[282px] md:w-[330px]
         text-center"
        >
          <a
            href="https://www.google.com/maps/place/CarFix+PDR+Expert-+%D0%92%D0%B8%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F+%D0%B2%D0%BC'%D1%8F%D1%82%D0%B8%D0%BD+%D0%B1%D0%B5%D0%B7+%D0%BF%D0%BE%D1%84%D0%B0%D1%80%D0%B1%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="block
            text-[#17181C] font-[Manrope-Bold] tracking-widest uppercase text-[13px] md:text-[15px]
            w-full
           "
          >
            Читати всі відгуки на Google
          </a>
        </div>
      </div>
    </section>
  );
};
