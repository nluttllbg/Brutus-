import React, { useState } from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

export const ServicesInquiry: React.FC = () => {
  const { ctaInquiry, quickOptions } = BARBERSHOP_DATA;
  const [selectedQuickOption, setSelectedQuickOption] = useState<string | null>(null);

  const getTargetUrl = () => {
    if (selectedQuickOption) {
      const match = quickOptions.find((o) => o.label === selectedQuickOption);
      if (match) return BARBERSHOP_DATA.getWhatsAppUrl(match.message);
    }
    return BARBERSHOP_DATA.getWhatsAppUrl(ctaInquiry.buttonLabel);
  };

  return (
    <section className="w-full px-5 md:px-8 lg:px-12 py-12 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#282a2e] via-[#1e2024] to-[#1a1c20] p-6 sm:p-10 lg:p-12 border border-[#e9c176]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle Ambient Gold Glow in background */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#e9c176]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#5c4304]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-[#e9c176] font-semibold">
                {ctaInquiry.badge}
              </span>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl text-[#e2e2e8] font-light leading-snug">
                {ctaInquiry.title}
              </h2>
              <p className="font-['Inter'] text-base sm:text-lg text-[#d1c5b4] max-w-2xl leading-relaxed">
                {ctaInquiry.description}
              </p>

              {/* Quick interest badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="font-['Inter'] text-xs text-[#9a8f80] mr-1">
                  Selecione seu interesse:
                </span>
                {quickOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() =>
                      setSelectedQuickOption(
                        selectedQuickOption === opt.label ? null : opt.label
                      )
                    }
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedQuickOption === opt.label
                        ? "bg-[#e9c176] text-[#412d00] font-semibold border-[#e9c176] shadow-sm"
                        : "bg-[#1e2024] text-[#d1c5b4] border-[#4e4639]/50 hover:border-[#e9c176]/50 hover:text-[#e9c176]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="flex items-start sm:items-center gap-2 text-[#9a8f80] text-xs sm:text-sm pt-2">
                <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0 mt-0.5 sm:mt-0">
                  info
                </span>
                <span>{ctaInquiry.disclaimer}</span>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
              <a
                href={getTargetUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 h-14 rounded-lg bg-[#e9c176] text-[#412d00] font-['Outfit'] text-base font-semibold tracking-wide hover:bg-[#e8c178] hover:shadow-[0_0_25px_rgba(233,193,118,0.4)] transition-all duration-200 active:scale-95 shadow-xl shadow-black/50 text-center"
              >
                <span className="material-symbols-outlined text-[22px]">
                  chat
                </span>
                <span>{ctaInquiry.buttonLabel}</span>
              </a>
              <span className="text-center lg:text-right font-['Inter'] text-[11px] text-[#9a8f80] mt-2.5 tracking-wider uppercase">
                {ctaInquiry.note}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
