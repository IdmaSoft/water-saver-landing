import type { Dictionary } from "@/lib/getDictionary";
import Drop, { type Accessory } from "./Drop";
import SectionHeading from "./SectionHeading";

type Props = {
  dictionary: Dictionary;
};

const ACCESSORIES: Accessory[] = ["none", "cap", "cape", "mask", "crown"];

export default function Levels({ dictionary }: Props) {
  const { levels } = dictionary;

  return (
    <section id="levels" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={levels.eyebrow} title={levels.title} description={levels.description} />

        <div className="relative mt-14">
          {/* progress track behind the drops */}
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-[42%] hidden h-3 rounded-full bg-gradient-to-r from-water-100 via-drop-light to-[#FFC83D] lg:block"
          />
          <ol className="relative -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scrollbar-none lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
            {levels.items.map((level, index) => (
              <li
                key={level.name}
                className="flex w-[44%] shrink-0 snap-center flex-col items-center text-center sm:w-[30%] lg:w-auto"
              >
                <div className="flex h-40 items-end justify-center">
                  <Drop
                    id={`level-${index}`}
                    accessory={ACCESSORIES[index]}
                    padded
                    title={level.name}
                    className="w-auto drop-shadow-[0_12px_14px_rgba(0,76,104,0.25)] transition duration-300 hover:-translate-y-2"
                    // drops grow a little with each level
                    style={{ height: `${7 + index * 0.75}rem` }}
                  />
                </div>
                <span className="mt-4 rounded-full bg-water px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                  {levels.levelLabel} {index + 1}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-water">{level.name}</h3>
                <p className="text-sm font-semibold text-muted">{level.accessory}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
