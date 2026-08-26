import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery";
import { PROJECT_CAPTIONS } from "@/lib/project-captions";
import { Reveal } from "@/components/reveal";
import { STAGGER } from "@/lib/utils";

export function Gallery({
  limit,
  headingLevel = "h2",
}: {
  limit?: number;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const allImages = getGalleryImages();
  // First image doubles as the hero background; skip it here unless it's the only one.
  const fullSet = allImages.length > 1 ? allImages.slice(1) : allImages;
  const images = limit ? fullSet.slice(0, limit) : fullSet;
  const hasMore = Boolean(limit && fullSet.length > limit);

  return (
    <section id="gallery" className="scroll-mt-16 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Featured projects
          </p>
          <Heading className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Real Edmonton renovations.
          </Heading>
        </Reveal>

        {images.length > 0 ? (
          <>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((src, i) => {
                const info = PROJECT_CAPTIONS[src];
                return (
                  <Reveal key={src} className={STAGGER[i % STAGGER.length]}>
                    <figure className="group h-full overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brass/15">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={src}
                          alt={
                            info?.alt ??
                            `ENJ Renovations Edmonton renovation project photo ${i + 1}`
                          }
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                      {info && (
                        <figcaption className="p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-moss">
                            {info.category}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {info.caption}
                          </p>
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                );
              })}
            </div>
            {hasMore && (
              <div className="mt-8 text-center">
                <Link
                  href="/gallery"
                  className="text-sm font-semibold text-moss underline decoration-moss/40 underline-offset-4 hover:text-moss-dark"
                >
                  View full gallery →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="mt-14 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border py-20 text-center text-muted-foreground">
            <ImageOff className="size-8" strokeWidth={1.5} />
            <p className="text-sm">
              Project photos will appear here. Drop images into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                /public/images/
              </code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
