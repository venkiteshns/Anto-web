"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { CONFIGURATION_OPTIONS } from "@/lib/constants";
import PhoneInput from "./PhoneInput";
import {
  Country,
  DEFAULT_COUNTRY,
  validatePhoneNumber,
  validateEmail,
  validateName,
} from "@/lib/countries";

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "visit" | "brochure";
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDisplayDate(dateStr: string) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return dateStr;
  return `${d} ${MONTH_SHORT[m - 1]} ${y}`;
}

export default function BookVisitModal({
  isOpen,
  onClose,
  mode = "visit",
}: BookVisitModalProps) {
  const isBrochure = mode === "brochure";
  const configOptions = useMemo(
    () =>
      CONFIGURATION_OPTIONS.slice(1).filter(
        (opt) => opt !== "Grand Châteaux 5+ BHK"
      ),
    []
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [config, setConfig] = useState(configOptions[0] || "4 BHK Row Villa");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Field validation and touch state
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});

  const validateAll = () => {
    const nameResult = validateName(name);
    const phoneResult = validatePhoneNumber(phone, country);
    const emailResult = validateEmail(email);

    const newErrors: { name?: string; phone?: string; email?: string } = {};
    if (!nameResult.isValid) newErrors.name = nameResult.error;
    if (!phoneResult.isValid) newErrors.phone = phoneResult.error;
    if (!emailResult.isValid) newErrors.email = emailResult.error;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (val: string) => {
    setName(val);
    if (touched.name) {
      const res = validateName(val);
      setErrors((prev) => ({ ...prev, name: res.error }));
    }
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (touched.email) {
      const res = validateEmail(val);
      setErrors((prev) => ({ ...prev, email: res.error }));
    }
  };

  const handlePhoneChange = (
    nationalNumber: string,
    newCountry: Country,
    fullPhone: string,
    isValid: boolean
  ) => {
    setPhone(nationalNumber);
    setCountry(newCountry);
    if (touched.phone) {
      const res = validatePhoneNumber(nationalNumber, newCountry);
      setErrors((prev) => ({ ...prev, phone: res.error }));
    }
  };

  // macOS Genie animation lifecycle states
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const isMountedRef = useRef(false);

  if (isOpen && !shouldRender) {
    setShouldRender(true);
    setIsClosing(false);
  }

  const resetForm = useCallback(() => {
    setName("");
    setPhone("");
    setCountry(DEFAULT_COUNTRY);
    setEmail("");
    setDate("");
    setConfig(configOptions[0] || "4 BHK Row Villa");
    setIsDropdownOpen(false);
    setIsDatePickerOpen(false);
    setTouched({ name: false, phone: false, email: false });
    setErrors({});
  }, [configOptions]);

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
        setSubmitted(false);
        resetForm();
        closeTimeoutRef.current = null;
      }, 340);
    }

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isOpen, resetForm]);

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

  // Calendar navigation state
  const today = useMemo(() => new Date(), []);
  const todayDate = useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    [today]
  );
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  // Sync calendar month/year with selected date
  useEffect(() => {
    if (date) {
      const parts = date.split("-");
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        if (!isNaN(y) && !isNaN(m)) {
          setViewYear(y);
          setViewMonth(m - 1);
        }
      }
    }
  }, [date]);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const isCurrentMonthOrPast =
    viewYear < todayDate.getFullYear() ||
    (viewYear === todayDate.getFullYear() && viewMonth <= todayDate.getMonth());

  const handlePrevMonth = () => {
    if (isCurrentMonthOrPast) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const toggleDatePicker = () => {
    setIsDropdownOpen(false);
    if (!isDatePickerOpen && datePickerRef.current) {
      const rect = datePickerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // If less than 280px below the input, open upwards
      setOpenUpwards(spaceBelow < 280);
    }
    setIsDatePickerOpen((prev) => !prev);
  };

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(target)
      ) {
        setIsDatePickerOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (isDropdownOpen || isDatePickerOpen) {
          setIsDropdownOpen(false);
          setIsDatePickerOpen(false);
        } else {
          handleClose();
        }
      }
    }

    if (shouldRender) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRender, isDropdownOpen, isDatePickerOpen, handleClose]);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });

    const isValid = validateAll();
    if (!isValid) return;

    if (!isBrochure && !date) {
      toggleDatePicker();
      return;
    }
    setIsSubmitting(true);
    const fullPhoneNumber = `${country.dialCode} ${phone.trim()}`;
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: isBrochure ? "Download Brochure" : "Book A Visit",
          name: name.trim(),
          phone: fullPhoneNumber,
          email: email.trim(),
          date: isBrochure ? undefined : date,
          config,
        }),
      });
      setSubmitted(true);
      resetForm();
      setTimeout(() => {
        setSubmitted(false);
        handleClose();
      }, 3000);
    } catch (err) {
      console.error("Failed to submit visit booking:", err);
      setSubmitted(true);
      resetForm();
      setTimeout(() => {
        setSubmitted(false);
        handleClose();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md overflow-hidden touch-none overscroll-contain ${isClosing ? "animate-backdrop-out pointer-events-none" : "animate-backdrop-in"
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
        className={`relative w-full max-w-lg bg-[#FAF8F5] border border-[#E6E3DC] shadow-2xl p-6 sm:p-8 md:p-10 rounded-2xl my-auto transform-gpu ${isClosing ? "animate-genie-out" : "animate-genie-in"
          }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
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
              Your Enquiry Has Been Submitted
            </h3>
            <p className="text-sm text-[#73716C] font-sans max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. Our executive will contact you shortly to assist you and proceed further.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-[#A99362] text-[11px] uppercase tracking-[0.24em] font-medium font-sans mb-1">
                {isBrochure ? "EXCLUSIVE PORTFOLIO" : "PRIVATE EXPERIENCE"}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-[#171B21] font-light">
                {isBrochure ? "Download Brochure" : "Schedule A Visit"}
              </h3>
              <p className="text-xs text-[#73716C] font-sans mt-2">
                {isBrochure
                  ? "Receive the comprehensive Godrej Florenne floor plans, specifications, and estate brochure."
                  : "Experience the 20-acre French Renaissance row-villa enclave in Whitefield, Bengaluru."}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1 font-medium">
                  Full Name <span className="text-[#A99362]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onBlur={() => {
                    setTouched((prev) => ({ ...prev, name: true }));
                    const res = validateName(name);
                    setErrors((prev) => ({ ...prev, name: res.error }));
                  }}
                  placeholder="Lord / Lady / Mr. / Ms."
                  aria-invalid={Boolean(touched.name && errors.name)}
                  className={`w-full h-[42px] bg-white border rounded-lg px-4 text-sm text-[#171B21] focus:outline-none transition-colors ${touched.name && errors.name
                    ? "border-red-400 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-400/40"
                    : "border-[#E6E3DC] focus:border-[#A99362]"
                    }`}
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-xs text-red-500 font-sans flex items-center space-x-1 animate-fadeIn">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1 font-medium">
                    Phone Number <span className="text-[#A99362]">*</span>
                  </label>
                  <PhoneInput
                    id="modal-phone"
                    value={phone}
                    selectedCountry={country}
                    onChange={handlePhoneChange}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, phone: true }));
                      const res = validatePhoneNumber(phone, country);
                      setErrors((prev) => ({ ...prev, phone: res.error }));
                    }}
                    error={errors.phone}
                    isTouched={touched.phone}
                    containerClassName="h-[42px]"
                    buttonClassName="bg-white"
                    inputClassName="bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1 font-medium">
                    Email Address <span className="text-[#A99362]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, email: true }));
                      const res = validateEmail(email);
                      setErrors((prev) => ({ ...prev, email: res.error }));
                    }}
                    placeholder="vikram@domain.com"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    className={`w-full h-[42px] bg-white border rounded-lg px-4 text-sm text-[#171B21] focus:outline-none transition-colors font-sans ${touched.email && errors.email
                      ? "border-red-400 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-400/40"
                      : "border-[#E6E3DC] focus:border-[#A99362]"
                      }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-sans flex items-center space-x-1 animate-fadeIn">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className={isBrochure ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                {!isBrochure && (
                  <div className="relative" ref={datePickerRef}>
                    <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1">
                      Preferred Date
                    </label>
                    <button
                      type="button"
                      onClick={toggleDatePicker}
                      aria-haspopup="dialog"
                      aria-expanded={isDatePickerOpen}
                      className={`w-full h-[42px] bg-white border rounded-lg px-3 text-xs font-sans flex items-center justify-between text-left transition-all duration-200 focus:outline-none cursor-pointer ${isDatePickerOpen
                        ? "border-[#A99362] ring-1 ring-[#A99362]/30 shadow-sm"
                        : "border-[#E6E3DC] hover:border-[#C8C3B8]"
                        }`}
                    >
                      <span className={date ? "text-[#171B21] font-medium" : "text-[#73716C]/60"}>
                        {date ? formatDisplayDate(date) : "dd-mm-yyyy"}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-colors shrink-0 ${isDatePickerOpen ? "text-[#A99362]" : "text-[#A99362]/80"
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={1.7} />
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={1.7} strokeLinecap="round" />
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={1.7} strokeLinecap="round" />
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.7} />
                      </svg>
                    </button>

                    {/* Hidden input for HTML5 form validation */}
                    <input
                      type="text"
                      required
                      value={date}
                      onChange={() => { }}
                      className="sr-only"
                      tabIndex={-1}
                      aria-hidden="true"
                    />

                    {/* Custom Themed Date Picker Popover */}
                    {isDatePickerOpen && (
                      <div
                        role="dialog"
                        aria-label="Select Date"
                        className={`absolute left-0 z-40 w-72 max-w-[calc(100vw-3rem)] bg-white border border-[#E6E3DC] rounded-xl shadow-2xl shadow-black/15 p-3 select-none animate-fadeIn ${openUpwards ? "bottom-full mb-2" : "top-full mt-1.5"
                          }`}
                      >
                        {/* Month / Year header */}
                        <div className="flex items-center justify-between mb-2 px-1">
                          <span className="font-serif text-[15px] font-medium text-[#171B21] tracking-wide">
                            {MONTH_NAMES[viewMonth]} {viewYear}
                          </span>
                          <div className="flex items-center space-x-1">
                            <button
                              type="button"
                              onClick={handlePrevMonth}
                              disabled={isCurrentMonthOrPast}
                              className={`p-1.5 rounded-full text-[#73716C] transition-colors ${isCurrentMonthOrPast
                                ? "opacity-25 cursor-not-allowed"
                                : "hover:bg-[#FAF8F5] hover:text-[#171B21]"
                                }`}
                              aria-label="Previous month"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={handleNextMonth}
                              className="p-1.5 rounded-full text-[#73716C] hover:bg-[#FAF8F5] hover:text-[#171B21] transition-colors"
                              aria-label="Next month"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Weekday headers */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-1">
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <span
                              key={day}
                              className="text-[10px] uppercase tracking-wider font-semibold text-[#A99362] py-0.5"
                            >
                              {day}
                            </span>
                          ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                            <span key={`empty-${i}`} className="h-7 w-7" />
                          ))}

                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dayNum = i + 1;
                            const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
                            const isSelected = date === dateStr;
                            const cellDate = new Date(viewYear, viewMonth, dayNum);
                            cellDate.setHours(0, 0, 0, 0);
                            const isPast = cellDate < todayDate;
                            const isToday = cellDate.getTime() === todayDate.getTime();

                            return (
                              <button
                                key={dayNum}
                                type="button"
                                disabled={isPast}
                                onClick={() => {
                                  setDate(dateStr);
                                  setIsDatePickerOpen(false);
                                }}
                                className={`h-7 w-7 mx-auto flex items-center justify-center rounded-full text-xs font-sans transition-all ${isSelected
                                  ? "bg-[#171B21] text-white font-medium shadow-sm"
                                  : isPast
                                    ? "text-[#73716C]/30 cursor-not-allowed"
                                    : isToday
                                      ? "border border-[#A99362] text-[#A99362] font-semibold hover:bg-[#FAF8F5]"
                                      : "text-[#171B21] hover:bg-[#F5F2EB]"
                                  }`}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>

                        {/* Footer actions: Clear & Today */}
                        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-[#E6E3DC] px-1">
                          <button
                            type="button"
                            onClick={() => {
                              setDate("");
                              setIsDatePickerOpen(false);
                            }}
                            className="text-[11px] text-[#73716C] hover:text-[#171B21] transition-colors"
                          >
                            Clear
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const y = todayDate.getFullYear();
                              const m = String(todayDate.getMonth() + 1).padStart(2, "0");
                              const d = String(todayDate.getDate()).padStart(2, "0");
                              setDate(`${y}-${m}-${d}`);
                              setViewYear(todayDate.getFullYear());
                              setViewMonth(todayDate.getMonth());
                              setIsDatePickerOpen(false);
                            }}
                            className="text-[11px] text-[#A99362] font-medium hover:underline transition-colors"
                          >
                            Today
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="relative" ref={dropdownRef}>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1">
                    {isBrochure ? "Preferred Typology / Villa Size" : "Configuration"}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsDatePickerOpen(false);
                      setIsDropdownOpen((prev) => !prev);
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                    className={`w-full h-[42px] bg-white border rounded-lg px-3 text-xs text-[#171B21] font-sans flex items-center justify-between text-left transition-all duration-200 focus:outline-none ${isDropdownOpen
                      ? "border-[#A99362] ring-1 ring-[#A99362]/30 shadow-sm"
                      : "border-[#E6E3DC] hover:border-[#C8C3B8]"
                      }`}
                  >
                    <span className="truncate">{config}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-[#A99362] transition-transform duration-200 ml-2 shrink-0 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Custom Dropdown Menu */}
                  {isDropdownOpen && (
                    <div
                      role="listbox"
                      aria-label="Configuration"
                      className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white border border-[#E6E3DC] rounded-xl shadow-xl shadow-black/8 p-1.5 space-y-0.5 animate-fadeIn"
                    >
                      {configOptions.map((opt) => {
                        const isSelected = config === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setConfig(opt);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-sans transition-all flex items-center justify-between group ${isSelected
                              ? "bg-[#F5F2EB] text-[#171B21] font-medium"
                              : "text-[#171B21]/80 hover:bg-[#FAF8F5] hover:text-[#171B21]"
                              }`}
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected
                                  ? "bg-[#A99362]"
                                  : "bg-transparent group-hover:bg-[#A99362]/40"
                                  }`}
                              />
                              {opt}
                            </span>
                            {isSelected && (
                              <svg
                                className="w-3.5 h-3.5 text-[#A99362]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#171B21] hover:bg-[#2A313C] disabled:opacity-70 text-white py-3 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting Request...</span>
                    </>
                  ) : isBrochure ? (
                    <>
                      <span>Get Brochure</span>
                      <svg
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.75}
                          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V3m0 9l3.5-3.5M12 12l-3.5-3.5"
                        />
                      </svg>
                    </>
                  ) : (
                    <span>Confirm Reservation Request</span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
