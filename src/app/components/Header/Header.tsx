"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
  { label: "Про нас", anchor: "about" },
  { label: "Послуги", anchor: "services" },
  { label: "Навчання", anchor: "training" },
  { label: "Галерея", anchor: "gallery" },
  { label: "Контакти", anchor: "contacts" },
];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-[#222327] text-[#E5E4E4] py-4 px-6 sm:px-10 shadow-lg w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/carfix-logo.png"
            alt="Carfix Logo"
            width={75}
            height={25}
            priority
          />
        </Link>

        {/* Навігація і кнопка - приховані на мобілці */}
<nav className="hidden md:flex items-center gap-8 text-lg font-medium">
  <ul className="flex gap-8">
    {menuItems.map(({ label, anchor }) => (
      <li key={anchor}>
        <a
          href={`#${anchor}`}
          className="hover:text-[#BE7D00] transition-colors duration-300"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
  <button className="bg-[#BE7D00] text-[#17181C] font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#a36600] transition-colors duration-300 mr-4">
    Записатись
  </button>
  <Link href="/login" className="text-[#BE7D00] font-semibold hover:underline">
    Увійти
  </Link>
</nav>


        {/* Бургер меню */}
<BurgerMenu
  key={menuOpen ? "open" : "closed"}
  menuOpen={menuOpen}
  toggleMenu={toggleMenu}
  menuItems={menuItems}
  onClose={closeMenu}
/>
      </div>
    </header>
  );
};
