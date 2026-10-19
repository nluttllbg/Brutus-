import React from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

interface HeroProps {
  onImageClick?: (item: {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    alt: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageClick }) => {
  const { hero } = BARBERSHOP_DATA;

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("a-barbearia");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full px-5 md:px-8 lg:px-12 py-10 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Intro Copy Block */}
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#5c4304]/30 border border-[#e9c176]/30 shadow-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#e9c176] animate-pulse" />
            <span className="font-['Inter'] text-xs text-[#e9c176] tracking-[0.2em] uppercase font-semibold">
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl text-[#e2e2e8] font-light tracking-tight leading-[1.12]">
            {hero.headlineLine1}{" "}
            <br className="hidden sm:inline" />
            <span className="font-normal italic text-[#e9c176]">
              {hero.headlineLine2}
            </span>
          </h1>

          {/* Description */}
          <p className="font-['Inter'] text-base sm:text-lg text-[#d1c5b4] max-w-xl leading-relaxed">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href={BARBERSHOP_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-lg bg-[#e9c176] text-[#412d00] font-['Outfit'] text-base font-semibold tracking-wide hover:bg-[#e8c178] hover:shadow-[0_0_20px_rgba(233,193,118,0.35)] transition-all duration-200 active:scale-95 shadow-lg shadow-black/40 text-center"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>Agendar pelo WhatsApp</span>
            </a>

            <a
              href="#a-barbearia"
              onClick={handleScrollToAbout}
              className="inline-flex items-center justify-center gap-2 h-13 px-6 rounded-lg bg-[#282a2e] border border-[#4e4639]/50 text-[#e2e2e8] hover:text-[#e9c176] hover:border-[#e9c176]/50 font-['Outfit'] text-base transition-all duration-200"
            >
              <span>Conhecer a barbearia</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>
            </a>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div
          className="relative w-full rounded-xl overflow-hidden border border-[#e9c176]/25 bg-[#1a1c20] shadow-[0_20px_50px_rgba(0,0,0,0.7)] group cursor-pointer"
          onClick={() =>
            onImageClick?.({
              id: "hero-lounge",
              title: hero.image.badgeTitle,
              subtitle: hero.image.caption,
              imageUrl: hero.image.url,
              alt: hero.image.alt,
            })
          }
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#111317]">
            <img
              src={hero.image.url}
              alt={hero.image.alt}
              className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12]/40 via-transparent to-transparent hidden md:block" />
          </div>

          {/* Bottom Bar Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 backdrop-blur-md bg-[#0c0e12]/80 border-t border-[#4e4639]/30">
            <div>
              <span className="font-['Inter'] text-[11px] tracking-[0.2em] uppercase text-[#e9c176] font-semibold block mb-0.5">
                {hero.image.badgeTitle}
              </span>
              <p className="font-['Outfit'] text-sm sm:text-base text-[#e2e2e8] font-medium">
                {hero.image.caption}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#d1c5b4] font-['Inter'] text-xs bg-[#1e2024]/80 px-2.5 py-1 rounded border border-[#4e4639]/40">
              <span className="material-symbols-outlined text-[16px] text-[#e9c176]">
                verified
              </span>
              <span>{hero.image.badgeTag}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
