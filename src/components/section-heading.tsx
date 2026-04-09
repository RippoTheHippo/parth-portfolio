import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "right";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-10",
        align === "right" ? "md:[&>*:first-child]:order-2" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>
        <p className="eyebrow">{label}</p>
      </div>
      <div className="max-w-3xl">
        <h2 className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
