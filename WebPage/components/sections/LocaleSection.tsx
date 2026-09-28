"use client";

import React from "react";
import { LOCALE_DATA } from "@/lib/constants";

export default function LocaleSection() {
  return (
    <section
      id="locale"
      className="w-full bg-estate-bg pt-20 sm:pt-28 md:pt-36 pb-24 md:pb-36 border-t border-[#E6E3DC]/60"
    >
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Centered Editorial Intro */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-24">
          <p className="text-[#A99362] text-[11px] md:text-[12px] uppercase font-sans tracking-[0.24em] font-medium mb-3 select-none">
            {LOCALE_DATA.eyebrow}
          </p>
          <h2 className="text-estate-primary font-serif font-light text-[40px] sm:text-[48px] md:text-[58px] leading-tight tracking-tight select-none">
            {LOCALE_DATA.heading}
          </h2>
          <p className="mt-5 text-estate-secondary font-sans font-light text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
            {LOCALE_DATA.description}
          </p>
        </div>

        {/* 3-Column Locale Grid with Subtle Vertical Separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6E3DC] border-t border-b border-[#E6E3DC] py-8 md:py-14">
          {LOCALE_DATA.columns.map((col, idx) => (
            <div
              key={idx}
              className={`flex flex-col py-6 md:py-0 ${
                idx === 0
                  ? "md:pr-8 lg:pr-12"
                  : idx === 1
                  ? "md:px-8 lg:px-12"
                  : "md:pl-8 lg:pl-12"
              }`}
            >
              {/* Distance / Time Label */}
              <span className="text-[10.5px] uppercase font-sans tracking-[0.22em] font-medium text-[#A99362] mb-3 select-none">
                {col.time}
              </span>

              {/* Column Heading */}
              <h3 className="font-serif text-[24px] sm:text-[26px] md:text-[28px] font-light text-estate-primary leading-snug mb-3.5 whitespace-pre-line">
                {col.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-estate-secondary font-sans font-light leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Connectivity Note */}
        <div className="mt-12 md:mt-16 text-center max-w-[860px] mx-auto">
          <p className="text-[13px] sm:text-[14px] text-estate-secondary font-sans font-light leading-relaxed">
            {LOCALE_DATA.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
