"use client";

import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

interface FloorPlanGridProps {
  onOpenPlanModal?: () => void;
}

const GRID_PHOTOS = {
  top: {
    src: "/images/grid/img-3.webp",
    alt: "Godrej Florenne 5 Bed Luxe Ground & First Floor Plan",
  },
  bottomLeft: {
    src: "/images/grid/img-1.webp",
    alt: "Godrej Florenne Floor Plan Layout",
  },
  bottomRight: {
    src: "/images/grid/img-2.webp",
    alt: "Godrej Florenne 4 Bed Luxe Second & Third Floor Plan",
  },
};

export default function FloorPlanGrid({ onOpenPlanModal }: FloorPlanGridProps) {
  return (
    <section className="w-full bg-estate-bg pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 border-t border-[#E6E3DC]/60">
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

        {/* Horizontal Rectangle 3-Photo Grid Container (Subtle Blur with Centered 'View Floor Plan' Button) */}
        <div
          onClick={onOpenPlanModal}
          className="group relative w-full max-w-[880px] lg:max-w-[960px] xl:max-w-[1020px] mx-auto bg-[#E6E3DC] rounded-xl sm:rounded-2xl border border-[#E6E3DC] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer"
        >
          {/* Background Grid Images with Reduced Soft Blur */}
          <div className="filter blur-[1.5px] scale-[1.01] transition-all duration-500 group-hover:blur-[2px] select-none pointer-events-none">
            {/* Row 1: Top Image (Full Width, Sleek Reduced Height) */}
            <div className="relative w-full h-[160px] sm:h-[195px] md:h-[225px] bg-white overflow-hidden">
              <Image
                src={GRID_PHOTOS.top.src}
                alt={GRID_PHOTOS.top.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1020px"
                className="object-cover object-[center_35%]"
                priority
              />
            </div>

            {/* Row 2: Bottom 2 Images (Side by Side with tight 1px gap, Sleek Reduced Height) */}
            <div className="grid grid-cols-2 gap-[1px] mt-[1px] bg-[#E6E3DC] h-[120px] sm:h-[150px] md:h-[175px]">
              <div className="relative w-full h-full bg-white overflow-hidden">
                <Image
                  src={GRID_PHOTOS.bottomLeft.src}
                  alt={GRID_PHOTOS.bottomLeft.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 510px"
                  className="object-cover object-[center_28%]"
                />
              </div>

              <div className="relative w-full h-full bg-white overflow-hidden">
                <Image
                  src={GRID_PHOTOS.bottomRight.src}
                  alt={GRID_PHOTOS.bottomRight.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 510px"
                  className="object-cover object-[center_28%]"
                />
              </div>
            </div>
          </div>

          {/* Centered Overlay with 'View Floor Plan' Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/15 group-hover:bg-black/20 p-4 transition-colors duration-300">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenPlanModal) onOpenPlanModal();
              }}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#171B21] hover:bg-[#A99362] text-white rounded-full text-xs font-sans uppercase tracking-[0.2em] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(169,147,98,0.4)] transition-all duration-300 transform group-hover:scale-105 active:scale-95"
            >
              <Eye className="w-4 h-4 text-[#A99362] group-hover:text-white transition-colors" />
              <span>View Floor Plan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
