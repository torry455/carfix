import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="bg-[#17181C] text-[#E5E4E4] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
