import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Reveal } from "@/components/reveal";

export function Transformations() {
  return (
    <section
      id="transformations"
      className="scroll-mt-16 bg-card py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            See the difference
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Drag to compare.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A quick look at what a kitchen renovation can do. This is an
            AI-generated concept, not a real job. See{" "}
            <Link
              href="/gallery"
              className="text-ink underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
            >
              our Gallery
            </Link>{" "}
            for actual project photos.
          </p>
        </Reveal>

        <Reveal className="mt-10 delay-150">
          <BeforeAfterSlider
            before={
              <Image
                src="/images/transformations/kitchen-before.jpg"
                alt="AI-generated concept of a dated kitchen before renovation"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            }
            after={
              <Image
                src="/images/transformations/kitchen-after.jpg"
                alt="AI-generated concept of a renovated kitchen after renovation"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            }
          />
          <p className="mt-3 text-center text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            AI-generated concept — not an actual ENJ project
          </p>
        </Reveal>
      </div>
    </section>
  );
}
