import type { Metadata } from "next";
import { Gallery } from "@/components/sections/gallery";
import { Transformations } from "@/components/sections/transformations";

const title = "Gallery";
const description =
  "Recent kitchen, bathroom, and renovation project photos from ENJ Renovations Ltd in Edmonton, Alberta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `${title} | ENJ Renovations Ltd`,
    description,
    url: "/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ENJ Renovations Ltd`,
    description,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Gallery headingLevel="h1" />
      <Transformations />
    </>
  );
}
