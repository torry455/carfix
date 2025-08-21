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
        <body className="text-[#E5E4E4] antialiased">
          <div className="bg-[#000] z-[-2]">
            <div className="max-w-[1500px] 2xl:m-auto xl:mx-5 md:mx-5 mx-2">
              <ParallaxBalls />
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
