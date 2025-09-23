"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import { Header } from "./components/Organisms/Header/Header";
import { Footer } from "./components/Organisms/Footer/Footer";
import "./globals.css";
// import { ParallaxBalls } from "./components/Molecules/ParallaxBalls/ParallaxBalls";
import { BurgerMenu } from "./components/Molecules/BurgerMenu/BurgerMenu";
import { CarfixBackground } from "./components/Molecules/ParallaxBalls/CarfixBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="uk">
        <body className="relative text-[#E5E4E4] bg-black overflow-x-hidden">
          {/* <ParallaxBalls /> */}
          <CarfixBackground />
          <div className="relative max-w-6xl mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
          <BurgerMenu />
        </body>
      </html>
    </Provider>
  );
}
