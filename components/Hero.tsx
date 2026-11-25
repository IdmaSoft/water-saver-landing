import { images } from "@/assets/images";
import type { Dictionary, Locale } from "@/lib/getDictionary";
import Drop from "./Drop";
import PhoneFrame from "./PhoneFrame";
import StoreButton from "./StoreButton";
import Wave from "./Wave";

type Props = {
  dictionary: Dictionary;
  locale: Locale;
};

export default function Hero({ dictionary, locale }: Props) {
  const shots = images.screenshots[locale];

  return (
    <section id="top" className="relative isolate -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
      {/* Background: sky with soft bubbles */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#C2E8FF_0%,#D6EEFA_45%,#D6EEFA_100%)]" />
      <div aria-hidden className="absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
      <div aria-hidden className="absolute -right-20 bottom-10 -z-10 h-96 w-96 rounded-full bg-drop-light/40 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-1.5 text-sm font-extrabold text-leaf">
            <span aria-hidden>🌱</span> {dictionary.hero.eyebrow}
          </p>

          <h1 className="mt-6 text-6xl font-black tracking-tight text-water sm:text-7xl lg:text-8xl">
            {dictionary.brand.name}
          </h1>
          <p className="mt-3 text-3xl font-extrabold text-drop-line sm:text-4xl">
            {dictionary.brand.tagline} <span aria-hidden>💧</span>
          </p>
          <p className="mx-auto mt-6 max-w-lg text-xl leading-8 text-muted text-pretty lg:mx-0">
            {dictionary.hero.description}
          </p>

          <div className="mt-9">
            <StoreButton dictionary={dictionary} locale={locale} />
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-2 lg:justify-start">
            {dictionary.hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-2 text-sm font-bold text-water shadow-sm"
              >
                <span className="text-leaf" aria-hidden>
                  ✓
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Phones + mascot */}
        <div className="relative mx-auto h-[440px] w-full max-w-[420px] sm:h-[560px]">
          <PhoneFrame
            src={shots[2]}
            alt={dictionary.hero.screenshotAlt2}
            sizes="220px"
            className="absolute right-0 top-10 w-[46%] rotate-6 opacity-95 sm:w-[48%]"
          />
          <PhoneFrame
            src={shots[0]}
            alt={dictionary.hero.screenshotAlt}
            sizes="(max-width: 640px) 230px, 260px"
            priority
            className="absolute left-[12%] top-0 w-[54%] -rotate-3 sm:w-[56%]"
          />

          <div className="absolute -left-2 bottom-2 w-[30%] animate-bob sm:-left-6">
            <div className="absolute -top-14 left-[55%] whitespace-nowrap rounded-3xl rounded-bl-md bg-teal px-4 py-2.5 text-sm font-extrabold text-white shadow-lg sm:text-base">
              {dictionary.hero.bubble}
            </div>
            <Drop id="hero" accessory="cape" padded className="h-auto w-full drop-shadow-[0_18px_20px_rgba(0,76,104,0.3)]" />
          </div>
        </div>
      </div>

      <Wave fillClassName="fill-card" />
    </section>
  );
}
