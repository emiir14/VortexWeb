import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsAppButton: React.FC = () => {
  const { lang } = useLanguage();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000';

  const defaultMessage = encodeURIComponent(
    lang === 'es'
      ? 'Hola, he visitado tu web y me gustaría consultar sobre tus pinturas de Vórtex y Geometría Sagrada.'
      : 'Hello, I visited your website and would like to inquire about your Vortex and Sacred Geometry paintings.'
  );

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-30">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a la artista por WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#E5A93C] hover:bg-[#F5B853] text-black font-mono text-xs uppercase tracking-wider font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#E5A93C]/30 cursor-pointer"
      >
        <MessageSquare className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Artista</span>
      </a>
    </aside>
  );
};
