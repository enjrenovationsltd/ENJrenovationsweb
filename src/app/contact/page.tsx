import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

const title = "Contact";
const description =
  "Get a free renovation quote from ENJ Renovations Ltd. Call, text, or send us your project details.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `${title} | ENJ Renovations Ltd`,
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ENJ Renovations Ltd`,
    description,
  },
};

export default function ContactPage() {
  return <Contact headingLevel="h1" />;
}
