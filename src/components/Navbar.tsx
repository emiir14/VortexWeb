import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (artworkTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#galeria', label: t('nav.vortex') },
    { href: '#geometria', label: t('nav.geometry') },
    { href: '#meditation-angels', label: t('nav.meditation') },
    { href: '#sobre-mi', label: t('nav.about') },
    { href: '#meditaciones', label: t('nav.sessions') },
    { href: '#contacto', label: t('nav.contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-[#E5A93C]/15 py-3 shadow-lg'
            : 'bg-gradient-to-b from-[#080C14]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark (single text element, no subtitle) */}
            <a
              href="#inicio"
              className="text-lg md:text-xl font-editorial tracking-widest text-white hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0 uppercase"
            >
              VÓRTEX <span className="text-[#E5A93C] font-light">·</span> [COMPLETAR]
            </a>

            {/* Zone 2: 4–5 concise single-line text links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#E5A93C]/40"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action + Language Switcher */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Language Switcher */}
              <div
                className="flex items-center gap-1.5 text-xs font-mono tracking-wider border border-stone-800 bg-stone-900/60 rounded px-2 py-1"
                aria-label="Language selector"
              >
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`transition-colors cursor-pointer ${
                    lang === 'es' ? 'text-[#E5A93C] font-bold' : 'text-stone-400 hover:text-white'
                  }`}
                  aria-pressed={lang === 'es'}
                >
                  ES
                </button>
                <span className="text-stone-600">/</span>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`transition-colors cursor-pointer ${
                    lang === 'en' ? 'text-[#E5A93C] font-bold' : 'text-stone-400 hover:text-white'
                  }`}
                  aria-pressed={lang === 'en'}
                >
                  EN
                </button>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium text-black bg-[#E5A93C] hover:bg-[#F5B853] transition-colors rounded whitespace-nowrap cursor-pointer shadow-md hover:shadow-[#E5A93C]/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t('nav.inquire')}</span>
              </button>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-300 hover:text-white rounded hover:bg-stone-800/50 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#080C14]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
            <span className="text-lg font-editorial tracking-widest text-[#E5A93C]">
              VÓRTEX [COMPLETAR]
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-stone-400 hover:text-white cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 text-lg font-editorial">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-[#E5A93C] transition-colors py-1 border-b border-stone-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-stone-800 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-stone-400 font-mono">Idioma / Language</span>
              <div className="flex gap-3 text-sm font-mono">
                <button
                  onClick={() => setLang('es')}
                  className={`px-3 py-1 rounded ${lang === 'es' ? 'bg-[#E5A93C] text-black font-bold' : 'text-stone-300'}`}
                >
                  Español
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-[#E5A93C] text-black font-bold' : 'text-stone-300'}`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-center text-sm uppercase tracking-wider font-medium text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors"
            >
              {t('nav.inquire')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
