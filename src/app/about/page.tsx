import type { Metadata } from "next";
import Link from "next/link";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyEnj } from "@/components/sections/why-enj";
import { Reveal } from "@/components/reveal";
import { TESTIMONIALS } from "@/lib/testimonials-data";

const title = "About";
const description =
  "ENJ Renovations Ltd is an Edmonton-based, family-run renovation contractor specializing in cabinetry, kitchens, bathrooms, and full home renovations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `${title} | ENJ Renovations Ltd`,
    description,
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ENJ Renovations Ltd`,
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <About
        heading="Renovations, done by people who show up."
        headingLevel="h1"
      />

      <section className="bg-surface px-6 pb-24 sm:pb-32">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Full-service renovations, cabinetry specialists: that covers{" "}
            <Link
              href="/services/kitchen-renovations"
              className="text-ink underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
            >
              kitchens
            </Link>
            ,{" "}
            <Link
              href="/services/bathroom-renovations"
              className="text-ink underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
            >
              bathrooms
            </Link>
            ,{" "}
            <Link
              href="/services/basement-renovations"
              className="text-ink underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
            >
              basements
            </Link>
            , and{" "}
            <Link
              href="/services/full-home-renovations"
              className="text-ink underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
            >
              full home renovations
            </Link>
            , with{" "}
            <Link
              href="/services/cabinet-installation"
              className="text-ink underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
            >
              cabinetry
            </Link>{" "}
            as the specialty behind all of it.
          </p>
        </Reveal>
      </section>

      <WhyEnj />

      <Testimonials
        testimonials={TESTIMONIALS}
        eyebrow="What clients say"
        heading="Real reviews from real jobs."
      />
    </>
  );
}
