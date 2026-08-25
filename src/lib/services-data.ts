import {
  ChefHat,
  Bath,
  Home,
  LayoutGrid,
  Grid3x3,
  PaintRoller,
  Hammer,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  specialty?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "kitchen-renovations",
    icon: ChefHat,
    title: "Kitchen Renovations",
    description:
      "Full kitchen overhauls: layout, cabinetry, counters, and finishes.",
    details: [
      "Layout changes and full gut renovations",
      "Custom and semi-custom cabinetry",
      "Countertop installation",
      "Backsplash and tile work",
      "Flooring to match the rest of your space",
    ],
  },
  {
    slug: "bathroom-renovations",
    icon: Bath,
    title: "Bathroom Renovations",
    description: "From single-fixture updates to complete bathroom rebuilds.",
    details: [
      "Vanity, tub, and shower installation",
      "Tile floors, walls, and showers",
      "Fixture and lighting upgrades",
      "Full gut-and-rebuild bathrooms",
    ],
  },
  {
    slug: "full-home-renovations",
    icon: Home,
    title: "Full Home Renovations",
    description: "Coordinated, room-by-room renovation of your whole house.",
    details: [
      "One point of contact for the whole project",
      "Scheduling coordinated across every room",
      "Flooring, drywall, and finishing carried through consistently",
      "Built around your budget and timeline",
    ],
  },
  {
    slug: "flooring-installation",
    icon: LayoutGrid,
    title: "Flooring Installation",
    description: "Hardwood, laminate, vinyl, and tile flooring, done clean.",
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
    description: "Precise tile installation for kitchens, baths, and floors.",
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
    description: "Drywall installation, repair, and finishing.",
    details: [
      "New drywall installation",
      "Patch and repair work",
      "Taping, mudding, and sanding",
      "Paint-ready finishing",
    ],
  },
  {
    slug: "custom-cabinetry",
    icon: Hammer,
    title: "Custom Cabinetry",
    description: "Cabinet repairs and installations built to fit your space.",
    details: [
      "Cabinet installation for new and renovated kitchens",
      "Repairs to doors, drawers, and hardware",
      "Custom fits for awkward or tight spaces",
      "The specialty our whole business is built on",
    ],
    specialty: true,
  },
];
