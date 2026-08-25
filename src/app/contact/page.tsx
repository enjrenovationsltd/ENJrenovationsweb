import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free renovation quote from ENJ Renovations Ltd — call, text, or send us your project details.",
};

export default function ContactPage() {
  return <Contact />;
}
