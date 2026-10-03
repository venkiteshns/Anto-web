"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ZoomIn } from "lucide-react";

interface FloorPlanItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  badge: string;
}

const FLOOR_PLANS: FloorPlanItem[] = [
  {
    id: "plan-1",
    src: "/images/grid/img-1.webp",
    title: "5 Bed Luxe · Ground & First Floor",
    subtitle: "Double-height living pavilion, dual covered portico & landscaped private courtyard",
    badge: "Master Layout",
  },
  {
    id: "plan-2",
    src: "/images/grid/img-2.webp",
    title: "4 Bed Luxe · Second & Third Floor",
    subtitle: "Master suite with dressing gallery, sky lounge & open-air sundeck",
    badge: "Upper Residence",
  },
  {
    id: "plan-3",
    src: "/images/grid/img-3.webp",
    title: "5 Bed Luxe · Upper Level Layout",
    subtitle: "Panoramic en-suite bedrooms, private family lounge & terrace access",
    badge: "Executive Floor",
  },
];

export default function FloorPlanGrid() {
  const [selectedPlan, setSelectedPlan] = useState<FloorPlanItem | null>(null);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedPlan(null);
    }
  }, []);

  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan, handleKeyDown]);

  const topPlan = FLOOR_PLANS[0];
  const bottomPlans = FLOOR_PLANS.slice(1);

  return (
    <section className="w-full bg-estate-bg pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 border-t border-[#E6E3DC]/60">
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-14">
          <p className="text-[#A99362] text-[11px] md:text-[12px] uppercase font-sans tracking-[0.24em] font-medium mb-3 select-none">
            ARCHITECTURAL SCHEMATICS
          </p>
          <h2 className="text-estate-primary font-serif font-light text-[34px] sm:text-[42px] md:text-[50px] leading-tight tracking-tight select-none">
            Villa Layouts & Floor Plans
          </h2>
          <p className="mt-3.5 text-estate-secondary font-sans font-light text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
            Crafted with French Renaissance symmetry, spacious private terraces, and expansive multi-level living.
          </p>
        </div>

        {/* 2-Row Grid: 1 on Top, 2 on Bottom */}
        <div className="space-y-6 md:space-y-8">
          {/* Row 1: Top Single Large Card */}
          <div
            onClick={() => setSelectedPlan(topPlan)}
            className="group relative bg-white border border-[#E6E3DC] hover:border-[#A99362]/60 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(169,147,98,0.12)] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Top Bar with Badge & Expand Hint */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center space-x-3">
                <span className="inline-block px-3 py-1 bg-[#FAF8F5] border border-[#E6E3DC] rounded-full text-[10.5px] uppercase tracking-[0.2em] font-sans font-medium text-[#A99362]">
                  {topPlan.badge}
                </span>
                <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[24px] font-light text-estate-primary">
                  {topPlan.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#73716C] group-hover:text-[#A99362] transition-colors font-sans">
                <span className="hidden sm:inline text-[11px] tracking-wider uppercase font-medium">Click to expand</span>
                <div className="p-1.5 rounded-full bg-[#FAF8F5] group-hover:bg-[#A99362] group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.5] max-h-[580px] bg-[#FAF8F5] rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center border border-[#E6E3DC]/60 group-hover:border-[#A99362]/30 transition-colors">
              <Image
                src={topPlan.src}
                alt={topPlan.title}
                fill
                sizes="(max-width: 1366px) 100vw, 1366px"
                className="object-contain p-2 sm:p-4 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors pointer-events-none" />
            </div>

            {/* Bottom Caption */}
            <p className="mt-3.5 text-xs md:text-sm text-estate-secondary font-sans font-light">
              {topPlan.subtitle}
            </p>
          </div>

          {/* Row 2: Bottom 2-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {bottomPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className="group relative bg-white border border-[#E6E3DC] hover:border-[#A99362]/60 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(169,147,98,0.12)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-[#FAF8F5] border border-[#E6E3DC] rounded-full text-[10.5px] uppercase tracking-[0.2em] font-sans font-medium text-[#A99362]">
                      {plan.badge}
                    </span>
                    <div className="p-1.5 rounded-full bg-[#FAF8F5] group-hover:bg-[#A99362] group-hover:text-white transition-colors">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] font-light text-estate-primary mb-3">
                    {plan.title}
                  </h3>

                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/11] bg-[#FAF8F5] rounded-xl overflow-hidden flex items-center justify-center border border-[#E6E3DC]/60 group-hover:border-[#A99362]/30 transition-colors">
                    <Image
                      src={plan.src}
                      alt={plan.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2 sm:p-3 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors pointer-events-none" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="mt-3.5 text-xs md:text-sm text-estate-secondary font-sans font-light">
                  {plan.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden border border-[#E6E3DC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E3DC]">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-sans font-medium text-[#A99362]">
                  {selectedPlan.badge}
                </span>
                <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-light text-estate-primary">
                  {selectedPlan.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                aria-label="Close modal"
                className="p-2 sm:p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E6E3DC] text-[#171B21] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Preview */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] bg-[#FAF8F5] rounded-xl overflow-hidden flex items-center justify-center border border-[#E6E3DC]/60">
              <Image
                src={selectedPlan.src}
                alt={selectedPlan.title}
                fill
                sizes="100vw"
                className="object-contain p-2 sm:p-4"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-3.5 flex items-center justify-between">
              <p className="text-xs sm:text-sm text-estate-secondary font-sans font-light">
                {selectedPlan.subtitle}
              </p>
              <span className="hidden sm:inline-block text-[11px] text-[#A99362] font-sans uppercase tracking-wider">
                Press ESC to exit
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
