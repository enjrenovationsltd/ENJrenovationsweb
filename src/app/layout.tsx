import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "ENJ Renovations Ltd | Edmonton Renovation Contractor";
const description =
  "Full-service renovations, cabinetry specialists. ENJ Renovations Ltd is an Edmonton-based renovation contractor handling kitchens, bathrooms, basements, and full home renovations, plus cabinet installation, flooring, tile, and drywall.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | ENJ Renovations Ltd",
  },
  description,
  keywords: [
    "Edmonton renovation contractor",
    "kitchen renovation Edmonton",
    "bathroom renovation Edmonton",
    "basement renovation Edmonton",
    "full home renovation Edmonton",
    "cabinet installation Edmonton",
    "custom cabinetry Edmonton",
    "flooring installation Edmonton",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "ENJ Renovations Ltd",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "ENJ Renovations Ltd",
  description,
  url: siteUrl,
  telephone: "+1-587-984-9310",
  email: "enjrenovationsltd@gmail.com",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Edmonton",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  // TODO: add your Google Business Profile URL here once you have it, e.g.
  // sameAs: ["https://g.page/r/your-google-business-id"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important}`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
