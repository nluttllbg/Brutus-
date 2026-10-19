import React from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

interface AboutProps {
  onImageClick?: (item: {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    alt: string;
  }) => void;
}

export const About: React.FC<AboutProps> = ({ onImageClick }) => {
  const { about } = BARBERSHOP_DATA;

  return (
    <section
      id="a-barbearia"
      className="w-full px-5 md:px-8 lg:px-12 py-16 lg:py-24 bg-[#0c0e12] border-y border-[#4e4639]/20"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-[#e9c176] font-['Inter'] text-xs font-semibold tracking-widest uppercase">
            <span className="material-symbols-outlined text-[18px]">
              content_cut
            </span>
            <span>{about.sectionTag}</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-[40px] text-[#e2e2e8] font-light leading-snug">
            {about.title}
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative rounded-xl overflow-hidden border border-[#4e4639]/30 bg-[#1e2024] shadow-2xl group cursor-pointer"
              onClick={() =>
                onImageClick?.({
                  id: "about-barbers",
                  title: about.image.cardTitle,
                  subtitle: about.image.cardSubtitle,
                  imageUrl: about.image.url,
                  alt: about.image.alt,
                })
              }
            >
              <img
                src={about.image.url}
                alt={about.image.alt}
                className="w-full h-[360px] md:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent opacity-90" />

              {/* Inset Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#282a2e]/90 backdrop-blur-md border border-[#e9c176]/25 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e9c176]/15 border border-[#e9c176]/35 flex items-center justify-center text-[#e9c176]">
                    <span className="material-symbols-outlined text-[20px]">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] font-semibold text-base text-[#e2e2e8]">
                      {about.image.cardTitle}
                    </h4>
                    <p className="font-['Inter'] text-xs text-[#9a8f80]">
                      {about.image.cardSubtitle}
                    </p>
                  </div>
                </div>
                <span className="font-['Inter'] text-[10px] font-semibold px-2 py-1 rounded bg-[#5c4304]/50 text-[#e9c176] border border-[#e9c176]/30 uppercase tracking-widest">
                  {about.image.status}
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="font-['Inter'] text-base sm:text-lg text-[#d1c5b4] leading-relaxed">
              {about.description}
            </p>

            <div className="flex flex-col gap-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-[#1e2024] border border-[#4e4639]/25 flex items-start gap-4 transition-all duration-300 hover:border-[#e9c176]/40 hover:bg-[#282a2e]/60"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#c5a059]/20 text-[#e9c176] flex items-center justify-center shrink-0 border border-[#e9c176]/30 mt-0.5">
                    <span className="material-symbols-outlined text-[24px]">
                      {highlight.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-['Outfit'] font-semibold text-base sm:text-lg text-[#e2e2e8]">
                      {highlight.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-[#9a8f80] leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
