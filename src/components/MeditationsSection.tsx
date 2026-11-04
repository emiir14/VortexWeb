import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, Heart, Send, CheckCircle2, Bell } from 'lucide-react';

export const MeditationsSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const locations = [
    { city: 'Barcelona', country: 'España', note: 'Sesiones en espacios de luz y silencio' },
    { city: 'París', country: 'Francia', note: 'Encuentros en estudio de arte' },
    { city: 'Italia', country: 'Italia', note: 'Retiros y pausas contemplativas [Confirmar ciudad]' },
    { city: 'Francia', country: 'Francia', note: 'Encuentros de meditación guiada [Confirmar ciudad]' },
  ];

  return (
    <section id="meditaciones" className="py-28 bg-[#080C14] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
            {t('meditations.kicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-4">
            {t('meditations.title')}
          </h2>
          <div className="w-12 h-0.5 bg-[#E5A93C] mb-6" />
          <p className="text-lg text-stone-300 font-light leading-relaxed mb-4">
            {t('meditations.desc')}
          </p>
        </div>

        {/* 2-Column Grid: Location Pills & Philosophy + Notification Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Cities & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0E1726]/80 border border-stone-800 rounded-lg flex items-start gap-3.5"
                >
                  <div className="p-2 bg-stone-900 rounded border border-stone-800 text-[#E5A93C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-editorial text-white font-medium">
                      {loc.city} <span className="text-xs font-mono text-stone-400">({loc.country})</span>
                    </h3>
                    <p className="text-xs text-stone-400 font-light mt-1">
                      {loc.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Respectful Ethical Tone Box */}
            <div className="p-6 bg-[#0E1726]/40 border border-stone-800/80 rounded-lg text-xs font-mono text-stone-400 space-y-2">
              <div className="flex items-center gap-2 text-[#E5A93C]">
                <Heart className="w-4 h-4" />
                <span className="uppercase tracking-wider font-semibold">Espacios de Acogida y Respeto</span>
              </div>
              <p className="leading-relaxed">
                Las sesiones no requieren experiencia previa ni creencias particulares. Son pausas guiadas de respiración, atención consciente al cuerpo y contemplación silenciosa de las pinturas en sala.
              </p>
            </div>
          </div>

          {/* Right Column: "Avísame de próximos encuentros" Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0E1726] border border-[#E5A93C]/25 p-6 sm:p-8 rounded-lg shadow-xl">
              <div className="flex items-center gap-2.5 text-[#E5A93C] mb-3">
                <Bell className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                  Avisos de Encuentros
                </span>
              </div>

              <h3 className="text-2xl font-editorial text-white mb-2">
                {t('meditations.formTitle')}
              </h3>

              <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
                {t('meditations.formDesc')}
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-800/60 rounded text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-editorial text-white">¡Suscripción confirmada!</h4>
                  <p className="text-xs text-emerald-200/90 font-mono">
                    {t('meditations.formSuccess')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1.5">
                      {t('meditations.formCity')}
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ej. Barcelona, Madrid, París, Roma..."
                      required
                      className="w-full px-4 py-2.5 bg-[#080C14] border border-stone-800 rounded text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1.5">
                      {t('meditations.formEmail')}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu-correo@ejemplo.com"
                      required
                      className="w-full px-4 py-2.5 bg-[#080C14] border border-stone-800 rounded text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t('meditations.formBtn')}</span>
                  </button>
                  <p className="text-[10px] text-stone-500 font-mono text-center">
                    Sin spam. Recibirás únicamente avisos de fechas confirmadas.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
