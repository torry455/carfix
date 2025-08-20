import React from "react";

interface ServiceProps {
  title: string;
  description?: string;
  items?: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, items }) => {
  return (
    <div className="bg-[#222327] rounded-2xl p-8 border border-[#3D3D3D] hover:scale-105 transition-transform duration-300">
      <h3 className="text-[23px] font-[Manrope-Medium] uppercase tracking-wider mb-4">
        {title}
      </h3>
      {description && (
        <p className="text-[16px] leading-relaxed text-gray-300 tracking-wide font-[Manrope-Medium]">
          {description}
        </p>
      )}
      {items && (
        <ul className="custom-list pl-5 space-y-3 text-gray-300 uppercase font-[Manrope-Medium] tracking-wider">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;