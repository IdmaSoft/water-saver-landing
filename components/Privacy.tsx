import type { Dictionary } from "@/lib/getDictionary";
import { site } from "@/lib/site";
import Drop from "./Drop";

type Props = {
  dictionary: Dictionary;
};

export default function Privacy({ dictionary }: Props) {
  const { privacy } = dictionary;

  return (
    <section id="privacy" className="bg-card py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-48 sm:w-60">
          <div aria-hidden className="absolute inset-4 rounded-full bg-teal-100/70 blur-2xl" />
          <Drop id="privacy" className="relative h-auto w-full animate-bob drop-shadow-[0_18px_20px_rgba(0,76,104,0.25)]" />
          <span
            aria-hidden
            className="absolute -bottom-2 -right-2 flex h-20 w-20 items-center justify-center rounded-full bg-card text-5xl shadow-lg"
          >
            🔒
          </span>
        </div>

        <div className="text-center md:text-left">
          <p className="inline-flex rounded-full bg-teal-100 px-4 py-1.5 text-sm font-extrabold text-teal">{privacy.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-water text-balance sm:text-5xl">{privacy.title}</h2>

          <blockquote className="relative mt-8 rounded-[2rem] rounded-tl-md bg-teal p-7 text-left text-lg font-semibold leading-8 text-white shadow-[0_20px_40px_-20px_rgba(0,106,106,0.6)]">
            <span aria-hidden className="absolute -top-5 left-6 text-5xl text-teal-100">
              &ldquo;
            </span>
            {privacy.quote}
          </blockquote>

          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            {privacy.points.map((point) => (
              <li key={point} className="flex items-center gap-3 rounded-2xl bg-leaf-100/70 px-4 py-3 font-bold text-leaf">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-leaf text-sm text-white" aria-hidden>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href={site.privacyUrl}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 font-extrabold text-water underline decoration-drop-light decoration-4 underline-offset-4 transition hover:decoration-water"
          >
            {privacy.policyLink} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
