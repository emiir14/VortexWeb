import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { artworksData, getArtworkBySlug } from './data/artworks';
import { Artwork } from './types/artwork';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VortexExplanationSection } from './components/VortexExplanationSection';
import { SacredGeometrySection } from './components/SacredGeometrySection';
import { PerceptionSection } from './components/PerceptionSection';
import { GallerySection } from './components/GallerySection';
import { MeditationAngelsSection } from './components/MeditationAngelsSection';
import { FormatSection } from './components/FormatSection';
import { AboutSection } from './components/AboutSection';
import { MeditationsSection } from './components/MeditationsSection';
import { AcquisitionTrustSection } from './components/AcquisitionTrustSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WallScaleSimulatorModal } from './components/WallScaleSimulatorModal';
import { ArtworkDetailModal } from './components/ArtworkDetailModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

function MainApp() {
  const [selectedArtworkForDetail, setSelectedArtworkForDetail] = useState<Artwork | null>(null);
  const [selectedArtworkForWall, setSelectedArtworkForWall] = useState<Artwork | null>(null);
  const [selectedArtworkForContact, setSelectedArtworkForContact] = useState<string>('');

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000';

  const handleOpenDetailBySlug = (slug: string) => {
    const art = getArtworkBySlug(slug);
    if (art) setSelectedArtworkForDetail(art);
  };

  const handleOpenWallBySlug = (slug: string) => {
    const art = getArtworkBySlug(slug);
    if (art) setSelectedArtworkForWall(art);
  };

  const handleInquireWhatsapp = (artwork: Artwork) => {
    const message = encodeURIComponent(
      `Hola, me interesa la obra "${artwork.titulo.es}" (${artwork.medidas}) de tu colección. Me gustaría conocer su disponibilidad y detalles de adquisición.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenContactWithArtwork = (artworkTitle?: string) => {
    if (artworkTitle) {
      setSelectedArtworkForContact(artworkTitle);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-[#F3F4F6] flex flex-col relative selection:bg-[#E5A93C]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContactWithArtwork()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreGallery={() => {
            const galElem = document.getElementById('galeria');
            if (galElem) galElem.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreVortex={() => {
            const vortElem = document.getElementById('vortex-concepto');
            if (vortElem) vortElem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenWallModal={handleOpenWallBySlug}
          onOpenDetailModal={handleOpenDetailBySlug}
        />

        {/* 2. ¿Qué es un Vórtice? */}
        <VortexExplanationSection />

        {/* 3. Geometría Sagrada */}
        <SacredGeometrySection />

        {/* 4. ¿Cómo nos afecta lo que miramos? */}
        <PerceptionSection />

        {/* 5. Galería de Obras (61 × 91 cm) */}
        <GallerySection
          artworks={artworksData}
          onOpenDetailModal={(art) => setSelectedArtworkForDetail(art)}
          onOpenWallModal={handleOpenWallBySlug}
          onInquireWhatsapp={handleInquireWhatsapp}
        />

        {/* 6. Colección Meditation & Angels */}
        <MeditationAngelsSection
          artworks={artworksData}
          onOpenDetailModal={(art) => setSelectedArtworkForDetail(art)}
          onOpenWallModal={handleOpenWallBySlug}
          onInquireWhatsapp={handleInquireWhatsapp}
        />

        {/* 7. Formato y Dimensiones (61 × 91 cm) */}
        <FormatSection />

        {/* 8. Sobre Mí & Trayectoria */}
        <AboutSection />

        {/* 9. Meditaciones & Encuentros */}
        <MeditationsSection />

        {/* 10. Información de Compra y Confianza */}
        <AcquisitionTrustSection />

        {/* 11. Contacto y Adquisición */}
        <ContactSection
          artworks={artworksData}
          selectedArtworkTitle={selectedArtworkForContact}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Persistent WhatsApp Action Button */}
      <FloatingWhatsAppButton />

      {/* Modal 1: Wall Scale Simulator (61 × 91 cm en 4 salas) */}
      <WallScaleSimulatorModal
        artwork={selectedArtworkForWall}
        onClose={() => setSelectedArtworkForWall(null)}
        onInquire={(title) => handleOpenContactWithArtwork(title)}
      />

      {/* Modal 2: Artwork Detail & Macro Loupe Viewer */}
      <ArtworkDetailModal
        artwork={selectedArtworkForDetail}
        artworks={artworksData}
        onClose={() => setSelectedArtworkForDetail(null)}
        onNavigate={(art) => setSelectedArtworkForDetail(art)}
        onOpenWallModal={handleOpenWallBySlug}
        onInquireWhatsapp={handleInquireWhatsapp}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
