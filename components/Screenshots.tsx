"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/getDictionary";
import SectionHeading from "./SectionHeading";
import Wave from "./Wave";

type Props = {
  dictionary: Dictionary;
};

export default function Screenshots({ dictionary }: Props) {
  const { screenshots } = dictionary;
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = screenshots.items.length;

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    const item = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !item) return;
    carousel.scrollTo({
      left: item.offsetLeft - (carousel.clientWidth - item.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateIndex = () => {
      const center = carousel.scrollLeft + carousel.clientWidth / 2;
      const children = Array.from(carousel.children) as HTMLElement[];
      const nearest = children.reduce(
        (closest, child, index) => {
          const diff = Math.abs(child.offsetLeft + child.clientWidth / 2 - center);
          return diff < closest.diff ? { index, diff } : closest;
        },
        { index: 0, diff: Infinity }
      );
      setActiveIndex(nearest.index);
    };

    updateIndex();
    carousel.addEventListener("scroll", updateIndex, { passive: true });
    return () => carousel.removeEventListener("scroll", updateIndex);
  }, []);

  const arrow =
    "absolute top-[42%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card text-water shadow-lg transition hover:bg-water hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:flex";

  return (
    <section id="screenshots" className="bg-sky">
      <Wave fillClassName="fill-card" flip />
      <div className="py-16 sm:py-20">
        <div className="px-6">
          <SectionHeading eyebrow={screenshots.eyebrow} title={screenshots.title} description={screenshots.description} />
        </div>

        <div className="relative mt-12">
          <ul
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[calc(50%-110px)] pb-6 pt-4 scrollbar-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:px-[calc(50%-125px)]"
          >
            {screenshots.items.map((screenshot, i) => (
              <li
                key={screenshot.caption}
                className={`w-[220px] shrink-0 snap-center transition duration-300 sm:w-[250px] ${
                  i === activeIndex ? "scale-100 opacity-100" : "scale-[0.92] opacity-60"
                }`}
              >
                <figure>
                  <div className="rounded-[2.4rem] bg-ink p-[6px] shadow-[0_24px_50px_-20px_rgba(0,76,104,0.5)]">
                    <div className="relative aspect-[1/2] overflow-hidden rounded-[2.05rem]">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        placeholder="blur"
                        className="object-cover"
                        sizes="250px"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-5 px-2 text-center text-base font-bold leading-6 text-water">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className={`${arrow} left-[calc(50%-190px)]`}
            aria-label={screenshots.prev}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(total - 1, activeIndex + 1))}
            disabled={activeIndex === total - 1}
            className={`${arrow} right-[calc(50%-190px)]`}
            aria-label={screenshots.next}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mt-2 flex justify-center gap-2">
            {screenshots.items.map((screenshot, i) => (
              <button
                key={screenshot.caption}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`${i + 1} / ${total}`}
                aria-current={i === activeIndex}
                className={`h-2.5 rounded-full transition-all ${i === activeIndex ? "w-8 bg-water" : "w-2.5 bg-water/25 hover:bg-water/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Wave fillClassName="fill-card" />
    </section>
  );
}
