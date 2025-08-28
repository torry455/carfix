"use client";

import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="text-[#CFCFCF] uppercase font-[Manrope-ExtraBold] tracking-widest border-t border-[var(--color-brand-gold)]"
    >
      <div className="w-full py-4 max-w-[1500px] px-10 py-10 flex flex-col items-center gap-6">
        <div className="flex flex-row items-center gap-6">
          <a
            href="https://www.instagram.com/carfix_pdr_expert?igsh=MTR5cWxxcGNrcWgxMQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#BE7D00] hover:text-[#FFD36E] h-6 w-6 transition-colors" />
          </a>
          <a
            href="https://t.me/+380672500925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="text-[#BE7D00] hover:text-[#FFD36E] h-6 w-6 transition-colors" />
          </a>

          <a
            href="https://wa.me/+380672500925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-[#BE7D00] hover:text-[#FFD36E] h-6 w-6 transition-colors" />
          </a>
          <a
            href="viber://chat?number=%2B380672500925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaViber className="text-[#BE7D00] hover:text-[#FFD36E] h-6 w-6 transition-colors" />
          </a>
        </div>
        <div className="flex flex-col gap-3 text-md text-center text-[#BFC0C0] sm:text-sm md:text-sm">
          <p>
            CARFIX PDR EXPERT © 2025
          </p>
          <p>Видалення вм&#39;ятин без пофарбування у Вишневому.</p>
        </div>
      </div>
    </footer>
  );
};
