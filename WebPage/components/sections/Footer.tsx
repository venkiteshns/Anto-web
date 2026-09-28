"use client";

import React, { useState } from "react";
import { scrollToElement } from "@/lib/utils";

interface FooterProps {
  onOpenBookVisit?: () => void;
}

export default function Footer({ onOpenBookVisit }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer id="dispatch" className="w-full bg-[#111620] text-white pt-20 sm:pt-28 md:pt-32 pb-12 md:pb-16 transition-colors">
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side: The Florenne Dispatch & Minimal Email Form */}
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

              {/* Minimal Email Subscription Field */}
              <form onSubmit={handleSubscribe} className="relative mt-8 max-w-[360px]">
                {subscribed ? (
                  <p className="text-[#A99362] text-[12px] font-sans tracking-wide py-2.5">
                    Thank you. You have been added to The Florenne Dispatch.
                  </p>
                ) : (
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white focus:outline-none text-white text-[13.5px] py-2.5 pr-8 placeholder:text-white/35 font-sans font-light transition-colors"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to The Florenne Dispatch"
                      className="absolute right-0 bottom-2 text-white/60 hover:text-white transition-colors text-lg focus:outline-none"
                    >
                      →
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Side: Four Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-6">
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
                    href="#amenities"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("amenities");
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
                <li>
                  <a
                    href="#typologies"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement("typologies");
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Phase 2
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium text-white/45 font-sans mb-4 select-none">
                CONTACT
              </span>
              <div className="space-y-2.5 text-[13px] font-sans font-light text-white/75">
                <p className="leading-snug">
                  Soukya Road,
                  <br />
                  Whitefield
                  <br />
                  Bengaluru, Karnataka
                </p>
                <p>
                  <a
                    href="tel:+918792899027"
                    className="hover:text-white transition-colors"
                  >
                    +91 87928 99027
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/918867858125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp +91 88678 58125
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:nfsestates.web@gmail.com"
                    className="hover:text-[#A99362] transition-colors underline underline-offset-4"
                  >
                    nfsestates.web@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Column 4: Follow */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium text-white/45 font-sans mb-4 select-none">
                FOLLOW
              </span>
              <ul className="space-y-2.5 text-[13px] font-sans font-light text-white/75">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thin Separator */}
        <div className="w-full border-t border-white/10 my-10 md:my-14" />

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] text-white/45 font-sans leading-relaxed">
          {/* Left */}
          <div className="uppercase tracking-[0.2em] font-medium text-white/65 select-none">
            GODREJ FLORENNE
          </div>

          {/* Center */}
          <div className="text-left md:text-center space-y-1">
            <p>© 2026 Godrej Properties Limited. All rights reserved.</p>
            <p className="text-white/40">
              RERA: Phase 1 — PR/150926/008942 · Phase 2 — PR/150926/008943
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-5">
            <a href="#privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-white/70 transition-colors">
              Terms &amp; Conditions
            </a>
            <span>·</span>
            <a href="#accessibility" className="hover:text-white/70 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
