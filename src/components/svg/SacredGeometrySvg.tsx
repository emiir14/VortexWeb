import React from 'react';

interface SacredGeometrySvgProps {
  className?: string;
  size?: number;
  strokeColor?: string;
}

export const SacredGeometrySvg: React.FC<SacredGeometrySvgProps> = ({
  className = '',
  size = 400,
  strokeColor = '#E5A93C',
}) => {
  const cx = 250;
  const cy = 250;
  const r = 70;

  // 6 peripheral circle centers of Seed of Life
  const angles = [0, 60, 120, 180, 240, 300];
  const centers = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  });

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
      {/* Outer bounding double circle */}
      <circle cx={cx} cy={cy} r={r * 2.6} stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      <circle cx={cx} cy={cy} r={r * 2.8} stroke={strokeColor} strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
      <circle cx={cx} cy={cy} r={r * 2} stroke={strokeColor} strokeWidth="1.25" opacity="0.7" />

      {/* Hexagram vectors */}
      <polygon
        points={`
          ${centers[0].x},${centers[0].y}
          ${centers[2].x},${centers[2].y}
          ${centers[4].x},${centers[4].y}
        `}
        stroke={strokeColor}
        strokeWidth="0.75"
        opacity="0.35"
      />
      <polygon
        points={`
          ${centers[1].x},${centers[1].y}
          ${centers[3].x},${centers[3].y}
          ${centers[5].x},${centers[5].y}
        `}
        stroke={strokeColor}
        strokeWidth="0.75"
        opacity="0.35"
      />

      {/* Central circle */}
      <circle cx={cx} cy={cy} r={r} stroke={strokeColor} strokeWidth="1.25" opacity="0.8" />

      {/* 6 Peripheral intersecting circles (Seed of Life) */}
      {centers.map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={r}
          stroke={strokeColor}
          strokeWidth="1.25"
          opacity="0.75"
        />
      ))}

      {/* Outer nodes */}
      {centers.map((c, i) => (
        <circle key={`node-${i}`} cx={c.x} cy={c.y} r="2.5" fill={strokeColor} opacity="0.9" />
      ))}
      <circle cx={cx} cy={cy} r="3" fill={strokeColor} />
    </svg>
  );
};
