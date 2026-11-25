import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale, LOCALES } from "@/lib/getDictionary";
import { site } from "@/lib/site";
import "../globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Only /es and /en exist; everything is prerendered at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map(({ locale }) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#004C68",
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dictionary = getDictionary(locale);
  const ogImage = `/images/social/og-${locale}.png`;

  return {
    metadataBase: new URL(site.url),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    applicationName: dictionary.brand.name,
    authors: [{ name: site.developer, url: site.developerUrl }],
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: `/${locale}`,
      siteName: dictionary.brand.name,
      images: [{ url: ogImage, width: 1024, height: 500, alt: dictionary.metadata.ogAlt }],
      type: "website",
      locale: locale === "es" ? "es_419" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${nunito.variable} antialiased`}>
      <body className="min-h-dvh bg-sky font-sans text-ink">{children}</body>
    </html>
  );
}
