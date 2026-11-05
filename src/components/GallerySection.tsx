import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Artwork, CollectionType } from '../types/artwork';
import { Eye, Maximize2, MessageSquare, ArrowUpRight } from 'lucide-react';

interface GallerySectionProps {
  artworks: Artwork[];
  onOpenDetailModal: (artwork: Artwork) => void;
  onOpenWallModal: (artworkSlug: string) => void;
  onInquireWhatsapp: (artwork: Artwork) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  artworks,
  onOpenDetailModal,
  onOpenWallModal,
  onInquireWhatsapp,
}) => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | CollectionType>('all');

  const filteredArtworks =
    activeFilter === 'all'
      ? artworks
      : artworks.filter((art) => art.coleccion === activeFilter);

  const getStatusBadge = (status: Artwork['estado']) => {
    switch (status) {
      case 'disponible':
        return (
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
            {t('gallery.status.available')}
          </span>
        );
      case 'reservada':
        return (
          <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
            {t('gallery.status.reserved')}
          </span>
        );
      case 'vendida':
        return (
          <span className="text-[11px] font-mono text-stone-400 bg-stone-900 border border-stone-800 px-2 py-0.5 rounded">
            {t('gallery.status.sold')}
          </span>
        );
    }
  };

  return (
    <section id="galeria" className="py-28 bg-[#080C14] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
              {t('gallery.kicker')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-base text-stone-400 font-light max-w-xl">
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0E1726] border border-stone-800 rounded-lg self-start">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t('gallery.filter.all')}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('vortices')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'vortices'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t('gallery.filter.vortices')}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('geometria-sagrada')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'geometria-sagrada'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t('gallery.filter.geometry')}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('patrones-naturales')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'patrones-naturales'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t('gallery.filter.natural')}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('conexion-angelical')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'conexion-angelical'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t('gallery.filter.angelical')}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('colecciones-especiales')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'colecciones-especiales'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t('gallery.filter.special')}
            </button>
          </div>
        </div>

        {/* Gallery Grid (3 columns on desktop, 61 × 91 cm vertical aspect ratio 2:3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.slug}
              className="group flex flex-col bg-[#0B1220]/80 border border-stone-800/80 hover:border-[#E5A93C]/40 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-950/40"
            >
              {/* Canvas Image Container with hover depth effect that does NOT obstruct painting */}
              <div
                className="relative aspect-[2/3] w-full overflow-hidden bg-black/60 cursor-pointer"
                onClick={() => onOpenDetailModal(artwork)}
              >
                <img
                  src={artwork.imagenPrincipal}
                  alt={artwork.alt[lang]}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle vignette border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

                {/* Top Overlay Strip with Status & Quick Actions */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="pointer-events-auto">
                    {getStatusBadge(artwork.estado)}
                  </div>

                  <div className="flex items-center gap-1.5 pointer-events-auto opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWallModal(artwork.slug);
                      }}
                      className="p-2 bg-black/75 hover:bg-black text-stone-300 hover:text-[#E5A93C] rounded-full backdrop-blur-md transition-colors cursor-pointer"
                      title={t('gallery.action.wall')}
                      aria-label="Ver en tu pared a escala real"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetailModal(artwork);
                      }}
                      className="p-2 bg-black/75 hover:bg-black text-stone-300 hover:text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
                      title={t('gallery.action.detail')}
                      aria-label="Ampliar detalles"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Placeholder Notice */}
                {artwork.isPlaceholder && (
                  <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm border border-amber-500/20 px-2 py-1 rounded text-[10px] text-amber-200/90 font-mono text-center">
                    {t('gallery.placeholderBadge')}
                  </div>
                )}
              </div>

              {/* Artwork Placard & Curatorial Details */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-1.5">
                    <span>{artwork.medidas}</span>
                    <span>{artwork.ano}</span>
                  </div>

                  <h3
                    onClick={() => onOpenDetailModal(artwork)}
                    className="text-xl font-editorial text-white group-hover:text-[#E5A93C] transition-colors cursor-pointer mb-2"
                  >
                    {artwork.titulo[lang]}
                  </h3>

                  <p className="text-xs text-stone-400 font-mono mb-4 line-clamp-1">
                    {lang === 'es' ? artwork.tecnica : artwork.tecnica_en}
                  </p>

                  {artwork.frase && (
                    <p className="text-xs font-editorial italic text-stone-300 line-clamp-2 mb-6">
                      «{artwork.frase[lang]}»
                    </p>
                  )}
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenWallModal(artwork.slug)}
                    className="text-xs font-mono text-stone-300 hover:text-[#E5A93C] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t('gallery.action.wall')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onInquireWhatsapp(artwork)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Consultar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
