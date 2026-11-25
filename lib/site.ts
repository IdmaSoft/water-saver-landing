export const site = {
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  isLaunched: process.env.NEXT_PUBLIC_PLAY_LAUNCHED === "true",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.idmasoft.watersaver",
  privacyUrl: "https://idmasoft.github.io/privacy-policy/water-saver/",
  contactEmail: "idmasoft.dev@gmail.com",
  developerUrl: "https://idmasoft.com",
  developer: "IdmaSoft",
} as const;

export function mailto(subject: string) {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;
}
