// The drop character, drawn with the same shapes as the app icon (assets/drop.svg),
// plus the accessory of each level: cap, cape, mask and crown.

import type { CSSProperties } from "react";

export type Accessory = "none" | "cap" | "cape" | "mask" | "crown";

type Props = {
  /** Unique id so several drops on the same page do not share gradient ids. */
  id: string;
  accessory?: Accessory;
  mood?: "happy" | "sad";
  /** Extra room around the drop so every accessory fits and all drops share the same scale. */
  padded?: boolean;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

const BODY =
  "M54,26 C59.52,38.32 75.62,49.52 75.62,60.72 C75.62,74.16 65.96,82 54,82 C42.04,82 32.38,74.16 32.38,60.72 C32.38,49.52 48.48,38.32 54,26 Z";

export default function Drop({ id, accessory = "none", mood = "happy", padded = false, className, style, title }: Props) {
  const gradientId = `drop-water-${id}`;
  const viewBox = padded ? "20 14 68 72" : "30 24 48 60";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gradientId} x1="0" y1="26" x2="0" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8FDBFF" />
          <stop offset="1" stopColor="#2E9BD6" />
        </linearGradient>
      </defs>

      {accessory === "cape" ? (
        <g fill="#E5484D" stroke="#A8282C" strokeWidth="0.9" strokeLinejoin="round">
          <path d="M39,55 L24,80 Q33,78.5 41.5,75 Z" />
          <path d="M69,55 L84,80 Q75,78.5 66.5,75 Z" />
        </g>
      ) : null}

      <path d={BODY} fill={`url(#${gradientId})`} stroke="#1B6C99" strokeWidth="1.15" />
      <path fill="#FFFFFF" fillOpacity="0.55" d="M40.2,55.12 a2.76,5.6 0 1,0 5.52,0 a2.76,5.6 0 1,0 -5.52,0 Z" />
      <path
        fill="#FF8FA3"
        fillOpacity="0.6"
        d="M39.28,68.56 a3.22,3.22 0 1,0 6.44,0 a3.22,3.22 0 1,0 -6.44,0 Z M62.28,68.56 a3.22,3.22 0 1,0 6.44,0 a3.22,3.22 0 1,0 -6.44,0 Z"
      />

      {accessory === "mask" ? (
        <g>
          <path d="M41,59 L35,55.5 M41,60.5 L34.5,61.5" stroke="#5B21B6" strokeWidth="1.4" strokeLinecap="round" />
          <path
            d="M40.5,58 Q47.5,54.5 54,58.5 Q60.5,54.5 67.5,58 Q68.5,63.8 63.5,66 Q58.5,67 54,63.8 Q49.5,67 44.5,66 Q39.5,63.8 40.5,58 Z"
            fill="#7C3AED"
            stroke="#5B21B6"
            strokeWidth="0.8"
          />
          <ellipse cx="47.56" cy="61.84" rx="3.1" ry="4.3" fill="#FFFFFF" />
          <ellipse cx="60.44" cy="61.84" rx="3.1" ry="4.3" fill="#FFFFFF" />
        </g>
      ) : null}

      <path
        fill="#0D2B3E"
        d="M45.49,61.84 a2.07,3.36 0 1,0 4.14,0 a2.07,3.36 0 1,0 -4.14,0 Z M58.37,61.84 a2.07,3.36 0 1,0 4.14,0 a2.07,3.36 0 1,0 -4.14,0 Z"
      />
      <path
        fill="#FFFFFF"
        d="M47.42,60.16 a0.83,0.83 0 1,0 1.66,0 a0.83,0.83 0 1,0 -1.66,0 Z M60.3,60.16 a0.83,0.83 0 1,0 1.66,0 a0.83,0.83 0 1,0 -1.66,0 Z"
      />
      <path
        fill="none"
        stroke="#0D2B3E"
        strokeWidth="1.61"
        strokeLinecap="round"
        d={mood === "happy" ? "M50.32,70.8 Q54,75.28 57.68,70.8" : "M50.32,73.6 Q54,69.6 57.68,73.6"}
      />

      {accessory === "cap" ? (
        <g stroke="#B45309" strokeWidth="0.8" strokeLinejoin="round">
          <path d="M60,40.6 Q70,39.4 74.5,43 Q67,44.6 60,43.4 Z" fill="#F59E0B" />
          <path d="M42.3,42.5 C42.3,31 48,25.6 54,25.6 C60,25.6 65.7,31 65.7,42.5 Z" fill="#FBBF24" />
          <path d="M42.6,40 L65.4,40" stroke="#B45309" strokeWidth="1.2" fill="none" />
          <circle cx="54" cy="25.8" r="1.3" fill="#F59E0B" />
        </g>
      ) : null}

      {accessory === "crown" ? (
        <g>
          <path
            d="M45,33 L44,20.5 L49.5,26.5 L54,17.5 L58.5,26.5 L64,20.5 L63,33 Z"
            fill="#FFC83D"
            stroke="#C98A00"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
          <circle cx="54" cy="29" r="1.5" fill="#E5484D" />
          <circle cx="47.5" cy="30" r="1" fill="#2E9BD6" />
          <circle cx="60.5" cy="30" r="1" fill="#3B6939" />
        </g>
      ) : null}
    </svg>
  );
}
