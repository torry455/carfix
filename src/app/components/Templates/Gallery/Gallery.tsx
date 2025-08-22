"use client";

import React, { useRef, useState } from "react";

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, newPos)));
  };

  const startDragging = (clientX: number) => {
    isDraggingRef.current = true;
    updatePosition(clientX);

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;

      const clientX =
        e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;

      // плавний апдейт через RAF
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => updatePosition(clientX));
    };

    const stop = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", stop);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-16 select-none">
      {/* Заголовок */}
      <h2 className="text-[60px] font-[Manrope-ExtraBold] uppercase text-center text-[#BE7D00] mb-6 tracking-wide">
        Наше &quot;До і Після&quot;
      </h2>

      {/* Контейнер */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl border border-[#2C2D31] bg-[#17181C]"
        style={{ touchAction: "none" }} // важливо для мобільних
      >
        {/* Відео "До" */}
        <video
          src="/img/gallery/before-after/IMG_5661.MOV"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Відео "Після" */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <video
            src="/img/gallery/before-after/IMG_5651.MOV"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Лінія + Кнопка */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="h-full w-[3px] bg-[#BE7D00]"></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#17181C] border-2 border-[#BE7D00] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => startDragging(e.clientX)}
            onTouchStart={(e) => startDragging(e.touches[0].clientX)}
          >
            <span className="text-[#BE7D00] text-2xl font-bold">⇆</span>
          </div>
        </div>
      </div>

      {/* Підписи */}
      <div className="flex justify-between mt-3 text-sm font-[Manrope-Bold] uppercase tracking-widest text-[#CFCFCF]">
        <span className="pl-2">До</span>
        <span className="pr-2">Після</span>
      </div>
    </div>
  );
};

export default Gallery;
