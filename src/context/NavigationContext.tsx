import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AppRoute = 'inicio' | 'obras' | 'sobre-mi' | 'meditaciones' | 'contacto';

interface NavigationContextProps {
  currentRoute: AppRoute;
  selectedArtworkSlug: string | null;
  navigate: (route: AppRoute, artworkSlug?: string | null) => void;
  navigateToArtwork: (slug: string) => void;
}

const NavigationContext = createContext<NavigationContextProps>({
  currentRoute: 'inicio',
  selectedArtworkSlug: null,
  navigate: () => {},
  navigateToArtwork: () => {},
});

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('inicio');
  const [selectedArtworkSlug, setSelectedArtworkSlug] = useState<string | null>(null);

  // Sync route from URL path on mount and on popstate (browser back/forward)
  const syncFromPathname = () => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    
    if (!path || path === 'inicio') {
      setCurrentRoute('inicio');
      setSelectedArtworkSlug(null);
    } else if (path.startsWith('obras/')) {
      const slug = path.replace('obras/', '');
      setCurrentRoute('obras');
      setSelectedArtworkSlug(slug);
    } else if (path === 'obras') {
      setCurrentRoute('obras');
      setSelectedArtworkSlug(null);
    } else if (path === 'sobre-mi') {
      setCurrentRoute('sobre-mi');
      setSelectedArtworkSlug(null);
    } else if (path === 'meditaciones') {
      setCurrentRoute('meditaciones');
      setSelectedArtworkSlug(null);
    } else if (path === 'contacto') {
      setCurrentRoute('contacto');
      setSelectedArtworkSlug(null);
    } else {
      setCurrentRoute('inicio');
      setSelectedArtworkSlug(null);
    }
  };

  useEffect(() => {
    syncFromPathname();

    const handlePopState = () => {
      syncFromPathname();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: AppRoute, artworkSlug: string | null = null) => {
    setCurrentRoute(route);
    setSelectedArtworkSlug(artworkSlug);

    if (typeof window !== 'undefined') {
      let targetPath = '/';
      if (route === 'inicio') {
        targetPath = '/';
      } else if (route === 'obras' && artworkSlug) {
        targetPath = `/obras/${artworkSlug}`;
      } else {
        targetPath = `/${route}`;
      }

      // Preserve query params (like ?lang=en)
      const currentUrl = new URL(window.location.href);
      const search = currentUrl.search;
      window.history.pushState({}, '', `${targetPath}${search}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToArtwork = (slug: string) => {
    navigate('obras', slug);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        selectedArtworkSlug,
        navigate,
        navigateToArtwork,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
