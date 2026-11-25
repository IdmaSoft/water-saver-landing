import type { Dictionary, Locale } from "@/lib/getDictionary";
import Drop from "./Drop";
import StoreButton from "./StoreButton";

type Props = {
  dictionary: Dictionary;
  locale: Locale;
};

const RAIN = [8, 18, 30, 44, 58, 70, 82, 92];

export default function FinalCTA({ dictionary, locale }: Props) {
  const { finalCta } = dictionary;

  return (
    <section id="download" className="bg-sky px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-water-700 to-water px-6 py-16 shadow-[0_40px_80px_-40px_rgba(0,76,104,0.8)] sm:px-12 sm:py-20">
        {/* gentle rain */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40">
          {RAIN.map((left, i) => (
            <span
              key={left}
              className="absolute top-6 h-4 w-1 animate-fall rounded-full bg-drop-light/60"
              style={{ left: `${left}%`, animationDelay: `${(i % 4) * 0.4}s` }}
            />
          ))}
        </div>
        <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-drop/30 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <Drop
            id="cta"
            accessory="crown"
            padded
            className="mx-auto h-44 w-auto animate-bob drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)] sm:h-56"
          />
          <div className="text-center lg:text-left">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-extrabold text-teal-100">
              {finalCta.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">{finalCta.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-water-100 lg:mx-0">{finalCta.description}</p>
            <div className="mt-9">
              <StoreButton dictionary={dictionary} locale={locale} tone="dark" />
            </div>
          </div>
        </div>

        <p className="relative mx-auto mt-12 w-fit rounded-full bg-white/10 px-6 py-3 text-center font-bold text-white">
          {finalCta.closingLine}
        </p>
      </div>
    </section>
  );
}
