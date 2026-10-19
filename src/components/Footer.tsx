import React from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

export const Footer: React.FC = () => {
  const { footer } = BARBERSHOP_DATA;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0c0e12] border-t border-[#4e4639]/30 pt-14 pb-8">
      <div className="w-full px-5 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-1.5 cursor-pointer" onClick={handleScrollToTop}>
            <span className="font-['Outfit'] font-semibold text-lg sm:text-xl text-[#e2e2e8] uppercase tracking-wider hover:text-[#e9c176] transition-colors">
              {footer.title}
            </span>
            <span className="font-['Inter'] text-xs sm:text-sm text-[#9a8f80]">
              {footer.description}
            </span>
          </div>

          {/* Contact & Map links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href={`tel:${BARBERSHOP_DATA.rawPhone}`}
              className="flex items-center gap-2 text-[#d1c5b4] hover:text-[#e9c176] transition-colors font-['Inter'] text-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#e9c176]">
                call
              </span>
              <span>{BARBERSHOP_DATA.phone}</span>
            </a>

            <a
              href={BARBERSHOP_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#d1c5b4] hover:text-[#e9c176] transition-colors font-['Inter'] text-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#e9c176]">
                location_on
              </span>
              <span>Ver no Google Maps</span>
            </a>
          </div>
        </div>

        {/* Subfooter */}
        <div className="border-t border-[#4e4639]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-['Inter'] text-xs text-[#9a8f80]">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            <span className="font-['Inter'] text-[11px] tracking-wider uppercase text-[#9a8f80]">
              {footer.badge}
            </span>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="w-7 h-7 rounded bg-[#1e2024] hover:bg-[#282a2e] text-[#e9c176] flex items-center justify-center transition-colors"
              title="Voltar ao topo"
              aria-label="Voltar ao início da página"
            >
              <span className="material-symbols-outlined text-[16px]">
                arrow_upward
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
