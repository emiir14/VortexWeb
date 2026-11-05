import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Artwork } from '../types/artwork';
import {
  MessageSquare,
  Send,
  CheckCircle2,
  Instagram,
  Mail,
  ShieldCheck,
  Package,
  Truck,
  Sparkles,
  CreditCard,
} from 'lucide-react';

interface ContactPageProps {
  artworks: Artwork[];
  initialArtworkTitle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  artworks,
  initialArtworkTitle = '',
}) => {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [artworkInterest, setArtworkInterest] = useState(initialArtworkTitle);
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000';
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/sylviapflucker_art';

  const defaultWhatsappMessage = encodeURIComponent(
    artworkInterest
      ? `Hola, me interesa la obra "${artworkInterest}" de tu colección. Me gustaría recibir información sobre su disponibilidad y adquisición.`
      : 'Hola, me gustaría conversar sobre tus pinturas de Vórtex y Geometría Sagrada.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 800);
  };

  const trustCards = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.cert.title'),
      desc: t('trust.cert.desc'),
    },
    {
      icon: <Package className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.pack.title'),
      desc: t('trust.pack.desc'),
    },
    {
      icon: <Truck className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.ship.title'),
      desc: t('trust.ship.desc'),
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.comm.title'),
      desc: t('trust.comm.desc'),
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF7F2] dark:bg-[#080C14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-stone-200 dark:border-stone-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-3">
            {t('contact.kicker')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-editorial text-stone-900 dark:text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Direct WhatsApp & Channel Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#0E1726] border border-stone-200 dark:border-stone-800 p-8 rounded-lg shadow-lg dark:shadow-xl">
              <h2 className="text-xl font-editorial text-stone-900 dark:text-white mb-3">
                Contacto Directo por WhatsApp
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-6">
                Para resolver dudas sobre disponibilidad, condiciones de entrega, certificados o encargos a medida de forma ágil y cercana.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-all shadow-xl hover:shadow-[#E5A93C]/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('contact.whatsappBtn')}</span>
              </a>

              <div className="space-y-4 pt-6 mt-6 border-t border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-600 dark:text-stone-400">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors"
                >
                  <div className="p-2 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded text-[#B45309] dark:text-[#E5A93C]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>Instagram: @sylviapflucker_art</span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded text-[#B45309] dark:text-[#E5A93C]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@vortexart.com</span>
                </div>
              </div>
            </div>

            {/* Payment & Conditions Note */}
            <div className="p-6 bg-stone-100/70 dark:bg-[#0E1726]/60 border border-stone-200 dark:border-stone-800 rounded-lg text-xs font-mono text-stone-700 dark:text-stone-400 space-y-2">
              <div className="flex items-center gap-2 text-[#B45309] dark:text-[#E5A93C]">
                <CreditCard className="w-4 h-4" />
                <span className="font-semibold text-stone-900 dark:text-stone-200">Formas de Pago Aceptadas</span>
              </div>
              <p>Transferencia bancaria internacional (Wire / ACH), Stripe, tarjeta de crédito y PayPal.</p>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0E1726] border border-stone-200 dark:border-stone-800 p-8 sm:p-10 rounded-lg shadow-lg dark:shadow-2xl">
              
              <h2 className="text-2xl font-editorial text-stone-900 dark:text-white mb-2">
                Envía una consulta por escrito
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light mb-8">
                Completa tus datos y te responderé personalmente a la brevedad con la información de la obra solicitada.
              </p>

              {isSuccess ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-lg text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-editorial text-stone-900 dark:text-white">Mensaje recibido con éxito</h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-200/90 font-mono">
                    {t('contact.form.success')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-4 py-2 text-xs font-mono uppercase bg-emerald-700 dark:bg-emerald-800/40 hover:bg-emerald-800 text-white rounded transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-600 dark:text-stone-400 mb-1.5">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-sm text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-600 dark:text-stone-400 mb-1.5">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu-correo@ejemplo.com"
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-sm text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-600 dark:text-stone-400 mb-1.5">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-sm text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-600 dark:text-stone-400 mb-1.5">
                        {t('contact.form.artwork')}
                      </label>
                      <select
                        value={artworkInterest}
                        onChange={(e) => setArtworkInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-sm text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      >
                        <option value="">-- Consulta general / Encargo --</option>
                        {artworks.map((art) => (
                          <option key={art.slug} value={art.titulo.es}>
                            {art.titulo.es} ({art.medidas})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-stone-600 dark:text-stone-400 mb-1.5">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Cuéntame si deseas información sobre alguna pintura, plazos de entrega o si buscas una obra para un espacio específico..."
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-sm text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 rounded border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-[#E5A93C] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-xs text-stone-600 dark:text-stone-400 font-light cursor-pointer">
                      {t('contact.newsletter')}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Enviando...' : t('contact.form.submit')}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* 4 Trust & Guarantee Pillars */}
        <div className="pt-16 border-t border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] block mb-2">
              Confianza &amp; Garantía
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial text-stone-900 dark:text-white">
              Cómo llega una obra a tu espacio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#0E1726]/70 border border-stone-200 dark:border-stone-800 p-6 rounded-lg flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center mb-4 text-[#B45309] dark:text-[#E5A93C]">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-editorial text-stone-900 dark:text-white mb-2 font-medium">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {card.desc}
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
