"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
  // macOS Genie animation lifecycle states
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const isMountedRef = useRef(false);

  if (isOpen && !shouldRender) {
    setShouldRender(true);
    setIsClosing(false);
  }

  // Sync open/close animation lifecycle
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (!isOpen) return;
    }

    if (isOpen) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      closeTimeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        closeTimeoutRef.current = null;
      }, 340);
    }

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Outside-click dismissal handler for backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalRef.current.contains(e.target as Node)) {
      return;
    }
    handleClose();
  };

  // Prevent background scrolling without altering body overflow or layout dimensions
  useEffect(() => {
    if (!shouldRender) return;

    const handleScrollKeys = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;
      if (
        ["Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(
          e.code
        )
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleScrollKeys);
    return () => {
      window.removeEventListener("keydown", handleScrollKeys);
    };
  }, [shouldRender]);

  // Handle Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (shouldRender) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [shouldRender, handleClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md overflow-hidden touch-none overscroll-contain ${
        isClosing ? "animate-backdrop-out pointer-events-none" : "animate-backdrop-in"
      }`}
      onClick={handleBackdropClick}
      onWheel={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] border border-[#E6E3DC] shadow-2xl rounded-2xl flex flex-col overflow-hidden transform-gpu ${
          isClosing ? "animate-genie-out" : "animate-genie-in"
        }`}
      >
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
            onClick={handleClose}
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
                {item.price && (
                  <div className="mb-1">
                    <span className="font-serif text-lg sm:text-xl text-estate-primary font-normal">
                      {item.price}
                    </span>
                  </div>
                )}

                <h4 className="font-serif text-2xl text-estate-primary font-light mb-2">
                  {item.title}
                </h4>

                <div className="flex items-center space-x-3 text-xs text-estate-secondary font-sans">
                  <span>{item.beds}</span>
                  <span>·</span>
                  <span>{item.baths}</span>
                  <span>·</span>
                  <span>{item.area}</span>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
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
