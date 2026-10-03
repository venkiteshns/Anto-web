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
    <section className="w-full bg-estate-bg pt-8 sm:pt-10 md:pt-14 pb-12 sm:pb-16 border-t border-[#E6E3DC]/60">
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Editorial Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-6 md:mb-9">
          <p className="text-[#A99362] text-[10.5px] md:text-[11px] uppercase font-sans tracking-[0.24em] font-medium mb-2 select-none">
            ARCHITECTURAL SCHEMATICS
          </p>
          <h2 className="text-estate-primary font-serif font-light text-[28px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight select-none">
            Villa Layouts & Floor Plans
          </h2>
          <p className="mt-2 text-estate-secondary font-sans font-light text-[13.5px] sm:text-[14.5px] leading-relaxed">
            Connected G+3 French Renaissance row villas designed with symmetry, private elevators, and open-air sundecks.
          </p>
        </div>

        {/* Compact Unified 3-Photo Grid Container (1 on Top, 2 on Bottom) */}
        <div className="w-full max-w-[760px] lg:max-w-[800px] mx-auto bg-white rounded-2xl md:rounded-3xl border border-[#E6E3DC] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Row 1: Top Image (Full Width) */}
          <div
            onClick={() => setActivePhoto(GRID_PHOTOS.top)}
            className="group relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.2] bg-[#FAF8F5] border-b border-[#E6E3DC] overflow-hidden cursor-pointer"
          >
            <Image
              src={GRID_PHOTOS.top.src}
              alt={GRID_PHOTOS.top.alt}
              fill
              sizes="(max-width: 1366px) 100vw, 1366px"
              className="object-contain p-2 sm:p-4 group-hover:scale-[1.015] transition-transform duration-500 ease-out"
              priority
            />
            {/* Subtle Hover Action Badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171B21]/80 backdrop-blur-sm text-white rounded-full text-[11px] font-sans tracking-wide">
                <ZoomIn className="w-3.5 h-3.5 text-[#A99362]" />
                <span>View Full Plan</span>
              </span>
            </div>
          </div>

          {/* Row 2: Bottom 2 Images (Side by Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E3DC]">
            {/* Bottom Left */}
            <div
              onClick={() => setActivePhoto(GRID_PHOTOS.bottomLeft)}
              className="group relative w-full aspect-[16/11] sm:aspect-[16/10.5] bg-[#FAF8F5] overflow-hidden cursor-pointer"
            >
              <Image
                src={GRID_PHOTOS.bottomLeft.src}
                alt={GRID_PHOTOS.bottomLeft.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 sm:p-4 group-hover:scale-[1.015] transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171B21]/80 backdrop-blur-sm text-white rounded-full text-[11px] font-sans tracking-wide">
                  <ZoomIn className="w-3.5 h-3.5 text-[#A99362]" />
                  <span>View Full Plan</span>
                </span>
              </div>
            </div>

            {/* Bottom Right */}
            <div
              onClick={() => setActivePhoto(GRID_PHOTOS.bottomRight)}
              className="group relative w-full aspect-[16/11] sm:aspect-[16/10.5] bg-[#FAF8F5] overflow-hidden cursor-pointer"
            >
              <Image
                src={GRID_PHOTOS.bottomRight.src}
                alt={GRID_PHOTOS.bottomRight.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 sm:p-4 group-hover:scale-[1.015] transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171B21]/80 backdrop-blur-sm text-white rounded-full text-[11px] font-sans tracking-wide">
                  <ZoomIn className="w-3.5 h-3.5 text-[#A99362]" />
                  <span>View Full Plan</span>
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
            className="relative max-w-6xl w-full bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden border border-[#E6E3DC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E6E3DC]">
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.22em] font-sans font-medium text-[#A99362]">
                  ARCHITECTURAL PLAN
                </span>
                <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[26px] font-light text-estate-primary">
                  {activePhoto.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close modal"
                className="p-2 sm:p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E6E3DC] text-[#171B21] transition-colors"
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
            <div className="pt-3 flex items-center justify-between">
              <p className="text-xs sm:text-sm text-estate-secondary font-sans font-light">
                {activePhoto.alt}
              </p>
              <span className="hidden sm:inline-block text-[11px] text-[#A99362] font-sans uppercase tracking-wider">
                Press ESC or click outside to exit
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
