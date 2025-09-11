
import React from "react";
import { services } from "@/app/components/Atoms/Constants/services";
import ServiceCard from "./ServiceCard";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="text-[#E5E4E4] pt-20 px-5 min-h-[1000px]">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[32px] md:text-[45px] font-[Manrope-ExtraBold] text-center uppercase tracking-wider text-[var(--color-brand-gold)] py-10"
        >
          Послуги
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              items={service.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
