import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation, AppRoute } from '../context/NavigationContext';
import { Instagram, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const { navigate } = useNavigation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000';
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/sylviapflucker_art';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent, route: AppRoute) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <footer className="bg-[#F3EFEA] dark:bg-[#05080E] border-t border-stone-200 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200 dark:border-stone-800/80">
          
          {/* Brand & Identity Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLink(e, 'inicio')}
              className="group cursor-pointer block"
            >
              <span className="text-xl font-editorial tracking-widest text-stone-900 dark:text-white uppercase block group-hover:text-[#B45309] dark:group-hover:text-[#E5A93C] transition-colors">
                Vortex Art
              </span>
              <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                Sylvia Pflücker · Artista Contemporánea
              </span>
            </a>
            <p className="text-xs font-light text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm">
              El arte como expresión de energía y geometría. Pinturas originales de 70 × 40 cm en técnicas mixtas, relieve escultórico y pan de oro creadas en Florida.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded text-stone-700 dark:text-stone-300 hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors shadow-sm dark:shadow-none"
                aria-label="Instagram de la artista"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded text-stone-700 dark:text-stone-300 hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors shadow-sm dark:shadow-none"
                aria-label="WhatsApp directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-2 text-xs font-mono">
            <span className="text-stone-900 dark:text-stone-300 uppercase tracking-widest block mb-3 font-semibold">
              Secciones
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="/obras"
                  onClick={(e) => handleLink(e, 'obras')}
                  className="hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  Catálogo de Obras (70 × 40 cm)
                </a>
              </li>
              <li>
                <a
                  href="/sobre-mi"
                  onClick={(e) => handleLink(e, 'sobre-mi')}
                  className="hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  Sobre la Artista &amp; Trayectoria
                </a>
              </li>
              <li>
                <a
                  href="/meditaciones"
                  onClick={(e) => handleLink(e, 'meditaciones')}
                  className="hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  Encuentros de Meditación
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  onClick={(e) => handleLink(e, 'contacto')}
                  className="hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  Contacto &amp; Adquisición
                </a>
              </li>
            </ul>
          </div>

          {/* Language & Scroll Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-300 block mb-2">
                Idioma / Language
              </span>
              <div className="flex gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`px-2.5 py-1 rounded border cursor-pointer ${
                    lang === 'es' ? 'bg-[#E5A93C] text-black border-[#E5A93C] font-semibold' : 'border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded border cursor-pointer ${
                    lang === 'en' ? 'bg-[#E5A93C] text-black border-[#E5A93C] font-semibold' : 'border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 dark:text-stone-400 hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Mandatory Honest Medical & Ethical Health Disclaimer */}
        <div className="pt-8 pb-4 text-center max-w-4xl mx-auto">
          <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400 leading-relaxed">
            {t('footer.disclaimer')}
          </p>
        </div>

        <div className="pt-4 text-center text-xs font-mono text-stone-500 dark:text-stone-400">
          <p>© {new Date().getFullYear()} Sylvia Pflücker — Vortex Art. {t('footer.rights')}</p>
        </div>

      </div>
    </footer>
  );
};
