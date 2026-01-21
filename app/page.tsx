import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <LogoMarquee />
      <div id="service">
        <Process />
      </div>
      <div id="testimoni">
        <Testimonial />
      </div>
      <Pricing />
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
