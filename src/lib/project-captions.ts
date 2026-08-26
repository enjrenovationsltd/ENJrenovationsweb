// Accurate, visually-grounded captions for known project photos in
// /public/images/. Captions describe what's actually shown, not invented
// client stories, timelines, or costs. A photo dropped into /public/images/
// without an entry here still shows up (via lib/gallery.ts) with a generic
// fallback caption, so new photos work immediately.
export const PROJECT_CAPTIONS: Record<
  string,
  { alt: string; category: string; caption: string }
> = {
  "/images/Image_20260725_152736_550.jpeg": {
    alt: "White kitchen renovation with quartz countertops and a glass mosaic backsplash",
    category: "Kitchen Renovation",
    caption: "Cabinetry, quartz counters, and a mosaic tile backsplash.",
  },
  "/images/Image_20260725_152736_839.jpeg": {
    alt: "Sage green kitchen cabinetry with a waterfall-edge granite island, mid-installation",
    category: "Kitchen Renovation",
    caption: "Sage cabinetry and a waterfall-edge granite island, mid-install.",
  },
  "/images/Image_20260725_152736_926.jpeg": {
    alt: "White kitchen renovation with pendant lighting and a tile backsplash",
    category: "Kitchen Renovation",
    caption: "White cabinetry, tile backsplash, and updated lighting.",
  },
  "/images/Image_20260725_152737_108.jpeg": {
    alt: "Two-tone kitchen renovation with white upper cabinets and wood-look lower cabinets",
    category: "Kitchen Renovation",
    caption: "Two-tone cabinetry with stainless appliances.",
  },
  "/images/Image_20260725_152737_190.jpeg": {
    alt: "White shaker-style kitchen with subway tile backsplash and an island",
    category: "Kitchen Renovation",
    caption: "Shaker-style cabinetry with a subway tile backsplash.",
  },
  "/images/Image_20260725_152737_289.jpeg": {
    alt: "Custom light wood cabinet installation before countertops were installed",
    category: "Custom Cabinetry",
    caption: "Custom cabinetry, set before countertop install.",
  },
};
