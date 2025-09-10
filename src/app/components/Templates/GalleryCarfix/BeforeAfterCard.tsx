// "use client";

// import Image from "next/image";
// import React from "react";
// import { BeforeAfterItem } from "./GalleryOptions";

// interface Props {
//   item: BeforeAfterItem;
//   showAfter: boolean;
//   onToggle: () => void;
//   onClick: () => void;
//   isMobile: boolean;
// }

// export const BeforeAfterCard: React.FC<Props> = React.memo(function BeforeAfterCard({
//   item,
//   showAfter,
//   onToggle,
//   onClick,
//   isMobile,
// }) {
//   return (
//     <div
//       className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2C2D31] group cursor-pointer"
//       onClick={onClick}
//     >
//       {isMobile ? (
//         <>
//           <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="w-full h-80 block relative">
//             <Image
//               src={showAfter ? item.after : item.before}
//               alt={`${showAfter ? "Після" : "До"} — ${item.title}`}
//               width={600}
//               height={400}
//               className="w-full h-80 object-cover rounded-2xl"
//             />
//           </button>
//           <div className="absolute bottom-0 w-full h-full bg-black/50 text-white text-center py-2 font-bold text-sm">
//             {item.title} ({showAfter ? "Після" : "До"})
//           </div>
//         </>
//       ) : (
//         <>
//           <Image
//             src={item.before}
//             alt={`До — ${item.title}`}
//             width={600}
//             height={500}
//             className="h-100 object-cover rounded-2xl"
//           />
//           <Image
//             src={item.after}
//             alt={`Після — ${item.title}`}
//             width={600}
//             height={500}
//             className="absolute top-0 left-0 h-100 object-cover rounded-2xl transition-transform duration-500 group-hover:translate-x-full"
//           />
//           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[#BE7D00] text-lg font-bold uppercase tracking-wide text-center px-2">
//             {item.title}
//           </div>
//         </>
//       )}
//     </div>
//   );
// });

// BeforeAfterCard.displayName = "BeforeAfterCard";



"use client";

import Image from "next/image";
import React, { useState } from "react";
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 30) onToggle(); // свайп вправо
    else if (diff < -30) onToggle(); // свайп вліво
    setTouchStartX(null);
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2C2D31] cursor-pointer"
      onClick={onClick}
    >
      {isMobile ? (
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-80"
        >
          <Image
            src={showAfter ? item.after : item.before}
            alt={`${showAfter ? "Після" : "До"} — ${item.title}`}
            width={600}
            height={400}
            className="w-full h-80 object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-2 font-bold text-sm rounded-b-2xl">
            {item.title} ({showAfter ? "Після" : "До"})
          </div>
        </div>
      ) : (
        <div className="relative group">
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
        </div>
      )}
    </div>
  );
});

BeforeAfterCard.displayName = "BeforeAfterCard";
