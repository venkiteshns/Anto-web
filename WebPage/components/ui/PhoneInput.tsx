"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Country, COUNTRIES, DEFAULT_COUNTRY, validatePhoneNumber } from "@/lib/countries";

interface PhoneInputProps {
  value: string; // National phone number without country code
  selectedCountry?: Country;
  onChange: (nationalNumber: string, country: Country, fullPhoneNumber: string, isValid: boolean) => void;
  onBlur?: () => void;
  error?: string;
  isTouched?: boolean;
  id?: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  dropdownPosition?: "bottom" | "top";
}

export default function PhoneInput({
  value,
  selectedCountry = DEFAULT_COUNTRY,
  onChange,
  onBlur,
  error,
  isTouched = false,
  id = "phone-input",
  required = true,
  className = "",
  containerClassName = "h-[46px]",
  inputClassName = "",
  buttonClassName = "",
}: PhoneInputProps) {
  const [currentCountry, setCurrentCountry] = useState<Country>(selectedCountry);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Sync internal country if prop changes
  useEffect(() => {
    if (selectedCountry && selectedCountry.code !== currentCountry.code) {
      setCurrentCountry(selectedCountry);
    }
  }, [selectedCountry]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchQuery("");
        triggerRef.current?.focus();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Auto focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Filter countries by query (name, dialCode, or ISO code)
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;

    // Remove leading + or 0 for dial code search convenience
    const cleanQ = q.replace(/^\+/, "");

    return COUNTRIES.filter((c) => {
      const matchName = c.name.toLowerCase().includes(q);
      const matchCode = c.code.toLowerCase().includes(q);
      const dialClean = c.dialCode.replace(/^\+/, "");
      const matchDial = dialClean.startsWith(cleanQ) || c.dialCode.includes(q);
      return matchName || matchCode || matchDial;
    });
  }, [searchQuery]);

  // Handle phone input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    // Allow digits and spaces/dashes, but clean to digits for validation
    const digitsOnly = rawVal.replace(/[^\d\s\-]/g, "");
    const validation = validatePhoneNumber(digitsOnly, currentCountry);
    const fullPhone = `${currentCountry.dialCode} ${digitsOnly.trim()}`;
    onChange(digitsOnly, currentCountry, fullPhone, validation.isValid);
  };

  // Handle selecting a country from dropdown
  const handleSelectCountry = (country: Country) => {
    setCurrentCountry(country);
    setIsOpen(false);
    setSearchQuery("");

    // Re-evaluate validation with existing digits
    const validation = validatePhoneNumber(value, country);
    const fullPhone = `${country.dialCode} ${value.trim()}`;
    onChange(value, country, fullPhone, validation.isValid);

    // Focus back on phone input
    const inputEl = document.getElementById(id);
    inputEl?.focus();
  };

  const hasError = Boolean(isTouched && error);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className={`flex rounded-lg overflow-hidden shadow-sm ${containerClassName}`}>
        {/* Country Code Selector Trigger */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={`Country code: ${currentCountry.name} (${currentCountry.dialCode})`}
          className={`h-full flex items-center space-x-1.5 px-3 bg-[#FAF8F5] border border-r-0 border-[#E6E3DC] rounded-l-lg hover:bg-[#F2EFE9] focus:outline-none focus:ring-1 focus:ring-[#A99362] transition-colors cursor-pointer shrink-0 select-none text-xs sm:text-sm font-sans text-[#171B21] ${
            hasError ? "border-red-300 bg-red-50/20" : ""
          } ${buttonClassName}`}
        >
          <span className="text-xs sm:text-sm leading-none shrink-0" role="img" aria-label={currentCountry.name}>
            {currentCountry.flag}
          </span>
          <span className="font-medium text-[#171B21] tracking-tight text-xs sm:text-sm">
            {currentCountry.dialCode}
          </span>
          <svg
            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#73716C] transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180 text-[#A99362]" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* National Number Input */}
        <input
          id={id}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required={required}
          value={value}
          onChange={handleInputChange}
          onBlur={onBlur}
          placeholder={currentCountry.placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className={`h-full w-full bg-[#FAF8F5] border border-[#E6E3DC] rounded-r-lg px-3.5 sm:px-4 text-xs sm:text-sm text-[#171B21] placeholder:text-[#73716C]/40 focus:outline-none focus:border-[#A99362] focus:bg-white transition-all font-sans ${
            hasError
              ? "border-red-400 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-400/40"
              : ""
          } ${inputClassName}`}
        />
      </div>

      {/* Inline Validation Error */}
      {hasError && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500 font-sans flex items-center space-x-1 animate-fadeIn">
          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </p>
      )}

      {/* Floating Country Selector Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select Country Code"
          className="absolute left-0 top-full mt-1.5 z-50 w-72 sm:w-80 max-h-72 bg-white border border-[#E6E3DC] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fadeIn"
        >
          {/* Search Header */}
          <div className="p-2.5 border-b border-[#E6E3DC] bg-[#FAF8F5] sticky top-0 z-10">
            <div className="relative">
              <svg
                className="w-4 h-4 text-[#73716C] absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E6E3DC] rounded-lg text-[#171B21] placeholder:text-[#73716C]/50 focus:outline-none focus:border-[#A99362] font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#73716C] hover:text-[#171B21]"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Countries Scroll List */}
          <div className="overflow-y-auto max-h-60 p-1.5 divide-y divide-[#F2EFE9]/60">
            {filteredCountries.length === 0 ? (
              <div className="py-6 text-center text-xs text-[#73716C] font-sans">
                No country found matching &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filteredCountries.map((country) => {
                const isSelected = country.code === currentCountry.code;
                return (
                  <button
                    key={country.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectCountry(country)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-left cursor-pointer font-sans ${
                      isSelected
                        ? "bg-[#171B21] text-white font-medium"
                        : "text-[#171B21] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                      <span className="text-base shrink-0 leading-none" role="img" aria-label={country.name}>
                        {country.flag}
                      </span>
                      <span className="truncate">{country.name}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span
                        className={`text-[11px] font-mono font-medium ${
                          isSelected ? "text-[#C8C3B8]" : "text-[#73716C]"
                        }`}
                      >
                        {country.dialCode}
                      </span>
                      {isSelected && (
                        <svg className="w-3.5 h-3.5 text-[#A99362]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
