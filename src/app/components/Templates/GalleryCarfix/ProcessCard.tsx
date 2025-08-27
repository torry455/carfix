"use client";

import Image from "next/image";
import React from "react";
import { ProcessItem } from "./GalleryOptions";

interface Props {
  item: ProcessItem;
  onClick: () => void;
}

export const ProcessCard: React.FC<Props> = React.memo(function ProcessCard({ item, onClick }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2C2D31] group cursor-pointer"
      onClick={onClick}
    >
      {item.video ? (
        <video muted playsInline className="w-full h-80 object-contain rounded-2xl bg-black">
          <source src={item.video} type="video/mp4" />
          <source src={item.video} type="video/quicktime" />
          Ваш браузер не підтримує відео.
        </video>
      ) : (
        <Image
          src={item.photo!}
          alt={item.description}
          width={600}
          height={400}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
        />
      )}
      <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 font-bold text-sm">
        {item.description}
      </div>
    </div>
  );
});

ProcessCard.displayName = "ProcessCard";
