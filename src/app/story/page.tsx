import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How a father-and-son team started ENJ Renovations Ltd in Edmonton, Alberta.",
};

export default function StoryPage() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Our story
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            A father-and-son business, built from scratch.
          </h1>
        </Reveal>

        <Reveal className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground delay-150">
          <p>
            ENJ Renovations Ltd started with a simple problem: my dad, Sam, is
            genuinely good at what he does. Cabinetry especially, along with
            renovation work more broadly. And he wanted to run his own jobs
            instead of working someone else&apos;s.
          </p>
          <p>
            I&apos;m 19, and I&apos;m the next generation of ENJ. I don&apos;t
            swing a hammer on-site. That&apos;s Sam and a small crew of guys
            he trusts. What I handle is everything around the work: the
            leads, the marketing, the quotes, and making sure every homeowner
            we talk to gets a straight answer. It&apos;s my first time
            running a business, and I&apos;m learning it in real time, with
            Sam&apos;s craftsmanship and his name behind every job.
          </p>
          <p>
            It&apos;s still early days for ENJ, and that works in your
            favour: no call center, no big overhead, and every project gets
            our full attention. If you reach out, you&apos;re talking to one
            of us directly, not a scheduling line.
          </p>
        </Reveal>

        <Reveal className="mt-12 delay-300">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 bg-brass px-8 text-base font-semibold text-ink hover:bg-brass/90"
            )}
          >
            Get Your Free Quote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
