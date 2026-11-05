import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Artwork } from '../types/artwork';
import { VortexSpiralSvg } from '../components/svg/VortexSpiralSvg';
import { ToroidFluxSvg } from '../components/svg/ToroidFluxSvg';
import { ArrowRight, Eye, Maximize2, Feather, Compass, Wind, Sparkles } from 'lucide-react';

interface HomePageProps {
  artworks: Artwork[];
  onOpenWallModal: (artworkSlug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ artworks, onOpenWallModal }) => {
  const { t, lang } = useLanguage();
  const { navigate, navigateToArtwork } = useNavigation();

  const heroArtwork = artworks[0];
  const featuredArtworks = [artworks[0], artworks[1], artworks[3]];
  const angelPreview = artworks.find((a) => a.coleccion === 'conexion-angelical') || artworks[3];

  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center bg-[#FAF7F2] dark:bg-[#080C14] overflow-hidden transition-colors duration-300">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-200/20 dark:bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#E5A93C]/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle background SVG vortex */}
        <div className="absolute -top-20 -right-20 pointer-events-none opacity-15 dark:opacity-20 hidden md:block">
          <VortexSpiralSvg size={650} strokeColor="#E5A93C" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Curatorial Headline and Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] font-mono mb-6">
                <span>{t('hero.badge')}</span>
                <span aria-hidden="true" className="text-stone-400 dark:text-stone-600">·</span>
                <span>70 × 40 cm</span>
                <span aria-hidden="true" className="text-stone-400 dark:text-stone-600">·</span>
                <span>Lino Belga</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial text-stone-900 dark:text-white leading-[1.12] tracking-tight mb-6 max-w-2xl text-balance">
                {t('hero.title')}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-xl mb-10">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button
                  type="button"
                  onClick={() => navigate('obras')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-black bg-[#E5A93C] hover:bg-[#F5B853] transition-all rounded cursor-pointer shadow-lg hover:shadow-[#E5A93C]/20 font-mono"
                >
                  <span>{lang === 'es' ? 'Ver catálogo de obras' : 'Explore all artworks'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('sobre-mi')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-stone-700 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:border-[#B45309] dark:hover:border-[#E5A93C] hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-all rounded cursor-pointer bg-white/60 dark:bg-stone-900/40 backdrop-blur-sm font-mono"
                >
                  <span>{lang === 'es' ? 'Conocer a la artista' : 'About the artist'}</span>
                </button>
              </div>

              {/* Verified metadata strip */}
              <div className="pt-8 border-t border-stone-200 dark:border-stone-800/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-stone-500 dark:text-stone-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] dark:bg-[#E5A93C]" />
                  <span>Formato vertical: 70 × 40 cm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  <span>Óleo, acrílico y pan de oro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                  <span>+15 sesiones grupales en Europa</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Artwork Placard (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-tr from-amber-400/20 via-[#E5A93C]/20 to-cyan-400/20 rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition duration-700" />

                <div className="relative bg-white dark:bg-[#0E1726] border border-stone-200 dark:border-[#E5A93C]/25 p-3.5 sm:p-4 rounded-lg shadow-xl dark:shadow-2xl">
                  <div
                    className="relative aspect-[2/3] overflow-hidden rounded bg-stone-100 dark:bg-black/40 cursor-pointer"
                    onClick={() => navigateToArtwork(heroArtwork.slug)}
                  >
                    <img
                      src={heroArtwork.imagenPrincipal}
                      alt={heroArtwork.alt[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {heroArtwork.placeholderNote && (
                      <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1.5 rounded text-[10px] text-amber-200 font-mono text-center">
                        {heroArtwork.placeholderNote}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                    <div>
                      <h3
                        onClick={() => navigateToArtwork(heroArtwork.slug)}
                        className="text-base font-editorial text-stone-900 dark:text-white tracking-wide hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
                      >
                        {heroArtwork.titulo[lang]}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                        {heroArtwork.medidas} · {heroArtwork.tecnica}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenWallModal(heroArtwork.slug)}
                        className="p-2 text-stone-600 dark:text-stone-300 hover:text-[#B45309] dark:hover:text-[#E5A93C] hover:bg-stone-100 dark:hover:bg-stone-800/80 rounded transition-colors cursor-pointer"
                        title={t('gallery.action.wall')}
                        aria-label="Ver obra en tu pared a escala real"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateToArtwork(heroArtwork.slug)}
                        className="p-2 text-stone-600 dark:text-stone-300 hover:text-[#B45309] dark:hover:text-[#E5A93C] hover:bg-stone-100 dark:hover:bg-stone-800/80 rounded transition-colors cursor-pointer"
                        title="Ver ficha completa"
                        aria-label="Ver ficha completa"
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

      {/* 2. EL CONCEPTO EN SÍNTESIS */}
      <section className="py-24 bg-[#F3EFEA] dark:bg-[#0A0F1A] border-t border-stone-200 dark:border-[#E5A93C]/10 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
              Vortex Art · Filosofía &amp; Forma
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-stone-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            <div className="w-12 h-0.5 bg-[#B45309] dark:bg-[#E5A93C] mx-auto mb-6" />
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {t('about.p1')} {t('about.p2')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#080C14] border border-stone-200 dark:border-stone-800 p-8 rounded-lg shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <div className="h-36 flex items-center justify-center mb-6">
                  <VortexSpiralSvg size={140} strokeColor="#E5A93C" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B45309] dark:text-[#E5A93C] uppercase mb-2">
                  <Wind className="w-3.5 h-3.5" />
                  <span>Espiral &amp; Movimiento</span>
                </div>
                <h3 className="text-xl font-editorial text-stone-900 dark:text-white mb-2">Dinámica de la Espiral</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  Líneas concéntricas que guían la mirada del espectador desde la periferia hacia un punto de calma silenciosa.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#080C14] border border-stone-200 dark:border-stone-800 p-8 rounded-lg shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <div className="h-36 flex items-center justify-center mb-6">
                  <ToroidFluxSvg size={140} strokeColor="#0284C7" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Resonancia Magnética</span>
                </div>
                <h3 className="text-xl font-editorial text-stone-900 dark:text-white mb-2">Flujo Continuo</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  Inspirado en la forma del campo toroidal que sostiene planetas y sistemas biológicos: una respiración incesante.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#080C14] border border-stone-200 dark:border-stone-800 p-8 rounded-lg shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <div className="h-36 flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full border border-purple-400/40 dark:border-purple-500/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-amber-400/40 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#E5A93C]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>La Mirada Contemplativa</span>
                </div>
                <h3 className="text-xl font-editorial text-stone-900 dark:text-white mb-2">Pausa en el Espacio</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  Colores y formas que actúan como ancla visual en un hogar o despacho, invitando a respirar y recuperar la presencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OBRAS DESTACADAS */}
      <section className="py-24 bg-[#FAF7F2] dark:bg-[#080C14] border-t border-stone-200 dark:border-[#E5A93C]/10 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-2">
                Selección de Colección
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial text-stone-900 dark:text-white">
                Obras Destacadas (70 × 40 cm)
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigate('obras')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B45309] dark:text-[#E5A93C] hover:underline transition-colors cursor-pointer self-start"
            >
              <span>{lang === 'es' ? 'Ver catálogo completo (13 obras)' : 'View all 13 artworks'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtworks.map((art) => (
              <div
                key={art.slug}
                className="group bg-white dark:bg-[#0E1726]/60 border border-stone-200 dark:border-stone-800/80 hover:border-[#E5A93C]/60 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-all duration-300"
              >
                <div
                  className="relative aspect-[2/3] w-full overflow-hidden bg-stone-100 dark:bg-black/40 cursor-pointer"
                  onClick={() => navigateToArtwork(art.slug)}
                >
                  <img
                    src={art.imagenPrincipal}
                    alt={art.alt[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWallModal(art.slug);
                      }}
                      className="p-2 bg-white/80 dark:bg-black/75 text-stone-700 dark:text-stone-300 hover:text-[#E5A93C] rounded-full backdrop-blur-md transition-colors cursor-pointer shadow-sm"
                      title={t('gallery.action.wall')}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 mb-1">
                      <span>{art.medidas}</span>
                      <span className="text-[#B45309] dark:text-[#E5A93C] uppercase">{art.coleccion.replace('-', ' ')}</span>
                    </div>
                    <h3
                      onClick={() => navigateToArtwork(art.slug)}
                      className="text-lg font-editorial text-stone-900 dark:text-white hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer mb-1"
                    >
                      {art.titulo[lang]}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-mono line-clamp-1 mb-4">
                      {lang === 'es' ? art.tecnica : art.tecnica_en}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenWallModal(art.slug)}
                      className="text-xs font-mono text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ver en tu pared</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateToArtwork(art.slug)}
                      className="text-xs font-mono uppercase tracking-wider text-[#B45309] dark:text-[#E5A93C] hover:underline transition-colors cursor-pointer font-medium"
                    >
                      Ver Ficha →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEDITATION & ANGELS PREVIEW */}
      <section className="py-24 bg-[#F5F2EB] dark:bg-[#0D1525] text-stone-900 dark:text-stone-100 border-t border-stone-200 dark:border-stone-800 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#FDE68A]">
                <Feather className="w-3.5 h-3.5" />
                <span>{t('angels.kicker')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-stone-900 dark:text-white">
                {t('angels.title')}
              </h2>
              <div className="w-12 h-0.5 bg-[#D97706]" />
              <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 font-light leading-relaxed">
                {t('angels.subtitle')}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('obras')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#D97706] rounded transition-colors cursor-pointer shadow-md"
                >
                  <span>Ver colección Meditation &amp; Angels</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div
                className="max-w-sm w-full bg-white dark:bg-[#121E33] p-3 rounded-lg border border-stone-200 dark:border-stone-700 shadow-xl cursor-pointer group"
                onClick={() => navigateToArtwork(angelPreview.slug)}
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded bg-stone-100 dark:bg-black/30">
                  <img
                    src={angelPreview.imagenPrincipal}
                    alt={angelPreview.alt[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-base font-editorial text-stone-900 dark:text-white font-medium">
                    {angelPreview.titulo[lang]}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                    {angelPreview.medidas} · Óleo translúcido y pan de oro
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ARTIST INVITATION STRIP */}
      <section className="py-20 bg-[#FAF7F2] dark:bg-[#080C14] border-t border-stone-200 dark:border-stone-800 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
            {lang === 'es' ? 'La Artista · Sylvia Pflücker' : 'The Artist · Sylvia Pflücker'}
          </span>
          <blockquote className="text-2xl sm:text-3xl font-editorial italic text-stone-900 dark:text-white mb-6">
            «{lang === 'es' ? 'El arte como expresión de energía y geometría.' : 'Art as an expression of energy and geometry.'}»
          </blockquote>
          <p className="text-sm text-stone-600 dark:text-stone-400 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            {t('about.artistBio')}
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('sobre-mi')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:border-[#B45309] dark:hover:border-[#E5A93C] hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors rounded cursor-pointer"
            >
              <span>{lang === 'es' ? 'Conocer a la Dra. Sylvia Pflücker' : 'About Dr. Sylvia Pflücker'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
