"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export default function ImagePair() {
  const [img1, img2] = SITE_CONFIG.imageGrid;

  return (
    <div className="w-full mt-14 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* Image 1 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
            <Image
              src={img1.src}
              alt={img1.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-3.5 flex items-baseline justify-between">
            <p className="text-[13px] md:text-[14px] text-estate-secondary font-sans font-normal tracking-wide">
              {img1.caption}
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
            <Image
              src={img2.src}
              alt={img2.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-3.5 flex items-baseline justify-between">
            <p className="text-[13px] md:text-[14px] text-estate-secondary font-sans font-normal tracking-wide">
              {img2.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
