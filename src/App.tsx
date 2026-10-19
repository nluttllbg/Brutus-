import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ServicesInquiry } from "./components/ServicesInquiry";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LightboxModal } from "./components/LightboxModal";
import { BARBERSHOP_DATA, GalleryItem } from "./data/barbershop";

export default function App() {
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);

  const handleHeroOrAboutImageClick = (item: {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    alt: string;
  }) => {
    setModalItem({
      ...item,
      category: "Destaque",
    });
  };

  return (
    <div className="bg-[#111317] font-['Inter'] text-[#e2e2e8] min-h-screen flex flex-col selection:bg-[#c5a059] selection:text-[#412d00]">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#111317] flex-1">
        {/* Hero Section */}
        <Hero onImageClick={handleHeroOrAboutImageClick} />

        {/* About Section */}
        <About onImageClick={handleHeroOrAboutImageClick} />

        {/* Services Inquiry & Scheduling Section */}
        <ServicesInquiry />

        {/* Gallery Section */}
        <Gallery />

        {/* Location & Directions Section */}
        <Location />

        {/* Final CTA Section */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modal Lightbox for Hero/About if clicked directly */}
      {modalItem && (
        <LightboxModal
          items={[modalItem]}
          currentIndex={0}
          onClose={() => setModalItem(null)}
          onNavigate={() => {}}
        />
      )}
    </div>
  );
}
