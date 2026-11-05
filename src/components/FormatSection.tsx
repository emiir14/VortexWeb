import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Ruler, Maximize, Shield, Layers } from 'lucide-react';

export const FormatSection: React.FC = () => {
  const { t } = useLanguage();

  const specs = [
    {
      title: 'Formato vertical 70 × 40 cm',
      detail: '40 cm de ancho × 70 cm de alto (aprox. 16 × 28 pulgadas). Una proporción esbelta y armónica concebida para la contemplación en espacios contemporáneos.',
      icon: <Ruler className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      title: 'Lino belga de grano medio',
      detail: 'Preparado con imprimación tradicional al gesso que asegura adherencia permanente de los óleos y preserva el brillo del pan de oro.',
      icon: <Layers className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      title: 'Bastidor de pino secado al horno',
      detail: 'Listones con ensamble de cuñas ajustables y 3,5 cm de canto biselado, listos para ser colgados sin marco si se desea una estética contemporánea.',
      icon: <Shield className="w-4 h-4 text-[#E5A93C]" />,
    },
    {
      title: 'Escala ideal para espacios modernos',
      detail: 'Dimensiones concebidas para destacar sobre un sofá, una consola de entrada, un escritorio o una pared de meditación sin sobrecargar la estancia.',
      icon: <Maximize className="w-4 h-4 text-[#E5A93C]" />,
    },
  ];

  return (
    <section className="py-24 bg-[#080C14] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Architectural Blueprint Diagram of 70 × 40 cm (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-60 sm:w-64 aspect-[4/7] border-2 border-dashed border-[#E5A93C]/50 rounded p-4 flex flex-col justify-between items-center bg-[#0E1726]/60 shadow-xl">
              
              {/* Width dimension callout */}
              <div className="w-full flex items-center justify-between text-xs font-mono text-[#E5A93C] pb-2 border-b border-[#E5A93C]/30">
                <span>◀</span>
                <span>40 cm (16 in)</span>
                <span>▶</span>
              </div>

              {/* Central Golden Ratio Spiral Silhouette */}
              <div className="flex flex-col items-center justify-center my-auto">
                <span className="text-3xl font-editorial text-white tracking-widest font-light mb-1">
                  70 × 40
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Formato Oficial
                </span>
              </div>

              {/* Height dimension callout */}
              <div className="w-full flex items-center justify-between text-xs font-mono text-[#E5A93C] pt-2 border-t border-[#E5A93C]/30">
                <span>▲ 70 cm (28 in)</span>
                <span>Canto: 3,5 cm</span>
              </div>

              {/* Side height tag */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 text-[11px] font-mono text-stone-400 whitespace-nowrap">
                Ratio 2:3 vertical
              </div>

            </div>
          </div>

          {/* Right Column: Curatorial specs list (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
              {t('format.kicker')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-6">
              {t('format.title')}
            </h2>
            <div className="w-12 h-0.5 bg-[#E5A93C] mb-8" />
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-8">
              {t('format.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((item, i) => (
                <div key={i} className="p-4 bg-[#0E1726]/40 border border-stone-800 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="text-sm font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
