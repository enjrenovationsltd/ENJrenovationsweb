"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-walnut/95 backdrop-blur supports-[backdrop-filter]:bg-walnut/90 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-surface"
        >
          ENJ Renovations
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-surface/85 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+15879849310"
            className={cn(
              buttonVariants({ size: "sm" }),
              "gap-1.5 border border-surface/50 bg-transparent text-surface hover:bg-surface/10 hover:text-surface"
            )}
          >
            <Phone className="size-4" />
            (587) 984-9310
          </a>
          <a
            href="sms:+15879849310"
            aria-label="Text us"
            title="Text us"
            className="text-surface/85 hover:text-brass"
          >
            <MessageCircle className="size-4" />
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-brass text-ink hover:bg-brass/90"
            )}
          >
            Get Your Free Quote
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href="tel:+15879849310"
            aria-label="Call us"
            title="Call us"
            className="text-surface hover:text-brass"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-surface"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-surface/10 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-surface/90 hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+15879849310"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 py-3 text-base font-medium text-surface/90 hover:text-brass"
          >
            <Phone className="size-4" />
            (587) 984-9310
          </a>
          <a
            href="sms:+15879849310"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 py-3 text-base font-medium text-surface/90 hover:text-brass"
          >
            <MessageCircle className="size-4" />
            Text Us
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-brass px-4 py-2.5 text-sm font-semibold text-ink"
          >
            Get Your Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
