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
      className="bg-[#17181C] text-[#E5E4E4] pt-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#BE7D00] mb-12 text-center uppercase">
          Послуги
        </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-[#222327] rounded-2xl shadow-lg p-8 border border-[#3D3D3D] hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

      {service.description && (
        <p className="text-lg leading-relaxed text-gray-300">
          {service.description}
        </p>
      )}

      {service.items && (
        <ul className="custom-list pl-5 space-y-2 text-gray-300">
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
