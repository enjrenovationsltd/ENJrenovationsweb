import {
  ChefHat,
  Bath,
  Layers,
  Home,
  Hammer,
  LayoutGrid,
  Grid3x3,
  PaintRoller,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** Short target phrase used in page titles / H1s, e.g. "Kitchen Renovations Edmonton". */
  seoTitle: string;
  description: string;
  intro: string;
  details: string[];
  /** One of the five services ENJ leads with, shown first and given more visual weight. */
  priority?: boolean;
  /** The specialty within the priority set — cabinetry. */
  specialty?: boolean;
};

// Order matters: the five priority services (kitchen, bathroom, basement,
// full-home, cabinetry) come first and get top billing on the homepage and
// services page. Flooring, tile, and drywall are real services ENJ does,
// but secondary — listed after, smaller, without crowding the page.
export const SERVICES: Service[] = [
  {
    slug: "kitchen-renovations",
    icon: ChefHat,
    title: "Kitchen Renovations",
    seoTitle: "Kitchen Renovations Edmonton",
    description:
      "Full kitchen overhauls: layout, cabinetry, counters, and finishes.",
    intro:
      "A kitchen renovation touches almost everything in the room at once: layout, cabinetry, counters, backsplash, and flooring. ENJ plans the whole job as one system so the pieces actually fit together, not as a stack of separate trades.",
    details: [
      "Layout changes and full gut renovations",
      "Custom and semi-custom cabinetry",
      "Countertop installation",
      "Backsplash and tile work",
      "Flooring to match the rest of your space",
    ],
    priority: true,
  },
  {
    slug: "bathroom-renovations",
    icon: Bath,
    title: "Bathroom Renovations",
    seoTitle: "Bathroom Renovations Edmonton",
    description: "From single-fixture updates to complete bathroom rebuilds.",
    intro:
      "Bathrooms have to get the details right: waterproofing, tile layout, and fixtures that all hold up over time. ENJ handles everything from a single vanity swap to a full gut-and-rebuild.",
    details: [
      "Vanity, tub, and shower installation",
      "Tile floors, walls, and showers",
      "Fixture and lighting upgrades",
      "Full gut-and-rebuild bathrooms",
    ],
    priority: true,
  },
  {
    slug: "basement-renovations",
    icon: Layers,
    title: "Basement Renovations",
    seoTitle: "Basement Renovations Edmonton",
    description: "Turning unfinished basement space into livable square footage.",
    intro:
      "An unfinished basement is one of the biggest opportunities in an Edmonton home for extra living space. ENJ handles framing, drywall, flooring, and finishing to bring a basement up to the same standard as the rest of the house.",
    details: [
      "Framing, insulation, and drywall",
      "Flooring throughout the finished space",
      "Lighting and electrical coordination",
      "Full basement development, from concept to finished space",
    ],
    priority: true,
  },
  {
    slug: "full-home-renovations",
    icon: Home,
    title: "Full Home Renovations",
    seoTitle: "Full Home Renovations Edmonton",
    description: "Coordinated, room-by-room renovation of your whole house.",
    intro:
      "Renovating more than one room at a time means coordinating trades, materials, and scheduling so nothing sits waiting on something else. ENJ runs full-home projects under one point of contact from start to finish.",
    details: [
      "One point of contact for the whole project",
      "Scheduling coordinated across every room",
      "Flooring, drywall, and finishing carried through consistently",
      "Built around your budget and timeline",
    ],
    priority: true,
  },
  {
    slug: "cabinet-installation",
    icon: Hammer,
    title: "Cabinetry",
    seoTitle: "Cabinet Installation Edmonton",
    description: "Cabinet installation and repair, built to fit your space.",
    intro:
      "Cabinetry is where ENJ started, and it's still what we're known for. Whether it's a full kitchen's worth of new cabinets or fixing doors and drawers that never sat right, this is the specialty behind everything else we do.",
    details: [
      "Cabinet installation for new and renovated kitchens",
      "Repairs to doors, drawers, and hardware",
      "Custom fits for awkward or tight spaces",
      "The specialty our whole business is built on",
    ],
    priority: true,
    specialty: true,
  },
  {
    slug: "flooring-installation",
    icon: LayoutGrid,
    title: "Flooring Installation",
    seoTitle: "Flooring Installation Edmonton",
    description: "Hardwood, laminate, vinyl, and tile flooring, done clean.",
    intro:
      "New flooring is often part of a bigger renovation, but ENJ also takes on flooring as its own project: hardwood, laminate, luxury vinyl plank, and tile, installed clean.",
    details: [
      "Hardwood, laminate, and luxury vinyl plank",
      "Tile flooring for kitchens and bathrooms",
      "Subfloor prep and repair",
      "Clean transitions between rooms and flooring types",
    ],
  },
  {
    slug: "tile-work",
    icon: Grid3x3,
    title: "Tile Work",
    seoTitle: "Tile Installation Edmonton",
    description: "Precise tile installation for kitchens, baths, and floors.",
    intro:
      "Tile work shows up close, so the layout and grout lines matter. ENJ handles backsplashes, shower surrounds, and floor tile with the same attention to detail as the rest of the job.",
    details: [
      "Backsplashes and accent walls",
      "Shower and tub surrounds",
      "Floor tile in kitchens and bathrooms",
      "Careful layout planning and clean grout lines",
    ],
  },
  {
    slug: "drywall",
    icon: PaintRoller,
    title: "Drywall",
    seoTitle: "Drywall Installation & Repair Edmonton",
    description: "Drywall installation, repair, and finishing.",
    intro:
      "Drywall is the part of a renovation nobody notices when it's done right. ENJ installs, repairs, and finishes drywall to a paint-ready surface, whether it's one patched wall or a full basement.",
    details: [
      "New drywall installation",
      "Patch and repair work",
      "Taping, mudding, and sanding",
      "Paint-ready finishing",
    ],
  },
];

export const PRIORITY_SERVICES = SERVICES.filter((s) => s.priority);
export const SECONDARY_SERVICES = SERVICES.filter((s) => !s.priority);
