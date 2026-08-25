import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-12 text-surface/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-display text-lg font-bold text-surface"
          >
            ENJ Renovations Ltd
          </Link>
          <p className="mt-2 max-w-xs text-sm">
            Renovation contractor serving Edmonton, Alberta.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-surface">Site</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/services" className="hover:text-surface">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-surface">
                About
              </Link>
            </li>
            <li>
              <Link href="/story" className="hover:text-surface">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-surface">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-surface">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-surface">Contact</p>
          <a href="tel:+15879849310" className="mt-2 block hover:text-surface">
            (587) 984-9310
          </a>
          <a
            href="mailto:enjrenovationsltd@gmail.com"
            className="block hover:text-surface"
          >
            Email Us
          </a>
          <p>Edmonton, Alberta</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-surface">Services</p>
          <ul className="mt-2 space-y-1">
            <li>Kitchen &amp; Bathroom Renovations</li>
            <li>Flooring &amp; Tile</li>
            <li>Cabinet Repairs &amp; Installations</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-surface/10 px-6 pt-6 text-xs">
        © {new Date().getFullYear()} ENJ Renovations Ltd. All rights reserved.
      </div>
    </footer>
  );
}
