"use client";

import React, { useState } from "react";
import SuccessModal from "../ui/SuccessModal";

interface EnquirySectionProps {
  onOpenBookVisit?: () => void;
}

export default function EnquirySection({ onOpenBookVisit }: EnquirySectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [typology, setTypology] = useState("4 BHK Row Villa");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState({ name: "", typology: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const guestName = name;
    const guestTypology = typology;

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Exclusive Details Enquiry",
          name: guestName,
          phone,
          email,
          typology: guestTypology,
          message,
        }),
      });
    } catch (err) {
      console.error("Failed to submit enquiry:", err);
    } finally {
      setIsSubmitting(false);
      setSubmittedData({ name: guestName, typology: guestTypology });
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setTypology("4 BHK Row Villa");
      setIsSuccessModalOpen(true);
    }
  };

  return (
    <section
      id="enquire"
      className="w-full bg-[#FAF8F5] pt-20 sm:pt-28 md:pt-36 pb-24 md:pb-36 border-t border-[#E6E3DC]/70 scroll-mt-6"
    >
      <div className="w-full max-w-[1366px] mx-auto px-6 md:px-12 lg:px-[46px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Narrative & Concierge Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[#A99362] text-[11px] md:text-[12px] uppercase font-sans tracking-[0.24em] font-medium mb-3 select-none">
                PRIVATE ENQUIRIES
              </p>
              <h2 className="text-estate-primary font-serif font-light text-[38px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-tight">
                Register Your
                <br />
                <span className="italic font-normal">Interest</span>
              </h2>
              <p className="mt-6 text-estate-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed max-w-[440px]">
                Connect directly with our Senior Residence Concierge for
                confidential pricing schedules, architectural floor layouts, and
                priority pre-launch allocations at Godrej Florenne.
              </p>

              {/* Concierge Details Card */}
              <div className="mt-10 pt-8 border-t border-[#E6E3DC] space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full bg-[#A99362]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A99362]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10.5px] uppercase tracking-[0.2em] font-medium text-[#73716C] block font-sans">
                      Experience Centre
                    </span>
                    <p className="text-[13.5px] text-[#171B21] font-sans font-light mt-0.5">
                      Soukya Road, Whitefield, Bengaluru, Karnataka 560067
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full bg-[#A99362]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A99362]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full bg-[#A99362]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A99362]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10.5px] uppercase tracking-[0.2em] font-medium text-[#73716C] block font-sans">
                      Private Viewings
                    </span>
                    <p className="text-[13.5px] text-[#171B21] font-sans font-light mt-0.5">
                      Monday &ndash; Sunday: 10:00 AM &ndash; 7:00 PM (By Prior Invitation)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Modal CTA Link */}
              {onOpenBookVisit && (
                <div className="mt-8 pt-6 border-t border-[#E6E3DC]/60 flex items-center space-x-3">
                  <span className="text-[13px] text-[#73716C] font-sans">
                    Prefer an in-person guided tour?
                  </span>
                  <button
                    type="button"
                    onClick={onOpenBookVisit}
                    className="text-[12px] uppercase tracking-[0.16em] font-medium text-[#A99362] hover:text-[#8D7747] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Schedule A Visit &rarr;
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Lead Capture Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E6E3DC] shadow-xl rounded-2xl p-7 sm:p-10 md:p-12 relative overflow-hidden">
              {/* Subtle Luxury Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A99362] via-[#C8C3B8] to-[#A99362]" />

              <div>
                <div className="mb-8">
                  <span className="text-[10.5px] uppercase tracking-[0.24em] font-medium text-[#A99362] block mb-1 font-sans">
                    CONFIDENTIAL ASSISTANCE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#171B21]">
                    Request Exclusive Details
                  </h3>
                    <p className="text-xs sm:text-[13px] text-[#73716C] font-sans font-light mt-1.5">
                      Please provide your contact information to receive our
                      curated villa portfolio.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1.5 font-medium">
                        Full Name <span className="text-[#A99362]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikramaditya Singhania"
                        className="w-full bg-[#FAF8F5] border border-[#E6E3DC] rounded-lg px-4 py-3 text-sm text-[#171B21] placeholder:text-[#73716C]/50 focus:outline-none focus:border-[#A99362] focus:bg-white transition-all font-sans"
                      />
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1.5 font-medium">
                          Phone Number <span className="text-[#A99362]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#FAF8F5] border border-[#E6E3DC] rounded-lg px-4 py-3 text-sm text-[#171B21] placeholder:text-[#73716C]/50 focus:outline-none focus:border-[#A99362] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1.5 font-medium">
                          Email Address <span className="text-[#A99362]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="vikram@domain.com"
                          className="w-full bg-[#FAF8F5] border border-[#E6E3DC] rounded-lg px-4 py-3 text-sm text-[#171B21] placeholder:text-[#73716C]/50 focus:outline-none focus:border-[#A99362] focus:bg-white transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Configuration Preference */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-2 font-medium">
                        Interested Typology
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          "4 BHK Row Villa",
                          "5 BHK Row Villa",
                          "Both Typologies",
                        ].map((option) => {
                          const isSelected = typology === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setTypology(option)}
                              className={`py-2.5 px-3 rounded-lg text-xs font-sans transition-all text-center border ${isSelected
                                  ? "bg-[#171B21] text-white border-[#171B21] shadow-sm font-medium"
                                  : "bg-[#FAF8F5] text-[#73716C] border-[#E6E3DC] hover:border-[#C8C3B8]"
                                }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Optional Message */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#73716C] font-sans mb-1.5 font-medium">
                        Message / Specific Queries{" "}
                        <span className="text-[#73716C]/50 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Inquire about pricing, construction status, or private site preview timings..."
                        className="w-full bg-[#FAF8F5] border border-[#E6E3DC] rounded-lg px-4 py-2.5 text-sm text-[#171B21] placeholder:text-[#73716C]/50 focus:outline-none focus:border-[#A99362] focus:bg-white transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Consent Note */}
                    <p className="text-[11px] text-[#73716C]/75 font-sans leading-normal">
                      By submitting this enquiry, you authorize Godrej
                      Properties representatives to contact you via Call, SMS,
                      or WhatsApp.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#171B21] text-white py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A99362] transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Transmitting Enquiry...</span>
                        </>
                      ) : (
                        <span>Submit Private Enquiry</span>
                      )}
                    </button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        guestName={submittedData.name}
        typology={submittedData.typology}
        onOpenBookVisit={onOpenBookVisit}
      />
    </section>
  );
}
