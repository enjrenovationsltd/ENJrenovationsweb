import { Reveal } from "@/components/reveal";
import { STAGGER } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    body: "Discuss the project and goals.",
  },
  {
    number: "02",
    title: "Planning & Estimate",
    body: "Determine the scope of work and provide a detailed estimate.",
  },
  {
    number: "03",
    title: "Renovation",
    body: "Complete the work with attention to quality and communication.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    body: "Review the finished project with the homeowner.",
  },
];

export function Process() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            The renovation process.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} className={STAGGER[i % STAGGER.length]}>
              <div className="relative">
                <span className="font-display text-4xl font-bold text-brass/40">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
