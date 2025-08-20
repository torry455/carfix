"use client";
import React, { useEffect, useState } from "react";

// --- Configuration ---
// These constants control the size, speed, and overall look of the balls.
const CONTAINER_WIDTH = 1500;
const CONTAINER_HEIGHT = 3000;
const EDGE_PADDING = 180;
const ballsConfig = [
  // --- New balls added to the top ---
  { size: 220, blur: 45, speed: 0.0006, wave: 18, top: 0, left: 50 },
  { size: 180, blur: 38, speed: 0.0007, wave: 15, top: 5, left: 25 },
  { size: 260, blur: 55, speed: 0.00045, wave: 22, top: 8, left: 70 },
  { size: 195, blur: 32, speed: 0.0008, wave: 13, top: 12, left: 35 },
  // --- Original balls list ---
  { size: 250, blur: 40, speed: 0.0005, wave: 20, top: 10, left: 40 },
  { size: 200, blur: 30, speed: 0.0001, wave: 18, top: 25, left: 50 },
  { size: 270, blur: 60, speed: 0.0004, wave: 22, top: 40, left: 60 },
  { size: 190, blur: 35, speed: 0.0007, wave: 15, top: 55, left: 45 },
  { size: 230, blur: 50, speed: 0.00045, wave: 17, top: 70, left: 55 },
  { size: 180, blur: 45, speed: 0.0006, wave: 14, top: 85, left: 50 },
  { size: 210, blur: 38, speed: 0.00035, wave: 16, top: 100, left: 42 },
  { size: 160, blur: 32, speed: 0.00055, wave: 13, top: 115, left: 58 },
  { size: 220, blur: 45, speed: 0.00065, wave: 12, top: 130, left: 47 },
  { size: 280, blur: 55, speed: 0.00025, wave: 19, top: 145, left: 53 },
  { size: 200, blur: 30, speed: 0.0001, wave: 18, top: 160, left: 60 },
  { size: 270, blur: 60, speed: 0.0004, wave: 22, top: 175, left: 40 },
  { size: 190, blur: 35, speed: 0.0007, wave: 15, top: 190, left: 55 },
  { size: 230, blur: 50, speed: 0.00045, wave: 17, top: 205, left: 45 },
  { size: 260, blur: 55, speed: 0.0003, wave: 25, top: 220, left: 50 },
  { size: 170, blur: 30, speed: 0.0008, wave: 10, top: 235, left: 65 },
  { size: 240, blur: 48, speed: 0.0004, wave: 18, top: 250, left: 35 },
  { size: 205, blur: 36, speed: 0.0006, wave: 14, top: 265, left: 48 },
  // --- New balls added for more density ---
  { size: 215, blur: 42, speed: 0.0007, wave: 16, top: 30, left: 20 },
  { size: 285, blur: 58, speed: 0.0003, wave: 20, top: 80, left: 80 },
  { size: 150, blur: 35, speed: 0.0009, wave: 11, top: 125, left: 25 },
  { size: 245, blur: 52, speed: 0.0005, wave: 19, top: 185, left: 75 },
  { size: 170, blur: 33, speed: 0.0006, wave: 12, top: 215, left: 20 },
];

// Helper function to clamp values within a range
function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export const ParallaxBalls: React.FC = () => {
  const [balls, setBalls] = useState(
    ballsConfig.map((ball) => ({
      x: ball.left,
      y: ball.top,
    }))
  );

  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: DOMHighResTimeStamp) => {
      // Get the current scroll position for the parallax effect
      const scrollY = window.scrollY;

      const currentPositions = ballsConfig.map((ball) => {
        // Calculate a sine wave for smooth, circular motion
        const waveY = Math.sin(time * ball.speed + ball.top) * ball.wave * 0.5;
        const waveX = Math.cos(time * ball.speed * 0.8 + ball.left) * ball.wave;

        // Calculate raw x and y positions based on initial config and wave motion
        const xRaw =
          EDGE_PADDING +
          ((CONTAINER_WIDTH - EDGE_PADDING * 2) * ball.left) / 100 +
          waveX;
        const yRaw =
          EDGE_PADDING +
          ((CONTAINER_HEIGHT - EDGE_PADDING * 2) * ball.top) / 100 +
          waveY +
          // Apply parallax effect based on scroll position
          scrollY * 0.2;

        // Ensure balls stay within the container boundaries
        const minX = EDGE_PADDING + ball.wave + ball.size / 2;
        const maxX = CONTAINER_WIDTH - EDGE_PADDING - ball.wave - ball.size / 2;
        const x = clamp(xRaw, minX, maxX);

        const minY = EDGE_PADDING + ball.wave + ball.size / 2;
        const maxY =
          CONTAINER_HEIGHT - EDGE_PADDING - ball.wave - ball.size / 2;
        const y = clamp(yRaw, minY, maxY);

        return { x, y };
      });

      // Update the state with the new ball positions
      setBalls(currentPositions);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      // Clean up the animation frame on component unmount
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden min-h-[300vh] flex justify-center">
      <svg
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
        }}
      >
        <defs>
          {/* Simple blur filter for soft blurred balls */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
          </filter>
        </defs>
        <g filter="url(#blur)" fill="#BE7D00">
          {balls.map((ball, i) => (
            <circle
              key={i}
              cx={ball.x}
              cy={ball.y}
              r={ballsConfig[i].size / 2}
              opacity={0.25}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
