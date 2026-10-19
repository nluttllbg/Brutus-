import React, { useState, useEffect } from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

interface NavbarProps {
  onOpenScheduleModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScheduleModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["inicio", "a-barbearia", "galeria", "localizacao"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        if (sectionId === "inicio" && window.scrollY < 300) {
          setActiveSection("inicio");
          break;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio", id: "inicio" },
    { label: "A barbearia", href: "#a-barbearia", id: "a-barbearia" },
    { label: "Galeria", href: "#galeria", id: "galeria" },
    { label: "Localização", href: "#localizacao", id: "localizacao" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("inicio");
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0e12]/95 backdrop-blur-xl border-b border-[#4e4639]/30 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            : "bg-[#0c0e12]/80 backdrop-blur-md border-b border-transparent shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
        }`}
      >
        <div className="h-20 w-full px-5 md:px-8 lg:px-12 max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-2 group text-left transition-transform duration-200 active:scale-98"
            aria-label="Brutus Barbershop - Página Inicial"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-['Outfit'] font-semibold text-lg sm:text-xl tracking-wider uppercase text-[#e2e2e8] group-hover:text-[#e9c176] transition-colors">
                  BRUTUS
                </span>
                <span className="px-1.5 py-0.5 rounded-[2px] bg-[#5c4304]/40 text-[#e9c176] font-['Inter'] text-[10px] font-semibold border border-[#e9c176]/30 tracking-widest uppercase">
                  BARBER
                </span>
              </div>
              <span className="font-['Inter'] text-[10px] font-semibold tracking-[0.25em] text-[#9a8f80] uppercase">
                BARBERSHOP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-['Outfit'] text-[15px] font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#e9c176]"
                      : "text-[#d1c5b4] hover:text-[#e9c176]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e9c176] rounded-full shadow-[0_0_8px_rgba(233,193,118,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={BARBERSHOP_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 h-10 rounded-lg bg-[#c5a059] text-[#412d00] font-['Inter'] font-semibold text-xs tracking-wider uppercase hover:bg-[#e9c176] transition-all duration-200 active:scale-95 shadow-md shadow-black/40"
            >
              Agendar pelo WhatsApp
            </a>

            {/* Profile / Barber avatar badge */}
            <div
              className="w-9 h-9 rounded-full bg-[#e9c176] flex items-center justify-center shrink-0 shadow-md shadow-black/30 border border-[#ffdea5]/40"
              title="Atendimento Personalizado"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-[#412d00] text-[20px]">
                person
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#d1c5b4] hover:text-[#e9c176] hover:bg-[#282a2e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e9c176]/50"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0e12]/98 border-b border-[#4e4639]/40 backdrop-blur-2xl px-5 py-6 animate-fadeIn">
            <nav className="flex flex-col gap-4" aria-label="Navegação Mobile">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-['Outfit'] text-lg font-medium py-2 px-3 rounded-md transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#5c4304]/30 text-[#e9c176] border-l-2 border-[#e9c176]"
                        : "text-[#e2e2e8] hover:bg-[#1e2024] hover:text-[#e9c176]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[18px] text-[#9a8f80]">
                      chevron_right
                    </span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-[#4e4639]/30 flex flex-col gap-2">
                <a
                  href={BARBERSHOP_DATA.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-[#e9c176] text-[#412d00] font-['Outfit'] font-semibold text-sm tracking-wide hover:bg-[#e8c178] transition-all shadow-lg shadow-black/50"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Agendar pelo WhatsApp</span>
                </a>
                <a
                  href={`tel:${BARBERSHOP_DATA.rawPhone}`}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-[#1e2024] text-[#e2e2e8] font-['Inter'] text-sm hover:text-[#e9c176] border border-[#4e4639]/30 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#e9c176]">call</span>
                  <span>{BARBERSHOP_DATA.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
