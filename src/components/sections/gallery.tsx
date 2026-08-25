import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery";
import { Reveal } from "@/components/reveal";
import { STAGGER } from "@/lib/utils";

export function Gallery({ limit }: { limit?: number }) {
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
            Our work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Recent projects.
          </h2>
        </Reveal>

        {images.length > 0 ? (
          <>
            <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {images.map((src, i) => (
                <Reveal
                  key={src}
                  className={`${STAGGER[i % STAGGER.length]} ${
                    i % 5 === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`group relative aspect-square overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10 ${
                      i % 5 === 0 ? "sm:aspect-[16/10]" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`ENJ Renovations project photo ${i + 1}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                  </div>
                </Reveal>
              ))}
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
              Project photos will appear here — drop images into{" "}
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
