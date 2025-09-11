import React from "react";
import { Check } from "lucide-react";
import { ServiceProps } from "@/types/servicesProps";

const ServiceCard: React.FC<ServiceProps> = ({ title, items }) => {
  return (
    <div className="bg-black/70 rounded-2xl p-8  hover:scale-105 transition-transform duration-300">
      <h3 className="text-[23px] font-[Manrope-Medium] uppercase tracking-wider mb-6">
        {title}
      </h3>


      {items && (
        <ul className="space-y-3 text-gray-300 font-[Manrope-Medium] tracking-wide">
          {items.map((item, i) => (
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
  );
};

export default ServiceCard;
