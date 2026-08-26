import { Hero } from "@/components/sections/hero";
import { Transformations } from "@/components/sections/transformations";
import { Services } from "@/components/sections/services";
import { WhyEnj } from "@/components/sections/why-enj";
import { Gallery } from "@/components/sections/gallery";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaStrip } from "@/components/sections/cta-strip";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Transformations />
      <Services />
      <WhyEnj />
      <Gallery limit={3} />
      <Process />
      <Testimonials />
      <About preview />
      <CtaStrip />
    </>
  );
}
