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
    bio: "Досвід роботи більше 10 років. Засновник та ментор курсу PDR-Expert.",
    img: "/img/master1.jpg",
    highlight: "PDR-Expert",
  },
  {
    name: "Ім'я Прізвище",
    title: "Старший майстер з полірування",
    bio: "Спеціаліст з захисного та відновлювального полірування.",
    img: "/img/master1.jpg",
  },
  {
    name: "Ім'я Прізвище",
    title: "Майстер з діагностики",
    bio: "Професійна діагностика кузова та складні ремонти.",
    img: "/img/master1.jpg",
  },
];

export const MastersSection: React.FC = () => {
  return (
    <section id="masters" className="py-20 max-w-[1500px] min-h-screen">
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
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#BE7D00] text-[#17181C] px-3 py-0.5 rounded-full text-xs font-[Manrope-ExtraBold] shadow">
                    {m.highlight}
                  </div>
                )}
              </div>

              <h3 className="text-[22px] font-[Manrope-Bold] text-[#E5E4E4] uppercase tracking-widest mb-5">{m.name}</h3>
              {m.title && (
                <p className="text-sm text-[#CFCFCF] mt-1 mb-3 font-[Manrope-Medium] tracking-wider leading-6 mb-5">{m.title}</p>
              )}

              <p className="text-sm text-[#BFC0C0] leading-6 mb-4 font-[Manrope-Medium]">
                {m.bio}
              </p>

              <div className="flex items-center justify-center gap-3">
                {/* social / contact icons */}
                <a
                  href="#"
                  className="p-2 rounded-md bg-[#17181C] border border-[#3D3D3D] hover:bg-[#BE7D00] hover:text-[#17181C] transition-colors"
                  aria-label={`contact ${m.name}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M21 8v6a2 2 0 0 1-2 2h-6" />
                    <path d="M3 6h7" />
                    <path d="M7 10v6" />
                    <path d="M21 8l-9 6L3 8" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-[#17181C] border border-[#3D3D3D] hover:bg-[#BE7D00] hover:text-[#17181C] transition-colors"
                  aria-label={`instagram ${m.name}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
