import React from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
      aria-label="Atendimento rápido via WhatsApp"
    >
      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#282a2e] px-3.5 py-1.5 rounded-lg text-[#e2e2e8] font-['Inter'] text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-[#4e4639]/40 whitespace-nowrap hidden sm:block">
        Fale conosco
      </div>

      <a
        aria-label="Fale conosco pelo WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#c5a059] text-[#412d00] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:bg-[#e9c176] hover:scale-105 active:scale-95 transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(233,193,118,0.5)]"
        href={BARBERSHOP_DATA.getWhatsAppUrl()}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#e9c176] opacity-30 animate-ping pointer-events-none" />
        <span className="material-symbols-outlined text-[28px] relative z-10">
          chat
        </span>
      </a>
    </aside>
  );
};
