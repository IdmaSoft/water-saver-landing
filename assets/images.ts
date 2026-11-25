import appIcon from "@/public/images/logos/icon.svg";

import badgeEn from "@/public/images/badges/google-play-en.png";
import badgeEs from "@/public/images/badges/google-play-es.png";

import en1 from "@/public/images/screenshots/en/1.png";
import en2 from "@/public/images/screenshots/en/2.png";
import en3 from "@/public/images/screenshots/en/3.png";
import en4 from "@/public/images/screenshots/en/4.png";
import en5 from "@/public/images/screenshots/en/5.png";
import en6 from "@/public/images/screenshots/en/6.png";

import es1 from "@/public/images/screenshots/es/1.png";
import es2 from "@/public/images/screenshots/es/2.png";
import es3 from "@/public/images/screenshots/es/3.png";
import es4 from "@/public/images/screenshots/es/4.png";
import es5 from "@/public/images/screenshots/es/5.png";
import es6 from "@/public/images/screenshots/es/6.png";

export const images = {
  appIcon,
  badges: { en: badgeEn, es: badgeEs },
  screenshots: {
    // 1 Home · 2 Measuring · 3 Result · 4 My showers · 5 Before measuring · 6 Welcome / privacy
    en: [en1, en2, en3, en4, en5, en6],
    es: [es1, es2, es3, es4, es5, es6],
  },
} as const;
