import React from "react";

export const AboutSection: React.FC = () => {
  const reasons = [
    "Погодні умови (град, сніг)",
    "Падіння з дерев різних плодів (горіхи, каштани, жолуді, яблука тощо)",
    "Різноманітні викиди з поверхонь доріг щебеню, гравію та інших дрібних твердих предметів",
    "Невдале паркування",
    "Автомобільна аварія (ДТП)",
  ];

  return (
<section
  id="about"
  className="my-24">
  <div className="bg-[#222327] text-[#E5E4E4] py-20 px-6 sm:px-10 lg:px-16 
                  max-w-6xl mx-auto rounded-3xl shadow-lg">

      <h2 className="text-4xl font-bold mb-8 text-[#BE7D00] tracking-wide">
        Що ж таке технологія PDR?
      </h2>

      <p className="max-w-4xl text-[#CFCFCF] leading-relaxed text-lg">
        Технологія PDR - це сучасний та комплексний підхід до виправлення дефектів кузова, спричиненого різними чинниками.
      </p>

      <h3 className="mt-6 text-2xl font-semibold text-[#BE7D00]">
        Основні причини вм&#39;ятин:
      </h3>

<ul className="space-y-3 mt-4">
  {reasons.map((reason, index) => (
    <li
      key={index}
      className="flex items-center sm:items-start bg-[#2C2D31] p-3 rounded-xl shadow-md"
    >
      <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 bg-[#BE7D00] rounded-full"></span>
      <span className="ml-2 sm:ml-3 text-gray-300 text-sm sm:text-base">{reason}</span>
    </li>
  ))}
</ul>


      <p className="mt-6 text-[#CFCFCF] leading-relaxed text-lg">
        Завдяки технології PDR та спеціальному інструменту, ми можемо видалити вм&#39;ятини різної складності на кузові автомобіля без фарбування деталей за умови, що на автомобілі не постраждало лако-фарбувальне покриття.
      </p>
      </div>
    </section>
  );
};
