
"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type VideoPair = {
  before: string;
  after: string;
};

const videoPairs: VideoPair[] = [
  { before: "/img/gallery/before-after/videobefore1.MOV", after: "/img/gallery/before-after/videoafter1.MOV" },
  { before: "/img/gallery/before-after/videobefore2.MOV", after: "/img/gallery/before-after/videoafter2.MOV" },
  { before: "/img/gallery/before-after/videobefore3.mp4", after: "/img/gallery/before-after/videoafter3.mp4" },
  { before: "/img/gallery/before-after/videobefore4.mp4", after: "/img/gallery/before-after/videoafter4.mp4" },
  { before: "/img/gallery/before-after/videobefore5.MOV", after: "/img/gallery/before-after/videoafter5.MOV" },
];

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoPairs.length);
      setSliderPosition(50);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoPairs.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videoPairs.length - 1 : prev - 1
    );
    setSliderPosition(50);
  };

  const { before, after } = videoPairs[currentIndex];

  return (
<div className="relative w-full max-w-6xl mx-auto py-16 select-none">
  <h2 className="text-[60px] font-[Manrope-ExtraBold] uppercase text-center text-[#BE7D00] mb-6 tracking-wide">
    Наше &quot;До і Після&quot;
  </h2>

  <div className="relative flex items-center gap-8">
    <button
      onClick={prevSlide}
      className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#BE7D00] text-[#BE7D00] bg-[#17181C] shadow-lg hover:bg-[#BE7D00] hover:text-black transition-all duration-300"
    >
      <ChevronLeft size={28} strokeWidth={3} />
    </button>

    <div
      ref={containerRef}
      className="relative flex-1 aspect-video overflow-hidden rounded-2xl shadow-xl border border-[#2C2D31] bg-[#17181C]"
      style={{ touchAction: "none" }}
    >
      <video
        src={after}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <video
          src={before}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
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

    <button
      onClick={nextSlide}
      className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#BE7D00] text-[#BE7D00] bg-[#17181C] shadow-lg hover:bg-[#BE7D00] hover:text-black transition-all duration-300"
    >
      <ChevronRight size={28} strokeWidth={3} />
    </button>
  </div>

  <div className="flex justify-between mt-3 text-sm font-[Manrope-Bold] uppercase tracking-widest text-[#CFCFCF] max-w-[calc(100%-112px)] mx-auto">
    <span className="pl-2">До</span>
    <span className="pr-2">Після</span>
  </div>
</div>


  );
};

export default Gallery;
