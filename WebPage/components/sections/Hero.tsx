"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroFilter from "./HeroFilter";
import { SITE_CONFIG } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";
import gsap from "gsap";

interface HeroProps {
  onOpenBookVisit?: () => void;
}

export default function Hero({ onOpenBookVisit }: HeroProps) {
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

          {/* Hero Filter Bar */}
          <div className="mb-6 md:mb-8">
            <HeroFilter />
          </div>

          {/* Hero CTA */}
          <div>
            <button
              type="button"
              onClick={() => scrollToElement("estate-introduction")}
              className="inline-flex items-center justify-center border border-white/70 hover:border-white text-white bg-transparent hover:bg-white/10 rounded-full px-7 py-3 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 active:scale-95 group"
            >
              <span>{SITE_CONFIG.heroCta}</span>
              <svg
                className="w-3.5 h-3.5 ml-2.5 transform group-hover:translate-y-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
