import { experts } from "../../Atoms/Constants/experts";
import { ExpertCard } from "../../Organisms/ExpertCard/ExpertCard";

export const ExpertsSection = () => {
  return (
    <section id="masters" className="py-20 max-w-6xl mx-auto">
      <div className="max-w-6xl 
                      mx-auto 
                      px-6
                      flex flex-col gap-3 md:gap-4">
        <h2 className="text-[32px] md:text-[45px]
                       font-[Manrope-ExtraBold] text-center uppercase 
                       tracking-wider text-[var(--color-brand-gold)]"
        >
          наші майстри
        </h2>

        <p className="text-[12px] md:text-[15px]
                      uppercase text-center font-[Manrope-Regular] text-[#CFCFCF]
                      leading-relaxed tracking-[2px]
                      max-w-2xl mx-auto mb-4 md:mb-7">
          Команда професіоналів Carfix — досвід, який повертає твоє авто в
          ідеальний стан. Знайомтесь з нашими провідними майстрами.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-25">
          {experts.map((m, i) => (
            <ExpertCard
              key={i}
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
