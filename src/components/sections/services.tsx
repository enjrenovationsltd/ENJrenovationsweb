import {
  ChefHat,
  Bath,
  Home,
  LayoutGrid,
  Grid3x3,
  PaintRoller,
  Hammer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    description:
      "Full kitchen overhauls — layout, cabinetry, counters, and finishes.",
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description:
      "From single-fixture updates to complete bathroom rebuilds.",
  },
  {
    icon: Home,
    title: "Full Home Renovations",
    description: "Coordinated, room-by-room renovation of your whole house.",
  },
  {
    icon: LayoutGrid,
    title: "Flooring Installation",
    description: "Hardwood, laminate, vinyl, and tile flooring, done clean.",
  },
  {
    icon: Grid3x3,
    title: "Tile Work",
    description: "Precise tile installation for kitchens, baths, and floors.",
  },
  {
    icon: PaintRoller,
    title: "Drywall",
    description: "Drywall installation, repair, and finishing.",
  },
  {
    icon: Hammer,
    title: "Custom Cabinetry",
    description: "Cabinet repairs and installations built to fit your space.",
    specialty: true,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            What we do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Renovation work, done properly.
          </h2>
        </Reveal>

        <Reveal
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-card p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex items-start justify-between gap-3">
                <service.icon
                  className="size-8 text-moss"
                  strokeWidth={1.5}
                />
                {service.specialty && (
                  <Badge className="shrink-0 bg-brass text-ink hover:bg-brass">
                    Specialty
                  </Badge>
                )}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
