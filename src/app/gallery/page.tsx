'use client';

import GalleryCarfix from "../components/Templates/GalleryCarfix/GalleryCarfix";

export default function GalleryPage() {
  return (
    <section className="max-w-[1600px] mx-auto px-5 py-20">
      <h1 className="text-[60px] font-[Manrope-ExtraBold] text-[#BE7D00] text-center uppercase mb-12">
        Галерея
      </h1>
      <GalleryCarfix />
    </section>
  );
}