import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { GraduationCap, Building2, Compass, Heart, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useNavigation();

  const timelineMilestones = [
    {
      year: t('about.timeline.1.year'),
      title: 'Formación en Artes Plásticas en Perú',
      desc: 'Descubrimiento del lenguaje de los pigmentos, el dibujo clásico y las proporciones armónicas en Perú. [Nombre de escuela y años: COMPLETAR].',
      icon: <GraduationCap className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.2.year'),
      title: 'Vocación Sanitaria y Emprendimiento',
      desc: 'Ejercicio como odontóloga de profesión y creación de clínicas dentales, donde la concentración rigurosa y el cuidado humano modelaron su templanza.',
      icon: <Building2 className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.3.year'),
      title: 'Encuentro con el Vórtex y el Lienzo',
      desc: 'La práctica meditativa diaria se canaliza en lienzos verticales de 61 × 91 cm, explorando el movimiento en espiral y la geometría sagrada.',
      icon: <Compass className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.4.year'),
      title: 'Meditaciones Grupales en Europa',
      desc: 'Más de 15 sesiones guiadas de meditación en Barcelona, París, e Italia y Francia [confirmar ciudades y cifra exacta], uniendo pintura, silencio y contemplación.',
      icon: <Heart className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF7F2] dark:bg-[#080C14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-stone-200 dark:border-stone-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
            {t('about.kicker')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-editorial text-stone-900 dark:text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-sm font-mono text-[#B45309] dark:text-[#E5A93C]">
            {t('about.name')} — {t('about.subtitle')}
          </p>
        </div>

        {/* 2-Column Story Grid: Large Portrait + First-Person Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-[#0E1726] p-3 rounded-lg border border-stone-200 dark:border-stone-800 shadow-xl dark:shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-stone-100 dark:bg-black/40">
                <img
                  src="/artista/retrato_estudio.jpg"
                  alt="Retrato de la artista en su taller de pintura"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded text-[10px] text-amber-200 font-mono text-center">
                  [FOTO RETRATO PRELIMINAR - PENDIENTE FOTO FINAL DE LA ARTISTA]
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 text-center">
                <p className="text-xs font-editorial italic text-stone-700 dark:text-stone-300">
                  «Pintar es escuchar el movimiento del espacio hasta encontrar su centro.»
                </p>
                <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 block mt-1">
                  En el taller frente al bastidor de 61 × 91 cm
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

            {/* Note to the Artist for completion */}
            <div className="p-5 bg-amber-50 dark:bg-[#0E1726] border border-amber-200 dark:border-amber-500/30 rounded-lg text-xs font-mono text-amber-900 dark:text-amber-200/90 space-y-2">
              <p className="font-semibold text-[#B45309] dark:text-[#E5A93C]">
                ✦ Nota para la artista:
              </p>
              <p className="leading-relaxed">
                Este texto es un borrador honesto basado exclusivamente en tus datos confirmados. Puedes responder a las 6 preguntas de <code>GUIA-SOBRE-MI.md</code> para incluir tus palabras exactas, la institución de bellas artes en Perú y la fecha de fundación de tus clínicas.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('obras')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer shadow-md"
              >
                <span>Explorar sus pinturas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('meditaciones')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-800 hover:border-stone-500 dark:hover:border-stone-700 rounded transition-colors cursor-pointer bg-white dark:bg-transparent shadow-sm dark:shadow-none"
              >
                <span>Sus meditaciones grupales</span>
              </button>
            </div>
          </div>

        </div>

        {/* Visual Timeline Section */}
        <div className="pt-12 border-t border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-2">
              Cronología
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
