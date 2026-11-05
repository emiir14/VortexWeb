import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Artwork, CollectionType } from '../types/artwork';
import { Eye, ArrowUpRight, Ruler, Layers, Shield, Maximize } from 'lucide-react';

interface ArtworksPageProps {
  artworks: Artwork[];
  onOpenWallModal: (artworkSlug: string) => void;
  onInquireWhatsapp: (artwork: Artwork) => void;
}

export const ArtworksPage: React.FC<ArtworksPageProps> = ({
  artworks,
  onOpenWallModal,
}) => {
  const { t, lang } = useLanguage();
  const { navigateToArtwork } = useNavigation();
  const [activeFilter, setActiveFilter] = useState<'all' | CollectionType>('all');

  const filteredArtworks =
    activeFilter === 'all'
      ? artworks
      : artworks.filter((art) => art.coleccion === activeFilter);

  const getStatusBadge = (status: Artwork['estado']) => {
    switch (status) {
      case 'disponible':
        return (
          <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded">
            ● {t('gallery.status.available')}
          </span>
        );
      case 'reservada':
        return (
          <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 px-2 py-0.5 rounded">
            ● {t('gallery.status.reserved')}
          </span>
        );
      case 'vendida':
        return (
          <span className="text-[11px] font-mono text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 px-2 py-0.5 rounded">
            ● {t('gallery.status.sold')}
          </span>
        );
    }
  };

  const specs = [
    {
      title: 'Formato vertical 70 × 40 cm',
      detail: '40 cm de ancho × 70 cm de alto (aprox. 16 × 28 in). Una proporción esbelta y armónica concebida para la contemplación en espacios contemporáneos.',
      icon: <Ruler className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      title: 'Lino belga de grano medio',
      detail: 'Preparado con imprimación tradicional al gesso que asegura adherencia permanente de los óleos y preserva el brillo del pan de oro.',
      icon: <Layers className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      title: 'Bastidor de pino secado al horno',
      detail: 'Listones con ensamble de cuñas ajustables y 3,5 cm de canto biselado, listos para ser colgados sin marco si se desea.',
      icon: <Shield className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      title: 'Escala para espacios contemporáneos',
      detail: 'Dimensiones concebidas para destacar sobre un sofá, una consola de entrada o una pared de meditación sin sobrecargar la estancia.',
      icon: <Maximize className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF7F2] dark:bg-[#080C14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
              Vortex Art · Sylvia Pflücker
            </span>
            <h1 className="text-4xl sm:text-5xl font-editorial text-stone-900 dark:text-white mb-4">
              {t('gallery.title')}
            </h1>
            <p className="text-base text-stone-600 dark:text-stone-400 font-light max-w-2xl leading-relaxed">
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-[#0E1726] border border-stone-300 dark:border-stone-800 rounded-lg self-start">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#E5A93C] text-black font-semibold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white'
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
                  : 'text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white'
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
                  : 'text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white'
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
                  : 'text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white'
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
                  : 'text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white'
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
                  : 'text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {t('gallery.filter.special')}
            </button>
          </div>
        </div>

        {/* Gallery Grid (3 columns, vertical 61 × 91 cm ratio 2:3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-28">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.slug}
              className="group flex flex-col bg-white dark:bg-[#0B1220]/80 border border-stone-200 dark:border-stone-800/80 hover:border-[#E5A93C]/60 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-all duration-500 hover:shadow-2xl"
            >
              {/* Canvas Container */}
              <div
                className="relative aspect-[2/3] w-full overflow-hidden bg-stone-100 dark:bg-black/60 cursor-pointer"
                onClick={() => navigateToArtwork(artwork.slug)}
              >
                <img
                  src={artwork.imagenPrincipal}
                  alt={artwork.alt[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

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
                      className="p-2 bg-white/80 dark:bg-black/75 text-stone-700 dark:text-stone-300 hover:text-[#B45309] dark:hover:text-[#E5A93C] rounded-full backdrop-blur-md transition-colors cursor-pointer shadow-sm"
                      title={t('gallery.action.wall')}
                      aria-label="Ver en tu pared"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {artwork.isPlaceholder && (
                  <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm border border-amber-500/20 px-2 py-1 rounded text-[10px] text-amber-200/90 font-mono text-center">
                    {t('gallery.placeholderBadge')}
                  </div>
                )}
              </div>

              {/* Placard */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 mb-1.5">
                    <span>{artwork.medidas}</span>
                    <span>{artwork.ano}</span>
                  </div>

                  <h3
                    onClick={() => navigateToArtwork(artwork.slug)}
                    className="text-xl font-editorial text-stone-900 dark:text-white group-hover:text-[#B45309] dark:group-hover:text-[#E5A93C] transition-colors cursor-pointer mb-2"
                  >
                    {artwork.titulo[lang]}
                  </h3>

                  <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-4 line-clamp-1">
                    {lang === 'es' ? artwork.tecnica : artwork.tecnica_en}
                  </p>

                  {artwork.frase && (
                    <p className="text-xs font-editorial italic text-stone-600 dark:text-stone-300 line-clamp-2 mb-6">
                      «{artwork.frase[lang]}»
                    </p>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenWallModal(artwork.slug)}
                    className="text-xs font-mono text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-[#E5A93C] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver en pared</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateToArtwork(artwork.slug)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer font-semibold shadow-sm"
                  >
                    <span>Ficha y compra</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Technical Format Specs Section */}
        <div className="p-8 sm:p-12 bg-white dark:bg-[#0A0E18] border border-stone-200 dark:border-stone-800 rounded-xl mb-16 shadow-sm dark:shadow-none">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-2">
              Especificaciones Técnicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial text-stone-900 dark:text-white mb-4">
              El Formato de Referencia: 70 × 40 cm
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
              La artista ha seleccionado esta dimensión vertical con rigor: acompaña la escala del cuerpo humano, preside con elegancia muros de 2,60 m de altura estándar y concentra la fuerza visual de la composición en un marco equilibrado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((item, i) => (
              <div key={i} className="p-4 bg-stone-50 dark:bg-[#0E1726]/60 border border-stone-200 dark:border-stone-800/80 rounded">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-sm font-medium text-stone-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
