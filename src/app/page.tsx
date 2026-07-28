import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { CtaStrip } from "@/components/sections/cta-strip";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <CtaStrip />
        <About />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
