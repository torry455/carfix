"use client";

import Image from "next/image";
import React from "react";
import { BeforeAfterItem } from "./GalleryOptions";

interface Props {
  item: BeforeAfterItem;
  showAfter: boolean;
  onToggle: () => void;
  onClick: () => void;
  isMobile: boolean;
}

export const BeforeAfterCard: React.FC<Props> = React.memo(function BeforeAfterCard({
  item,
  showAfter,
  onToggle,
  onClick,
  isMobile,
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2C2D31] group cursor-pointer"
      onClick={onClick}
    >
      {isMobile ? (
        <>
          <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="w-full h-80 block relative">
            <Image
              src={showAfter ? item.after : item.before}
              alt={`${showAfter ? "Після" : "До"} — ${item.title}`}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </button>
          <div className="absolute bottom-0 w-full h-full bg-black/50 text-white text-center py-2 font-bold text-sm">
            {item.title} ({showAfter ? "Після" : "До"})
          </div>
        </>
      ) : (
        <>
          <Image
            src={item.before}
            alt={`До — ${item.title}`}
            width={600}
            height={500}
            className="h-100 object-cover rounded-2xl"
          />
          <Image
            src={item.after}
            alt={`Після — ${item.title}`}
            width={600}
            height={500}
            className="absolute top-0 left-0 h-100 object-cover rounded-2xl transition-transform duration-500 group-hover:translate-x-full"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[#BE7D00] text-lg font-bold uppercase tracking-wide text-center px-2">
            {item.title}
          </div>
        </>
      )}
    </div>
  );
});

BeforeAfterCard.displayName = "BeforeAfterCard";
