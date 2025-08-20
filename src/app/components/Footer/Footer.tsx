"use client";

import React from "react";
import { FooterForm } from "./FooterForm";

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="text-[#CFCFCF] py-16 uppercase font-[Manrope-Medium] tracking-widest">
      <div
        className="
          max-w-6xl mx-auto px-6 sm:px-8 lg:px-12
          grid gap-12
          grid-cols-1
          lg:grid-cols-[2.5fr_1.5fr]
        "
      >
        <div className="flex flex-col gap-8 bg-[#1c1e22] rounded-lg p-8 shadow-lg">
          <div>
            <h3 className="text-2xl font-[Manrope-ExtraBold] text-[#BE7D00] mb-6">Контакти</h3>
            <p className="mb-3 font-[Manrope-ExtraBold] text-white">Графік роботи:</p>
            <ul className="mb-6 space-y-2 text-[#D0D0D0]">
              <li>ПН–ПТ: <span className="text-white font-[Manrope-Bold]">09:00 – 19:00</span></li>
              <li>СБ–НД: <span className="text-white font-[Manrope-Bold]">вихідні</span></li>
            </ul>

            <p className="mb-3 font-s[Manrope-ExtraBold] text-white">Наші телефони:</p>
            <ul className="mb-6 space-y-2">
              <li>
                <a href="tel:+380672500925" className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]">
                  +38 067 250 09 25
                </a>
              </li>
              <li>
                <a href="tel:+380638753005" className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]">
                  +38 063 875 30 05
                </a>
              </li>
            </ul>

            <p className="mb-3 font-[Manrope-ExtraBold] text-white">Адреса:</p>
            <p className="mb-0 text-[#E0E0E0] font-[Manrope-Bold]">м. Вишневе, вул. Київська 6 А</p>
          </div>

          {/* Карта */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.6508992670555!2d30.3683676157314!3d50.39305307946714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c7f63f1231ff%3A0x7a1d93598d0df1bb!2z0LLRg9C70LjRhtGPINCb0LXRgNC90L7QstCwLCA2INGD!5e0!3m2!1suk!2sua!4v1691767264590!5m2!1suk!2sua"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=50.393053,30.370556"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center bg-[#BE7D00] text-[#17181C] font-[Manrope-ExtraBold] px-8 py-3 rounded-full shadow-md hover:bg-[#d28f0a] transition-colors"
            >
              Побудувати маршрут
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-full max-w-md">
            <FooterForm />
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-sm text-[#BFC0C0] select-none">
        CARFIX PDR EXPERT © 2023 Видалення вм&#39;ятин без пофарбування у Вишневому.
      </p>
    </footer>
  );
};
