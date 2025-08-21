import React from "react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Переваги технології PDR",
      items: [
        "Без фарбування",
        "Без зварювання",
        "Без рихтування",
        "Без заміни деталей кузова",
        "Тривалість робіт від 30 хвилин",
        "Безкоштовна оцінка вартості робіт",
      ],
    },
    {
      title: "Захисне полірування авто",
      description:
        "Проводиться для захисту лакофарбового покриття авто з метою його додаткового захисту від впливу зовнішніх негативних факторів. Застосовуються поліролі, що не містять абразивних матеріалів. Рекомендується виконувати кілька разів на рік.",
    },
    {
      title: "Відновлювальне полірування авто",
      description:
        "Виконується для усунення шкоди, завданої лакофарбувальному покриттю. Застосовуються поліролі на абразивній основі. По закінченню відновної обробки виконується захисне полірування.",
    },
  ];

  return (
    <section
      id="services"
      className="text-[#E5E4E4] pt-20 px-5 min-h-screen"
    >
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
      <h3 className="text-[23px] font-[Manrope-Medium] uppercase tracking-wider mb-4">{service.title}</h3>

      {service.description && (
        <p className="text-[16px] leading-relaxed text-gray-300 tracking-wide font-[Manrope-Medium]">
          {service.description}
        </p>
      )}

      {service.items && (
        <ul className="custom-list pl-5 space-y- text-gray-300 uppercase font-[Manrope-Medium] tracking-wider">
          {service.items.map((item, i) => (
            <li key={i}>{item}</li>
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
