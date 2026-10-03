"use client";

import React from "react";
import { scrollToElement } from "@/lib/utils";

interface FooterProps {
  onOpenBookVisit?: () => void;
}

export default function Footer({ onOpenBookVisit }: FooterProps) {
  return (
    <footer id="dispatch" className="w-full bg-[#111620] text-white pt-20 sm:pt-28 md:pt-32 pb-12 md:pb-16 transition-colors">
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side: The Florenne Dispatch & Contact CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-white font-serif font-light text-[36px] sm:text-[42px] md:text-[48px] leading-tight select-none">
                The Florenne
                <br />
                <span className="italic font-normal">Dispatch</span>
              </h2>

              <p className="mt-4 text-white/60 font-sans font-light text-[13.5px] sm:text-[14px] leading-relaxed max-w-[420px]">
                Curated intelligence on Whitefield’s ultra-premium row-villa
                market, construction milestones at Florenne, and private
                pre-launch opportunities from Godrej Properties.
              </p>

              {/* CTA Button opening the visit / contact form */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={onOpenBookVisit}
                  className="inline-flex items-center justify-center bg-white text-[#171B21] px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[11px] md:text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-[#F9F8F4] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95 cursor-pointer leading-none"
                >
                  Schedule A Visit
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Three Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-8">
            {/* Column 1: Navigate */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium text-white/45 font-sans mb-4 select-none">
                NAVIGATE
              </span>
              <ul className="space-y-2.5 text-[13px] font-sans font-light text-white/75">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("hero");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#typologies"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("typologies");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Residences
                  </a>
                </li>
                <li>
                  <a
                    href="#enquire"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("enquire");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Enquire
                  </a>
                </li>
                <li>
                  <a
                    href="#introduction"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("introduction");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Configurations */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium text-white/45 font-sans mb-4 select-none">
                CONFIGURATIONS
              </span>
              <ul className="space-y-2.5 text-[13px] font-sans font-light text-white/75">
                <li>
                  <a
                    href="#typologies"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("typologies");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    4 BHK Row Villas
                  </a>
                </li>
                <li>
                  <a
                    href="#typologies"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("typologies");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    5 BHK Row Villas
                  </a>
                </li>
                <li>
                  <a
                    href="#typologies"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("typologies");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Phase 1
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium text-white/45 font-sans mb-4 select-none">
                ADDRESS
              </span>
              <div className="space-y-2.5 text-[13px] font-sans font-light text-white/75">
                <p className="leading-snug">
                  Soukya Road,
                  <br />
                  Whitefield
                  <br />
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Separator */}
        <div className="w-full border-t border-white/10 my-10 md:my-14" />

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-white/45 font-sans leading-relaxed">
          {/* Left */}
          <div className="uppercase tracking-[0.22em] font-medium text-white/65 select-none shrink-0">
            GODREJ FLORENNE
          </div>

          {/* Right */}
          <div className="text-left md:text-right space-y-1">
            {/* <p className="text-white/60">© 2026 Authorized Channel Partner.</p> */}
            <p className="text-white/40">
              Phase 1: PRM/KA/RERA/1250/304/PR/150926/008942 &nbsp;·&nbsp; Phase 2: PRM/KA/RERA/1250/304/PR/150926/008943
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
