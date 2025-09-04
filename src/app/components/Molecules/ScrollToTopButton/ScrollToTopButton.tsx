"use client";

import React, { useState, useEffect } from "react";
import { ArrowButton } from "../../Atoms/Buttons/ArrowButton";

export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-10 right-3 md:right-4 xl:bottom-12 xl:right-12">
          <ArrowButton
            direction="up"
            onClickFn={scrollToTop}
            arrowSize={20}
            style={'bg-black/40 hover:bg-[#BE7D00]/10 p-4'}
            />
        </div>
      )}
    </>
  );
};
