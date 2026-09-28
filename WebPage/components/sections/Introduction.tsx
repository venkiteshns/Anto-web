"use client";

import React, { useEffect, useRef } from "react";
import ImagePair from "./ImagePair";
import { SITE_CONFIG } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (textContainerRef.current) {
          gsap.from(textContainerRef.current.children, {
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 28,
            duration: 1,
            stagger: 0.18,
            ease: "power2.out",
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="estate-introduction"
      ref={sectionRef}
      className="w-full bg-estate-bg pt-20 sm:pt-28 md:pt-36 pb-24 md:pb-36 transition-colors"
    >
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Editorial Text Block */}
        <div ref={textContainerRef} className="max-w-[820px]">
          {/* Eyebrow */}
          <p className="text-[#A99362] text-[11px] md:text-[12px] uppercase font-sans tracking-[0.24em] font-medium mb-4 select-none">
            {SITE_CONFIG.introEyebrow}
          </p>

          {/* Heading */}
          <h2 className="text-estate-primary font-serif font-light text-[38px] sm:text-[48px] md:text-[58px] lg:text-[66px] leading-[1.06] tracking-tight">
            A Row-Villa{" "}
            <span className="italic font-normal">
              {SITE_CONFIG.introHeading.italicWord}
            </span>
            , Seen
            <br className="hidden sm:inline" /> from the Sky
          </h2>

          {/* Description Paragraph */}
          <p className="mt-8 text-estate-secondary font-sans font-light text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[1.72] max-w-[760px]">
            {SITE_CONFIG.introDescription}
          </p>
        </div>

        {/* Two-Image Architectural Grid */}
        <ImagePair />
      </div>
    </section>
  );
}
