import React, { useRef } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  sliderPosition: number;
  setSliderPosition: (pos: number) => void;
};

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  before,
  after,
  sliderPosition,
  setSliderPosition,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) {  
      return;
    };
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

  return (
    <div
      ref={containerRef}
      className="relative flex-1 aspect-video overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border border-[#2C2D31] bg-[#17181C]"
      style={{ touchAction: "none" }}
    >
      <video src={after} autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <video src={before} autoPlay muted loop playsInline className="w-full h-full object-cover" />
      </div>

      {/* Повзунок */}
      <div className="absolute top-0 bottom-0" style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-[2px] sm:w-[3px] bg-[#BE7D00]"></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#17181C] border-2 border-[#BE7D00] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => startDragging(e.clientX)}
          onTouchStart={(e) => startDragging(e.touches[0].clientX)}
        >
          <span className="text-[#BE7D00] text-lg sm:text-xl md:text-2xl font-bold">⇆</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
