import React from "react";
import { Check } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Видалення вм’ятин",
      items: [
        "Без фарбування кузова",
        "Без зварювання та рихтування",
        "Без заміни деталей",
        "Швидке виконання роботи — від 30 хвилин",
        "Безкоштовна оцінка вартості перед початком",
        "Виконання роботи кваліфікованими майстрами",
      ],
    },
    {
      title: "Офлайн навчання PDR (1 місяць)",
      items: [
        "80% практики, 20% теорії",
        "Навчання з ментором в нашій майстерні",
        "Підтримка під час навчання та після його завершення",
        "Індивідуальний підхід до кожного учня",
        "Сертифікат після завершення курсу",
      ],
    },
    {
      title: "Онлайн навчання PDR (1 місяць)",
      items: [
        "80% практики, 20% теорії",
        "Навчання з ментором дистанційно",
        "Підтримка та консультації під час курсу та після нього",
        "Можливість задавати питання та отримувати зворотний зв’язок",
        "Сертифікат після завершення курсу",
      ],
    },
  ];

  return (
    <section id="services" className="text-[#E5E4E4] pt-20 px-5 min-h-[1000px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[70px] font-[Manrope-ExtraBold] text-[#BE7D00] mb-12 text-center uppercase tracking-wider">
          Послуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#222327] rounded-2xl p-8 border border-[#3D3D3D] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-[23px] font-[Manrope-Medium] uppercase tracking-wider mb-6">
                {service.title}
              </h3>

              {service.items && (
                <ul className="space-y-3 text-gray-300 font-[Manrope-Medium] tracking-wide">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                        <Check size={20} className="text-[#BE7D00]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
