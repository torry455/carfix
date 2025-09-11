export const TrainingSection: React.FC = () => {
  const points = [
    "80% практики, 20% теорії — щоб ви відразу застосовували знання.",
    "Вивчення технології PDR та особливостей роботи з різними типами вм’ятин.",
    "Робота зі світлом, PDR-інструментами, крючками та молотками.",
    "Опанування клейової системи та її правильного використання.",
    "Супровід ментора під час курсу та після його завершення.",
  ];

  return (
    <section id="training" className=" max-w-6xl font-[Manrope-Medium] tracking-wider animate-fadeInUp">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/videos/work.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-[32px] md:text-[45px]
                       font-[Manrope-ExtraBold] text-left uppercase 
                       tracking-wider text-[var(--color-brand-gold)]">
            Навчання
          </h2>

          <p className="text-[var(--text-gray)] mb-6 ">
            Ми працюємо на результат. Наш підхід — це баланс практики та теорії,
            який допоможе вам стати професіоналом у сфері PDR.
          </p>

          <ul className="space-y-4 mb-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 mt-1 bg-[#BE7D00] rounded-full"></span>
                <span className="ml-4 text-[#CFCFCF]">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-[var(--text-gray)] mb-8">
            Від вас потрібні лише мотивація, терпіння та бажання навчитись. Не
            відкладайте на завтра те, що можна почати сьогодні.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#BE7D00] text-[#17181C] px-8 py-3 rounded-full font-[Manrope-ExtraBold] text-lg shadow-md hover:bg-[#d28f0a] transition-colors uppercase"
          >
            Запис на навчання
          </a>
        </div>
      </div>
    </section>
  );
};
