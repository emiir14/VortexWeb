import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { VortexSpiralSvg } from './svg/VortexSpiralSvg';
import { ToroidFluxSvg } from './svg/ToroidFluxSvg';
import { Compass, Wind, Orbit } from 'lucide-react';

export const VortexExplanationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="vortex-concepto" className="py-24 bg-[#080C14] border-t border-[#E5A93C]/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with editorial balance */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
            {t('vortex.kicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-6 text-balance">
            {t('vortex.title')}
          </h2>
          <div className="w-12 h-0.5 bg-[#E5A93C] mb-8" />
          <p className="text-lg text-stone-300 leading-relaxed font-light mb-4">
            {t('vortex.p1')}
          </p>
          <p className="text-base text-stone-400 leading-relaxed font-light">
            {t('vortex.p2')}
          </p>
        </div>

        {/* 3 Contemplative Visual Pillars with bespoke SVG diagrams */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Movimiento en la Naturaleza */}
          <div className="bg-[#0E1726]/80 border border-stone-800 hover:border-[#E5A93C]/30 p-8 rounded transition-all duration-300 group">
            <div className="h-44 flex items-center justify-center mb-6 overflow-hidden">
              <VortexSpiralSvg size={160} strokeColor="#E5A93C" className="group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5A93C] uppercase mb-2">
              <Wind className="w-3.5 h-3.5" />
              <span>Patrón Natural</span>
            </div>
            <h3 className="text-xl font-editorial text-white mb-3">
              Dinámica de la Espiral
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              El agua al drenar, los vientos atmosféricos y el crecimiento de los helechos siguen una trayectoria centrípeta. En el lienzo, esta curva guía la mirada del observador hacia el centro de la tela.
            </p>
          </div>

          {/* Card 2: El Campo Toroidal */}
          <div className="bg-[#0E1726]/80 border border-stone-800 hover:border-[#E5A93C]/30 p-8 rounded transition-all duration-300 group">
            <div className="h-44 flex items-center justify-center mb-6 overflow-hidden">
              <ToroidFluxSvg size={170} strokeColor="#38BDF8" className="group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
              <Orbit className="w-3.5 h-3.5" />
              <span>Flujo Continuo</span>
            </div>
            <h3 className="text-xl font-editorial text-white mb-3">
              El Toroide como Metáfora
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              Inspirado en la forma del campo magnético que envuelve planetas y sistemas. Una forma cerrada sobre sí misma que sugiere renovación incesante, respiración y equilibrio.
            </p>
          </div>

          {/* Card 3: El Punto de Quietud */}
          <div className="bg-[#0E1726]/80 border border-stone-800 hover:border-[#E5A93C]/30 p-8 rounded transition-all duration-300 group">
            <div className="h-44 flex items-center justify-center mb-6 relative">
              <div className="w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-amber-400/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#E5A93C] shadow-lg shadow-[#E5A93C]/50" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Centro de Gravedad</span>
            </div>
            <h3 className="text-xl font-editorial text-white mb-3">
              El Silencio Central
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              En el ojo de todo torbellino impera la calma absoluta. Las pinturas buscan precisamente ese contraste: una intensa vibración cromática que desemboca en un punto de serenidad.
            </p>
          </div>

        </div>

        {/* Curatorial Quote Banner */}
        <div className="py-8 px-6 sm:px-10 border-y border-stone-800 text-center max-w-4xl mx-auto">
          <blockquote className="text-xl sm:text-2xl font-editorial italic text-stone-200">
            {t('vortex.quote')}
          </blockquote>
        </div>

      </div>
    </section>
  );
};
