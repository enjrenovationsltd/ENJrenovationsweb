import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function CtaStrip() {
  return (
    <section className="bg-gradient-to-r from-moss to-moss-dark py-14 text-surface">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Thinking about your next renovation?
          </h2>
          <p className="mt-2 text-surface/85">
            Free, no-obligation estimates.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-b from-brass-light to-brass-dark px-7 text-base font-semibold text-ink shadow-md shadow-brass/25 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brass/30"
            )}
          >
            Get a Free Renovation Quote
          </Link>
          <a
            href="tel:+15879849310"
            className="flex items-center gap-2 text-sm font-medium text-surface/90 underline decoration-surface/30 underline-offset-4 hover:text-surface hover:decoration-surface"
          >
            <Phone className="size-4" />
            Or call (587) 984-9310
          </a>
        </div>
      </Reveal>
    </section>
  );
}
