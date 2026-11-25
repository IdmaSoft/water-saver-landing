import type { Dictionary } from "@/lib/getDictionary";
import SectionHeading from "./SectionHeading";
import Wave from "./Wave";

type Props = {
  dictionary: Dictionary;
};

const TINTS = ["bg-water-100", "bg-teal-100", "bg-leaf-100"];

export default function Features({ dictionary }: Props) {
  const { features } = dictionary;

  return (
    <section id="features" className="bg-sky">
      <Wave fillClassName="fill-card" flip />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, index) => (
            <li
              key={item.title}
              className="flex items-start gap-5 rounded-[2rem] bg-card p-6 shadow-[0_14px_40px_-24px_rgba(0,76,104,0.35)] transition duration-300 hover:-translate-y-1"
            >
              <span
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl text-4xl ${TINTS[index % TINTS.length]}`}
                aria-hidden
              >
                {item.icon}
              </span>
              <div>
                <h3 className="text-xl font-extrabold text-water">{item.title}</h3>
                <p className="mt-1.5 leading-7 text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-leaf-100 px-6 py-3 text-center text-base font-extrabold text-leaf">
          <span className="text-2xl" aria-hidden>
            {features.trust.icon}
          </span>
          {features.trust.text}
        </p>
      </div>
      <Wave fillClassName="fill-card" />
    </section>
  );
}
