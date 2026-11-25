import type { Dictionary } from "@/lib/getDictionary";
import SectionHeading from "./SectionHeading";

type Props = {
  dictionary: Dictionary;
};

const DROP_PATH =
  "M54,26 C59.52,38.32 75.62,49.52 75.62,60.72 C75.62,74.16 65.96,82 54,82 C42.04,82 32.38,74.16 32.38,60.72 C32.38,49.52 48.48,38.32 54,26 Z";

function StepNumber({ n }: { n: number }) {
  return (
    <svg viewBox="30 24 48 60" className="h-14 w-auto" aria-hidden>
      <path d={DROP_PATH} className="fill-water" />
      <text x="54" y="69" textAnchor="middle" className="fill-white font-sans text-[22px] font-black">
        {n}
      </text>
    </svg>
  );
}

export default function HowItWorks({ dictionary }: Props) {
  const { howItWorks } = dictionary;

  return (
    <section id="how" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} description={howItWorks.description} />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* dotted "water line" joining the steps */}
          <span
            aria-hidden
            className="absolute left-[16%] right-[16%] top-[4.25rem] hidden border-t-4 border-dotted border-drop-light md:block"
          />
          {howItWorks.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col items-center rounded-[2rem] bg-sky/70 px-7 pb-8 pt-6 text-center"
            >
              <StepNumber n={index + 1} />
              <span className="mt-4 text-6xl" aria-hidden>
                {step.emoji}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-water">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
