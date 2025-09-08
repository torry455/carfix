"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../lib/store";
import { closeMenu } from "../../../../lib/burgerMenuSlice";
import { menuItems } from "../../Atoms/Constants/menuItems";
import { BookButton } from "../../Atoms/Buttons/BookButton";
import { BurgerMenuButton } from "../../Atoms/Buttons/BurgerMenuButton";
import Link from "next/link";

export const BurgerMenu: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.burgerMenu.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#000] 
                  flex flex-col justify-center gap-10
                  text-2xl md:text-3xl font-[Manrope-Bold] text-[#E5E4E4] uppercase tracking-widest
                  transition-opacity duration-300 z-[100] ${
                    isMenuOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
      aria-hidden={!isMenuOpen}
    >
      <div
        className="absolute top-[27px] right-[38px] z-[150]"
        aria-label="close menu"
      >
        <BurgerMenuButton />
      </div>

      <ul role="list" className="flex flex-col items-center gap-10">
        {menuItems.map((item) => (
          <li key={item.anchor}>
            <Link
              href={`#${item.anchor}`}
              className="hover:text-[#BE7D00] active:text-[#BE7D00] transition-colors duration-300"
              onClick={() => dispatch(closeMenu())}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <BookButton
            buttonName="записатись"
            onClickFn={() => {
              dispatch(closeMenu());
              document
                .getElementById("contacts")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
