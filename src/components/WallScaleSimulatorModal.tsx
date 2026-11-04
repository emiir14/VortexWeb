import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Artwork } from '../types/artwork';
import { X, Check, MessageSquare, Info, ShieldCheck, Ruler } from 'lucide-react';

interface WallScaleSimulatorModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onInquire: (artworkTitle: string) => void;
}

type RoomEnvironment = 'living' | 'meditation' | 'studio' | 'office';
type WallColorTone = 'alabaster' | 'galleryGrey' | 'charcoal' | 'lapis';
type FrameType = 'none' | 'oak' | 'black';

export const WallScaleSimulatorModal: React.FC<WallScaleSimulatorModalProps> = ({
  artwork,
  onClose,
  onInquire,
}) => {
  const { t, lang } = useLanguage();
  const [room, setRoom] = useState<RoomEnvironment>('living');
  const [wallColor, setWallColor] = useState<WallColorTone>('alabaster');
  const [frame, setFrame] = useState<FrameType>('oak');

  if (!artwork) return null;

  // Background wall colors
  const wallBgMap: Record<WallColorTone, string> = {
    alabaster: 'bg-[#F5F2EB]',
    galleryGrey: 'bg-[#E3E3E3]',
    charcoal: 'bg-[#24272C]',
    lapis: 'bg-[#182338]',
  };

  const wallTextMap: Record<WallColorTone, string> = {
    alabaster: 'text-stone-800',
    galleryGrey: 'text-stone-800',
    charcoal: 'text-stone-200',
    lapis: 'text-stone-200',
  };

  // Frame styling classes around the canvas
  const frameClasses: Record<FrameType, string> = {
    none: 'shadow-2xl border-none',
    oak: 'p-2 sm:p-2.5 bg-[#CBB18B] shadow-2xl border border-[#9A7D56]/50 rounded-[2px]',
    black: 'p-2 sm:p-2.5 bg-[#1F1F1F] shadow-2xl border border-black/80 rounded-[2px]',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wall-modal-title"
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#0E1726] border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-100/90 dark:bg-[#080C14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center text-[#B45309] dark:text-[#E5A93C]">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <h3 id="wall-modal-title" className="text-base sm:text-lg font-editorial text-stone-900 dark:text-white">
                {t('wall.modalTitle')}
              </h3>
              <p className="text-xs font-mono text-stone-600 dark:text-stone-400">
                {artwork.titulo[lang]} · 61 × 91 cm (24 × 36 in)
              </p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white rounded hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors cursor-pointer"
            aria-label="Cerrar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Wall Simulation Stage */}
        <div className={`relative w-full h-[360px] sm:h-[460px] ${wallBgMap[wallColor]} transition-colors duration-500 overflow-hidden flex flex-col justify-end items-center`}>
          
          {/* Subtle architectural wall texture & soft room lighting gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25 pointer-events-none" />
          
          {/* Ceiling line indicator (subtle shadow at top) */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

          {/* Wall scale guide lines */}
          <div className={`absolute left-6 top-8 bottom-24 flex flex-col justify-between text-[10px] font-mono opacity-50 pointer-events-none ${wallTextMap[wallColor]}`}>
            <span>2.60 m (Techo)</span>
            <span className="border-b border-dashed border-current pb-0.5">1.55 m (Centro de visión)</span>
            <span>0.00 m (Suelo)</span>
          </div>

          {/* Artwork centered in simulated room at exact 61 × 91 cm proportion */}
          <div className="relative mb-20 sm:mb-24 z-10">
            <div className={`transition-all duration-300 ${frameClasses[frame]}`}>
              <div className="relative w-[150px] sm:w-[190px] aspect-[2/3] overflow-hidden bg-black/20">
                <img
                  src={artwork.imagenPrincipal}
                  alt={artwork.alt[lang]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Subtle realistic drop shadow underneath the canvas */}
            <div className="absolute -bottom-4 left-4 right-4 h-3 bg-black/40 blur-md rounded-full pointer-events-none" />
          </div>

          {/* Simulated furniture context at bottom based on room selection */}
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 border-t border-black/10 flex items-end justify-between px-6 sm:px-12 pointer-events-none z-10">
            
            {/* Room Furniture Silhouette / Context cues */}
            {room === 'living' && (
              <div className="w-full flex justify-center items-end pb-0">
                {/* Minimalist Credenza / Lowboard */}
                <div className="w-[340px] sm:w-[460px] h-12 sm:h-14 bg-gradient-to-t from-stone-900 to-stone-800 rounded-t border-t border-stone-700 shadow-xl flex items-center justify-around px-6">
                  <div className="w-8 h-8 rounded-full border border-stone-600 bg-stone-700/50" />
                  <div className="w-20 h-2 bg-stone-700 rounded" />
                </div>
              </div>
            )}

            {room === 'meditation' && (
              <div className="w-full flex justify-center items-end pb-0">
                {/* Tatami / Meditation Bench Low Platform */}
                <div className="w-[360px] sm:w-[480px] h-8 sm:h-10 bg-amber-950/40 rounded-t border-t border-amber-900/40 shadow-xl flex justify-center items-center gap-10">
                  <div className="w-16 h-3 rounded bg-amber-800/40" />
                  <div className="w-8 h-8 rounded-full border border-amber-700/30" />
                </div>
              </div>
            )}

            {room === 'studio' && (
              <div className="w-full flex justify-between items-end pb-0">
                <div className="w-24 h-16 bg-stone-800/60 rounded-t border-t border-stone-700" />
                <div className="w-32 h-14 bg-stone-900/60 rounded-t border-t border-stone-700" />
              </div>
            )}

            {room === 'office' && (
              <div className="w-full flex justify-center items-end pb-0">
                <div className="w-[380px] sm:w-[500px] h-14 sm:h-16 bg-stone-900 rounded-t border-t border-stone-700 shadow-xl" />
              </div>
            )}

          </div>

          {/* Floor plane */}
          <div className="w-full h-8 sm:h-10 bg-[#1A1816] border-t border-black/30 z-20" />

        </div>

        {/* Customization Control Toolbar */}
        <div className="p-4 sm:p-6 bg-stone-50 dark:bg-[#0B1220] border-t border-stone-200 dark:border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Room Environment Selection */}
          <div>
            <label className="text-xs font-mono uppercase text-stone-600 dark:text-stone-400 block mb-2">
              {t('wall.selectRoom')}
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-stone-200/70 dark:bg-[#080C14] p-1 rounded border border-stone-300 dark:border-stone-800">
              <button
                type="button"
                onClick={() => setRoom('living')}
                className={`py-1.5 px-2 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                  room === 'living' ? 'bg-[#E5A93C] text-black font-semibold shadow-sm' : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {t('wall.roomLiving')}
              </button>
              <button
                type="button"
                onClick={() => setRoom('meditation')}
                className={`py-1.5 px-2 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                  room === 'meditation' ? 'bg-[#E5A93C] text-black font-semibold shadow-sm' : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {t('wall.roomMeditation')}
              </button>
              <button
                type="button"
                onClick={() => setRoom('studio')}
                className={`py-1.5 px-2 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                  room === 'studio' ? 'bg-[#E5A93C] text-black font-semibold shadow-sm' : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {t('wall.roomStudio')}
              </button>
              <button
                type="button"
                onClick={() => setRoom('office')}
                className={`py-1.5 px-2 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                  room === 'office' ? 'bg-[#E5A93C] text-black font-semibold shadow-sm' : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {t('wall.roomOffice')}
              </button>
            </div>
          </div>

          {/* Wall Color Selection */}
          <div>
            <label className="text-xs font-mono uppercase text-stone-600 dark:text-stone-400 block mb-2">
              {t('wall.selectWallColor')}
            </label>
            <div className="flex items-center gap-2 pt-1">
              {[
                { id: 'alabaster', name: 'Alabastro Cálido', bg: 'bg-[#F5F2EB]' },
                { id: 'galleryGrey', name: 'Gris Galería', bg: 'bg-[#E3E3E3]' },
                { id: 'charcoal', name: 'Carbón', bg: 'bg-[#24272C]' },
                { id: 'lapis', name: 'Índigo', bg: 'bg-[#182338]' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setWallColor(c.id as WallColorTone)}
                  className={`w-9 h-9 rounded-full ${c.bg} border-2 flex items-center justify-center transition-transform cursor-pointer ${
                    wallColor === c.id ? 'border-[#E5A93C] scale-110 shadow-md ring-2 ring-[#E5A93C]/30' : 'border-stone-400 dark:border-stone-700 hover:scale-105'
                  }`}
                  title={c.name}
                >
                  {wallColor === c.id && <Check className="w-4 h-4 text-[#B45309] dark:text-[#E5A93C]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Framing Selection */}
          <div>
            <label className="text-xs font-mono uppercase text-stone-600 dark:text-stone-400 block mb-2">
              {t('wall.selectFrame')}
            </label>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setFrame('oak')}
                className={`text-left text-xs font-mono px-3 py-1.5 rounded border transition-colors cursor-pointer flex items-center justify-between ${
                  frame === 'oak'
                    ? 'border-[#E5A93C] bg-[#E5A93C]/10 text-stone-900 dark:text-white font-medium'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-700'
                }`}
              >
                <span>{t('wall.frameOak')}</span>
                <span className="w-3 h-3 rounded-full bg-[#CBB18B] border border-stone-400/50" />
              </button>
              <button
                type="button"
                onClick={() => setFrame('black')}
                className={`text-left text-xs font-mono px-3 py-1.5 rounded border transition-colors cursor-pointer flex items-center justify-between ${
                  frame === 'black'
                    ? 'border-[#E5A93C] bg-[#E5A93C]/10 text-stone-900 dark:text-white font-medium'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-700'
                }`}
              >
                <span>{t('wall.frameBlack')}</span>
                <span className="w-3 h-3 rounded-full bg-[#1F1F1F] border border-stone-600/50" />
              </button>
              <button
                type="button"
                onClick={() => setFrame('none')}
                className={`text-left text-xs font-mono px-3 py-1.5 rounded border transition-colors cursor-pointer flex items-center justify-between ${
                  frame === 'none'
                    ? 'border-[#E5A93C] bg-[#E5A93C]/10 text-stone-900 dark:text-white font-medium'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-700'
                }`}
              >
                <span>{t('wall.frameNone')}</span>
                <span className="text-[10px] text-stone-500">Lienzo al aire</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer with Direct Inquiry Action */}
        <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-[#080C14] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-stone-600 dark:text-stone-400">
            {t('wall.scaleNotice')}
          </p>

          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire(artwork.titulo[lang]);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E5A93C] hover:bg-[#F5B853] rounded transition-colors cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t('wall.inquireThis')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
