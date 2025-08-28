export const TrainingSection: React.FC = () => {
  const points = [
    "80% практики, 20% теорії — щоб ви відразу застосовували знання.",
    "Вивчення технології PDR та особливостей роботи з різними типами вм’ятин.",
    "Робота зі світлом, PDR-інструментами, крючками та молотками.",
    "Опанування клейової системи та її правильного використання.",
    "Супровід ментора під час курсу та після його завершення.",
  ];

  return (
    <section id="training" className="py-20 min-h-[1000px] max-w-[1500px] font-[Manrope-Medium] tracking-wider">
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
          <h2 className="text-[70px] sm:text-[50px] font-[Manrope-ExtraBold] text-[#BE7D00] mb-6 uppercase tracking-widest">
            Навчання
          </h2>

          <p className="text-[#CFCFCF] mb-6 text-lg leading-relaxed uppercase tracking-widest">
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

          <p className="text-[#BFC0C0] mb-8">
            Від вас потрібні лише мотивація, терпіння та бажання навчитись. Не
            відкладайте на завтра те, що можна почати сьогодні. Отримайте нові
            знання та вміння, які дозволять вам заробляти в сфері PDR на рівні
            ІТ-спеціалістів.
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
