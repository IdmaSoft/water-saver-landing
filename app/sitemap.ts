import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/getDictionary";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map(({ locale }) => [locale, `${site.url}/${locale}`]));

  return LOCALES.map(({ locale }) => ({
    url: `${site.url}/${locale}`,
    priority: 1,
    changeFrequency: "monthly",
    lastModified: new Date(),
    alternates: { languages },
  }));
}
