"use client";

import React, { useState } from "react";
import { CONFIGURATION_OPTIONS } from "@/lib/constants";

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookVisitModal({
  isOpen,
  onClose,
}: BookVisitModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [config, setConfig] = useState(CONFIGURATION_OPTIONS[1]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#E6E3DC] shadow-2xl p-8 md:p-10 rounded-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-[#73716C] hover:text-[#171B21] transition-colors"
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

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#A99362]/15 text-[#A99362] flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#171B21] mb-2 font-normal">
              Private Tour Requested
            </h3>
            <p className="text-sm text-[#73716C] font-sans">
              Our Senior Residence Concierge will contact you shortly to confirm
              your private preview at Soukya Road, Whitefield.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-[#A99362] text-[11px] uppercase tracking-[0.24em] font-medium font-sans mb-1">
                PRIVATE EXPERIENCE
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-[#171B21] font-light">
                Book a Private Estate Visit
              </h3>
              <p className="text-xs text-[#73716C] font-sans mt-2">
                Experience the 20-acre French Renaissance row-villa enclave in
                Whitefield, Bengaluru.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Lord / Lady / Mr. / Ms."
                  className="w-full bg-white border border-[#E6E3DC] rounded-lg px-4 py-2.5 text-sm text-[#171B21] focus:outline-none focus:border-[#A99362] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white border border-[#E6E3DC] rounded-lg px-4 py-2.5 text-sm text-[#171B21] focus:outline-none focus:border-[#A99362] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#E6E3DC] rounded-lg px-3 py-2.5 text-xs text-[#171B21] focus:outline-none focus:border-[#A99362] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1">
                    Configuration
                  </label>
                  <select
                    value={config}
                    onChange={(e) => setConfig(e.target.value)}
                    className="w-full bg-white border border-[#E6E3DC] rounded-lg px-3 py-2.5 text-xs text-[#171B21] focus:outline-none focus:border-[#A99362] transition-colors"
                  >
                    {CONFIGURATION_OPTIONS.slice(1).map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#171B21] hover:bg-[#2A313C] text-white py-3 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-[0.98]"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
