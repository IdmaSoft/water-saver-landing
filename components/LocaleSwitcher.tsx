import { LOCALES, type Dictionary, type Locale } from "@/lib/getDictionary";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

// Two languages only, so a segmented toggle is clearer than a dropdown.
// Visiting /es or /en stores the choice in a cookie (see proxy.ts).
export default function LocaleSwitcher({ locale, dictionary }: Props) {
  return (
    <nav aria-label={dictionary.navbar.switchLanguage} className="flex rounded-full bg-sky p-1 text-sm font-extrabold">
      {LOCALES.map((option) => {
        const active = option.locale === locale;
        return (
          <a
            key={option.locale}
            href={`/${option.locale}`}
            hrefLang={option.locale}
            lang={option.locale}
            aria-current={active ? "page" : undefined}
            title={active ? undefined : dictionary.navbar.switchLanguage}
            className={`rounded-full px-3 py-1 transition ${
              active ? "bg-water text-white shadow" : "text-water hover:bg-white"
            }`}
          >
            {option.label}
          </a>
        );
      })}
    </nav>
  );
}
