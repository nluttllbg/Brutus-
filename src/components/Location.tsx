import React, { useState } from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

export const Location: React.FC = () => {
  const { location } = BARBERSHOP_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BARBERSHOP_DATA.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="localizacao"
      className="w-full px-5 md:px-8 lg:px-12 py-16 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-[#e9c176] font-['Inter'] text-xs font-semibold tracking-widest uppercase">
            <span className="material-symbols-outlined text-[18px]">
              location_on
            </span>
            <span>{location.sectionTag}</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-[40px] text-[#e2e2e8] font-light leading-snug">
            {location.title}
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#d1c5b4]">
            {location.description}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#1e2024] border border-[#4e4639]/30 shadow-xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="font-['Inter'] text-xs text-[#e9c176] tracking-widest uppercase font-semibold">
                  {location.badge}
                </span>
                <h3 className="font-['Outfit'] text-2xl font-semibold text-[#e2e2e8]">
                  {location.name}
                </h3>
                <p className="font-['Inter'] text-sm text-[#9a8f80]">
                  {location.subtext}
                </p>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#4e4639]/25 pt-5">
                {/* Phone row with copy button */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-lg bg-[#1a1c20]/60 border border-[#4e4639]/20 hover:border-[#e9c176]/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#e9c176] text-[20px] mt-0.5">
                      call
                    </span>
                    <div className="flex flex-col">
                      <a
                        href={`tel:${BARBERSHOP_DATA.rawPhone}`}
                        className="font-['Inter'] text-sm sm:text-base text-[#e2e2e8] font-medium hover:text-[#e9c176] transition-colors"
                      >
                        {location.phoneLabel}
                      </a>
                      <span className="font-['Inter'] text-xs text-[#9a8f80]">
                        {location.phoneNote}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-md bg-[#282a2e] text-[#d1c5b4] hover:text-[#e9c176] hover:bg-[#333539] transition-colors text-xs flex items-center gap-1 shrink-0"
                    title="Copiar telefone"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copied ? "check" : "content_copy"}
                    </span>
                    <span className="hidden sm:inline">
                      {copied ? "Copiado!" : "Copiar"}
                    </span>
                  </button>
                </div>

                {/* Google Maps route info */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1c20]/60 border border-[#4e4639]/20">
                  <span className="material-symbols-outlined text-[#e9c176] text-[20px] mt-0.5">
                    map
                  </span>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] text-sm sm:text-base text-[#e2e2e8] font-medium">
                      {location.mapRouteTitle}
                    </span>
                    <span className="font-['Inter'] text-xs text-[#9a8f80]">
                      {location.mapRouteNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <a
                href={BARBERSHOP_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#e9c176] text-[#412d00] font-['Outfit'] text-base font-semibold tracking-wide hover:bg-[#e8c178] hover:shadow-[0_0_20px_rgba(233,193,118,0.3)] transition-all duration-200 active:scale-95 text-center"
              >
                <span className="material-symbols-outlined text-[20px]">
                  directions
                </span>
                <span>{location.buttonLabel}</span>
              </a>
            </div>
          </div>

          {/* Visual Map Preview Card */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#4e4639]/30 bg-[#1e2024] min-h-[340px] sm:min-h-[400px] relative flex flex-col justify-between p-6 shadow-xl">
            {/* Dark Styled Map Grid Texture */}
            <div className="absolute inset-0 bg-[#14161a]">
              <div
                className="w-full h-full opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(#e9c176 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Map road stylized vector lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="35%"
                  x2="100%"
                  y2="65%"
                  stroke="#e9c176"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <line
                  x1="25%"
                  y1="0"
                  x2="75%"
                  y2="100%"
                  stroke="#9a8f80"
                  strokeWidth="1.5"
                />
                <line
                  x1="60%"
                  y1="0"
                  x2="40%"
                  y2="100%"
                  stroke="#e9c176"
                  strokeWidth="1.5"
                />
                <circle
                  cx="50%"
                  cy="45%"
                  r="60"
                  fill="none"
                  stroke="#e9c176"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="50%"
                  cy="45%"
                  r="110"
                  fill="none"
                  stroke="#e9c176"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
              </svg>
            </div>

            {/* Central Animated Pin */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-[#e9c176]/20 animate-ping" />
                <span className="absolute w-10 h-10 rounded-full bg-[#5c4304]/60 border border-[#e9c176]/40" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#e9c176] text-[#412d00] flex items-center justify-center shadow-lg shadow-black/60">
                  <span className="material-symbols-outlined text-[28px]">
                    content_cut
                  </span>
                </div>
              </div>
              <div className="mt-3 px-3 py-1 rounded bg-[#0c0e12]/90 border border-[#e9c176]/30 text-[#e9c176] font-['Outfit'] font-semibold text-xs tracking-wider uppercase shadow-md">
                Brutus Barbershop
              </div>
            </div>

            {/* Floating Glass Bar at Bottom */}
            <div className="relative z-10 p-4 rounded-lg bg-[#0c0e12]/90 backdrop-blur-md border border-[#4e4639]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e9c176]/20 text-[#e9c176] flex items-center justify-center shrink-0 border border-[#e9c176]/30">
                  <span className="material-symbols-outlined text-[24px]">
                    pin_drop
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Outfit'] font-medium text-sm sm:text-base text-[#e2e2e8]">
                    {location.cardMapTitle}
                  </span>
                  <span className="font-['Inter'] text-xs text-[#9a8f80]">
                    {location.cardMapSubtitle}
                  </span>
                </div>
              </div>
              <a
                href={BARBERSHOP_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#e9c176] font-['Outfit'] font-semibold text-sm hover:underline hover:text-[#ffdea5] transition-colors"
              >
                <span>{location.openMapLabel}</span>
                <span className="material-symbols-outlined text-[18px]">
                  launch
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
