import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { VortexSpiralSvg } from './svg/VortexSpiralSvg';
import { Maximize2, ArrowRight, Eye } from 'lucide-react';
import { artworksData } from '../data/artworks';

interface HeroSectionProps {
  onExploreGallery: () => void;
  onExploreVortex: () => void;
  onOpenWallModal: (artworkSlug: string) => void;
  onOpenDetailModal: (artworkSlug: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreGallery,
  onExploreVortex,
  onOpenWallModal,
  onOpenDetailModal,
}) => {
  const { t, lang } = useLanguage();
  const heroArtwork = artworksData[0]; // Vortex Primordial (61x91cm)

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-20 flex items-center bg-[#080C14] overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#E5A93C]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating subtle hand-drawn SVG vortex in the background */}
      <div className="absolute -top-20 -right-20 pointer-events-none opacity-20 hidden md:block">
        <VortexSpiralSvg size={650} strokeColor="#E5A93C" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Curatorial Copy and Call to Actions (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Zero-Pill unboxed metadata kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5A93C] font-mono mb-6">
              <span>{t('hero.badge')}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>61 × 91 cm</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Lino Belga</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial text-white leading-[1.12] tracking-tight mb-6 max-w-2xl text-balance">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-xl mb-10">
              {t('hero.subtitle')}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onExploreGallery}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-black bg-[#E5A93C] hover:bg-[#F5B853] transition-all rounded cursor-pointer shadow-lg hover:shadow-[#E5A93C]/20"
              >
                <span>{t('hero.cta.explore')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreVortex}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-stone-200 border border-stone-700 hover:border-[#E5A93C] hover:text-[#E5A93C] transition-all rounded cursor-pointer bg-stone-900/40 backdrop-blur-sm"
              >
                <span>{t('hero.cta.discover')}</span>
              </button>
            </div>

            {/* Micro proof / Artist background context strip */}
            <div className="pt-8 border-t border-stone-800/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-stone-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                <span>Formato exacto: 61 × 91 cm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Óleo, acrílico y pan de oro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>+15 sesiones de meditación en Europa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Vertical Artwork Display (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Subtle back illumination matching painting palette */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 via-[#E5A93C]/20 to-cyan-500/30 rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition duration-700" />

              {/* Museum Presentation Box with exact 2:3 vertical proportion */}
              <div className="relative bg-[#0E1726] border border-[#E5A93C]/25 p-3.5 sm:p-4 rounded shadow-2xl">
                
                {/* Artwork Canvas Container */}
                <div className="relative aspect-[2/3] overflow-hidden rounded bg-black/40">
                  <img
                    src={heroArtwork.imagenPrincipal}
                    alt={heroArtwork.alt[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Placeholder indicator banner (clearly marked as requested) */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1.5 rounded text-[10px] text-amber-200/90 font-mono text-center">
                    {heroArtwork.placeholderNote}
                  </div>
                </div>

                {/* Museum Placard under painting */}
                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-editorial text-white tracking-wide">
                      {heroArtwork.titulo[lang]}
                    </h3>
                    <p className="text-xs text-stone-400 font-mono">
                      {heroArtwork.medidas} · {heroArtwork.tecnica}
                    </p>
                  </div>

                  {/* Actions: View on wall & Zoom */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenWallModal(heroArtwork.slug)}
                      className="p-2 text-stone-300 hover:text-[#E5A93C] hover:bg-stone-800/80 rounded transition-colors cursor-pointer"
                      title={t('gallery.action.wall')}
                      aria-label="Ver obra en tu pared a escala real"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenDetailModal(heroArtwork.slug)}
                      className="p-2 text-stone-300 hover:text-[#E5A93C] hover:bg-stone-800/80 rounded transition-colors cursor-pointer"
                      title={t('gallery.action.detail')}
                      aria-label="Ampliar y ver detalles de la obra"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
