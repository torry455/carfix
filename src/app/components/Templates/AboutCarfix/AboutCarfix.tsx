"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const AboutCarfix: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`max-w-[1600px] mx-auto transition-all duration-700 px-5 py-10 min-h-screen flex flex-col lg:flex-row items-center gap-12
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/img/aboutcarfix.jpg"
          alt="Carfix team picture"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 text-[color-brand-gray]">
        <h2 className="text-[70px] font-[Manrope-ExtraBold] uppercase mb-6 text-[var(--color-brand-gold)] tracking-wide">
          Що таке Carfix?
        </h2>

        <p className="text-lg leading-relaxed font-[Manrope-Medium] tracking-wider mb-6">
          <span className="font-[Manrope-Bold]">Carfix</span> — це команда професіоналів, яка спеціалізується на відновленні кузова автомобіля за технологією PDR (Paintless Dent Repair).
          Ми допомагаємо власникам авто повернути їхній транспорт у
          <span className="text-[var(--color-brand-gold)]"> ідеальний стан без фарбування</span> і зайвих витрат.
        </p>

        <p className="text-lg leading-relaxed font-[Manrope-Medium] tracking-wider mb-6">
          Десятки задоволених клієнтів щомісяця і перемоги на всеукраїнських чемпіонатах —
          це підтвердження нашого рівня.
        </p>

        <p className="text-lg leading-relaxed font-[Manrope-Medium] tracking-wider">
          Наша мета — не просто видаляти вм’ятини, а дарувати автомобілю
          <span className="text-[var(--color-brand-gold)]"> друге життя</span>, а власнику —
          впевненість і задоволення від ідеального вигляду авто.
        </p>
      </div>
    </section>
  );
};
