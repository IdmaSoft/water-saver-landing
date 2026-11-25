"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/getDictionary";
import SectionHeading from "./SectionHeading";
import Wave from "./Wave";

type Props = {
  dictionary: Dictionary;
};

// Left-aligned carousel: ~1.5 phones visible on mobile, 3 on tablet, 4 on desktop.
// All cards look the same, so nothing depends on a "current" item being highlighted.
export default function Screenshots({ dictionary }: Props) {
  const { screenshots } = dictionary;
  const total = screenshots.items.length;
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(total);

  const measure = useCallback(() => {
    const carousel = carouselRef.current;
    const first = carousel?.children[0] as HTMLElement | undefined;
    const second = carousel?.children[1] as HTMLElement | undefined;
    if (!carousel || !first || !second) return;

    const step = second.offsetLeft - first.offsetLeft; // card width + gap
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const pageCount = Math.min(total, Math.round(maxScroll / step) + 1);
    const current = carousel.scrollLeft >= maxScroll - 4 ? pageCount - 1 : Math.round(carousel.scrollLeft / step);

    setPages(pageCount);
    setPage(Math.min(pageCount - 1, Math.max(0, current)));
  }, [total]);

  const scrollToPage = (target: number) => {
    const carousel = carouselRef.current;
    const item = carousel?.children[target] as HTMLElement | undefined;
    const first = carousel?.children[0] as HTMLElement | undefined;
    if (!carousel || !item || !first) return;
    carousel.scrollTo({ left: item.offsetLeft - first.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    carousel.addEventListener("scroll", onScroll, { passive: true });
    carousel.addEventListener("scrollend", measure);
    const resize = new ResizeObserver(measure);
    resize.observe(carousel);

    return () => {
      cancelAnimationFrame(frame);
      carousel.removeEventListener("scroll", onScroll);
      carousel.removeEventListener("scrollend", measure);
      resize.disconnect();
    };
  }, [measure]);

  const arrow =
    "absolute top-[40%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card text-water shadow-lg transition hover:bg-water hover:text-white disabled:pointer-events-none disabled:opacity-0 md:flex";

  return (
    <section id="screenshots" className="bg-sky">
      <Wave fillClassName="fill-card" flip />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow={screenshots.eyebrow} title={screenshots.title} description={screenshots.description} />

        <div className="relative mt-12">
          <ul
            ref={carouselRef}
            className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-6 pt-2 scrollbar-none lg:mx-0 lg:scroll-px-0 lg:gap-6 lg:px-0"
          >
            {screenshots.items.map((screenshot) => (
              <li
                key={screenshot.caption}
                className="w-[62%] shrink-0 snap-start sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
              >
                <figure>
                  <div className="rounded-[2.4rem] bg-ink p-[6px] shadow-[0_24px_50px_-24px_rgba(0,76,104,0.55)]">
                    <div className="relative aspect-[1/2] overflow-hidden rounded-[2.05rem]">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        placeholder="blur"
                        className="object-cover"
                        sizes="(max-width: 640px) 62vw, (max-width: 1024px) 31vw, 270px"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-5 px-1 text-center text-base font-bold leading-6 text-water">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollToPage(page - 1)}
            disabled={page === 0}
            className={`${arrow} -left-5`}
            aria-label={screenshots.prev}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollToPage(page + 1)}
            disabled={page >= pages - 1}
            className={`${arrow} -right-5`}
            aria-label={screenshots.next}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {pages > 1 ? (
            <div className="mt-2 flex justify-center gap-2">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToPage(i)}
                  aria-label={`${i + 1} / ${pages}`}
                  aria-current={i === page}
                  className={`h-2.5 rounded-full transition-all ${i === page ? "w-8 bg-water" : "w-2.5 bg-water/25 hover:bg-water/50"}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <Wave fillClassName="fill-card" />
    </section>
  );
}
