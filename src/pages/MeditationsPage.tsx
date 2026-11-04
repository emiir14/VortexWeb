import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, Heart, Send, CheckCircle2, Bell, Sparkles } from 'lucide-react';

export const MeditationsPage: React.FC = () => {
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
    { city: 'Barcelona', country: 'España', note: 'Sesiones guiadas en espacios de luz natural y silencio' },
    { city: 'París', country: 'Francia', note: 'Encuentros en estudio de arte y galerías' },
    { city: 'Italia', country: 'Italia', note: 'Retiros y pausas contemplativas [Confirmar ciudad exacta]' },
    { city: 'Francia', country: 'Francia', note: 'Encuentros de meditación y presencia [Confirmar ciudad]' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF7F2] dark:bg-[#080C14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-stone-200 dark:border-stone-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
            {t('meditations.kicker')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-editorial text-stone-900 dark:text-white mb-4">
            {t('meditations.title')}
          </h1>
          <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 font-light leading-relaxed">
            {t('meditations.desc')}
          </p>
        </div>

        {/* 2-Column Grid: Locations & Ethical Philosophy + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Cities & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl font-editorial text-stone-900 dark:text-white mb-4">
                Ciudades donde se han compartido sesiones
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white dark:bg-[#0E1726]/80 border border-stone-200 dark:border-stone-800 rounded-lg flex items-start gap-3.5 shadow-sm dark:shadow-none"
                  >
                    <div className="p-2 bg-stone-100 dark:bg-stone-900 rounded border border-stone-200 dark:border-stone-800 text-[#B45309] dark:text-[#E5A93C]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-editorial text-stone-900 dark:text-white font-medium">
                        {loc.city} <span className="text-xs font-mono text-stone-500 dark:text-stone-400">({loc.country})</span>
                      </h3>
                      <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-1">
                        {loc.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Respectful Ethical Tone Box */}
            <div className="p-6 bg-stone-100/80 dark:bg-[#0E1726]/60 border border-stone-200 dark:border-stone-800 rounded-lg text-xs font-mono text-stone-700 dark:text-stone-300 space-y-3">
              <div className="flex items-center gap-2 text-[#B45309] dark:text-[#E5A93C]">
                <Heart className="w-4 h-4" />
                <span className="uppercase tracking-wider font-semibold">Espacios de Acogida, Silencio y Calma</span>
              </div>
              <p className="leading-relaxed text-stone-600 dark:text-stone-400">
                Las sesiones no requieren experiencia previa ni creencias específicas. Son invitaciones cálidas a sentarse juntos, respirar con calma, aflojar las tensiones del día y dejar que la presencia de las pinturas en la sala sirva como punto de reposo visual.
              </p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800 pt-2">
                Nota ética: No constituyen terapia médica ni psicológica, sino una experiencia de bienestar contemplativo personal.
              </p>
            </div>
          </div>

          {/* Right Column: "Avísame de próximos encuentros" Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#0E1726] border border-stone-200 dark:border-[#E5A93C]/25 p-6 sm:p-8 rounded-lg shadow-lg dark:shadow-xl">
              <div className="flex items-center gap-2.5 text-[#B45309] dark:text-[#E5A93C] mb-3">
                <Bell className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                  Próximas Convocatorias
                </span>
              </div>

              <h2 className="text-2xl font-editorial text-stone-900 dark:text-white mb-2">
                {t('meditations.formTitle')}
              </h2>

              <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-6">
                {t('meditations.formDesc')}
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h3 className="text-base font-editorial text-stone-900 dark:text-white">¡Suscripción confirmada!</h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-200/90 font-mono">
                    {t('meditations.formSuccess')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-600 dark:text-stone-400 uppercase mb-1.5">
                      {t('meditations.formCity')}
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ej. Barcelona, Madrid, París, Roma..."
                      required
                      className="w-full px-4 py-2.5 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-stone-900 dark:text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-600 dark:text-stone-400 uppercase mb-1.5">
                      {t('meditations.formEmail')}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu-correo@ejemplo.com"
                      required
                      className="w-full px-4 py-2.5 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-stone-900 dark:text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
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
    </div>
  );
};
