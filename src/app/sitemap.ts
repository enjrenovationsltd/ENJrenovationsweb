import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/story", "/gallery", "/contact"];
  const serviceRoutes = SERVICES.map(
    (service) => `/services/${service.slug}`
  );

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.8 : 0.7,
  }));
}
