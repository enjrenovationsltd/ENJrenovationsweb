import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Transformations } from "@/components/sections/transformations";
import { CtaStrip } from "@/components/sections/cta-strip";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Transformations />
      <CtaStrip />
      <About preview />
      <Gallery limit={3} />
    </>
  );
}
