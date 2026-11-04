import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import { artworksData, getArtworkBySlug } from './data/artworks';
import { Artwork } from './types/artwork';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { WallScaleSimulatorModal } from './components/WallScaleSimulatorModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { ArtworksPage } from './pages/ArtworksPage';
import { ArtworkDetailPage } from './pages/ArtworkDetailPage';
import { AboutPage } from './pages/AboutPage';
import { MeditationsPage } from './pages/MeditationsPage';
import { ContactPage } from './pages/ContactPage';

function RouterView() {
  const { currentRoute, selectedArtworkSlug, navigate } = useNavigation();
  const [wallModalArtwork, setWallModalArtwork] = useState<Artwork | null>(null);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000';

  const handleOpenWallModal = (slug: string) => {
    const art = getArtworkBySlug(slug);
    if (art) setWallModalArtwork(art);
  };

  const handleInquireWhatsapp = (artwork: Artwork) => {
    const message = encodeURIComponent(
      `Hola, me interesa la obra "${artwork.titulo.es}" (${artwork.medidas}) de tu colección. Me gustaría recibir información sobre su disponibilidad y adquisición.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWallInquire = () => {
    navigate('contacto');
  };

  // Render active section/page
  const renderPage = () => {
    if (currentRoute === 'obras' && selectedArtworkSlug) {
      const selectedArtwork = getArtworkBySlug(selectedArtworkSlug);
      if (selectedArtwork) {
        return (
          <ArtworkDetailPage
            artwork={selectedArtwork}
            artworks={artworksData}
            onOpenWallModal={handleOpenWallModal}
            onInquireWhatsapp={handleInquireWhatsapp}
          />
        );
      }
    }

    switch (currentRoute) {
      case 'obras':
        return (
          <ArtworksPage
            artworks={artworksData}
            onOpenWallModal={handleOpenWallModal}
            onInquireWhatsapp={handleInquireWhatsapp}
          />
        );
      case 'sobre-mi':
        return <AboutPage />;
      case 'meditaciones':
        return <MeditationsPage />;
      case 'contacto':
        return <ContactPage artworks={artworksData} />;
      case 'inicio':
      default:
        return (
          <HomePage
            artworks={artworksData}
            onOpenWallModal={handleOpenWallModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#080C14] text-stone-900 dark:text-[#F3F4F6] flex flex-col relative selection:bg-[#E5A93C]/30 selection:text-black dark:selection:text-white transition-colors duration-300">
      {/* Top Navbar with 4 clean links and theme toggle */}
      <Navbar />

      {/* Main Page View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Always Accessible Floating WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Global Wall Scale Simulator Modal (61 × 91 cm en 4 salas) */}
      <WallScaleSimulatorModal
        artwork={wallModalArtwork}
        onClose={() => setWallModalArtwork(null)}
        onInquire={handleWallInquire}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationProvider>
          <RouterView />
        </NavigationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
