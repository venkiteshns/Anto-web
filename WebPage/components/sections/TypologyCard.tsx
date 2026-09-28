"use client";

import React from "react";
import Image from "next/image";
import { TypologyCardData } from "@/lib/constants";

export function TypologyExteriorCard({ card }: { card: TypologyCardData }) {
  return (
    <article className="w-full h-full flex flex-col bg-[#FAF8F5] border border-[#E6E3DC] rounded-2xl overflow-hidden select-none shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* 1. Large Villa Exterior Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
        <Image
          src={card.villaImage}
          alt={`${card.title} - Architectural front view`}
          fill
          sizes="(max-width: 768px) 320px, 420px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Card Info Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Price Row */}
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-[22px] md:text-[25px] text-estate-primary font-light leading-snug">
              {card.title}
            </h3>
            {card.price && (
              <span className="font-serif text-[20px] md:text-[22px] text-estate-primary font-normal leading-none tracking-tight shrink-0">
                {card.price}
              </span>
            )}
          </div>

          {/* Metadata Specs with Subtle Icons */}
          <div className="flex items-center space-x-3 text-[12px] md:text-[13px] text-estate-secondary font-sans mt-3">
            <div className="flex items-center space-x-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#A99362]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12h18M3 12v6m18-6v6M3 12V7a2 2 0 012-2h14a2 2 0 012 2v5M7 9h.01M17 9h.01"
                />
              </svg>
              <span>{card.beds}</span>
            </div>
            <span className="text-[#D0CBC0]">|</span>
            <div className="flex items-center space-x-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#A99362]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 14h16a2 2 0 012 2v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a2 2 0 012-2zm0 0V7a4 4 0 014-4h2"
                />
              </svg>
              <span>{card.baths}</span>
            </div>
            <span className="text-[#D0CBC0]">|</span>
            <div className="flex items-center space-x-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#A99362]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <span>{card.area}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TypologyInteriorCard({ card }: { card: TypologyCardData }) {
  return (
    <article className="w-full h-full flex flex-col bg-[#FAF8F5] border border-[#E6E3DC] rounded-2xl overflow-hidden select-none shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* 1. Bedroom Interior Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
        <Image
          src={card.bedroomImage}
          alt={`${card.title} - Master Bedroom interior`}
          fill
          sizes="(max-width: 768px) 320px, 420px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* BEDROOM Label */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-estate-primary px-2.5 py-1 text-[9.5px] uppercase tracking-[0.18em] font-medium font-sans rounded-[3px] shadow-sm select-none">
          BEDROOM SUITE
        </div>
      </div>

      {/* Card Info Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Eyebrow & Bed count */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] tracking-[0.24em] uppercase font-sans text-[#A99362] font-semibold">
              MASTER SUITE
            </span>
            <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-estate-secondary font-medium">
              {card.beds}
            </span>
          </div>

          {/* Configuration Title */}
          <h3 className="font-serif text-[22px] md:text-[24px] text-estate-primary font-light leading-snug mb-2.5">
            {card.title}
          </h3>

          {/* Bedroom Description */}
          <p className="text-[12.5px] md:text-[13px] text-estate-secondary font-sans font-light leading-relaxed line-clamp-3">
            {card.bedroomDescription}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TypologyCard({
  card,
  variant = "exterior",
}: {
  card: TypologyCardData;
  variant?: "exterior" | "interior";
  isCenter?: boolean;
}) {
  if (variant === "interior") {
    return <TypologyInteriorCard card={card} />;
  }
  return <TypologyExteriorCard card={card} />;
}
