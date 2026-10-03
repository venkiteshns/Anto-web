"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GridPhoto {
  src: string;
  alt: string;
  label: string;
}

const GRID_PHOTOS: { top: GridPhoto; bottomLeft: GridPhoto; bottomRight: GridPhoto } = {
  top: {
    src: "/images/grid/img-3.webp",
    alt: "Godrej Florenne 5 Bed Luxe Ground & First Floor Plan",
    label: "5 Bed Luxe · Ground & First Floor",
  },
  bottomLeft: {
    src: "/images/grid/img-1.webp",
    alt: "Godrej Florenne Floor Plan Layout",
    label: "5 Bed Luxe · Master Residence",
  },
  bottomRight: {
    src: "/images/grid/img-2.webp",
    alt: "Godrej Florenne 4 Bed Luxe Second & Third Floor Plan",
    label: "4 Bed Luxe · Second & Third Floor",
  },
};

export default function FloorPlanGrid() {
  const [activePhoto, setActivePhoto] = useState<GridPhoto | null>(null);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActivePhoto(null);
    }
  }, []);

  useEffect(() => {
    if (activePhoto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto, handleKeyDown]);

  return (
    <section className="w-full bg-estate-bg pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 border-t border-[#E6E3DC]/60">
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Editorial Section Header */}
        <div className="text-center max-w-[580px] mx-auto mb-5 md:mb-7">
          <p className="text-[#A99362] text-[10px] md:text-[11px] uppercase font-sans tracking-[0.24em] font-medium mb-1.5 select-none">
            ARCHITECTURAL SCHEMATICS
          </p>
          <h2 className="text-estate-primary font-serif font-light text-[24px] sm:text-[28px] md:text-[32px] leading-tight tracking-tight select-none">
            Villa Layouts & Floor Plans
          </h2>
        </div>

        {/* Compact Seamless 3-Photo Grid Container (1 Top, 2 Bottom) */}
        <div className="w-full max-w-[620px] sm:max-w-[660px] md:max-w-[680px] mx-auto bg-[#E6E3DC] rounded-xl sm:rounded-2xl border border-[#E6E3DC] shadow-[0_6px_24px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Row 1: Top Image (Full Width, Flush against borders) */}
          <div
            onClick={() => setActivePhoto(GRID_PHOTOS.top)}
            className="group relative w-full aspect-[16/9] sm:aspect-[16/8.8] bg-white overflow-hidden cursor-pointer"
          >
            <Image
              src={GRID_PHOTOS.top.src}
              alt={GRID_PHOTOS.top.alt}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              priority
            />
            {/* Subtle Hover Action Badge */}
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#171B21]/80 backdrop-blur-sm text-white rounded-full text-[10.5px] font-sans tracking-wide">
                <ZoomIn className="w-3 h-3 text-[#A99362]" />
                <span>Enlarge</span>
              </span>
            </div>
          </div>

          {/* Row 2: Bottom 2 Images (Side by Side with tight 1px gap) */}
          <div className="grid grid-cols-2 gap-[1px] mt-[1px] bg-[#E6E3DC]">
            {/* Bottom Left */}
            <div
              onClick={() => setActivePhoto(GRID_PHOTOS.bottomLeft)}
              className="group relative w-full aspect-[16/11] bg-white overflow-hidden cursor-pointer"
            >
              <Image
                src={GRID_PHOTOS.bottomLeft.src}
                alt={GRID_PHOTOS.bottomLeft.alt}
                fill
                sizes="(max-width: 768px) 50vw, 340px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#171B21]/80 backdrop-blur-sm text-white rounded-full text-[10px] font-sans tracking-wide">
                  <ZoomIn className="w-2.5 h-2.5 text-[#A99362]" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>

            {/* Bottom Right */}
            <div
              onClick={() => setActivePhoto(GRID_PHOTOS.bottomRight)}
              className="group relative w-full aspect-[16/11] bg-white overflow-hidden cursor-pointer"
            >
              <Image
                src={GRID_PHOTOS.bottomRight.src}
                alt={GRID_PHOTOS.bottomRight.alt}
                fill
                sizes="(max-width: 768px) 50vw, 340px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#171B21]/80 backdrop-blur-sm text-white rounded-full text-[10px] font-sans tracking-wide">
                  <ZoomIn className="w-2.5 h-2.5 text-[#A99362]" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden border border-[#E6E3DC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E6E3DC]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] font-sans font-medium text-[#A99362]">
                  ARCHITECTURAL PLAN
                </span>
                <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[24px] font-light text-estate-primary">
                  {activePhoto.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close modal"
                className="p-1.5 sm:p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E6E3DC] text-[#171B21] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Preview */}
            <div className="relative w-full h-[60vh] sm:h-[68vh] md:h-[72vh] bg-[#FAF8F5] rounded-xl overflow-hidden flex items-center justify-center border border-[#E6E3DC]/60">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className="object-contain p-2 sm:p-4"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-2.5 flex items-center justify-between">
              <p className="text-xs text-estate-secondary font-sans font-light">
                {activePhoto.alt}
              </p>
              <span className="hidden sm:inline-block text-[10.5px] text-[#A99362] font-sans uppercase tracking-wider">
                Press ESC or click outside to exit
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
