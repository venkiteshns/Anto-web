"use client";

import React, { useRef, useState, useEffect } from "react";
import TypologyCard from "./TypologyCard";
import { TYPOLOGIES_DATA } from "@/lib/constants";

interface TypologiesSectionProps {
  onOpenConfigurationsModal?: () => void;
}

export default function TypologiesSection({
  onOpenConfigurationsModal,
}: TypologiesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 410; // Approx card width + gap
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="typologies"
      className="w-full bg-estate-bg pt-14 md:pt-24 pb-20 md:pb-32 overflow-hidden border-t border-[#E6E3DC]/60"
    >
      {/* Top Header Row */}
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px] mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Top-Left */}
          <div>
            <span className="text-[11px] uppercase font-sans tracking-[0.24em] font-medium text-[#A99362] block mb-2 select-none">
              218 CONNECTED ROW VILLAS
            </span>
            <h2 className="text-estate-primary font-serif font-light text-[38px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-tight tracking-tight select-none">
              Featured{" "}
              <span className="italic font-normal">Typologies</span>
            </h2>
          </div>

          {/* Top-Right: Link and Carousel Controls */}
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={onOpenConfigurationsModal}
              className="text-[11.5px] uppercase font-sans tracking-[0.18em] font-medium text-estate-primary hover:text-[#A99362] transition-colors flex items-center group cursor-pointer"
            >
              <span>VIEW ALL CONFIGURATIONS</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            {/* Subtle Carousel Nav Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                aria-label="Previous typology"
                className={`w-9 h-9 rounded-full border border-[#E6E3DC] flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "text-estate-primary hover:border-estate-primary active:scale-95"
                    : "text-[#C5C0B5] opacity-50 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                aria-label="Next typology"
                className={`w-9 h-9 rounded-full border border-[#E6E3DC] flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "text-estate-primary hover:border-estate-primary active:scale-95"
                    : "text-[#C5C0B5] opacity-50 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Editorial Carousel */}
      <div className="w-full">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex overflow-x-auto scrollbar-none select-none pl-6 md:pl-12 lg:pl-[max(46px,calc((100vw-1366px)/2+46px))] pr-12 gap-7 md:gap-8 pb-6 transition-all ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollSnapType: isDragging ? "none" : "x proximity",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {TYPOLOGIES_DATA.map((card) => (
            <div
              key={card.id}
              style={{ scrollSnapAlign: "start" }}
              className="flex-shrink-0"
            >
              <TypologyCard card={card} />
            </div>
          ))}
          {/* Spacer so last card has comfortable breathing space */}
          <div className="w-8 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
