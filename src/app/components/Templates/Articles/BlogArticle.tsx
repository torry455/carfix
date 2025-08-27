"use client";

import React from "react";


type ContentBlock = { type: "paragraph" | "subtitle" | "list"; text: string | string[] };

interface BlogArticleProps {
  title: string;
  date?: string;
  content: ContentBlock[] | string[];
  highlights?: string[];
}

export const BlogArticle: React.FC<BlogArticleProps> = ({ title, date, content, highlights }) => {

  const normalizedContent: ContentBlock[] = content.map(block =>
    typeof block === "string"
      ? { type: "paragraph", text: block }
      : block
  );

  return (
    <article className="max-w-5xl mx-auto p-6 sm:p-8 md:p-10 bg-white dark:bg-[#17181c] shadow-lg rounded-3xl my-10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
      
      {/* Заголовок */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Manrope-ExtraBold'] text-[#be7d00] mb-6 text-center md:text-left">
        {title}
      </h2>

      {/* Дата */}
      {date && <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center md:text-left">{date}</p>}

      {/* Контент Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 text-gray-800 dark:text-gray-200 leading-relaxed text-base sm:text-lg font-['Manrope-Regular']">
{normalizedContent.map((block, index) => {
if (block.type === "paragraph") {
  return (
    <p key={index} className="md:col-span-12 flex items-center gap-2">
      <span className="text-[#be7d00] text-lg">✔</span>
      <span>{block.text}</span>
    </p>
  );
}

if (block.type === "list") {
  return (
    <ul key={index} className="md:col-span-12 mt-4 space-y-2">
      {(block.text as string[]).map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="text-[#be7d00] text-lg">✔</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
          return null;
        })}
      </div>

      {/* Акцентні моменти */}
      {highlights && highlights.length > 0 && (
        <div className="mt-8 p-6 bg-[#fffaed] dark:bg-[#1f1f23] rounded-xl border-l-4 border-[#be7d00] md:col-span-12">
          <h4 className="font-['Manrope-Bold'] text-[#be7d00] text-lg mb-3">Важливі моменти:</h4>
          <ul className="custom-list pl-5 space-y-3 text-gray-300 uppercase font-[Manrope-Medium] tracking-wider">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="text-gray-900 dark:text-gray-200 font-['Manrope-Medium'] text-base sm:text-lg hover:text-[#be7d00] transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
