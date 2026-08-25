import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function CtaStrip() {
  return (
    <section className="bg-moss py-14 text-surface">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to start your renovation?
          </h2>
          <p className="mt-2 text-surface/85">Free quotes, no obligation.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-brass px-7 text-base font-semibold text-ink hover:bg-brass/90"
            )}
          >
            Get Your Free Quote
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
