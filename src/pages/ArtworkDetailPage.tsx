import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Artwork } from '../types/artwork';
import {
  ArrowLeft,
  Search,
  Eye,
  MessageSquare,
  ShieldCheck,
  Package,
  Layers,
  Ruler,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle2,
} from 'lucide-react';

interface ArtworkDetailPageProps {
  artwork: Artwork;
  artworks: Artwork[];
  onOpenWallModal: (artworkSlug: string) => void;
  onInquireWhatsapp: (artwork: Artwork) => void;
}

export const ArtworkDetailPage: React.FC<ArtworkDetailPageProps> = ({
  artwork,
  artworks,
  onOpenWallModal,
  onInquireWhatsapp,
}) => {
  const { t, lang } = useLanguage();
  const { navigate, navigateToArtwork } = useNavigation();

  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF7F2] dark:bg-[#080C14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation & Prev/Next Arrows */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-500 dark:text-stone-400">
          <button
            type="button"
            onClick={() => navigate('obras')}
            className="flex items-center gap-2 hover:text-[#B45309] dark:hover:text-[#E5A93C] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al catálogo de obras</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-stone-400 dark:text-stone-500">
              Obra {currentIndex + 1} de {artworks.length}
            </span>
            <div className="flex items-center gap-1 border border-stone-300 dark:border-stone-800 rounded bg-white dark:bg-[#0E1726] p-0.5">
              <button
                type="button"
                onClick={() => navigateToArtwork(prevArtwork.slug)}
                className="p-1 text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white rounded transition-colors cursor-pointer"
                title="Obra anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => navigateToArtwork(nextArtwork.slug)}
                className="p-1 text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white rounded transition-colors cursor-pointer"
                title="Siguiente obra"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Catalog Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Canvas Viewer with 2.5x Loupe & Wall Scale Trigger (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Action Bar over Canvas */}
            <div className="w-full max-w-lg flex items-center justify-between gap-3 mb-4">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer border ${
                  isZoomed
                    ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                    : 'bg-white dark:bg-[#0E1726] text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-800 hover:border-stone-500 dark:hover:border-stone-700 shadow-sm'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>{isZoomed ? 'Restaurar Escala' : 'Lupa de Textura (2.5×)'}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenWallModal(artwork.slug)}
                className="text-xs font-mono px-3.5 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer border bg-white dark:bg-[#0E1726] text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-800 hover:border-[#B45309] dark:hover:border-[#E5A93C] shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-[#B45309] dark:text-[#E5A93C]" />
                <span>Ver en tu pared (61 × 91 cm)</span>
              </button>
            </div>

            {/* The Vertical Stretched Canvas Container */}
            <div
              className={`relative max-w-md w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl bg-stone-100 dark:bg-black border border-stone-200 dark:border-stone-800 transition-all ${
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

              {artwork.isPlaceholder && (
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded text-[10px] text-amber-200 font-mono text-center">
                  {artwork.placeholderNote}
                </div>
              )}
            </div>

            <p className="mt-4 text-xs font-mono text-stone-500 dark:text-stone-400 text-center">
              Lienzo vertical de 61 × 91 cm montado en bastidor de lino belga.
            </p>

          </div>

          {/* Right Column: Definition List, Price, Quote & Purchasing Form (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B45309] dark:text-[#E5A93C] mb-2">
                <span>{artwork.coleccion.replace('-', ' ')}</span>
                <span>·</span>
                <span className="text-stone-500 dark:text-stone-400">{artwork.ano}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-editorial text-stone-900 dark:text-white mb-4">
                {artwork.titulo[lang]}
              </h1>

              {artwork.frase && (
                <p className="text-base font-editorial italic text-stone-700 dark:text-stone-300 border-l-2 border-[#B45309] dark:border-[#E5A93C]/50 pl-4 py-1 mb-6">
                  «{artwork.frase[lang]}»
                </p>
              )}

              {/* Accession Definition List */}
              <dl className="border-t border-b border-stone-200 dark:border-stone-800 divide-y divide-stone-200 dark:divide-stone-800/80 mb-6 text-xs font-mono">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#B45309] dark:text-[#E5A93C]" />
                    <span>Medidas</span>
                  </dt>
                  <dd className="text-stone-900 dark:text-stone-200 font-medium">{artwork.medidas} (24 × 36 in)</dd>
                </div>
                
                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#B45309] dark:text-[#E5A93C]" />
                    <span>Técnica</span>
                  </dt>
                  <dd className="text-stone-900 dark:text-stone-200 font-medium text-right max-w-[220px]">
                    {lang === 'es' ? artwork.tecnica : artwork.tecnica_en}
                  </dd>
                </div>

                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B45309] dark:text-[#E5A93C]" />
                    <span>Año</span>
                  </dt>
                  <dd className="text-stone-900 dark:text-stone-200 font-medium">{artwork.ano}</dd>
                </div>

                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-500 dark:text-stone-400">Disponibilidad</dt>
                  <dd className="text-emerald-700 dark:text-emerald-400 uppercase font-semibold">● {artwork.estado}</dd>
                </div>

                <div className="py-2.5 flex justify-between">
                  <dt className="text-stone-500 dark:text-stone-400">Precio</dt>
                  <dd className="text-[#B45309] dark:text-[#E5A93C] font-semibold text-sm">{artwork.precio || 'Consultar'}</dd>
                </div>
              </dl>

              {/* Collector Guarantees */}
              <div className="space-y-2.5 bg-white dark:bg-[#0E1726]/60 p-4 rounded-lg border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 font-light shadow-sm dark:shadow-none">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>Certificado físico de autenticidad firmado y sellado por la artista.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Package className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>Embalaje reforzado en madera con protección antihumedad y esquineras.</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action Button */}
            <button
              type="button"
              onClick={() => onInquireWhatsapp(artwork)}
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] transition-colors rounded cursor-pointer shadow-xl hover:shadow-[#E5A93C]/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar por WhatsApp con la Artista</span>
            </button>

            {/* Quick Email Inquiry Box */}
            <div className="p-6 bg-white dark:bg-[#0E1726] border border-stone-200 dark:border-stone-800 rounded-lg shadow-sm dark:shadow-none">
              <h3 className="text-base font-editorial text-stone-900 dark:text-white mb-2">
                O consulta por correo electrónico
              </h3>

              {isSent ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded text-center space-y-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <p className="text-xs text-emerald-800 dark:text-emerald-200 font-mono">
                    Mensaje recibido. Te responderé personalmente muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-xs text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-xs text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C]"
                  />
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Hola, me gustaría consultar la disponibilidad y envío de "${artwork.titulo.es}"...`}
                    className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-[#080C14] border border-stone-300 dark:border-stone-800 rounded text-xs text-stone-900 dark:text-white focus:outline-none focus:border-[#E5A93C]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-mono uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar consulta</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
