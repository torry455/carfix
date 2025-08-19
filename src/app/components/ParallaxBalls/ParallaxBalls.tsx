"use client";
import React, { useEffect, useState, useRef } from "react";

const ballsConfig = [
  { size: 250, blur: 40, speed: 0.0005, wave: 30, top: 40, left: 50 },
  { size: 200, blur: 30, speed: 0.0001, wave: 40, top: 60, left: 20 },
  { size: 270, blur: 60, speed: 0.0004, wave: 50, top: 20, left: 70 },
  { size: 190, blur: 35, speed: 0.0007, wave: 35, top: 70, left: 30 },
  { size: 230, blur: 50, speed: 0.00045, wave: 45, top: 30, left: 10 },
  { size: 180, blur: 45, speed: 0.0006, wave: 25, top: 50, left: 80 },
  { size: 210, blur: 38, speed: 0.00035, wave: 38, top: 80, left: 50 },
  { size: 160, blur: 32, speed: 0.00055, wave: 30, top: 10, left: 60 },
  { size: 220, blur: 45, speed: 0.00065, wave: 32, top: 55, left: 15 },
  { size: 280, blur: 55, speed: 0.00025, wave: 42, top: 75, left: 90 },
];

export const ParallaxBalls: React.FC = () => {
  const [balls, setBalls] = useState(
    ballsConfig.map((ball) => ({
      x: ball.left,
      y: ball.top,
    }))
  );
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number; opacity: number }[]
  >([]);

  // Ref to hold the SVG container element
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: DOMHighResTimeStamp) => {
      // Calculate new positions based on time and wave properties.
      const currentPositions = ballsConfig.map((ball) => {
        const waveY = Math.sin(time * ball.speed + ball.top) * ball.wave * 0.5;
        const waveX = Math.cos(time * ball.speed * 0.8 + ball.left) * ball.wave;
        // Use a base position relative to the viewport (e.g., using vw/vh)
        // This is a simple pixel-based calculation, but you could use a percentage-based
        // calculation here for more advanced responsiveness.
        const x = (ball.left * window.innerWidth) / 100 + waveX + ball.size / 2;
        const y = (ball.top * window.innerHeight) / 100 + waveY + ball.size / 2;
        return { x, y };
      });

      // Calculate connections between nearby balls
      const newLines = [];
      const threshold = 350;
      for (let i = 0; i < currentPositions.length; i++) {
        for (let j = i + 1; j < currentPositions.length; j++) {
          const p1 = currentPositions[i];
          const p2 = currentPositions[j];
          // Calculate the distance between two balls.
          const distance = Math.sqrt(
            Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
          );
          if (distance < threshold) {
            const opacity = 1 - distance / threshold;
            newLines.push({
              x1: p1.x,
              y1: p1.y,
              x2: p2.x,
              y2: p2.y,
              opacity,
            });
          }
        }
      }

      setBalls(currentPositions);
      setLines(newLines);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Parallax effect based on scroll position
    const handleScroll = () => {
      if (!svgRef.current) return;
      const scrollY = window.scrollY;
      const parallaxFactor = 0.5; // Adjust this value to change the parallax speed
      // Apply a transform to the SVG container to create the parallax effect
      svgRef.current.style.transform = `translateY(${
        scrollY * parallaxFactor
      }px)`;
    };

    animationFrameId = requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // The main container for the background. It is now part of the document flow
    // with a large min-height to enable scrolling.
    <div className="absolute inset-0 z-[-1] overflow-hidden min-h-[200vh]">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        // Position the SVG relative to the viewport.
        // The transform will move it up/down as the user scrolls.
        className="absolute w-full h-full pointer-events-none"
        style={{
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          {/* Balls */}
          {balls.map((ball, i) => (
            <circle
              key={i}
              cx={ball.x}
              cy={ball.y}
              r={ballsConfig[i].size / 2}
              fill="#BE7D00"
              opacity={0.3}
            />
          ))}
          {/* Lines */}
          {lines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#BE7D00"
              strokeWidth="24"
              opacity={line.opacity * 0.2}
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
