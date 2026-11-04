import React from 'react';

interface ToroidFluxSvgProps {
  className?: string;
  size?: number;
  strokeColor?: string;
}

export const ToroidFluxSvg: React.FC<ToroidFluxSvgProps> = ({
  className = '',
  size = 400,
  strokeColor = '#E5A93C',
}) => {
  // Generate elliptical magnetic flux lines rotated at 15 degree increments
  const loops = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="toroidCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.4" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="250" r="70" fill="url(#toroidCore)" />

      {loops.map((deg, i) => (
        <ellipse
          key={i}
          cx="250"
          cy="250"
          rx="180"
          ry="65"
          transform={`rotate(${deg} 250 250)`}
          stroke={strokeColor}
          strokeWidth="0.85"
          opacity={0.35 + (i % 3) * 0.15}
          strokeDasharray={i % 2 === 0 ? undefined : '5 4'}
        />
      ))}

      {/* Central throat/singularity */}
      <circle cx="250" cy="250" r="18" stroke={strokeColor} strokeWidth="1.5" opacity="0.9" />
      <circle cx="250" cy="250" r="4" fill={strokeColor} />
    </svg>
  );
};
