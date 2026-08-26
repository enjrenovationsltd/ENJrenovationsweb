import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { PRIORITY_SERVICES, SECONDARY_SERVICES } from "@/lib/services-data";
import { STAGGER } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Renovation work, done properly.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-moss underline decoration-moss/40 underline-offset-4 hover:text-moss-dark"
          >
            View all services →
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PRIORITY_SERVICES.map((service, i) => (
            <Reveal key={service.slug} className={STAGGER[i % STAGGER.length]}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg hover:shadow-brass/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <service.icon
                    className="size-7 text-moss transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3"
                    strokeWidth={1.5}
                  />
                  {service.specialty && (
                    <Badge className="shrink-0 bg-brass text-ink hover:bg-brass">
                      Specialty
                    </Badge>
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>Also available:</span>
          {SECONDARY_SERVICES.map((service, i) => (
            <span key={service.slug} className="flex items-center gap-2">
              <Link
                href={`/services/${service.slug}`}
                className="font-medium text-ink underline decoration-border underline-offset-4 hover:text-moss hover:decoration-moss/40"
              >
                {service.title}
              </Link>
              {i < SECONDARY_SERVICES.length - 1 && (
                <span aria-hidden className="text-border">
                  ·
                </span>
              )}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
