import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Palette, Layers, Compass, Sparkles, ArrowRight, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useNavigation();

  const timelineMilestones = [
    {
      year: t('about.timeline.1.year'),
      title: lang === 'es' ? 'Formación Artística en Perú' : 'Fine Arts in Peru',
      desc: lang === 'es'
        ? 'Estudios de bellas artes, exploración clásica de pigmentos, composición geométrica y primeros desarrollos escultóricos.'
        : 'Fine arts academic training, exploration of pigments, geometric draftsmanship, and early sculptural inquiries.',
      icon: <Palette className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.2.year'),
      title: lang === 'es' ? 'Taller en Florida & Práctica Mixta' : 'Florida Studio & Mixed Media',
      desc: lang === 'es'
        ? 'Radicada en Florida, integra técnicas mixtas, texturas táctiles de gran riqueza, pan de oro y relieves escultóricos.'
        : 'Based in Florida, blending mixed techniques, richly textured surfaces, fine gold leaf, and sculptural elements.',
      icon: <Layers className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.3.year'),
      title: lang === 'es' ? 'Génesis de Vortex Art' : 'Genesis of Vortex Art',
      desc: lang === 'es'
        ? 'Investigación continua sobre la energía de los vórtices, la geometría sagrada y los patrones dinámicos de la naturaleza.'
        : 'Ongoing exploration of vortex energy, sacred geometry, and the rhythmic dynamic patterns of the natural world.',
      icon: <Compass className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.4.year'),
      title: lang === 'es' ? 'Poder Transformador de los Espacios' : 'Transforming Power of Space',
      desc: lang === 'es'
        ? 'Obras concebidas para generar atmósferas vivas, transmitir resiliencia y propiciar una conexión contemplativa profunda.'
        : 'Artworks crafted to establish living atmospheres, convey emotional resilience, and inspire contemplative stillness.',
      icon: <Sparkles className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF7F2] dark:bg-[#080C14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-stone-200 dark:border-stone-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
            {t('about.kicker')} · Vortex Art
          </span>
          <h1 className="text-4xl sm:text-5xl font-editorial text-stone-900 dark:text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-sm font-mono text-[#B45309] dark:text-[#E5A93C]">
            Dra. Sylvia Pflücker — {t('about.subtitle')}
          </p>
        </div>

        {/* 2-Column Story Grid: Artist Portrait + Official Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-[#0E1726] p-3.5 rounded-lg border border-stone-200 dark:border-stone-800 shadow-xl dark:shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-stone-100 dark:bg-black/40">
                <img
                  src="/artista/retrato_estudio.jpg"
                  alt="Dra. Sylvia Pflücker en su estudio"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 text-center">
                <h3 className="text-lg font-editorial text-stone-900 dark:text-white">
                  Dra. Sylvia Pflücker
                </h3>
                <p className="text-xs font-editorial italic text-stone-600 dark:text-stone-300 mt-0.5">
                  «El arte como expresión de energía y geometría.»
                </p>
                <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 block mt-1">
                  Artista contemporánea radicada en Florida
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-600 dark:text-stone-300 font-light leading-relaxed">
            <p className="text-xl text-stone-900 dark:text-white font-normal leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="text-base leading-relaxed">
              {t('about.p2')}
            </p>

            <p className="text-base leading-relaxed">
              {t('about.p3')}
            </p>

            {/* Philosophy Callout */}
            <div className="p-6 bg-amber-50/60 dark:bg-[#0E1726] border border-amber-200 dark:border-[#E5A93C]/30 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] font-semibold">
                  {t('about.philosophyTitle')}
                </h2>
              </div>
              <p className="text-stone-800 dark:text-stone-200 text-sm font-editorial italic leading-relaxed">
                «{t('about.philosophyDesc')}»
              </p>
            </div>

            {/* The Artist Bio Card */}
            <div className="p-6 bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-lg space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">
                {t('about.artistTitle')} · Artista Contemporánea
              </h3>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                {t('about.artistBio')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('obras')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer shadow-md"
              >
                <span>Explorar nuestra galería</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('contacto')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-800 hover:border-stone-500 dark:hover:border-stone-700 rounded transition-colors cursor-pointer bg-white dark:bg-transparent shadow-sm dark:shadow-none"
              >
                <span>Consultar con la artista</span>
              </button>
            </div>
          </div>

        </div>

        {/* Gallery Exhibition Showcase: Real-world gallery presentation */}
        <div className="mb-24 bg-white dark:bg-[#0B1220] border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative bg-stone-100 dark:bg-black/60 overflow-hidden flex items-center justify-center">
              <img
                src="/artista/presentacion_galeria.jpg"
                alt="Presentación de obras de la Dra. Sylvia Pflücker en galería de arte contemporáneo"
                className="w-full h-full object-cover min-h-[380px] max-h-[580px]"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-amber-200 px-3 py-1.5 rounded text-xs font-mono">
                {lang === 'es' ? 'Presentación en Galería de Arte' : 'Contemporary Gallery Exhibition'}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#0E1726]/60">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
                  {lang === 'es' ? 'Presencia en Sala & Escala' : 'Gallery Setting & Scale'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial text-stone-900 dark:text-white mb-4">
                  {lang === 'es' ? 'El poder transformador en el espacio' : 'Transformative Space Presence'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed mb-6">
                  {lang === 'es'
                    ? 'Registro de la presentación de la Dra. Sylvia Pflücker en sala de exhibición. Cada pintura en formato vertical (70 × 40 cm) está concebida para entablar un diálogo directo con la arquitectura, respondiendo de manera vibrante a la iluminación y creando un punto focal de quietud y contemplación.'
                    : 'Documentation from Dr. Sylvia Pflücker’s contemporary gallery exhibition. Each vertical 70 × 40 cm canvas establishes a serene dialogue with modern architecture, responding dynamically to focal lighting and breathing stillness into the room.'}
                </p>

                <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] dark:bg-[#E5A93C] mt-1 shrink-0" />
                    <span>{lang === 'es' ? 'Obras en sala: Vortex No. 03 · Geometría No. 01 · Geometría No. 02' : 'Artworks on display: Vortex No. 03 · Geometry No. 01 · Geometry No. 02'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] dark:bg-[#E5A93C] mt-1 shrink-0" />
                    <span>{lang === 'es' ? 'Lienzo de lino belga montado con moldura contemporánea de 3,5 cm' : 'Belgian linen canvas mounted in contemporary 3.5 cm frame'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] dark:bg-[#E5A93C] mt-1 shrink-0" />
                    <span>{lang === 'es' ? 'Superficies de gran textura, pigmentos minerales y vibración' : 'High-texture surfaces, mineral pigments and vibrational resonance'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => navigate('obras')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer shadow-sm"
                >
                  <span>{lang === 'es' ? 'Ver catálogo de obras en sala' : 'Explore all artworks'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline Section */}
        <div className="pt-12 border-t border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-2">
              {lang === 'es' ? 'Práctica & Trayectoria' : 'Practice & Background'}
            </span>
            <h2 className="text-3xl font-editorial text-stone-900 dark:text-white">
              {t('about.timeline.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((m, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#0E1726]/70 border border-stone-200 dark:border-stone-800 p-6 rounded-lg relative flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B45309] dark:text-[#E5A93C] bg-amber-50 dark:bg-[#E5A93C]/10 border border-amber-200 dark:border-[#E5A93C]/20 px-2 py-0.5 rounded">
                      {m.year}
                    </span>
                    <div className="p-2 rounded bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                      {m.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-editorial text-stone-900 dark:text-white mb-2 font-medium">
                    {m.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
