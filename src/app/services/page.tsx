import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/services-data";
import { cn, STAGGER } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kitchen renovations, bathroom renovations, full home renovations, flooring, tile, drywall, and custom cabinetry from ENJ Renovations Ltd in Edmonton, Alberta.",
};

export default function ServicesPage() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            What we do
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Renovation services in Edmonton.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            From a single room to the whole house, with custom cabinetry as
            the specialty our business was built on.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} className={STAGGER[i % STAGGER.length]}>
              <div className="group h-full rounded-lg border border-border bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg hover:shadow-ink/5">
                <div className="flex items-start justify-between gap-3">
                  <service.icon
                    className="size-9 text-moss transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3"
                    strokeWidth={1.5}
                  />
                  {service.specialty && (
                    <Badge className="bg-brass text-ink hover:bg-brass">
                      Specialty
                    </Badge>
                  )}
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-6 rounded-lg bg-walnut px-8 py-12 text-center text-surface sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Not sure what your project needs?
            </h2>
            <p className="mt-2 text-surface/85">
              Tell us about it and we&apos;ll help you figure it out, free of
              charge.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "shrink-0 bg-brass px-7 text-base font-semibold text-ink hover:bg-brass/90"
            )}
          >
            Get Your Free Quote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
