
"use client";
import React, { useRef, useEffect } from "react";

type Droplet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const NUM_DROPLETS = 20;
const MIN_RADIUS = 20;
const MAX_RADIUS = 90;

export const ParallaxBalls: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dropletsRef = useRef<Droplet[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    dropletsRef.current = Array.from({ length: NUM_DROPLETS }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        // desktop: blur
        ctx.save();
        ctx.filter = "blur(35px)";
      }

      dropletsRef.current.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x - d.radius < 0 || d.x + d.radius > canvas.width) d.vx *= -1;
        if (d.y - d.radius < 0 || d.y + d.radius > canvas.height) d.vy *= -1;

   ctx.beginPath();
ctx.arc(d.x, d.y, d.radius * 0.2, 0, Math.PI * 2);
ctx.fillStyle = "rgba(255, 220, 100, 0.8)";
ctx.fill();


        if (isMobile) {
          // gradient glow
          const gradient = ctx.createRadialGradient(
            d.x, d.y, d.radius * 0.3,
            d.x, d.y, d.radius
          );
          gradient.addColorStop(0, "rgba(255, 200, 50, 0.6)");
          gradient.addColorStop(1, "rgba(190, 125, 0, 0)");
          ctx.fillStyle = gradient;
        } else {
          // blurred circle
          ctx.fillStyle = "rgba(190, 125, 0, 0.3)";
        }

        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!isMobile) ctx.restore();
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[-1]"
      style={{ maxWidth: "100vw", maxHeight: "100vh" }}
    />
  );
};
