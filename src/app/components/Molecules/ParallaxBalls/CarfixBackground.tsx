"use client";
import React from "react";

export const CarfixBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden">
      {/* Основний фон — глибокий чорний градієнт */}
      <div className="absolute w-full h-full bg-gradient-to-b from-[#000000] via-[#0b0b0c] to-[#0f0f10]"></div>

      {/* Золоті акценти (світіння) */}
      <div className="absolute w-[400px] h-[400px] bg-[#be7d00] opacity-25 rounded-full blur-3xl animate-pulse-slow -top-24 -left-24"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#be7d00] opacity-20 rounded-full blur-2xl animate-pulse-slow -bottom-16 -right-16"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#be7d00] opacity-10 rounded-full blur-3xl animate-pulse-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};
