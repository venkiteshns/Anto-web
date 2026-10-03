"use client";

import React, { useState } from "react";
import Header from "./Header";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import TypologiesSection from "@/components/sections/TypologiesSection";
import FloorPlanGrid from "@/components/sections/FloorPlanGrid";
import LocaleSection from "@/components/sections/LocaleSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import ArchitecturalShowcase from "@/components/sections/ArchitecturalShowcase";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/sections/Footer";
import BookVisitModal from "@/components/ui/BookVisitModal";
import ConfigurationsModal from "@/components/ui/ConfigurationsModal";

export default function EstatePageClient() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"visit" | "brochure">("visit");
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const handleOpenModal = (mode: "visit" | "brochure" = "visit") => {
    setModalMode(mode);
    setIsBookModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-estate-bg selection:bg-estate-primary selection:text-estate-bg">
      {/* Transparent Hero Header */}
      <Header onOpenBookVisit={() => handleOpenModal("visit")} />

      {/* Main Content Sections */}
      <main id="main-content" className="w-full">
        {/* Section 01: Full Viewport Hero Section */}
        <section id="hero" className="w-full">
          <Hero
            onOpenBookVisit={() => handleOpenModal("visit")}
            onOpenBrochure={() => handleOpenModal("brochure")}
          />
        </section>

        {/* Section 02: Estate Introduction */}
        <section id="introduction" className="w-full">
          <Introduction />
        </section>

        {/* Section 03: Featured Typologies & Horizontal Carousel */}
        <section id="typologies" className="w-full">
          <TypologiesSection
            onOpenConfigurationsModal={() => setIsConfigModalOpen(true)}
          />
        </section>

        {/* Section: Floor Plan Grid Showcase (1 on top, 2 on bottom) */}
        <section id="floor-plans" className="w-full">
          <FloorPlanGrid />
        </section>

        {/* Section 04: The Locale */}
        <section id="locale" className="w-full">
          <LocaleSection />
        </section>

        {/* Section 05: Amenities & Lifestyle */}
        <section id="amenities" className="w-full">
          <AmenitiesSection />
        </section>

        {/* Section 06: Large Full-Bleed Architectural Image */}
        <section id="architecture" className="w-full">
          <ArchitecturalShowcase />
        </section>

        {/* Section 07: Private Enquiries & Lead Capture */}
        <EnquirySection onOpenBookVisit={() => handleOpenModal("visit")} />
      </main>

      {/* Section 07: Florenne Dispatch & Footer */}
      <Footer onOpenBookVisit={() => handleOpenModal("visit")} />

      {/* Interactive Modals */}
      <BookVisitModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        mode={modalMode}
      />

      <ConfigurationsModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        onSelectConfig={() => {
          setIsBookModalOpen(true);
        }}
      />
    </div>
  );
}
