"use client";

import React, { useRef, useState } from "react";

interface VideoGallerySliderProps {
  videos: string[];
  width?: number;
  height?: number;
}

export const VideoGallerySlider: React.FC<VideoGallerySliderProps> = ({
  videos,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    const nextIndex = (currentIndex + 1) % videos.length; 
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden relative">
      <video
        ref={videoRef}
        src={videos[currentIndex]}
        className="w-full h-full object-cover rounded-3xl"
        muted
        autoPlay
        playsInline
        onEnded={handleEnded}
      />
    </div>
  );
};
