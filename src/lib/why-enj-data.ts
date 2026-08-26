import {
  Hammer,
  MessageSquare,
  Eye,
  Shield,
  Layers,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type WhyEnjPoint = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const WHY_ENJ: WhyEnjPoint[] = [
  {
    icon: Hammer,
    title: "Quality craftsmanship",
    body: "Cabinetry is where this business started, and that same level of care carries into everything else we touch, from tile to trim.",
  },
  {
    icon: Eye,
    title: "Attention to detail",
    body: "The small things (square corners, clean edges, tidy wiring) are what separate a renovation that looks right from one that just looks finished.",
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    body: "No call center between you and the job. Text or call, and you're reaching the people actually running and doing the work.",
  },
  {
    icon: Shield,
    title: "Respect for your property",
    body: "It's your home while we're working in it. We treat it that way, from floor protection to cleaning up at the end of each day.",
  },
  {
    icon: Layers,
    title: "Full-service capability",
    body: "Kitchens, bathrooms, basements, full-home renovations, and the cabinetry to go with any of them, under one crew.",
  },
  {
    icon: MapPin,
    title: "Edmonton-based",
    body: "We live and work here. Every project reflects on the next one, so we treat every job like it matters that much.",
  },
];
