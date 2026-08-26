import { Reveal } from "@/components/reveal";
import { WHY_ENJ } from "@/lib/why-enj-data";
import { STAGGER } from "@/lib/utils";

export function WhyEnj({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Why homeowners choose ENJ
          </p>
          <Heading className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Full-service renovations. Cabinetry specialists.
          </Heading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ENJ.map((point, i) => (
            <Reveal key={point.title} className={STAGGER[i % STAGGER.length]}>
              <div className="h-full rounded-lg border border-border bg-card p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg hover:shadow-brass/10">
                <point.icon className="size-7 text-moss" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
