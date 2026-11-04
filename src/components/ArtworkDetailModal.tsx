import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Artwork } from '../types/artwork';
import { VortexSpiralSvg } from './svg/VortexSpiralSvg';
import { SacredGeometrySvg } from './svg/SacredGeometrySvg';
import {
  X,
  Sparkles,
  Search,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Package,
  Layers,
  Ruler,
  Calendar,
  Eye,
} from 'lucide-react';

interface ArtworkDetailModalProps {
  artwork: Artwork | null;
  artworks: Artwork[];
  onClose: () => void;
  onNavigate: (artwork: Artwork) => void;
  onOpenWallModal: (artworkSlug: string) => void;
  onInquireWhatsapp: (artwork: Artwork) => void;
}

export const ArtworkDetailModal: React.FC<ArtworkDetailModalProps> = ({
  artwork,
  artworks,
  onClose,
  onNavigate,
  onOpenWallModal,
  onInquireWhatsapp,
}) => {
  const { t, lang } = useLanguage();
  const [showGeometryOverlay, setShowGeometryOverlay] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  if (!artwork) return null;

  const currentIndex = artworks.findIndex((a) => a.slug === artwork.slug);
  const prevArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : artworks[artworks.length - 1];
  const nextArtwork = currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : artworks[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const getStatusBadge = (status: Artwork['estado']) => {
    switch (status) {
      case 'disponible':
        return <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider">● {t('gallery.status.available')}</span>;
      case 'reservada':
        return <span className="text-amber-400 font-mono text-xs uppercase tracking-wider">● {t('gallery.status.reserved')}</span>;
      case 'vendida':
        return <span className="text-stone-400 font-mono text-xs uppercase tracking-wider">● {t('gallery.status.sold')}</span>;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-6xl bg-[#080C14] border border-[#E5A93C]/20 rounded-lg overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Minimal Navigation Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-[#0E1726]/80">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E5A93C]">
              {artwork.coleccion.replace('-', ' ')}
            </span>
            <span className="text-stone-600 font-mono">/</span>
            {getStatusBadge(artwork.estado)}
          </div>

          <div className="flex items-center gap-3">
            {/* Quick prev / next artwork arrows */}
            <div className="flex items-center gap-1 border border-stone-800 rounded bg-[#080C14] px-1 py-0.5">
              <button
                type="button"
                onClick={() => onNavigate(prevArtwork)}
                className="p-1.5 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
                title="Obra anterior"
                aria-label="Ver obra anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(nextArtwork)}
                className="p-1.5 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
                title="Siguiente obra"
                aria-label="Ver siguiente obra"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded hover:bg-stone-800/80 transition-colors cursor-pointer"
              aria-label="Cerrar ficha"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: 2-Column Asymmetric Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
          
          {/* Left Column: Artwork Canvas Viewer with Zoom & Overlay (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col items-center justify-center bg-[#05080E] relative border-b lg:border-b-0 lg:border-r border-stone-800">
            
            {/* Interactive Overlay & Zoom Controls Floating Pill */}
            <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={() => setShowGeometryOverlay(!showGeometryOverlay)}
                className={`text-[11px] font-mono px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer border ${
                  showGeometryOverlay
                    ? 'bg-[#E5A93C] text-black border-[#E5A93C] font-semibold'
                    : 'bg-black/70 text-stone-300 border-stone-700 hover:border-[#E5A93C]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{showGeometryOverlay ? 'Ocultar Geometría' : 'Ver Geometría Sagrada'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`text-[11px] font-mono px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer border ${
                    isZoomed
                      ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                      : 'bg-black/70 text-stone-300 border-stone-700 hover:border-white'
                  }`}
                  title="Activar lupa a 2.5×"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>{isZoomed ? 'Restaurar Escala' : 'Lupa de Textura (2.5×)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenWallModal(artwork.slug);
                  }}
                  className="text-[11px] font-mono px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer border bg-black/70 text-stone-300 border-stone-700 hover:border-[#E5A93C]"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>{t('gallery.action.wall')}</span>
                </button>
              </div>
            </div>

            {/* The Artwork Canvas Container */}
            <div
              className={`relative max-w-sm sm:max-w-md w-full aspect-[2/3] mt-12 sm:mt-8 rounded overflow-hidden shadow-2xl bg-black border border-stone-800 transition-all ${
                isZoomed ? 'cursor-crosshair' : 'cursor-default'
              }`}
              onMouseMove={handleMouseMove}
            >
              <img
                src={artwork.imagenPrincipal}
                alt={artwork.alt[lang]}
                className="w-full h-full object-cover transition-transform duration-200"
                style={
                  isZoomed
                    ? {
                        transform: 'scale(2.5)',
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                      }
                    : undefined
                }
              />

              {/* Dynamic Sacred Geometry Overlay */}
              {showGeometryOverlay && !isZoomed && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/25 backdrop-blur-[0.5px] animate-in fade-in duration-500">
                  {artwork.coleccion === 'sacred-geometry' ? (
                    <SacredGeometrySvg size={340} strokeColor="#FDE68A" />
                  ) : (
                    <VortexSpiralSvg size={340} strokeColor="#FDE68A" />
                  )}
                </div>
              )}

              {/* Placeholder warning indicator */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded text-[10px] text-amber-200 font-mono text-center">
                {artwork.placeholderNote}
              </div>
            </div>

            {/* Scale Note beneath painting */}
            <div className="mt-4 text-center">
              <p className="text-[11px] font-mono text-stone-400">
                Lienzo vertical de 61 × 91 cm montado en bastidor de lino belga.
              </p>
            </div>

          </div>

          {/* Right Column: Definition List, Quote & Purchase Action (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#080C14]">
            
            <div>
              {/* Artwork Title & Year */}
              <h2 className="text-3xl sm:text-4xl font-editorial text-white tracking-wide mb-3">
                {artwork.titulo[lang]}
              </h2>

              {artwork.frase && (
                <p className="text-base font-editorial italic text-stone-300 border-l border-[#E5A93C]/40 pl-4 py-1 mb-8">
                  «{artwork.frase[lang]}»
                </p>
              )}

              {/* Structured Accession Metadata (Pattern B from reference) */}
              <dl className="border-t border-b border-stone-800 divide-y divide-stone-800/80 mb-8 text-xs font-mono">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-400 flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>{t('detail.metaDimensions')}</span>
                  </dt>
                  <dd className="text-stone-200 font-medium">{artwork.medidas} (24 × 36 in)</dd>
                </div>
                
                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>{t('detail.metaTechnique')}</span>
                  </dt>
                  <dd className="text-stone-200 font-medium text-right max-w-[200px]">
                    {lang === 'es' ? artwork.tecnica : artwork.tecnica_en}
                  </dd>
                </div>

                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>{t('detail.metaYear')}</span>
                  </dt>
                  <dd className="text-stone-200 font-medium">{artwork.ano}</dd>
                </div>

                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-400">Estado</dt>
                  <dd>{getStatusBadge(artwork.estado)}</dd>
                </div>

                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-400">Precio</dt>
                  <dd className="text-[#E5A93C] font-semibold">{artwork.precio || 'Consultar'}</dd>
                </div>
              </dl>

              {/* Gallery Trust & Collector Benefits */}
              <div className="space-y-3 mb-8 bg-[#0E1726]/60 p-4 rounded border border-stone-800">
                <div className="flex items-start gap-2.5 text-xs text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>Incluye certificado físico de autenticidad firmado y sellado por la artista.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-300">
                  <Package className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>Embalaje reforzado de grado museístico con protección antihumedad.</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action with Pre-filled Message */}
            <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onInquireWhatsapp(artwork)}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] transition-colors rounded cursor-pointer shadow-lg hover:shadow-[#E5A93C]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('detail.inquireWhatsapp')}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenWallModal(artwork.slug);
                }}
                className="w-full py-2.5 text-center text-xs font-mono uppercase tracking-wider text-stone-400 hover:text-white border border-stone-800 hover:border-stone-700 rounded transition-colors cursor-pointer"
              >
                {t('gallery.action.wall')}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
