import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = service.seoTitle;
  const description = `${service.description} Serving Edmonton, Alberta. ${
    service.specialty
      ? "Cabinetry is ENJ's specialty."
      : "Part of ENJ's full-service renovation work."
  }`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${title} | ENJ Renovations Ltd`,
      description,
      url: `/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ENJ Renovations Ltd`,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(
    0,
    3
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: {
      "@type": "City",
      name: "Edmonton",
    },
    provider: {
      "@type": "GeneralContractor",
      name: "ENJ Renovations Ltd",
      telephone: "+1-587-984-9310",
      url: siteUrl,
    },
  };

  return (
    <section className="py-28 sm:py-36">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All services
          </Link>
        </Reveal>

        <Reveal className="mt-6 delay-100">
          <div className="flex items-start justify-between gap-3">
            <service.icon className="size-10 text-moss" strokeWidth={1.5} />
            {service.specialty && (
              <Badge className="bg-brass text-ink hover:bg-brass">
                Specialty
              </Badge>
            )}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {service.seoTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {service.intro}
          </p>
        </Reveal>

        <Reveal className="mt-10 delay-150">
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">
            What&apos;s included
          </h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {service.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brass" />
                {detail}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 delay-200">
          <p className="text-muted-foreground">
            Every renovation is different, so pricing depends on the scope,
            materials, and finishes you choose. Reach out and we&apos;ll put
            together a detailed estimate for your project.
          </p>
        </Reveal>

        <Reveal className="mt-8 delay-300">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 bg-gradient-to-b from-brass-light to-brass-dark px-8 text-base font-semibold text-ink shadow-md shadow-brass/25 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brass/30"
            )}
          >
            Get a Free Renovation Quote
          </Link>
        </Reveal>

        <Reveal className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">
            Other services
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="text-sm font-semibold text-moss underline decoration-moss/40 underline-offset-4 hover:text-moss-dark"
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
