import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";
import { ParallaxBalls } from "./components/ParallaxBalls/ParallaxBalls";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-[#17181C] text-[#E5E4E4] antialiased bg-[#111215]">
        <div className="max-w-[1500px] 2xl:m-auto xl:mx-5 md:mx-5">
          <ParallaxBalls />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
