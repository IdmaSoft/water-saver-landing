import type { Dictionary } from "@/lib/getDictionary";
import { mailto, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Wave from "./Wave";

type Props = {
  dictionary: Dictionary;
};

export default function FAQ({ dictionary }: Props) {
  const { faqs } = dictionary;
  // The "when can I download it" question only makes sense before the public launch.
  const items = faqs.items.filter((item) => !item.prelaunchOnly || !site.isLaunched);
  const middle = Math.ceil(items.length / 2);
  const columns = [items.slice(0, middle), items.slice(middle)];

  return (
    <section id="faq" className="bg-sky">
      <Wave fillClassName="fill-card" flip />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="FAQ" title={faqs.title} description={faqs.description} />

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((item) => (
                // Native exclusive accordion: details sharing the same name close each other. No JS needed.
                <details
                  key={item.question}
                  name="faq"
                  className="group rounded-[1.75rem] bg-card shadow-[0_10px_30px_-22px_rgba(0,76,104,0.5)] transition open:shadow-[0_18px_40px_-22px_rgba(0,76,104,0.55)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-extrabold text-water">
                    {item.question}
                    <span
                      aria-hidden
                      className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-water-100 text-2xl leading-none text-water"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 leading-7 text-muted">
                    {item.answer}
                    {item.prelaunchOnly ? (
                      <>
                        {" "}
                        <a
                          href={mailto(dictionary.store.testerSubject)}
                          className="font-bold text-teal underline underline-offset-4"
                        >
                          {site.contactEmail}
                        </a>
                      </>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
