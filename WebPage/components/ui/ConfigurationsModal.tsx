"use client";

import React from "react";
import Image from "next/image";
import { TYPOLOGIES_DATA } from "@/lib/constants";

interface ConfigurationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectConfig?: (configTitle: string) => void;
}

export default function ConfigurationsModal({
  isOpen,
  onClose,
  onSelectConfig,
}: ConfigurationsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] border border-[#E6E3DC] shadow-2xl rounded-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 sm:px-10 pt-8 pb-5 border-b border-[#E6E3DC] flex items-center justify-between">
          <div>
            <span className="text-[10.5px] uppercase font-sans tracking-[0.24em] font-medium text-[#A99362] block mb-1">
              PORTFOLIO CATALOGUE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#171B21]">
              All Villa Configurations
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#73716C] hover:text-[#171B21] transition-colors p-2"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          {TYPOLOGIES_DATA.map((item) => (
            <div
              key={item.id}
              className="border border-[#E6E3DC] bg-white p-5 sm:p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="relative w-full md:w-44 h-32 flex-shrink-0 overflow-hidden rounded bg-[#ECE8E1]">
                <Image
                  src={item.villaImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#A99362] font-medium">
                    {item.phase}
                  </span>
                  {item.price && (
                    <span className="font-serif text-lg text-estate-primary font-normal">
                      {item.price}
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-2xl text-estate-primary font-light mb-2">
                  {item.title}
                </h4>

                <div className="flex items-center space-x-3 text-xs text-estate-secondary font-sans mb-2">
                  <span>{item.beds}</span>
                  <span>·</span>
                  <span>{item.baths}</span>
                  <span>·</span>
                  <span>{item.area}</span>
                </div>

                <p className="text-[11px] uppercase tracking-wider text-estate-secondary/80 font-sans">
                  {item.elevator}
                </p>
              </div>

              <div className="w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onSelectConfig) onSelectConfig(item.title);
                  }}
                  className="w-full md:w-auto bg-[#171B21] hover:bg-[#2A313C] text-white px-5 py-2.5 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase transition-all"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
