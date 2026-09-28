"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";
import gsap from "gsap";

interface HeroProps {
  onOpenBookVisit?: () => void;
  onOpenBrochure?: () => void;
}

export default function Hero({ onOpenBookVisit, onOpenBrochure }: HeroProps) {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.from(heroContentRef.current, {
          opacity: 0,
          y: 24,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.2,
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[720px] max-h-[1080px] overflow-hidden flex flex-col justify-end">
      {/* Background Hero Architectural Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero-villa.jpg"
          alt="Godrej Florenne French Renaissance luxury estate villa in Whitefield"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01]"
        />
        {/* Subtle Dark Transparent Overlay - allows architecture to shine through while making white typography readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17, 22, 32, 0.42) 0%, rgba(17, 22, 32, 0.18) 30%, rgba(17, 22, 32, 0.38) 65%, rgba(17, 22, 32, 0.68) 100%)",
          }}
        />
      </div>

      {/* Main Hero Content - Positioned toward lower-left */}
      <div
        ref={heroContentRef}
        className="relative z-10 w-full px-6 md:px-12 lg:px-[46px] pb-12 md:pb-16 lg:pb-20 max-w-[1400px]"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="text-white/85 text-[11px] md:text-[12px] uppercase font-sans tracking-[0.24em] font-medium mb-3 md:mb-4 select-none">
            {SITE_CONFIG.heroEyebrow}
          </div>

          {/* Dominant Main Heading */}
          <h1
            ref={headingRef}
            className="text-white font-serif font-light text-[52px] sm:text-[68px] md:text-[80px] lg:text-[92px] leading-[0.94] tracking-tight mb-7 md:mb-9 select-none"
          >
            <span className="italic block font-normal text-white">
              {SITE_CONFIG.heroHeading.line1}
            </span>
            <span className="block font-light text-white">
              {SITE_CONFIG.heroHeading.line2}
            </span>
            <span className="block font-light text-white">
              {SITE_CONFIG.heroHeading.line3}
            </span>
          </h1>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenBookVisit}
              className="inline-flex items-center justify-center bg-white text-[#171B21] px-7 py-3 md:px-8 md:py-3.5 rounded-full text-[11px] md:text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-[#F9F8F4] hover:shadow-lg transition-all duration-300 active:scale-95 leading-none"
            >
              Schedule A Visit
            </button>

            <button
              type="button"
              onClick={onOpenBrochure || onOpenBookVisit}
              className="inline-flex items-center justify-center border border-white/75 hover:border-white text-white bg-black/25 hover:bg-white/15 backdrop-blur-md rounded-full px-7 py-3 md:px-8 md:py-3.5 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 active:scale-95 group leading-none shadow-sm"
              aria-label="Download Brochure"
            >
              <span>Download Brochure</span>
              <svg
                className="w-3.5 h-3.5 ml-2.5 transform group-hover:translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V3m0 9l3.5-3.5M12 12l-3.5-3.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
