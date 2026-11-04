import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Artwork } from '../types/artwork';
import { MessageSquare, Send, CheckCircle2, Instagram, Mail, Phone } from 'lucide-react';

interface ContactSectionProps {
  artworks: Artwork[];
  selectedArtworkTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  artworks,
  selectedArtworkTitle = '',
}) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [artworkInterest, setArtworkInterest] = useState(selectedArtworkTitle);
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update when selectedArtworkTitle changes from parent
  React.useEffect(() => {
    if (selectedArtworkTitle) {
      setArtworkInterest(selectedArtworkTitle);
    }
  }, [selectedArtworkTitle]);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000';
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/[COMPLETAR_USUARIO]';

  const defaultWhatsappMessage = encodeURIComponent(
    artworkInterest
      ? `Hola, me interesa la obra "${artworkInterest}" de tu colección. Me gustaría recibir información sobre su disponibilidad y adquisición.`
      : 'Hola, me gustaría conversar sobre tus pinturas de Vórtex y Geometría Sagrada.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check: if filled, reject silently
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

  return (
    <section id="contacto" className="py-28 bg-[#080C14] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Conversation & WhatsApp (5 cols) */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
              {t('contact.kicker')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-6">
              {t('contact.title')}
            </h2>
            <div className="w-12 h-0.5 bg-[#E5A93C] mb-6" />

            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-8">
              {t('contact.subtitle')}
            </p>

            {/* Direct WhatsApp Action Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-sm font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-all shadow-xl hover:shadow-[#E5A93C]/20 mb-8 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t('contact.whatsappBtn')}</span>
            </a>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-6 border-t border-stone-800 text-xs font-mono text-stone-400">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#E5A93C] transition-colors"
              >
                <div className="p-2 bg-stone-900 border border-stone-800 rounded text-[#E5A93C]">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram: @[COMPLETAR_USUARIO]</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-stone-900 border border-stone-800 rounded text-[#E5A93C]">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contacto@tu-dominio.com [COMPLETAR]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Inquiry Form with Anti-Spam (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E1726] border border-stone-800 p-6 sm:p-10 rounded-lg shadow-2xl">
              
              <h3 className="text-2xl font-editorial text-white mb-2">
                Envía una consulta directa
              </h3>
              <p className="text-xs text-stone-400 font-light mb-8">
                Completa tus datos y te responderé personalmente a la brevedad con información sobre disponibilidad, envío y embalaje.
              </p>

              {isSuccess ? (
                <div className="p-8 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-editorial text-white">Mensaje recibido con éxito</h4>
                  <p className="text-xs text-emerald-200/90 font-mono">
                    {t('contact.form.success')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-4 py-2 text-xs font-mono uppercase bg-emerald-800/40 hover:bg-emerald-800/60 text-white rounded transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (hidden for anti-spam) */}
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
                      <label className="block text-xs font-mono uppercase text-stone-400 mb-1.5">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 bg-[#080C14] border border-stone-800 rounded text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-400 mb-1.5">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu-correo@ejemplo.com"
                        className="w-full px-4 py-3 bg-[#080C14] border border-stone-800 rounded text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-400 mb-1.5">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 bg-[#080C14] border border-stone-800 rounded text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-400 mb-1.5">
                        {t('contact.form.artwork')}
                      </label>
                      <select
                        value={artworkInterest}
                        onChange={(e) => setArtworkInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-[#080C14] border border-stone-800 rounded text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
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
                    <label className="block text-xs font-mono uppercase text-stone-400 mb-1.5">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Cuéntame si deseas información sobre alguna pintura, plazos de entrega o si buscas una obra para un espacio específico..."
                      className="w-full px-4 py-3 bg-[#080C14] border border-stone-800 rounded text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 rounded border-stone-700 bg-stone-900 text-[#E5A93C] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-xs text-stone-400 font-light cursor-pointer">
                      {t('contact.newsletter')}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Enviando...' : t('contact.form.submit')}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
