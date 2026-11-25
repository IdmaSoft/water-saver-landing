import Image from "next/image";
import { images } from "@/assets/images";
import type { Dictionary, Locale } from "@/lib/getDictionary";
import { site } from "@/lib/site";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
  dictionary: Dictionary;
  locale: Locale;
};

export default function Navbar({ dictionary, locale }: Props) {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/70 bg-card/85 py-2 pl-2 pr-2 shadow-[0_10px_30px_-12px_rgba(0,76,104,0.25)] backdrop-blur-xl sm:pl-3">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <Image src={images.appIcon} alt="" className="h-10 w-10 rounded-xl" priority />
          <span className="truncate text-lg font-extrabold tracking-tight text-water sm:text-xl">
            {dictionary.brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={dictionary.brand.name}>
          {dictionary.navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-muted transition hover:bg-sky hover:text-water"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LocaleSwitcher locale={locale} dictionary={dictionary} />
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full bg-water px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-water-700 sm:inline-flex"
          >
            {dictionary.navbar.download}
          </a>
        </div>
      </div>
    </header>
  );
}
