"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { TypologyExteriorCard, TypologyInteriorCard } from "./TypologyCard";
import { TYPOLOGIES_DATA } from "@/lib/constants";

interface TypologiesSectionProps {
  onOpenConfigurationsModal?: () => void;
}

const TOTAL_CARDS = TYPOLOGIES_DATA.length; // 5
const INTERVAL_MS = 1500; // Automatic scroll cycle interval
const ROW_STAGGER_GAP_MS = 500; // First row scrolls first, second row scrolls after 500ms

export default function TypologiesSection({
  onOpenConfigurationsModal,
}: TypologiesSectionProps) {
  // Row 1 uses 0 to 4 for 3D coverflow positioning
  const [row1Index, setRow1Index] = useState(0);

  // Row 2 tracks current and previous indices (0 to 4) for seamless infinite wrap
  const [row2Indices, setRow2Indices] = useState({ current: 0, prev: 0 });

  const [isPlaying, setIsPlaying] = useState(true);
  const staggerTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active original card
  const activeCard = TYPOLOGIES_DATA[row1Index];

  // Pause automatic marquee when tab is hidden, resume when visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Staggered forward slide: Row 1 scrolls first, then Row 2 after ROW_STAGGER_GAP_MS
  const handleNext = useCallback(() => {
    // 1. First row scrolls immediately
    setRow1Index((prev) => (prev + 1) % TOTAL_CARDS);

    // 2. Second row scrolls after the specific duration gap
    if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
    staggerTimerRef.current = setTimeout(() => {
      setRow2Indices((prev) => ({
        prev: prev.current,
        current: (prev.current + 1) % TOTAL_CARDS,
      }));
    }, ROW_STAGGER_GAP_MS);
  }, []);

  // Staggered backward slide: Row 1 scrolls first, then Row 2 after ROW_STAGGER_GAP_MS
  const handlePrev = useCallback(() => {
    // 1. First row scrolls immediately
    setRow1Index((prev) => (prev - 1 + TOTAL_CARDS) % TOTAL_CARDS);

    // 2. Second row scrolls after the specific duration gap
    if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
    staggerTimerRef.current = setTimeout(() => {
      setRow2Indices((prev) => ({
        prev: prev.current,
        current: (prev.current - 1 + TOTAL_CARDS) % TOTAL_CARDS,
      }));
    }, ROW_STAGGER_GAP_MS);
  }, []);

  // Automatic staggered scrolling every 1500ms
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTimer = setInterval(() => {
      handleNext();
    }, INTERVAL_MS);

    return () => {
      clearInterval(intervalTimer);
      if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
    };
  }, [isPlaying, handleNext]);

  // 3D Depth coverflow styles for ROW 1 ONLY:
  // 4 cards orbital loop: Center on top (scale 1), sides behind (scale 0.88), 4th card in back (hidden)
  const getRow1SlideStyles = (index: number) => {
    let diff = (index - row1Index) % TOTAL_CARDS;
    if (diff < -1) diff += TOTAL_CARDS;
    if (diff > 2) diff -= TOTAL_CARDS;

    if (diff === 0) {
      // Center: Front & On Top
      return {
        transform: "translate(-50%, -50%) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
        boxShadow: "0 25px 50px -12px rgba(17, 22, 32, 0.22)",
        pointerEvents: "auto" as const,
        cursor: "default",
        transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, filter 500ms ease",
      };
    } else if (diff === 1) {
      // Right Side: Behind Center
      return {
        transform: "translate(calc(-50% + 70%), -50%) scale(0.88)",
        zIndex: 20,
        opacity: 0.72,
        filter: "brightness(0.92)",
        boxShadow: "0 12px 30px -8px rgba(17, 22, 32, 0.12)",
        pointerEvents: "auto" as const,
        cursor: "pointer",
        transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, filter 500ms ease",
      };
    } else if (diff === -1) {
      // Left Side: Behind Center
      return {
        transform: "translate(calc(-50% - 70%), -50%) scale(0.88)",
        zIndex: 20,
        opacity: 0.72,
        filter: "brightness(0.92)",
        boxShadow: "0 12px 30px -8px rgba(17, 22, 32, 0.12)",
        pointerEvents: "auto" as const,
        cursor: "pointer",
        transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, filter 500ms ease",
      };
    } else {
      // Back (diff === 2 or -2): In the back behind center, hidden
      return {
        transform: "translate(-50%, -50%) scale(0.76)",
        zIndex: 10,
        opacity: 0,
        pointerEvents: "none" as const,
        cursor: "default",
        transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, filter 500ms ease",
      };
    }
  };

  // Horizontal side-by-side sliding styles for ROW 2:
  // Center card highlighted, sides visible 24px apart, 4th card behind center hidden
  const getRow2SlideStyles = (index: number) => {
    let diff = (index - row2Indices.current) % TOTAL_CARDS;
    if (diff < -1) diff += TOTAL_CARDS;
    if (diff > 2) diff -= TOTAL_CARDS;

    const transitionStyle =
      "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, box-shadow 500ms ease";

    if (diff === 0) {
      // Center Active Bedroom Card
      return {
        transform: "translate(-50%, -50%) scale(1)",
        zIndex: 20,
        opacity: 1,
        pointerEvents: "auto" as const,
        cursor: "default",
        transition: transitionStyle,
      };
    } else if (diff === 1) {
      // Right Side Bedroom Card
      return {
        transform: "translate(calc(-50% + 100% + 24px), -50%) scale(0.97)",
        zIndex: 15,
        opacity: 0.75,
        pointerEvents: "auto" as const,
        cursor: "pointer",
        transition: transitionStyle,
      };
    } else if (diff === -1) {
      // Left Side Bedroom Card
      return {
        transform: "translate(calc(-50% - 100% - 24px), -50%) scale(0.97)",
        zIndex: 15,
        opacity: 0.75,
        pointerEvents: "auto" as const,
        cursor: "pointer",
        transition: transitionStyle,
      };
    } else {
      // 4th Bedroom Card (In the back behind center, hidden)
      return {
        transform: "translate(-50%, -50%) scale(0.92)",
        zIndex: 5,
        opacity: 0,
        pointerEvents: "none" as const,
        cursor: "default",
        transition: transitionStyle,
      };
    }
  };

  // Touch Swipe Support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Dot Navigation
  const handleDotClick = (targetIndex: number) => {
    setRow1Index(targetIndex);

    if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
    staggerTimerRef.current = setTimeout(() => {
      setRow2Indices((prev) => ({
        prev: prev.current,
        current: targetIndex,
      }));
    }, ROW_STAGGER_GAP_MS);
  };

  return (
    <section
      id="typologies"
      className="w-full bg-estate-bg pt-14 md:pt-20 pb-20 md:pb-28 overflow-hidden border-t border-[#E6E3DC]/60"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Top Header Row with Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          {/* Title & Eyebrow */}
          <div>
            <h2 className="text-estate-primary font-serif font-light text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-tight tracking-tight select-none">
              Featured{" "}
              <span className="italic font-normal">Typologies</span>
            </h2>
          </div>

          {/* Controls: Prev/Next Arrows */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous typology card"
              className="w-10 h-10 rounded-full border border-[#E6E3DC] text-estate-primary hover:border-estate-primary hover:bg-white active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-sm"
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
                  strokeWidth={1.6}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next typology card"
              className="w-10 h-10 rounded-full border border-[#E6E3DC] text-estate-primary hover:border-estate-primary hover:bg-white active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-sm"
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
                  strokeWidth={1.6}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 2 ROWS: ROW 1 SCROLLS FIRST, THEN ROW 2 SCROLLS AFTER 500MS STAGGER GAP */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="space-y-10 sm:space-y-12 select-none"
        >
          {/* ROW 1: 3D DEPTH MARQUEE (CENTER ON TOP, OTHERS AT 2 SIDES IN BACK) */}
          <div>
            <div className="flex items-center mb-3.5 px-1">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A99362]" />
                <span className="text-[10.5px] uppercase font-sans tracking-[0.24em] font-semibold text-[#A99362]">
                  VILLA RESIDENCES & ARCHITECTURAL EXTERIORS
                </span>
              </div>
            </div>

            {/* 3D Depth Stage for Row 1 */}
            <div className="relative w-full h-[420px] sm:h-[450px] md:h-[470px] flex items-center justify-center overflow-hidden py-4 select-none">
              {TYPOLOGIES_DATA.map((card, i) => {
                let diff = i - row1Index;
                if (diff < -Math.floor(TOTAL_CARDS / 2)) diff += TOTAL_CARDS;
                if (diff > Math.floor(TOTAL_CARDS / 2)) diff -= TOTAL_CARDS;
                const style = getRow1SlideStyles(i);

                return (
                  <div
                    key={`row1-${card.id}`}
                    onClick={() => {
                      if (diff !== 0) {
                        setRow1Index((prev) => (prev + diff + TOTAL_CARDS) % TOTAL_CARDS);
                        if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
                        staggerTimerRef.current = setTimeout(() => {
                          setRow2Indices((prev) => ({
                            prev: prev.current,
                            current: (prev.current + diff + TOTAL_CARDS) % TOTAL_CARDS,
                          }));
                        }, ROW_STAGGER_GAP_MS);
                      }
                    }}
                    style={style}
                    className="absolute left-1/2 top-1/2 w-[300px] sm:w-[350px] md:w-[380px] lg:w-[410px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
                  >
                    <TypologyExteriorCard card={card} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ROW 2: MASTER SUITES & BEDROOM INTERIORS (SLIDES AFTER ROW 1 STAGGER) */}
          <div>
            <div className="flex items-center justify-between mb-3.5 px-1">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A99362]" />
                <span className="text-[10.5px] uppercase font-sans tracking-[0.24em] font-semibold text-[#A99362]">
                  MASTER SUITES & BEDROOM INTERIORS
                </span>
              </div>
            </div>

            {/* Stable Slide Stage for Row 2 - Always visible, zero drift */}
            <div className="relative w-full h-[420px] sm:h-[450px] md:h-[470px] flex items-center justify-center overflow-hidden py-4 select-none">
              {TYPOLOGIES_DATA.map((card, i) => {
                let diff = i - row2Indices.current;
                if (diff < -Math.floor(TOTAL_CARDS / 2)) diff += TOTAL_CARDS;
                if (diff > Math.floor(TOTAL_CARDS / 2)) diff -= TOTAL_CARDS;
                const style = getRow2SlideStyles(i);

                return (
                  <div
                    key={`row2-${card.id}`}
                    onClick={() => {
                      if (diff !== 0) {
                        setRow1Index((prev) => (prev + diff + TOTAL_CARDS) % TOTAL_CARDS);
                        if (staggerTimerRef.current) clearTimeout(staggerTimerRef.current);
                        staggerTimerRef.current = setTimeout(() => {
                          setRow2Indices((prev) => ({
                            prev: prev.current,
                            current: (prev.current + diff + TOTAL_CARDS) % TOTAL_CARDS,
                          }));
                        }, ROW_STAGGER_GAP_MS);
                      }
                    }}
                    style={style}
                    className="absolute left-1/2 top-1/2 w-[300px] sm:w-[350px] md:w-[380px] lg:w-[410px] will-change-transform"
                  >
                    <div
                      className={`w-full h-full rounded-2xl transition-all duration-500 ${diff === 0
                        ? "ring-2 ring-[#A99362]/70 shadow-xl"
                        : "hover:opacity-100"
                        }`}
                    >
                      <TypologyInteriorCard card={card} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots & Live Status */}
        <div className="flex flex-col items-center justify-center space-y-3 mt-10">
          <div className="flex items-center space-x-2.5">
            {TYPOLOGIES_DATA.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}: ${card.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === row1Index
                  ? "w-8 bg-[#A99362]"
                  : "w-2 bg-[#E6E3DC] hover:bg-[#C5C0B5]"
                  }`}
              />
            ))}
          </div>
          <div className="text-[11px] font-sans tracking-[0.2em] uppercase text-estate-secondary/80 font-medium">
            <span className="text-estate-primary font-semibold">
              0{row1Index + 1}
            </span>{" "}
            / 0{TOTAL_CARDS} · {activeCard.title}
          </div>
        </div>
      </div>
    </section>
  );
}
