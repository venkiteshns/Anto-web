"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";

interface HeaderProps {
  onOpenBookVisit?: () => void;
}

export default function Header({ onOpenBookVisit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToElement(href);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full">
      <div className="w-full px-6 md:px-12 lg:px-[46px] pt-6 pb-4 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-start select-none cursor-pointer">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/85 font-medium leading-none font-sans">
            GODREJ PROPERTIES
          </span>
          <span className="text-[20px] md:text-[24px] tracking-[0.22em] text-white font-light uppercase font-serif leading-tight mt-1">
            FLORENNE
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9 lg:space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11.5px] uppercase tracking-[0.18em] text-white/85 hover:text-white transition-colors duration-200 font-sans font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Book A Visit CTA */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={onOpenBookVisit}
            className="bg-white text-[#171B21] px-5 py-2.5 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-[#F9F8F4] hover:shadow-md transition-all duration-300 active:scale-95 leading-none"
          >
            BOOK A VISIT
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-dropdown border-b border-white/10 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[12px] uppercase tracking-[0.2em] text-white/90 hover:text-white py-1 font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
