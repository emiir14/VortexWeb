import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Compass, Sparkles, GraduationCap, Building2, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, lang } = useLanguage();

  const timelineMilestones = [
    {
      year: t('about.timeline.1.year'),
      title: 'Formación en Artes Plásticas en Perú',
      desc: 'Descubrimiento del lenguaje de los pigmentos, el dibujo clásico y las proporciones armónicas en Perú. [Nombre de escuela y años: COMPLETAR].',
      icon: <GraduationCap className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.2.year'),
      title: 'Vocación Sanitaria y Emprendimiento',
      desc: 'Ejercicio como odontóloga de profesión y creación de clínicas dentales, donde la concentración rigurosa y el cuidado humano modelaron su templanza.',
      icon: <Building2 className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.3.year'),
      title: 'Encuentro con el Vórtex y el Lienzo',
      desc: 'La práctica meditativa diaria se canaliza en lienzos verticales de 61 × 91 cm, explorando el movimiento en espiral y la geometría sagrada.',
      icon: <Compass className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      year: t('about.timeline.4.year'),
      title: 'Meditaciones Grupales en Europa',
      desc: 'Más de 15 sesiones guiadas de meditación en Barcelona, París, e Italia y Francia [confirmar ciudades y cifra exacta], uniendo pintura, silencio y contemplación.',
      icon: <Heart className="w-4 h-4 text-[#E5A93C]" />,
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
            {t('about.name')} — {t('about.subtitle')}
          </p>
        </div>

        {/* 2-Column Story Grid: Large Portrait + First-Person Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-[#0E1726] p-3 rounded-lg border border-stone-800 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-black/40">
                <img
                  src="/artista/retrato_estudio.jpg"
                  alt="Retrato de la artista en su taller de pintura"
                  className="w-full h-full object-cover"
                />
                
                {/* Clear Placeholder Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded text-[10px] text-amber-200 font-mono text-center">
                  [FOTO RETRATO PRELIMINAR - PENDIENTE FOTO FINAL DE LA ARTISTA]
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 text-center">
                <p className="text-xs font-editorial italic text-stone-300">
                  «Pintar es escuchar el movimiento del espacio hasta encontrar su centro.»
                </p>
                <span className="text-[11px] font-mono text-stone-500 block mt-1">
                  En el taller frente al bastidor de 61 × 91 cm
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 font-light leading-relaxed">
            <p className="text-lg text-white font-normal">
              {t('about.p1')}
            </p>

            <p className="text-base">
              {t('about.p2')}
            </p>

            <p className="text-base">
              {t('about.p3')}
            </p>

            {/* Note to the Artist for completion */}
            <div className="p-4 bg-[#0E1726] border border-amber-500/30 rounded text-xs font-mono text-amber-200/90 space-y-1">
              <p className="font-semibold text-[#E5A93C]">
                ✦ Nota para la artista:
              </p>
              <p>
                Este texto es un borrador honesto basado exclusivamente en tus datos confirmados. Puedes responder a las 6 preguntas de <code>GUIA-SOBRE-MI.md</code> para incluir tus palabras exactas y la fecha de fundación de tus clínicas.
              </p>
            </div>
          </div>

        </div>

        {/* Visual Timeline Section */}
        <div className="pt-12 border-t border-stone-800/80">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-2">
              Trayectoria
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
