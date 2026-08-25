import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "ENJ Renovations Ltd is an Edmonton-based, family-run renovation contractor specializing in cabinetry, kitchens, bathrooms, and full home renovations.",
};

const VALUES = [
  {
    title: "Straight quotes",
    body: "You get a clear, honest number up front — no padding, no surprise line items later.",
  },
  {
    title: "Cabinetry-first craftsmanship",
    body: "Cabinet work is what ENJ was built on, and that same attention to detail carries into every other part of the job.",
  },
  {
    title: "You talk to the owners",
    body: "No call center. When you reach out, you're talking directly to the people running and doing the work.",
  },
  {
    title: "Edmonton-based",
    body: "We're local, and we're building our name one Edmonton home at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              About ENJ
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Renovations, done by people who show up.
            </h1>
          </Reveal>
        </div>
      </section>

      <About />

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
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card p-7"
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
