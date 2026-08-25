import Link from "next/link";
import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TESTIMONIALS } from "@/lib/testimonials-data";

export function About({
  preview = false,
  eyebrow = "About ENJ",
  heading = "A renovation contractor built on cabinetry.",
  headingLevel = "h2",
}: {
  preview?: boolean;
  eyebrow?: string;
  heading?: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id="about" className="scroll-mt-16 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              {eyebrow}
            </p>
            <Heading className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {heading}
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              ENJ Renovations Ltd is a small renovation crew based in
              Edmonton. We do kitchens, bathrooms, and full home renovations.
              But if you ask what we&apos;re actually known for, it&apos;s
              cabinets: building them, repairing them, and fitting them into
              spaces they were never quite designed for.
            </p>
            {!preview && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We&apos;re not trying to be the biggest reno company in the
                city. We&apos;re trying to be the one you&apos;d actually
                recommend to a friend: the one that shows up, tells you the
                truth about cost and timeline, and gets it done without you
                having to chase us for updates.
              </p>
            )}
            <p className="mt-4 text-lg font-medium text-ink">
              Renovating one room or the whole house? Reach out for a free
              quote. No pressure, no games.
            </p>
            {preview && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <Link
                  href="/about"
                  className="text-moss underline decoration-moss/40 underline-offset-4 hover:text-moss-dark"
                >
                  More about ENJ
                </Link>
                <Link
                  href="/story"
                  className="text-moss underline decoration-moss/40 underline-offset-4 hover:text-moss-dark"
                >
                  Read our story
                </Link>
              </div>
            )}
          </Reveal>

          <Reveal className="delay-150 flex items-center">
            <figure className="w-full rounded-lg border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-brass/40 hover:shadow-lg hover:shadow-brass/10 sm:p-10">
              <div className="flex gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-brass" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg font-medium leading-relaxed text-ink">
                &ldquo;{TESTIMONIALS[0].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">
                {TESTIMONIALS[0].author} · {TESTIMONIALS[0].source}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
