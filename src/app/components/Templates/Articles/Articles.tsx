"use client";

import React from "react";
import { BlogArticle } from "./BlogArticle";
import { articles } from "../../Atoms/Constants/articles";

export const Articles: React.FC = () => {

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
              <h2 className="text-[32px] md:text-[45px]
                       font-[Manrope-ExtraBold] text-center uppercase 
                       tracking-wider text-[var(--color-brand-gold)]">
          Часті запитання
        </h2>
      {/* Грід карток */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {articles.map((article, index) => (
          <BlogArticle
            key={index}
            title={article.title}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};