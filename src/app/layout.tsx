"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import { Header } from "./components/Organisms/Header/Header";
import { Footer } from "./components/Templates/Footer/Footer";
import "./globals.css";
import { ParallaxBalls } from "./components/Molecules/ParallaxBalls/ParallaxBalls";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="uk">
        <body className="relative text-[#E5E4E4] antialiased bg-[#000]">
          <ParallaxBalls />
          <div className="relative z-10 max-w-[1500px] 2xl:m-auto xl:mx-5 md:mx-5 mx-2">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </Provider>
  );
}
