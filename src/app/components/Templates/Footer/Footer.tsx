// "use client";

// import React from "react";
// import { FooterForm } from "./FooterForm";

// export const Footer: React.FC = () => {
//   return (
//     <footer id="contacts" className="text-[#CFCFCF] py-16 uppercase font-[Manrope-Medium] tracking-widest">
//       <div
//         className="
//           max-w-6xl mx-auto px-6 sm:px-8 lg:px-12
//           grid gap-12
//           grid-cols-1
//           lg:grid-cols-[2.5fr_1.5fr]
//         "
//       >
//         <div className="flex flex-col gap-8 bg-[#1c1e22] rounded-lg p-8 shadow-lg">
//           <div>
//             <h3 className="text-2xl font-[Manrope-ExtraBold] text-[#BE7D00] mb-6">Контакти</h3>
//             <p className="mb-3 font-[Manrope-ExtraBold] text-white">Графік роботи:</p>
//             <ul className="mb-6 space-y-2 text-[#D0D0D0]">
//               <li>ПН–ПТ: <span className="text-white font-[Manrope-Bold]">09:00 – 19:00</span></li>
//               <li>СБ–НД: <span className="text-white font-[Manrope-Bold]">вихідні</span></li>
//             </ul>

//             <p className="mb-3 font-s[Manrope-ExtraBold] text-white">Наші телефони:</p>
//             <ul className="mb-6 space-y-2">
//               <li>
//                 <a href="tel:+380672500925" className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]">
//                   +38 067 250 09 25
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+380638753005" className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]">
//                   +38 063 875 30 05
//                 </a>
//               </li>
//             </ul>

//             <p className="mb-3 font-[Manrope-ExtraBold] text-white">Адреса:</p>
//             <p className="mb-0 text-[#E0E0E0] font-[Manrope-Bold]">м. Вишневе, вул. Київська 6 А</p>
//           </div>

//           {/* Карта */}
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.6508992670555!2d30.3683676157314!3d50.39305307946714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c7f63f1231ff%3A0x7a1d93598d0df1bb!2z0LLRg9C70LjRhtGPINCb0LXRgNC90L7QstCwLCA2INGD!5e0!3m2!1suk!2sua!4v1691767264590!5m2!1suk!2sua"
//               width="100%"
//               height="280"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               className="rounded-lg"
//             ></iframe>
//             <a
//               href="https://www.google.com/maps/dir/?api=1&destination=50.393053,30.370556"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block mt-3 text-center bg-[#BE7D00] text-[#17181C] font-[Manrope-ExtraBold] px-8 py-3 rounded-full shadow-md hover:bg-[#d28f0a] transition-colors"
//             >
//               Побудувати маршрут
//             </a>
//           </div>
//         </div>

//         <div className="flex items-start">
//           <div className="w-full max-w-md">
//             <FooterForm />
//           </div>
//         </div>
//       </div>

//       <p className="text-center mt-12 text-sm text-[#BFC0C0] select-none">
//         CARFIX PDR EXPERT © 2023 Видалення вм&#39;ятин без пофарбування у Вишневому.
//       </p>
//     </footer>
//   );
// };

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FooterForm } from "./FooterForm";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contacts"
      className="text-[#CFCFCF] uppercase font-[Manrope-Medium] tracking-widest"
    >
      {/* Основний контейнер з контактами, картами та формою */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-8">
        {/* Контакти + карти */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 bg-[#1c1e22] rounded-lg p-8 shadow-lg">
          {/* Ліва частина: контакти */}
          <div className="w-full sm:w-[48%] flex flex-col gap-4">
            <h3 className="text-2xl font-[Manrope-ExtraBold] text-[#BE7D00] mb-4">
              Контакти
            </h3>

            <p className="mb-2 font-[Manrope-ExtraBold] text-white">
              Графік роботи:
            </p>
            <ul className="mb-4 space-y-2 text-[#D0D0D0]">
              <li>
                ПН–ПТ:{" "}
                <span className="text-white font-[Manrope-Bold]">
                  09:00 – 19:00
                </span>
              </li>
              <li>
                СБ–НД:{" "}
                <span className="text-white font-[Manrope-Bold]">вихідні</span>
              </li>
            </ul>

            <p className="mb-2 font-[Manrope-ExtraBold] text-white">
              Наші телефони:
            </p>
            <ul className="mb-4 space-y-2">
              <li>
                <a
                  href="tel:+380672500925"
                  className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]"
                >
                  +38 067 250 09 25
                </a>
              </li>
              <li>
                <a
                  href="tel:+380638753005"
                  className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]"
                >
                  +38 063 875 30 05
                </a>
              </li>
            </ul>

            <p className="mb-2 font-[Manrope-ExtraBold] text-white">
              Наші адреси:
            </p>
            <ul className="mb-0 space-y-1 text-[#E0E0E0] font-[Manrope-Bold]">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#BE7D00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                  />
                </svg>
                м. Вишневе, вул. Київська 6 А
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#BE7D00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                  />
                </svg>
                с. Білогородка, вул. Франка 37
              </li>
            </ul>
          </div>

          {/* Права частина: карти */}
          <div className="w-full sm:w-[48%] flex flex-col gap-4">
           
            {/* Карта Вишневе */} {/* Вишневе */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Вишневе"
                src="https://www.google.com/maps?q=50.3883701,30.3532127&hl=uk&z=17&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Київська+6А,+Вишневе,+Київська+обл.,+Україна"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center bg-[#BE7D00] text-[#17181C] font-semibold px-1 py-2 rounded-md shadow-md hover:bg-[#d28f0a] transition-colors text-sm normal-case"
              >
                Маршрут до Вишневого
              </a>
            </div>
            {/* Карта Білогородка */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              
              <iframe
                title="Білогородка"
                src="https://www.google.com/maps?q=Білогородка,+Франка+37&hl=uk&z=17&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Білогородка,+Франка+37"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center bg-[#BE7D00] text-[#17181C] font-semibold px-1 py-2 rounded-md shadow-md hover:bg-[#d28f0a] transition-colors text-sm normal-case"
              >
               
                Маршрут до Білогородки
              </a>
            </div>
          </div>
        </div>

        {/* Форма */}
        <div className="flex-1 bg-[#1c1e22] rounded-lg p-8 shadow-lg">
          <FooterForm />
        </div>
      </div>

      {/* Нижній блок без заокруглень, прозорий, на всю ширину */}
      <div className="w-full bg-[#fff]/3  py-12  flex flex-col items-center gap-8 border-[#2c2e33]">
        {/* Лого і соцмережі в рядку */}
        <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Лого */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/carfix-logo.png"
              alt="Carfix Logo"
              width={75}
              height={25}
              priority
            />
          </Link>

          {/* Соцмережі */}
          <div className="flex items-center gap-6">
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
        </div>

        {/* Копірайт */}
        <div>
          <p className="text-center text-sm text-[#BFC0C0] select-none mt-2">
            CARFIX PDR EXPERT © 2025
          </p>
          <p>Видалення вм&#39;ятин без пофарбування у Вишневому.</p>
        </div>
      </div>
    </footer>
  );
};
