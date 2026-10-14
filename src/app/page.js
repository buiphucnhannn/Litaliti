import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Packages from "@/components/sections/Packages";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Experience from "@/components/sections/Experience";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ScrollEffects from "@/components/layout/ScrollEffects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Rooms />
      <Amenities />
      <Gallery />
      <Experience />
      <Location />
      <Testimonials />
      <CTA />
      {/* Last child so its effect runs after the whole page (and the layout) has hydrated */}
      <ScrollEffects />
    </>
  );
}
