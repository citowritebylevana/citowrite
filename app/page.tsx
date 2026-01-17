import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";


export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <LogoMarquee />
      <Process />
      <Testimonial />
      <Pricing />
      <Contact />
    </>)
}
