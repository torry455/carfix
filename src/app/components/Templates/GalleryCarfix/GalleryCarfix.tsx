"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { galleryCategories, BeforeAfterItem, ProcessItem } from "./GalleryOptions";
import { ScrollToTopButton } from "../../Molecules/ScrollToTopButton/ScrollToTopButton";

type LightboxContent =
  | { type: "before-after"; before: string; after: string; title: string }
  | { type: "photo"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const GalleryCarfix: React.FC = () => {
  const [showAfterMap, setShowAfterMap] = useState<{ [key: string]: boolean }>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const flatGalleryItems: LightboxContent[] = galleryCategories.flatMap((category) =>
    category.items.map((item) => {
      if (category.type === "before-after" && "before" in item) {
        const beforeAfter = item as BeforeAfterItem;
        return { type: "before-after", before: beforeAfter.before, after: beforeAfter.after, title: beforeAfter.title } as LightboxContent;
      } else {
        const processItem = item as ProcessItem;
        return processItem.video
          ? { type: "video", src: processItem.video, alt: processItem.description } as LightboxContent
          : { type: "photo", src: processItem.photo!, alt: processItem.description } as LightboxContent;
      }
    })
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const toggleAfter = (key: string) => {
    setShowAfterMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev! + 1) % flatGalleryItems.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev! - 1 + flatGalleryItems.length) % flatGalleryItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, flatGalleryItems.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {galleryCategories.map((category, catIdx) => (
        <div key={catIdx} className="mb-12">
          <h2 className="text-2xl font-bold text-[#BE7D00] mb-6">{category.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item, idx) => {
              const key = `${catIdx}-${idx}`;
              const globalIndex = flatGalleryItems.findIndex(
                (el) =>
                  (el.type === "before-after" &&
                    "before" in item &&
                    el.before === (item as BeforeAfterItem).before) ||
                  (el.type === "photo" && (item as ProcessItem).photo === el.src) ||
                  (el.type === "video" && (item as ProcessItem).video === el.src)
              );

              if (category.type === "before-after" && "before" in item) {
                const beforeAfter = item as BeforeAfterItem;
                const showAfter = showAfterMap[key] || false;

                return (
                  <div
                    key={key}
                    className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2C2D31] group cursor-pointer"
                    onClick={() => openLightbox(globalIndex)}
                  >
                    {isMobile ? (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleAfter(key);
                          }}
                          className="w-full h-80 block relative"
                        >
                          <Image
                            src={showAfter ? beforeAfter.after : beforeAfter.before}
                            alt={`${showAfter ? "Після" : "До"} — ${beforeAfter.title}`}
                            width={600}
                            height={400}
                            className="w-full h-80 object-cover rounded-2xl"
                          />
                        </button>
                        <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 font-bold text-sm">
                          {beforeAfter.title} ({showAfter ? "Після" : "До"})
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          src={beforeAfter.before}
                          alt={`До — ${beforeAfter.title}`}
                          width={600}
                          height={400}
                          className="w-full h-80 object-cover rounded-2xl"
                        />
                        <Image
                          src={beforeAfter.after}
                          alt={`Після — ${beforeAfter.title}`}
                          width={600}
                          height={400}
                          className="absolute top-0 left-0 w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:translate-x-full"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[#BE7D00] text-lg font-bold uppercase tracking-wide text-center px-2">
                          {beforeAfter.title}
                        </div>
                      </>
                    )}
                  </div>
                );
              } else if (category.type === "process") {
                const processItem = item as ProcessItem;
                return (
                  <div
                    key={key}
                    className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2C2D31] group cursor-pointer"
                    onClick={() => openLightbox(globalIndex)}
                  >
                    {processItem.video ? (
                      <video
                        muted
                        playsInline
                        className="w-full h-80 object-contain rounded-2xl bg-black"
                      >
                        <source src={processItem.video} type="video/mp4" />
                        <source src={processItem.video} type="video/quicktime" />
                        Ваш браузер не підтримує відео.
                      </video>
                    ) : (
                      <Image
                        src={processItem.photo!}
                        alt={processItem.description}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                      />
                    )}
                    <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 font-bold text-sm">
                      {processItem.description}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 -right-10 text-white text-3xl font-bold z-10"
              onClick={closeLightbox}
            >
              ✕
            </button>

            {/* Before/After */}
            {flatGalleryItems[lightboxIndex]?.type === "before-after" && (() => {
              const item = flatGalleryItems[lightboxIndex];
              if (item.type === "before-after") {
                return (
                  <div className="flex flex-col md:flex-row gap-4">
                    {["before", "after"].map((key) => (
                      <div key={key} className="flex-1 flex flex-col items-center">
                        <div className="w-full h-[70vh] rounded-2xl overflow-hidden ">
                          <Image
                            src={key === "before" ? item.before : item.after}
                            alt={`${key === "before" ? "До" : "Після"} — ${item.title}`}
                            width={800}
                            height={600}
                            className="w-full object-contain rounded-2xl"
                          />
                        </div>
                        <p className="text-center text-white mt-2">{key === "before" ? "До" : "Після"}</p>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })()}

            {/* Photo */}
            {flatGalleryItems[lightboxIndex]?.type === "photo" && (
              <div className="flex flex-col items-center ">
                <div className="h-[75vh] rounded-2xl overflow-hidden rounded-2xl">
                  <Image
                    src={flatGalleryItems[lightboxIndex].src}
                    alt={flatGalleryItems[lightboxIndex].alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <p className="text-center text-white mt-4">{flatGalleryItems[lightboxIndex].alt}</p>
              </div>
            )}

            {/* Video */}
            {flatGalleryItems[lightboxIndex]?.type === "video" && (
              <div className="flex flex-col items-center">
                <div className="w-full h-[75vh] rounded-2xl overflow-hidden">
                  <video
                    key={flatGalleryItems[lightboxIndex].src}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={flatGalleryItems[lightboxIndex].src} type="video/mp4" />
                    <source src={flatGalleryItems[lightboxIndex].src} type="video/quicktime" />
                    Ваш браузер не підтримує відео.
                  </video>
                </div>
                <p className="text-center text-white mt-4">{flatGalleryItems[lightboxIndex].alt}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
};

export default GalleryCarfix;
