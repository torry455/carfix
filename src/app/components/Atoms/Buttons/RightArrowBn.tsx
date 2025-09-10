"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  onClick: () => void;
  className?: string;

};

const RightArrowButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full text-[#BE7D00] bg-black/40 hover:bg-black/70 shadow-lg transition-all duration-300"
    >
      <ChevronRight
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
        strokeWidth={3}
      />
    </button>
  );
};

export default RightArrowButton;
