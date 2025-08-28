import React from "react";
import { masters } from "../../Atoms/Constants/masters";
import { MasterCard } from "../../Organisms/MasterCard/MasterCard";

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
            <MasterCard
              key={i}
              index={i}
              image={m.img}
              name={m.name}
              highlight={m.highlight}
              bio={m.bio}
              title={m.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
