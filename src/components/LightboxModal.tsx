import React, { useEffect, useCallback } from "react";
import { GalleryItem } from "../data/barbershop";

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl animate-fadeIn p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização da imagem ampliada"
    >
      {/* Top Bar with Counter and Close */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e2024]/80 border border-[#4e4639]/40 text-[#e9c176] font-['Inter'] text-xs">
          <span className="material-symbols-outlined text-[16px]">photo_camera</span>
          <span>
            {currentIndex + 1} de {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#1e2024]/90 border border-[#4e4639]/50 text-[#e2e2e8] hover:text-[#e9c176] hover:bg-[#282a2e] flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Fechar visualizador"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1e2024]/90 border border-[#4e4639]/50 text-[#e2e2e8] hover:text-[#e9c176] hover:bg-[#282a2e] hover:scale-105 flex items-center justify-center transition-all shadow-xl"
        aria-label="Foto anterior"
      >
        <span className="material-symbols-outlined text-[28px]">chevron_left</span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1e2024]/90 border border-[#4e4639]/50 text-[#e2e2e8] hover:text-[#e9c176] hover:bg-[#282a2e] hover:scale-105 flex items-center justify-center transition-all shadow-xl"
        aria-label="Próxima foto"
      >
        <span className="material-symbols-outlined text-[28px]">chevron_right</span>
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden border border-[#e9c176]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#111317]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 px-6 py-3 rounded-lg bg-[#1e2024]/90 backdrop-blur-md border border-[#4e4639]/30 text-center max-w-lg shadow-xl">
          <h3 className="font-['Outfit'] font-semibold text-lg text-[#e2e2e8]">
            {currentItem.title}
          </h3>
          <p className="font-['Inter'] text-sm text-[#d1c5b4] mt-0.5">
            {currentItem.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
