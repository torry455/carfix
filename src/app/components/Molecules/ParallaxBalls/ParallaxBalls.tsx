"use client";
import React, { useEffect, useRef } from "react";

const CONTAINER_WIDTH = 1500;
const CONTAINER_HEIGHT = 3000;
const EDGE_PADDING = 180;
const ballsConfig = [
  { size: 220, speed: 0.0006, wave: 18, top: 0, left: 50 },
  { size: 180, speed: 0.0007, wave: 15, top: 5, left: 25 },
  { size: 260, speed: 0.00045, wave: 22, top: 8, left: 70 },
  { size: 195, speed: 0.0008, wave: 13, top: 12, left: 35 },
  { size: 250, speed: 0.0005, wave: 20, top: 10, left: 40 },
  { size: 200, speed: 0.0001, wave: 18, top: 25, left: 50 },
  { size: 270, speed: 0.0004, wave: 22, top: 40, left: 60 },
  { size: 190, speed: 0.0007, wave: 15, top: 55, left: 45 },
  { size: 230, speed: 0.00045, wave: 17, top: 70, left: 55 },
  { size: 180, speed: 0.0006, wave: 14, top: 85, left: 50 },
  { size: 210, speed: 0.00035, wave: 16, top: 100, left: 42 },
  { size: 160, speed: 0.00055, wave: 13, top: 115, left: 58 },
  { size: 220, speed: 0.00065, wave: 12, top: 130, left: 47 },
  { size: 280, speed: 0.00025, wave: 19, top: 145, left: 53 },
  { size: 200, speed: 0.0001, wave: 18, top: 160, left: 60 },
  { size: 270, speed: 0.0004, wave: 22, top: 175, left: 40 },
  { size: 190, speed: 0.0007, wave: 15, top: 190, left: 55 },
  { size: 230, speed: 0.00045, wave: 17, top: 205, left: 45 },
  { size: 260, speed: 0.0003, wave: 25, top: 220, left: 50 },
  { size: 170, speed: 0.0008, wave: 10, top: 235, left: 65 },
  { size: 240, speed: 0.0004, wave: 18, top: 250, left: 35 },
  { size: 205, speed: 0.0006, wave: 14, top: 265, left: 48 },
  { size: 215, speed: 0.0007, wave: 16, top: 30, left: 20 },
  { size: 285, speed: 0.0003, wave: 20, top: 80, left: 80 },
  { size: 150, speed: 0.0009, wave: 11, top: 125, left: 25 },
  { size: 245, speed: 0.0005, wave: 19, top: 185, left: 75 },
  { size: 170, speed: 0.0006, wave: 12, top: 215, left: 20 },
  { size: 180, speed: 0.0005, wave: 15, top: 60, left: 35 },
  { size: 210, speed: 0.0007, wave: 18, top: 180, left: 60 },
  { size: 160, speed: 0.0006, wave: 12, top: 120, left: 70 },
  { size: 200, speed: 0.0008, wave: 14, top: 200, left: 40 },
];

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export const ParallaxBalls: React.FC = () => {
  const ballsRef = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: DOMHighResTimeStamp) => {
      // Get the current scroll position for the parallax effect
      const scrollY = window.scrollY;

      ballsConfig.forEach((ball, i) => {
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

        const el = ballsRef.current[i];
        if (el) {
          el.setAttribute("cx", x.toString());
          el.setAttribute("cy", y.toString());
        }
      });

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
    <div className="absolute inset-0 z-[-1] overflow-hidden min-h-[300vh] flex justify-center pointer-events-none">
      <svg
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        className="absolute"
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
          {ballsConfig.map((ball, i) => (
            <circle
              key={i}
              ref={(el) => {
                ballsRef.current[i] = el;
              }}
              cx={0}
              cy={0}
              r={ball.size / 2}
              opacity={0.25}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
