import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Artwork } from '../types/artwork';
import { Eye, Maximize2, MessageSquare, Feather, Sun, Sparkles } from 'lucide-react';

interface MeditationAngelsSectionProps {
  artworks: Artwork[];
  onOpenDetailModal: (artwork: Artwork) => void;
  onOpenWallModal: (artworkSlug: string) => void;
  onInquireWhatsapp: (artwork: Artwork) => void;
}

export const MeditationAngelsSection: React.FC<MeditationAngelsSectionProps> = ({
  artworks,
  onOpenDetailModal,
  onOpenWallModal,
  onInquireWhatsapp,
}) => {
  const { t, lang } = useLanguage();
  const angelArtworks = artworks.filter((art) => art.coleccion === 'conexion-angelical');

  return (
    <section
      id="conexion-angelical"
      className="py-28 bg-[#FAF8F5] text-stone-900 border-t border-stone-200 relative transition-colors duration-700"
    >
      {/* Delicate background illumination simulating natural dawn window light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curatorial Header of the Light Universe */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B45309] mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>{t('angels.kicker')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-stone-900 mb-6">
            {t('angels.title')}
          </h2>

          <div className="w-12 h-0.5 bg-[#D97706] mb-8" />

          <p className="text-lg text-stone-700 leading-relaxed font-light mb-4">
            {t('angels.subtitle')}
          </p>
        </div>

        {/* 2-Column Asymmetric Featured Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Main Angel Canvas Display (6 cols) */}
          {angelArtworks[0] && (
            <div className="lg:col-span-6 flex justify-center">
              <div className="max-w-md w-full bg-white p-4 rounded shadow-xl border border-stone-200">
                <div
                  className="relative aspect-[2/3] overflow-hidden rounded bg-stone-100 cursor-pointer group"
                  onClick={() => onOpenDetailModal(angelArtworks[0])}
                >
                  <img
                    src={angelArtworks[0].imagenPrincipal}
                    alt={angelArtworks[0].alt[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-3 right-3 flex gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWallModal(angelArtworks[0].slug);
                      }}
                      className="p-2 bg-white/80 hover:bg-white text-stone-700 rounded-full shadow-md backdrop-blur-sm cursor-pointer"
                      title={t('gallery.action.wall')}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetailModal(angelArtworks[0]);
                      }}
                      className="p-2 bg-white/80 hover:bg-white text-stone-700 rounded-full shadow-md backdrop-blur-sm cursor-pointer"
                      title={t('gallery.action.detail')}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-editorial text-stone-900 font-medium">
                      {angelArtworks[0].titulo[lang]}
                    </h3>
                    <p className="text-xs font-mono text-stone-500">
                      {angelArtworks[0].medidas} · {angelArtworks[0].tecnica}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onInquireWhatsapp(angelArtworks[0])}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-[#E5A93C] hover:bg-[#D97706] rounded font-medium transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Consultar</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Descriptive text and philosophy of the series (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white/80 p-8 rounded border border-stone-200 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 block mb-2">
                Presencia y Silencio
              </span>
              <h3 className="text-2xl font-editorial text-stone-900 mb-4">
                La luz como refugio interior
              </h3>
              <p className="text-stone-600 leading-relaxed font-light mb-4">
                A diferencia de los contrastes intensos de la serie Vórtex, en <em>Meditation & Angels</em> la materia se aligera. Los óleos se aplican en veladuras casi transparentes sobre blanco de titanio y alabastro, permitiendo que el pan de oro refleje la luz natural de la habitación a diferentes horas del día.
              </p>
              <p className="text-stone-600 leading-relaxed font-light">
                Las figuras angélicas no responden a un dogma religioso tradicional: son metáforas de cobijo, levedad y acompañamiento sereno en el espacio de quien vive con ellas.
              </p>
            </div>

            <div className="p-6 bg-amber-50/70 rounded border border-amber-200/60">
              <blockquote className="text-lg font-editorial italic text-amber-950">
                {t('angels.quote')}
              </blockquote>
            </div>
          </div>

        </div>

        {/* Secondary Angel Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {angelArtworks.slice(1).map((artwork) => (
            <div
              key={artwork.slug}
              className="bg-white p-5 rounded border border-stone-200 shadow-md flex flex-col sm:flex-row gap-6 items-center"
            >
              <div
                className="w-full sm:w-44 aspect-[2/3] shrink-0 overflow-hidden rounded bg-stone-100 cursor-pointer group relative"
                onClick={() => onOpenDetailModal(artwork)}
              >
                <img
                  src={artwork.imagenPrincipal}
                  alt={artwork.alt[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                    <span>{artwork.medidas}</span>
                    <span className="font-semibold text-amber-700">{artwork.estado}</span>
                  </div>
                  <h3
                    onClick={() => onOpenDetailModal(artwork)}
                    className="text-xl font-editorial text-stone-900 hover:text-amber-800 transition-colors cursor-pointer mb-2"
                  >
                    {artwork.titulo[lang]}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 mb-3">
                    {artwork.tecnica}
                  </p>
                  {artwork.frase && (
                    <p className="text-xs font-editorial italic text-stone-600 mb-4">
                      «{artwork.frase[lang]}»
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onOpenWallModal(artwork.slug)}
                    className="text-xs font-mono text-stone-600 hover:text-black flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver en pared</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onInquireWhatsapp(artwork)}
                    className="ml-auto px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-[#E5A93C] hover:bg-[#D97706] rounded font-medium transition-colors cursor-pointer"
                  >
                    Consultar
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
