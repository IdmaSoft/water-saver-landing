import Image from "next/image";
import { images } from "@/assets/images";
import type { Dictionary, Locale } from "@/lib/getDictionary";
import { site } from "@/lib/site";

type Props = {
  dictionary: Dictionary;
  locale: Locale;
  tone?: "light" | "dark";
  align?: "start" | "center";
};

// Official Google Play badge (unaltered, per Google's badge rules) linking to the store listing.
export default function StoreButton({ dictionary, locale, tone = "light", align = "start" }: Props) {
  const dark = tone === "dark";
  const alignment = align === "center" ? "items-center text-center" : "items-center text-center lg:items-start lg:text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener"
        className="inline-block rounded-[14px] transition hover:-translate-y-0.5 hover:drop-shadow-[0_12px_20px_rgba(0,76,104,0.35)]"
      >
        <Image src={images.badges[locale]} alt={dictionary.store.badgeAlt} className="h-[64px] w-auto" priority />
      </a>
      <p className={`text-sm font-semibold ${dark ? "text-water-100" : "text-muted"}`}>{dictionary.store.androidOnly}</p>
    </div>
  );
}
