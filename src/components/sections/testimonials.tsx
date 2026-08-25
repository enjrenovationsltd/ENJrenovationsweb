import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials-data";
import { STAGGER } from "@/lib/utils";

export function Testimonials({
  testimonials = TESTIMONIALS,
  eyebrow = "What clients say",
  heading = "Real reviews from real jobs.",
}: {
  testimonials?: Testimonial[];
  eyebrow?: string;
  heading?: string;
}) {
  if (testimonials.length === 0) return null;

  const gridCols =
    testimonials.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : testimonials.length === 2
        ? "sm:grid-cols-2"
        : "";

  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className={`mt-14 grid grid-cols-1 gap-6 ${gridCols}`}>
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.author} className={STAGGER[i % STAGGER.length]}>
              <figure className="h-full rounded-lg border border-border bg-surface p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brass/40 hover:shadow-lg hover:shadow-brass/10">
                <div className="flex gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-brass" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">
                  {testimonial.author} · {testimonial.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
