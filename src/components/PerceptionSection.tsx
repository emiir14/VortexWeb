import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye, Sun, Sparkles, HeartHandshake } from 'lucide-react';

export const PerceptionSection: React.FC = () => {
  const { t } = useLanguage();

  const perceptionFactors = [
    {
      icon: <Sun className="w-5 h-5 text-[#E5A93C]" />,
      title: 'El impacto del color y la luz',
      desc: 'Azules profundos que invitan a la introspección, dorados cálidos que recuerdan la luz solar y blancos que aportan aire y amplitud a cualquier habitación.',
    },
    {
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      title: 'Formas circulares y descanso visual',
      desc: 'El ojo humano tiende a suavizar la mirada frente a las curvas continuas. Frente a los ángulos rectos de los dispositivos y las pantallas, el círculo actúa como una pausa.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: 'La pintura como ancla de atención',
      desc: 'Un recordatorio visible en tu pared para detener el flujo de pensamientos acelerados, respirar hondo y recuperar la presencia en tu día.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: 'La belleza compartida del espacio',
      desc: 'Un cuadro cambia cómo se siente un hogar o un lugar de trabajo: le aporta identidad humana, dignidad artística y una calidez que las paredes vacías no transmiten.',
    },
  ];

  return (
    <section className="py-24 bg-[#080C14] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
            {t('perception.kicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-6 text-balance">
            {t('perception.title')}
          </h2>
          <div className="w-12 h-0.5 bg-[#E5A93C] mx-auto mb-8" />
          <p className="text-lg text-stone-300 leading-relaxed font-light mb-4">
            {t('perception.p1')}
          </p>
          <p className="text-base text-stone-400 leading-relaxed font-light">
            {t('perception.p2')}
          </p>
        </div>

        {/* 4 Architectural Perception Factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perceptionFactors.map((f, i) => (
            <div
              key={i}
              className="bg-[#0E1726]/60 border border-stone-800/80 hover:border-[#E5A93C]/25 p-6 rounded transition-all duration-300"
            >
              <div className="w-10 h-10 rounded bg-stone-900 flex items-center justify-center mb-4 border border-stone-800">
                {f.icon}
              </div>
              <h3 className="text-lg font-editorial text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
