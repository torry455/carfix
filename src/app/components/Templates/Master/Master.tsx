import React from "react";
import Image from "next/image";

type Master = {
  name: string;
  title?: string;
  bio?: string;
  img: string;
  highlight?: string;
};

const masters: Master[] = [
  {
    name: "Кучер Євгеній",
    title: "Дворазовий чемпіон України з видалення вм’ятин (2017р. та 2019р.)",
    bio: "Більше 10 років досвіду у сфері PDR. Засновник та ментор курсу PDR-Expert, який допомагає майстрам досягати досконалості у видаленні вм’ятин.",
    img: "/img/masters/master1.jpg",
    highlight: "Owner",
  },
  {
    name: "Арем Зубцов",
    title: "Майстер PDR",
    bio: "Спеціаліст із видалення вм’ятин будь-якої складності. Вміє відновити авто до ідеального стану без фарбування та заміни деталей.",
    img: "/img/masters/master2.jpg",
    highlight: "PDR-Expert",
  },
  {
    name: "Максим Скічко",
    title: "Майстер PDR",
    bio: "Експерт з діагностики та складних ремонтів кузова. Його точність та досвід гарантують бездоганний результат у роботі з будь-якими вм’ятинами.",
    img: "/img/masters/master3.jpg",
    highlight: "PDR-Expert",
  },
];

export const MastersSection: React.FC = () => {
  return (
    <section id="masters" className="py-20 max-w-[1500px] min-h-[1000px]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-[70px] font-[Manrope-ExtraBold] text-center text-[#BE7D00] mb-8 uppercase">
          НАШІ МАЙСТРИ
        </h2>

        <p className="text-center font-[Manrope-Bold] tracking-widest text-[#CFCFCF] max-w-2xl mx-auto mb-10 uppercase">
          Команда професіоналів Carfix — досвід, який повертає твоє авто в
          ідеальний стан. Знайомтесь з нашими провідними майстрами.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((m, i) => (
            <article
              key={i}
              className="bg-[#222327] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center p-6"
            >
              <div className="relative w-36 h-36 mx-auto mb-5">
                <Image
                  src={m.img}
                  alt={`${m.name} photo`}
                  fill
                  className="rounded-full object-cover border-[1px] border-[#BE7D00]"
                />
                {m.highlight && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#BE7D00] text-[#17181C] px-4 py-1 rounded-full text-xs font-[Manrope-ExtraBold] shadow whitespace-nowrap">
                    {m.highlight}
                  </div>
                )}
              </div>

              <h3 className="text-[22px] font-[Manrope-Bold] text-[#E5E4E4] uppercase tracking-widest mb-5">
                {m.name}
              </h3>
              {m.title && (
                <p className="text-sm text-[#CFCFCF] mt-1 mb-3 font-[Manrope-Medium] tracking-wider leading-6 mb-5">
                  {m.title}
                </p>
              )}

              <p className="text-sm text-[#BFC0C0] leading-6 mb-4 font-[Manrope-Medium]">
                {m.bio}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
