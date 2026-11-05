import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SacredGeometrySvg } from './svg/SacredGeometrySvg';
import { VortexSpiralSvg } from './svg/VortexSpiralSvg';
import { Sliders, CheckCircle } from 'lucide-react';

export const SacredGeometrySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeHarmonic, setActiveHarmonic] = useState<'fibonacci' | 'seed' | 'concentric'>('fibonacci');

  return (
    <section id="geometria" className="py-24 bg-[#0A0F1A] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Interactive Sacred Geometry Diagram Column (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md bg-[#080C14] border border-[#E5A93C]/20 rounded-lg p-6 sm:p-8 shadow-2xl flex flex-col items-center">
              
              {/* Graphic Stage */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center mb-6">
                {activeHarmonic === 'seed' && (
                  <SacredGeometrySvg size={280} strokeColor="#E5A93C" className="animate-in fade-in zoom-in-95 duration-500" />
                )}
                {activeHarmonic === 'fibonacci' && (
                  <VortexSpiralSvg size={280} strokeColor="#FDE68A" className="animate-in fade-in zoom-in-95 duration-500" />
                )}
                {activeHarmonic === 'concentric' && (
                  <div className="relative w-full h-full flex items-center justify-center animate-in fade-in zoom-in-95 duration-500">
                    {[1, 2, 3, 5, 8, 13].map((f, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full border border-[#E5A93C]/40"
                        style={{
                          width: `${f * 18}px`,
                          height: `${f * 18}px`,
                        }}
                      />
                    ))}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
                  </div>
                )}
              </div>

              {/* Harmonic Pattern Selector buttons */}
              <div className="w-full grid grid-cols-3 gap-2 bg-[#0E1726] p-1.5 rounded border border-stone-800">
                <button
                  type="button"
                  onClick={() => setActiveHarmonic('fibonacci')}
                  className={`py-2 text-[11px] sm:text-xs font-mono uppercase rounded transition-colors cursor-pointer text-center ${
                    activeHarmonic === 'fibonacci'
                      ? 'bg-[#E5A93C] text-black font-semibold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Espiral Áurea
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHarmonic('seed')}
                  className={`py-2 text-[11px] sm:text-xs font-mono uppercase rounded transition-colors cursor-pointer text-center ${
                    activeHarmonic === 'seed'
                      ? 'bg-[#E5A93C] text-black font-semibold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Semilla de Vida
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHarmonic('concentric')}
                  className={`py-2 text-[11px] sm:text-xs font-mono uppercase rounded transition-colors cursor-pointer text-center ${
                    activeHarmonic === 'concentric'
                      ? 'bg-[#E5A93C] text-black font-semibold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Concéntricas
                </button>
              </div>

              {/* Descriptive caption */}
              <div className="mt-4 text-center">
                <p className="text-xs font-mono text-stone-400">
                  {activeHarmonic === 'fibonacci' && 'Proporción Phi (1.618): el crecimiento armónico observable en galaxias y caracolas.'}
                  {activeHarmonic === 'seed' && 'Siete círculos entrelazados que representan el orden simétrico hexagonal primigenio.'}
                  {activeHarmonic === 'concentric' && 'Ondas armónicas equidistantes que evocan la caída de una gota en agua calma.'}
                </p>
              </div>

            </div>
          </div>

          {/* Text and Curatorial Exposition Column (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
              {t('geometry.kicker')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-6 text-balance">
              {t('geometry.title')}
            </h2>
            <div className="w-12 h-0.5 bg-[#E5A93C] mb-8" />
            
            <p className="text-lg text-stone-300 leading-relaxed font-light mb-6">
              {t('geometry.p1')}
            </p>
            <p className="text-base text-stone-400 leading-relaxed font-light mb-8">
              {t('geometry.p2')}
            </p>

            {/* Quiet human principles list */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#E5A93C] shrink-0 mt-1" />
                <p className="text-sm text-stone-300">
                  <strong className="text-white font-medium">Equilibrio perceptivo:</strong> La simetría circular reduce la sobrecarga visual y ofrece un punto de descanso para la mente.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#E5A93C] shrink-0 mt-1" />
                <p className="text-sm text-stone-300">
                  <strong className="text-white font-medium">Proporción armónica en 70 × 40 cm:</strong> La relación dimensional vertical del bastidor favorece un foco de contemplación esbelto y equilibrado.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#E5A93C] shrink-0 mt-1" />
                <p className="text-sm text-stone-300">
                  <strong className="text-white font-medium">Inspiración, no dogma:</strong> Empleadas como herramienta artística intuitiva para crear belleza y serenidad espacial.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
