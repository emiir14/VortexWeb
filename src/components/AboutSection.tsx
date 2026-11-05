import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Sparkles, Palette, Layers, Eye, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, lang } = useLanguage();

  const timelineMilestones = [
    {
      year: t('about.timeline.1.year'),
      title: lang === 'es' ? 'Formación Artística en Perú' : 'Fine Arts in Peru',
      desc: lang === 'es'
        ? 'Estudios de bellas artes, exploración clásica de pigmentos, composición geométrica y primeros desarrollos escultóricos.'
        : 'Fine arts academic training, exploration of pigments, geometric draftsmanship, and early sculptural inquiries.',
      icon: <Palette className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.2.year'),
      title: lang === 'es' ? 'Taller en Florida & Práctica Mixta' : 'Florida Studio & Mixed Media',
      desc: lang === 'es'
        ? 'Radicada en Florida, integra técnicas mixtas, texturas táctiles de gran riqueza, pan de oro y relieves escultóricos.'
        : 'Based in Florida, blending mixed techniques, richly textured surfaces, fine gold leaf, and sculptural elements.',
      icon: <Layers className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.3.year'),
      title: lang === 'es' ? 'Génesis de Vortex Art' : 'Genesis of Vortex Art',
      desc: lang === 'es'
        ? 'Investigación continua sobre la energía de los vórtices, la geometría sagrada y los patrones dinámicos de la naturaleza.'
        : 'Ongoing exploration of vortex energy, sacred geometry, and the rhythmic dynamic patterns of the natural world.',
      icon: <Compass className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.4.year'),
      title: lang === 'es' ? 'Poder Transformador de los Espacios' : 'Transforming Power of Space',
      desc: lang === 'es'
        ? 'Obras concebidas para generar atmósferas vivas, transmitir resiliencia y propiciar una conexión contemplativa profunda.'
        : 'Artworks crafted to establish living atmospheres, convey emotional resilience, and inspire contemplative stillness.',
      icon: <Sparkles className="w-4 h-4 text-[#E5A93C]" />,
    },
  ];

  return (
    <section id="sobre-mi" className="py-28 bg-[#0A0E18] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
            {t('about.kicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-12 h-0.5 bg-[#E5A93C] mb-6" />
          <p className="text-base font-mono text-[#E5A93C]/90">
            {t('brand.name')} · {t('about.name')} — {t('about.subtitle')}
          </p>
        </div>

        {/* 2-Column Story Grid: Artist Portrait + Official Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-[#0E1726] p-3.5 rounded-lg border border-stone-800 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-black/40">
                <img
                  src="/artista/retrato_estudio.jpg"
                  alt="Sylvia Pflücker en su estudio de arte"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 text-center">
                <p className="text-base font-editorial text-white">
                  Dra. Sylvia Pflücker
                </p>
                <p className="text-xs font-editorial italic text-stone-300 mt-0.5">
                  «El arte como expresión de energía y geometría.»
                </p>
                <span className="text-[11px] font-mono text-stone-500 block mt-1">
                  Artista plástica contemporánea · Florida
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 font-light leading-relaxed">
            <p className="text-lg text-white font-normal leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="text-base leading-relaxed">
              {t('about.p2')}
            </p>

            <p className="text-base leading-relaxed">
              {t('about.p3')}
            </p>

            {/* Philosophy Callout */}
            <div className="p-6 bg-[#0E1726] border border-[#E5A93C]/30 rounded-lg space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E5A93C]" />
                <h3 className="text-sm font-mono uppercase tracking-widest text-[#E5A93C] font-semibold">
                  {t('about.philosophyTitle')}
                </h3>
              </div>
              <p className="text-stone-200 text-sm font-editorial italic leading-relaxed">
                «{t('about.philosophyDesc')}»
              </p>
            </div>

            {/* The Artist Bio Card */}
            <div className="p-6 bg-stone-900/60 border border-stone-800 rounded-lg space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400">
                {t('about.artistTitle')} · Artista Contemporánea
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                {t('about.artistBio')}
              </p>
            </div>
          </div>

        </div>

        {/* Visual Timeline Section */}
        <div className="pt-12 border-t border-stone-800/80">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-2">
              {lang === 'es' ? 'Práctica & Trayectoria' : 'Practice & Background'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial text-white">
              {t('about.timeline.title')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((m, i) => (
              <div
                key={i}
                className="bg-[#0E1726]/70 border border-stone-800 p-6 rounded relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#E5A93C] bg-[#E5A93C]/10 border border-[#E5A93C]/20 px-2 py-0.5 rounded">
                      {m.year}
                    </span>
                    <div className="p-2 rounded bg-stone-900 border border-stone-800">
                      {m.icon}
                    </div>
                  </div>

                  <h4 className="text-base font-editorial text-white mb-2 font-medium">
                    {m.title}
                  </h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
