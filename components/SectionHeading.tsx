type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({ eyebrow, title, description, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`inline-flex rounded-full px-4 py-1.5 text-sm font-extrabold ${
          dark ? "bg-white/15 text-teal-100" : "bg-teal-100 text-teal"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl ${dark ? "text-white" : "text-water"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mx-auto mt-4 max-w-xl text-lg leading-8 text-pretty ${dark ? "text-water-100" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
