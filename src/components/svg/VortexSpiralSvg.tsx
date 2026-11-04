import React from 'react';

interface VortexSpiralSvgProps {
  className?: string;
  size?: number;
  strokeColor?: string;
  animate?: boolean;
}

export const VortexSpiralSvg: React.FC<VortexSpiralSvgProps> = ({
  className = '',
  size = 400,
  strokeColor = '#E5A93C',
  animate = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animate ? 'transition-transform duration-1000 ease-out' : ''}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="vortexGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
          <stop offset="60%" stopColor={strokeColor} stopOpacity="0.08" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle core glow */}
      <circle cx="250" cy="250" r="180" fill="url(#vortexGlow)" />

      {/* Concentric harmonic guide rings */}
      <circle cx="250" cy="250" r="40" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="250" cy="250" r="80" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="250" cy="250" r="140" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="5 5" opacity="0.35" />
      <circle cx="250" cy="250" r="210" stroke={strokeColor} strokeWidth="0.75" opacity="0.25" />

      {/* Axis lines */}
      <line x1="40" y1="250" x2="460" y2="250" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
      <line x1="250" y1="40" x2="250" y2="460" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />

      {/* Continuous Golden Spiral Arc 1 */}
      <path
        d="M250 250
           C253 247 257 248 260 250
           C266 255 264 266 257 270
           C245 277 232 268 230 253
           C227 232 245 214 267 215
           C295 216 317 242 314 271
           C310 307 275 336 238 330
           C192 323 156 278 165 231
           C176 172 231 127 291 138
           C363 151 416 218 402 291
           C385 377 307 439 220 422
           C119 403 48 312 68 210"
        stroke={strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Secondary Opposing Harmonic Spiral Arc (Balancing vortex) */}
      <path
        d="M250 250
           C247 253 243 252 240 250
           C234 245 236 234 243 230
           C255 223 268 232 270 247
           C273 268 255 286 233 285
           C205 284 183 258 186 229
           C190 193 225 164 262 170
           C308 177 344 222 335 269
           C324 328 269 373 209 362
           C137 349 84 282 98 209
           C115 123 193 61 280 78
           C381 97 452 188 432 290"
        stroke={strokeColor}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="6 4"
        opacity="0.5"
      />

      {/* Center nexus point */}
      <circle cx="250" cy="250" r="3.5" fill={strokeColor} />
    </svg>
  );
};
