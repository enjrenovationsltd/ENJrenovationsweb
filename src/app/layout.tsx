import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

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
  "Edmonton-based renovation contractor specializing in kitchens, bathrooms, flooring, tile, drywall, and custom cabinetry — with a focus on cabinet repairs and installations. Free quotes.";

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
    "cabinet repair Edmonton",
    "custom cabinetry Edmonton",
    "flooring installation Edmonton",
  ],
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
        <noscript>
          <style>{`[data-reveal]{opacity:1!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
