import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation, AppRoute } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, MessageSquare, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { currentRoute, selectedArtworkSlug, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { route: AppRoute; label: string }[] = [
    { route: 'obras', label: lang === 'es' ? 'Obras' : 'Artworks' },
    { route: 'sobre-mi', label: lang === 'es' ? 'Sobre la Artista' : 'About the Artist' },
    { route: 'meditaciones', label: lang === 'es' ? 'Meditaciones' : 'Meditations' },
    { route: 'contacto', label: lang === 'es' ? 'Contacto' : 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, route: AppRoute) => {
    e.preventDefault();
    navigate(route);
    setMobileMenuOpen(false);
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('inicio');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 dark:bg-[#080C14]/95 backdrop-blur-md border-b border-stone-200 dark:border-[#E5A93C]/15 py-3.5 shadow-md dark:shadow-lg'
            : 'bg-gradient-to-b from-[#FAF7F2]/90 dark:from-[#080C14]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Single text element Brand Wordmark */}
            <a
              href="/"
              onClick={handleBrandClick}
              className="text-lg md:text-xl font-editorial tracking-widest text-stone-900 dark:text-white hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0 uppercase cursor-pointer"
            >
              VÓRTEX <span className="text-[#B45309] dark:text-[#E5A93C] font-light">·</span> [COMPLETAR]
            </a>

            {/* Zone 2: Exactly 4 clean single-line navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route && !selectedArtworkSlug;
                return (
                  <a
                    key={link.route}
                    href={`/${link.route}`}
                    onClick={(e) => handleLinkClick(e, link.route)}
                    className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
                      isActive
                        ? 'text-[#B45309] dark:text-[#E5A93C] font-semibold border-b-2 border-[#B45309] dark:border-[#E5A93C]'
                        : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:underline underline-offset-8 decoration-stone-400 dark:decoration-stone-600'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Theme Toggle + Language Switcher + 1 Primary CTA Button */}
            <div className="flex items-center gap-3.5 shrink-0">
              
              {/* Theme Switcher Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
                title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#E5A93C]" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>

              {/* Language Switcher */}
              <div
                className="flex items-center gap-1.5 text-xs font-mono tracking-wider border border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/60 rounded px-2 py-1"
                aria-label="Language selector"
              >
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`transition-colors cursor-pointer ${
                    lang === 'es' ? 'text-[#B45309] dark:text-[#E5A93C] font-bold' : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                  }`}
                  aria-pressed={lang === 'es'}
                >
                  ES
                </button>
                <span className="text-stone-400 dark:text-stone-600">/</span>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`transition-colors cursor-pointer ${
                    lang === 'en' ? 'text-[#B45309] dark:text-[#E5A93C] font-bold' : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                  }`}
                  aria-pressed={lang === 'en'}
                >
                  EN
                </button>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => navigate('contacto')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] transition-colors rounded whitespace-nowrap cursor-pointer shadow-md hover:shadow-[#E5A93C]/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t('nav.inquire')}</span>
              </button>

              {/* Mobile menu hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-white rounded hover:bg-stone-200 dark:hover:bg-stone-800/50 cursor-pointer"
                aria-label="Menú principal"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#FAF7F2]/98 dark:bg-[#080C14]/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
            <span className="text-lg font-editorial tracking-widest text-[#B45309] dark:text-[#E5A93C]">
              VÓRTEX [COMPLETAR]
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-xl font-editorial">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, 'inicio')}
              className={`py-1 border-b border-stone-200 dark:border-stone-900 ${
                currentRoute === 'inicio' ? 'text-[#B45309] dark:text-[#E5A93C] font-semibold' : 'text-stone-800 dark:text-stone-200'
              }`}
            >
              {t('nav.home')}
            </a>
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={`/${link.route}`}
                onClick={(e) => handleLinkClick(e, link.route)}
                className={`py-1 border-b border-stone-200 dark:border-stone-900 ${
                  currentRoute === link.route ? 'text-[#B45309] dark:text-[#E5A93C] font-semibold' : 'text-stone-800 dark:text-stone-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-stone-500 dark:text-stone-400 font-mono">Modo Visual</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#E5A93C]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-stone-500 dark:text-stone-400 font-mono">Idioma / Language</span>
              <div className="flex gap-3 text-sm font-mono">
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`px-3 py-1 rounded ${lang === 'es' ? 'bg-[#E5A93C] text-black font-bold' : 'text-stone-600 dark:text-stone-300'}`}
                >
                  Español
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-[#E5A93C] text-black font-bold' : 'text-stone-600 dark:text-stone-300'}`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('contacto');
              }}
              className="w-full py-3.5 text-center text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer"
            >
              {t('nav.inquire')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
