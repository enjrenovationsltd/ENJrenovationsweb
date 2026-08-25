import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Reveal } from "@/components/reveal";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { STAGGER } from "@/lib/utils";

const title = "About";
const description =
  "ENJ Renovations Ltd is an Edmonton-based, family-run renovation contractor specializing in cabinetry, kitchens, bathrooms, and full home renovations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `${title} | ENJ Renovations Ltd`,
    description,
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ENJ Renovations Ltd`,
    description,
  },
};

const VALUES = [
  {
    title: "Straight quotes",
    body: "You get a real number, up front, in plain language. No padding it out and no surprise line items once the job's underway.",
  },
  {
    title: "Cabinetry-first craftsmanship",
    body: "Cabinets are where this business started, and that same level of care shows up in everything else we touch: tile, drywall, flooring, all of it.",
  },
  {
    title: "You talk to the owners",
    body: "There's no call center between you and us. Text or call, and you're reaching the people actually running (and doing) the job.",
  },
  {
    title: "Edmonton-based",
    body: "We live here too. We're building our name one Edmonton home at a time, and every job reflects on the next one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <About
        heading="Renovations, done by people who show up."
        headingLevel="h1"
      />

      <Testimonials
        testimonials={TESTIMONIALS.slice(1)}
        eyebrow="More from real customers"
        heading="What else people are saying."
      />

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              Why homeowners choose us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              What working with ENJ looks like.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} className={STAGGER[i % STAGGER.length]}>
                <div className="h-full rounded-lg border border-border bg-card p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg hover:shadow-brass/10">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
