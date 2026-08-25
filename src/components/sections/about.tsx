import Link from "next/link";
import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="about" className="scroll-mt-16 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              About ENJ
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              A renovation contractor built on cabinetry.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              ENJ Renovations Ltd is an Edmonton-based renovation contractor
              helping homeowners update their kitchens, bathrooms, and living
              spaces. We specialize in flooring installation, tile work,
              drywall, and custom cabinetry — with a particular focus on
              cabinet repairs and installations, a specialty of ours.
            </p>
            {!preview && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Whether you&apos;re renovating one room or the whole house,
                every project starts with a clear, honest quote and ends with
                work done right the first time.
              </p>
            )}
            <p className="mt-4 text-lg font-medium text-ink">
              Reach out today for a free quote on your next renovation
              project.
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
            <figure className="w-full rounded-lg border border-border bg-surface p-8 sm:p-10">
              <div className="flex gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-brass" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg font-medium leading-relaxed text-ink">
                &ldquo;We had our kitchen remodeled by ENJ Renovations Ltd.,
                and the experience was excellent from start to finish. Sam
                was professional, friendly, and paid great attention to
                detail. Our old kitchen was transformed into a beautiful,
                modern space that exceeded our expectations. The quality of
                the work was outstanding, communication was great throughout
                the project, and everything was completed on time. We
                couldn&apos;t be happier with the results and would highly
                recommend ENJ Renovations Ltd. to anyone looking for quality
                renovations in Edmonton. Thanks again, Sam!&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">
                Sardonix Gel · Google Review
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
