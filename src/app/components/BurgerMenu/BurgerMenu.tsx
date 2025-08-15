"use client";

import React, { useEffect } from "react";

interface BurgerMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  onClose: () => void;
  menuItems: { label: string; anchor: string }[]; 
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  menuOpen,
  toggleMenu,
  menuItems,
  onClose,
}) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
<>
  <button
    className="md:hidden w-10 h-10 flex justify-center items-center p-2 z-50  top-4 right-4"
    onClick={toggleMenu}
    aria-label="Toggle menu"
  >
    {menuOpen ? (
      <svg
        className="w-6 h-6 text-[#E5E4E4]"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ) : (
      <svg
        className="w-6 h-6 text-[#E5E4E4]"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="3" y1="7" x2="21" y2="7" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </svg>
    )}
  </button>

<nav
  key={menuOpen ? "open" : "closed"}
  className={`fixed top-0 left-0 right-0 bottom-0 bg-[#222327] flex flex-col justify-center items-center gap-10 text-2xl font-semibold text-[#E5E4E4] transition-opacity duration-300 z-5 ${
    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
    {menuItems.map((item) => (
      <a
        key={item.anchor}
        href={`#${item.anchor}`}
        className="hover:text-[#BE7D00] transition-colors duration-300"
        onClick={onClose}
      >
        {item.label}
      </a>
    ))}

    <button
      className="mt-8 px-8 py-3 bg-[#BE7D00] text-[#17181C] rounded-lg shadow-md hover:bg-[#a36600] transition-colors duration-300 font-semibold text-lg"
      onClick={onClose}
    >
      Записатись
    </button>
  </nav>
</>

  );
};
