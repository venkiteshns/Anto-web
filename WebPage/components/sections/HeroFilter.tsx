"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CONFIGURATION_OPTIONS,
  PHASE_OPTIONS,
  PRICE_OPTIONS,
} from "@/lib/constants";

interface HeroFilterProps {
  onFilterChange?: (filters: {
    configuration: string;
    phase: string;
    price: string;
  }) => void;
}

export default function HeroFilter({ onFilterChange }: HeroFilterProps) {
  const [config, setConfig] = useState(CONFIGURATION_OPTIONS[0]);
  const [phase, setPhase] = useState(PHASE_OPTIONS[0]);
  const [price, setPrice] = useState(PRICE_OPTIONS[0]);

  const [activeDropdown, setActiveDropdown] = useState<
    "config" | "phase" | "price" | null
  >(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (type: "config" | "phase" | "price", value: string) => {
    if (type === "config") setConfig(value);
    if (type === "phase") setPhase(value);
    if (type === "price") setPrice(value);
    setActiveDropdown(null);

    if (onFilterChange) {
      onFilterChange({
        configuration: type === "config" ? value : config,
        phase: type === "phase" ? value : phase,
        price: type === "price" ? value : price,
      });
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block w-full max-w-fit">
      {/* Translucent Dark Charcoal Filter Bar */}
      <div className="glass-filter rounded-full px-5 sm:px-7 py-3 border border-white/20 shadow-xl flex flex-wrap md:flex-nowrap items-center gap-y-2 text-white/90 text-[13px] md:text-[14px]">
        {/* Item 1: Configuration */}
        <div className="flex items-center">
          <span className="font-sans text-white/80 font-normal mr-2 whitespace-nowrap">
            I am looking for a
          </span>
          <button
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "config" ? null : "config")
            }
            className="flex items-center space-x-1.5 focus:outline-none group text-left"
            aria-expanded={activeDropdown === "config"}
          >
            <span className="font-serif italic text-white text-[15px] md:text-[16px] font-normal group-hover:text-amber-200 transition-colors">
              {config}
            </span>
            <svg
              className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
                activeDropdown === "config" ? "rotate-180 text-white" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Separator 1 */}
        <div className="hidden sm:block h-3.5 w-px bg-white/25 mx-3" />

        {/* Item 2: Phase */}
        <div className="flex items-center">
          <span className="font-sans text-white/80 font-normal mr-2 whitespace-nowrap">
            in
          </span>
          <button
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "phase" ? null : "phase")
            }
            className="flex items-center space-x-1.5 focus:outline-none group text-left"
            aria-expanded={activeDropdown === "phase"}
          >
            <span className="font-serif italic text-white text-[15px] md:text-[16px] font-normal group-hover:text-amber-200 transition-colors">
              {phase}
            </span>
            <svg
              className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
                activeDropdown === "phase" ? "rotate-180 text-white" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Separator 2 */}
        <div className="hidden sm:block h-3.5 w-px bg-white/25 mx-3" />

        {/* Item 3: Price */}
        <div className="flex items-center">
          <span className="font-sans text-white/80 font-normal mr-2 whitespace-nowrap">
            at the price of
          </span>
          <button
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "price" ? null : "price")
            }
            className="flex items-center space-x-1.5 focus:outline-none group text-left"
            aria-expanded={activeDropdown === "price"}
          >
            <span className="font-serif italic text-white text-[15px] md:text-[16px] font-normal group-hover:text-amber-200 transition-colors">
              {price}
            </span>
            <svg
              className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
                activeDropdown === "price" ? "rotate-180 text-white" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu: Configuration */}
      {activeDropdown === "config" && (
        <div className="absolute left-4 top-full mt-2 w-64 glass-dropdown border border-white/15 rounded-xl p-2 z-50 animate-fadeIn">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#A99362] px-3 py-1 font-sans font-medium">
            Select Configuration
          </div>
          {CONFIGURATION_OPTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSelect("config", item)}
              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-sans transition-colors ${
                config === item
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="font-serif italic mr-1.5">•</span> {item}
            </button>
          ))}
        </div>
      )}

      {/* Dropdown Menu: Phase */}
      {activeDropdown === "phase" && (
        <div className="absolute left-1/3 top-full mt-2 w-64 glass-dropdown border border-white/15 rounded-xl p-2 z-50 animate-fadeIn">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#A99362] px-3 py-1 font-sans font-medium">
            Select Phase
          </div>
          {PHASE_OPTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSelect("phase", item)}
              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-sans transition-colors ${
                phase === item
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="font-serif italic mr-1.5">•</span> {item}
            </button>
          ))}
        </div>
      )}

      {/* Dropdown Menu: Price */}
      {activeDropdown === "price" && (
        <div className="absolute right-4 top-full mt-2 w-60 glass-dropdown border border-white/15 rounded-xl p-2 z-50 animate-fadeIn">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#A99362] px-3 py-1 font-sans font-medium">
            Select Price Range
          </div>
          {PRICE_OPTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSelect("price", item)}
              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-sans transition-colors ${
                price === item
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="font-serif italic mr-1.5">•</span> {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
