import React from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

export const FinalCta: React.FC = () => {
  const { finalCta } = BARBERSHOP_DATA;

  return (
    <section className="w-full px-5 md:px-8 lg:px-12 py-16 lg:py-24 bg-[#0c0e12] border-t border-[#4e4639]/20">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#5c4304]/30 border border-[#e9c176]/30 text-[#e9c176]">
          <span className="material-symbols-outlined text-[18px]">schedule</span>
          <span className="font-['Inter'] text-xs tracking-widest uppercase font-semibold">
            {finalCta.badge}
          </span>
        </div>

        <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl text-[#e2e2e8] font-light tracking-tight">
          {finalCta.title}
        </h2>

        <p className="font-['Inter'] text-base sm:text-lg text-[#d1c5b4] max-w-xl leading-relaxed">
          {finalCta.description}
        </p>

        <div className="pt-3 w-full sm:w-auto">
          <a
            href={BARBERSHOP_DATA.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 h-14 rounded-lg bg-[#e9c176] text-[#412d00] font-['Outfit'] text-base font-semibold tracking-wide hover:bg-[#e8c178] hover:shadow-[0_0_25px_rgba(233,193,118,0.4)] transition-all duration-200 active:scale-95 shadow-xl shadow-black/60 text-center"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>{finalCta.buttonLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
