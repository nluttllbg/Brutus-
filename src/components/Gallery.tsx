import React, { useState } from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";
import { LightboxModal } from "./LightboxModal";

export const Gallery: React.FC = () => {
  const { gallery } = BARBERSHOP_DATA;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="w-full px-5 md:px-8 lg:px-12 py-16 lg:py-24 bg-[#0c0e12] border-y border-[#4e4639]/20"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#e9c176] font-['Inter'] text-xs font-semibold tracking-widest uppercase">
              <span className="material-symbols-outlined text-[18px]">
                photo_library
              </span>
              <span>{gallery.sectionTag}</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-[40px] text-[#e2e2e8] font-light leading-snug">
              {gallery.title}
            </h2>
          </div>
          <p className="font-['Inter'] text-sm sm:text-base text-[#9a8f80] max-w-md">
            {gallery.description}
          </p>
        </div>

        {/* Gallery Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gallery.items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative rounded-xl overflow-hidden border border-[#4e4639]/30 bg-[#1e2024] transition-all duration-300 hover:border-[#e9c176]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#111317] relative">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Item Info Card below image */}
              <div className="p-4 bg-[#1e2024] border-t border-[#4e4639]/20 flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="font-['Outfit'] text-base text-[#e2e2e8] font-medium group-hover:text-[#e9c176] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-['Inter'] text-xs text-[#9a8f80]">
                    {item.subtitle}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#282a2e] text-[#e9c176] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#e9c176]/30">
                  <span className="material-symbols-outlined text-[18px]">
                    search
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={gallery.items}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(newIndex) => setActivePhotoIndex(newIndex)}
      />
    </section>
  );
};
