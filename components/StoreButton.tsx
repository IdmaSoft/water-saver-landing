import Image from "next/image";
import { images } from "@/assets/images";
import type { Dictionary, Locale } from "@/lib/getDictionary";
import { mailto, site } from "@/lib/site";

type Props = {
  dictionary: Dictionary;
  locale: Locale;
  tone?: "light" | "dark";
  align?: "start" | "center";
};

// Before the public launch the store page is not visible, so we never link to it:
// we show "Coming soon" and invite people to the closed test by email.
export default function StoreButton({ dictionary, locale, tone = "light", align = "start" }: Props) {
  const dark = tone === "dark";
  const alignment = align === "center" ? "items-center text-center" : "items-center text-center lg:items-start lg:text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {site.isLaunched ? (
        <a href={site.playStoreUrl} target="_blank" rel="noopener" className="transition hover:-translate-y-0.5">
          <Image src={images.badges[locale]} alt={dictionary.store.badgeAlt} className="h-[64px] w-auto" />
        </a>
      ) : (
        <>
          <span
            className={`inline-flex items-center gap-3 whitespace-nowrap rounded-full px-5 py-4 text-base font-extrabold sm:px-6 sm:text-lg shadow-lg ${
              dark ? "bg-white text-water shadow-black/20" : "bg-water text-white shadow-water/25"
            }`}
          >
            <span className="relative flex h-3 w-3" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-100 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#5FBF5A]" />
            </span>
            {dictionary.store.comingSoon}
          </span>
          <a
            href={mailto(dictionary.store.testerSubject)}
            className={`text-sm font-bold underline decoration-2 underline-offset-4 transition ${
              dark ? "text-teal-100 decoration-teal-100/50 hover:text-white" : "text-teal decoration-teal/40 hover:text-water"
            }`}
          >
            {dictionary.store.testerCta} →
          </a>
        </>
      )}
      <p className={`text-sm font-semibold ${dark ? "text-water-100" : "text-muted"}`}>{dictionary.store.androidOnly}</p>
    </div>
  );
}
