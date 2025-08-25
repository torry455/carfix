"use client";

import React, { useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    author: "Александр Иванов",
    rating: 5,
    text: "Отличный сервис, все вовремя, быстро, а главное качество, Евгений творит чудеса! Ювелирная работа , даже не думал что можно решить без покраски и рихтовки. Все осталось в родной краске. Спасибо огромное!",
    time: "5 місяців тому",
  },
  {
    author: "Sergey Kirichenko",
    rating: 5,
    text: "Відмінний сервіс! Ніяких \"понтів\" - все по ділу (знаю що кажу, поспілкувався з декількома подібними сервісами). Домовились, приїхав, зробили. Швидко і якісно! Рекомендую! p.s. Хлопці зробіть вивіску, бо сусіди не хочуть казати, де Ви знаходитеся))).",
    time: "11 місяців тому",
  },
  {
    author: "Leon",
    rating: 5,
    text: "Після буревію впало дерево на дах машини. Дуже швидко витягнули вмʼятини. Рекомендую!",
    time: "рік тому",
  },
  {
    author: "Богдан Боснюк",
    rating: 5,
    text: "Хлопці знають що роблять! Не одноразово звертався і друзям рекомендував. Виправляли те де інші опускали руки. Рекомендую!",
    time: "рік тому",
  },
  {
    author: "Дмитро Струк",
    rating: 5,
    text: "Зробили попередню оцінку по фото. Домовились по часу прийому та вартості. Зробили все вчасно і якісно.",
    time: "рік тому",
  },
];

export const ReviewsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (sliderRef.current) {
      const amount = dir === "left" ? -360 : 360;
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="text-[var(--foreground)] py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl font-[Manrope-ExtraBold] text-center mb-12 uppercase tracking-widest text-[var(--color-brand-gold)]">
          Відгуки клієнтів
        </h2>

        {/* Стрілки поза контейнером */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-[var(--color-brand-gold)] p-3 rounded-full shadow-lg transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-[var(--color-brand-gold)] p-3 rounded-full shadow-lg transition"
        >
          <FaChevronRight />
        </button>

        {/* Горизонтальний слайдер */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-12 [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-foreground text-[var(--foreground)] p-6 w-[350px] shrink-0 rounded-2xl shadow-lg border"
            >
              <p className="font-[Manrope-Bold]">{r.author}</p>
              <p className="text-sm text-gray-500 mb-3">{r.time}</p>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(r.rating)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className="text-[var(--color-brand-gold)]"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed">“{r.text}”</p>
            </div>
          ))}
        </div>

        {/* Кнопка на Google */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/CarFix+PDR+Expert-+%D0%92%D0%B8%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F+%D0%B2%D0%BC'%D1%8F%D1%82%D0%B8%D0%BD+%D0%B1%D0%B5%D0%B7+%D0%BF%D0%BE%D1%84%D0%B0%D1%80%D0%B1%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BE7D00] text-[#17181C] font-[Manrope-ExtraBold] tracking-widest uppercase px-6 py-2 rounded-lg shadow-md hover:bg-[#a36600] transition-colors duration-300"
          >
            Читати всі відгуки на Google
          </a>
        </div>
      </div>
    </section>
  );
};