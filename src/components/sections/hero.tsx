import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getGalleryImages } from "@/lib/gallery";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const images = getGalleryImages();
  const heroImage = images[0];

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-walnut"
    >
      {heroImage ? (
        <Image
          src={heroImage}
          alt="ENJ Renovations completed project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--walnut) 0px, var(--walnut) 2px, var(--walnut-dark) 2px, var(--walnut-dark) 42px)",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:pb-24">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
            <span className="h-px w-8 bg-brass" />
            Edmonton, Alberta
          </p>
        </Reveal>

        <Reveal className="delay-100">
          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-surface sm:text-6xl md:text-7xl">
            Edmonton home renovations,
            <br />
            done right.
          </h1>
        </Reveal>

        <Reveal className="delay-150">
          <p className="mt-5 max-w-xl text-lg font-semibold text-brass">
            Full-service renovations. Cabinetry specialists.
          </p>
        </Reveal>

        <Reveal className="delay-200">
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-surface/85">
            Kitchens, bathrooms, basements, and full home renovations for
            Edmonton homeowners, built by a crew that started with cabinetry
            and never lost that attention to detail.
          </p>
        </Reveal>

        <Reveal className="delay-300">
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 gap-2 rounded-xl bg-gradient-to-b from-brass-light to-brass-dark px-9 text-lg font-bold text-ink shadow-lg shadow-brass/30 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-brass/40"
              )}
            >
              Get a Free Renovation Quote
              <ArrowRight className="ml-1 size-5 transition-transform group-hover/button:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 gap-2 rounded-xl bg-surface px-9 text-lg font-bold text-ink shadow-lg shadow-ink/20 hover:bg-surface/90 hover:shadow-xl hover:shadow-ink/25"
              )}
            >
              View Our Work
            </Link>
            <a
              href="tel:+15879849310"
              className="flex items-center gap-2 text-sm font-medium text-surface/80 underline decoration-surface/30 underline-offset-4 hover:text-surface hover:decoration-surface"
            >
              <Phone className="size-4" />
              (587) 984-9310
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
