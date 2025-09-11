"use client";

import React, { useEffect, useRef, useState } from "react";

export const PDRSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    "Погодні умови (град, сніг)",
    "Падіння з дерев різних плодів (горіхи, каштани, жолуді, яблука тощо)",
    "Різноманітні викиди з поверхонь доріг щебеню, гравію та інших дрібних твердих предметів",
    "Невдале паркування",
    "Автомобільна аварія (ДТП)",
  ];

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto transition-all duration-700 animate-fadeInUp"
    >
      <div className="bg-[#000]/ text-[#E5E4E4] max-w-[1600px] mx-auto">
        <h2 className="text-[32px] md:text-[45px]
                       font-[Manrope-ExtraBold] text-left uppercase 
                       tracking-wider text-[var(--color-brand-gold)]">
          технологія PDR - що це?
        </h2>
        <p className="text-[#CFCFCF] leading-relaxed text-[20px]  font-[Manrope-Regular] tracking-widest">
          Технологія PDR - це сучасний та комплексний підхід до виправлення
          дефектів кузова, спричиненого різними чинниками.
        </p>
        <h3 className="mt-6 text-[24px] font-[Manrope-Bold] uppercase text-[#BE7D00] tracking-wide">
          Основні причини вм&#39;ятин:
        </h3>
        <ul className="space-y-7 mt-4">
          {reasons.map((reason, index) => (
            <li
              key={index}
              className="flex items-center sm:items-start bg-black/70 p-3 rounded-xl shadow-md py-3 uppercase font-[Manrope-Regular] tracking-widest"
            >
              <span className="flex-shrink-0 self-center w-4 h-4 sm:w-5 sm:h-5 bg-[#BE7D00] rounded-full"></span>
              <span className="ml-2 sm:ml-3 text-gray-300 text-sm sm:text-base">
                {reason}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#CFCFCF] leading-relaxed text-lg  tracking-widest pt-5">
          Завдяки технології PDR та спеціальному інструменту, ми можемо видалити
          вм&#39;ятини різної складності на кузові автомобіля без фарбування
          деталей за умови, що на автомобілі не постраждало лако-фарбувальне
          покриття.
        </p>
      </div>
    </section>
  );
};
