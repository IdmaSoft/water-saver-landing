// Soft wave used to join two sections of different colors.
type Props = {
  /** Tailwind fill class with the color of the NEXT section, e.g. "fill-card". */
  fillClassName: string;
  flip?: boolean;
};

export default function Wave({ fillClassName, flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${fillClassName}`}
    >
      <path d="M0,40 C180,80 360,80 540,52 C720,24 900,0 1080,16 C1260,32 1350,56 1440,48 L1440,80 L0,80 Z" />
    </svg>
  );
}
