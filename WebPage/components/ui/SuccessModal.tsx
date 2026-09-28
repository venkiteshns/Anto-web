"use client";

import React, { useEffect, useCallback, useRef } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestName?: string;
  typology?: string;
  onOpenBookVisit?: () => void;
}

export default function SuccessModal({
  isOpen,
  onClose,
  guestName,
  typology,
  onOpenBookVisit,
}: SuccessModalProps) {
  // macOS Genie animation lifecycle states
  const [shouldRender, setShouldRender] = React.useState(isOpen);
  const [isClosing, setIsClosing] = React.useState(false);
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

  // Prevent background scrolling while modal is open
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
        className={`relative w-full max-w-md bg-[#FAF8F5] border border-[#E6E3DC] shadow-2xl p-7 sm:p-9 rounded-2xl text-center overflow-hidden transform-gpu ${
          isClosing ? "animate-genie-out" : "animate-genie-in"
        }`}
      >
        {/* Subtle Luxury Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A99362] via-[#C8C3B8] to-[#A99362]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-[#73716C] hover:text-[#171B21] transition-colors p-1"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Checkmark Icon with soft gold halo */}
        <div className="w-14 h-14 mx-auto rounded-full bg-[#A99362]/15 text-[#A99362] flex items-center justify-center mb-4 mt-2">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Header Text */}
        <span className="text-[10.5px] uppercase tracking-[0.24em] font-medium text-[#A99362] block mb-2 font-sans select-none">
          ENQUIRY RECEIVED
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#171B21] font-light leading-snug">
          Thank You{guestName ? `, ${guestName}` : ""}
        </h3>

        <p className="mt-3 text-[13.5px] text-[#73716C] font-sans font-light max-w-sm mx-auto leading-relaxed">
          {typology ? (
            <>
              Our Senior Residence Concierge has registered your interest for the{" "}
              <strong className="font-medium text-[#171B21]">{typology}</strong>.
            </>
          ) : (
            "Our Senior Residence Concierge has received your enquiry."
          )}{" "}
          We will contact you shortly with confidential pricing schedules and priority preview allocations.
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#E6E3DC] text-[11px] uppercase tracking-[0.16em] font-medium text-[#171B21] hover:bg-[#F2EFE9] transition-colors"
          >
            Close
          </button>
          {onOpenBookVisit && (
            <button
              type="button"
              onClick={() => {
                handleClose();
                setTimeout(() => {
                  onOpenBookVisit();
                }, 350);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#171B21] text-white text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-[#A99362] transition-colors"
            >
              Schedule A Visit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
