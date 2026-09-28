"use client";

import React from "react";
import Image from "next/image";
import { TypologyCardData } from "@/lib/constants";

interface TypologyCardProps {
  card: TypologyCardData;
}

export default function TypologyCard({ card }: TypologyCardProps) {
  return (
    <article className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[370px] lg:w-[390px] flex flex-col bg-transparent select-none">
      {/* 1. Large Villa Exterior Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECE8E1]">
        <Image
          src={card.villaImage}
          alt={`${card.title} - Architectural front view`}
          fill
          sizes="(max-width: 768px) 320px, 390px"
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Card Info Section */}
      <div className="pt-4 pb-2">
        {/* Phase Label & Price */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] tracking-[0.22em] uppercase font-sans text-[#A99362] font-medium">
            {card.phase}
          </span>
          {card.price && (
            <span className="font-serif text-[22px] md:text-[24px] text-estate-primary font-normal leading-none tracking-tight">
              {card.price}
            </span>
          )}
        </div>

        {/* Configuration Title */}
        <h3 className="font-serif text-[22px] md:text-[26px] text-estate-primary font-light leading-snug mb-3">
          {card.title}
        </h3>

        {/* Metadata Specs with Subtle Restrained Icons */}
        <div className="flex items-center space-x-4 text-[12px] md:text-[13px] text-estate-secondary font-sans">
          {/* Beds */}
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

          {/* Baths */}
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

          {/* Area */}
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

        {/* Elevator Info */}
        <p className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-estate-secondary/90 font-medium font-sans mt-2">
          {card.elevator}
        </p>
      </div>

      {/* 7. Thin Divider */}
      <div className="w-full border-t border-[#E6E3DC] my-3.5" />

      {/* 8. Bedroom Image with 9. BEDROOM label */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECE8E1]">
        <Image
          src={card.bedroomImage}
          alt={`${card.title} - Bedroom interior`}
          fill
          sizes="(max-width: 768px) 320px, 390px"
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        />
        {/* BEDROOM Label */}
        <div className="absolute top-3 left-3 bg-white text-estate-primary px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] font-medium font-sans rounded-[1px] shadow-sm select-none">
          BEDROOM
        </div>
      </div>

      {/* 10. Bedroom Description */}
      <p className="mt-3.5 text-[13px] md:text-[13.5px] text-estate-secondary font-sans font-light leading-relaxed">
        {card.bedroomDescription}
      </p>
    </article>
  );
}
