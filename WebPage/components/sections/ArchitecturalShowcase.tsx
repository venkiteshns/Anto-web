"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ArchitecturalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (imageRef.current && containerRef.current) {
          gsap.fromTo(
            imageRef.current,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[60vh] sm:h-[72vh] md:h-[82vh] lg:h-[90vh] min-h-[520px] max-h-[960px] overflow-hidden bg-[#111620]"
    >
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/footer/f1.webp"
          alt="Godrej Florenne 20-acre connected French Renaissance row villa estate"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle vignette/editorial shading for seamless transition into the dark footer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(249, 248, 244, 0.08) 0%, rgba(17, 22, 32, 0) 30%, rgba(17, 22, 32, 0.2) 75%, rgba(17, 22, 32, 0.75) 100%)",
          }}
        />
      </div>
    </section>
  );
}
