"use client";

import React from "react";
import { AMENITIES_DATA } from "@/lib/constants";

export default function AmenitiesSection() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "clubhouse":
        return (
          <svg
            className="w-5 h-5 text-[#A99362]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z"
            />
          </svg>
        );
      case "wellness":
        return (
          <svg
            className="w-5 h-5 text-[#A99362]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        );
      case "sports":
        return (
          <svg
            className="w-5 h-5 text-[#A99362]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "security":
        return (
          <svg
            className="w-5 h-5 text-[#A99362]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "elevator":
        return (
          <svg
            className="w-5 h-5 text-[#A99362]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5 text-[#A99362]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
    }
  };

  return (
    <section
      id="amenities"
      className="w-full bg-estate-bg pt-20 sm:pt-28 md:pt-36 pb-24 md:pb-36 border-t border-[#E6E3DC]/60"
    >
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, Description & Outlined Pill Button */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start">
            <div>
              <p className="text-[#A99362] text-[11px] md:text-[12px] uppercase font-sans tracking-[0.24em] font-medium mb-3 select-none">
                {AMENITIES_DATA.eyebrow}
              </p>
              <h2 className="text-estate-primary font-serif font-light text-[40px] sm:text-[48px] md:text-[56px] leading-[1.06] tracking-tight select-none">
                A Resort,
                <br />
                <span className="italic font-normal">At Home</span>
              </h2>
              <p className="mt-6 text-estate-secondary font-sans font-light text-[16px] sm:text-[17px] leading-relaxed max-w-[420px]">
                {AMENITIES_DATA.description}
              </p>
            </div>
          </div>

          {/* Right Column: Vertically Stacked Amenity Items */}
          <div className="lg:col-span-7 flex flex-col">
            {AMENITIES_DATA.items.map((item) => (
              <div
                key={item.id}
                className="border-b border-[#E6E3DC] pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    {renderIcon(item.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] sm:text-[24px] md:text-[25px] font-light text-estate-primary leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] text-estate-secondary font-sans font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
