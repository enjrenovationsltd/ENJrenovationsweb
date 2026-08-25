import type { Metadata } from "next";
import { Gallery } from "@/components/sections/gallery";
import { Transformations } from "@/components/sections/transformations";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Recent kitchen, bathroom, and renovation project photos from ENJ Renovations Ltd in Edmonton, Alberta.",
};

export default function GalleryPage() {
  return (
    <>
      <Gallery />
      <Transformations />
    </>
  );
}
