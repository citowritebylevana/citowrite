import fs from "fs";
import path from "path";
import matter from "gray-matter";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";

// Type definitions
type HeroData = { title: string; subtitle: string } | undefined;

interface StatItem {
  icon: string;
  value: string;
  label: string;
}
type AboutData =
  | {
    title: string;
    subtitle: string;
    stats: StatItem[];
  }
  | undefined;

interface Brand {
  name: string;
  image: string;
}
type LogoMarqueeData =
  | {
    title: string;
    brands: Brand[];
  }
  | undefined;

interface StepItem {
  number: string;
  title: string;
  description: string;
  isFilled: boolean;
}
type ProcessData =
  | {
    title: string;
    subtitle: string;
    steps: StepItem[];
  }
  | undefined;

interface TestimonialItem {
  content: string;
  name: string;
  role: string;
}
type TestimonialData =
  | {
    title: string;
    subtitle: string;
    testimonials: TestimonialItem[];
  }
  | undefined;

interface PricingCard {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted: boolean;
}
type PricingData =
  | {
    title: string;
    subtitle: string;
    cards: PricingCard[];
    cta_text: string;
    cta_link: string;
  }
  | undefined;

interface FaqItemData {
  question: string;
  answer: string;
}
type FaqData =
  | {
    title: string;
    subtitle: string;
    faqs: FaqItemData[];
  }
  | undefined;

interface ContactItem {
  icon: string;
  title: string;
  value: string;
  href: string;
}
type ContactData =
  | {
    title: string;
    subtitle: string;
    contacts: ContactItem[];
  }
  | undefined;

import { getSectionData } from "@/lib/data";
export default function Home() {
  const heroData = getSectionData("hero");
  const aboutData = getSectionData("about");
  const processData = getSectionData("process");
  const testimonialData = getSectionData("testimonial");
  const pricingData = getSectionData("pricing");
  const faqData = getSectionData("faq");
  const contactData = getSectionData("contact");
  const logomarqueeData = getSectionData("logomarquee");

  return (
    <>
      <div id="home">
        <Hero data={(heroData as HeroData) || { title: "", subtitle: "" }} />
      </div>
      <div id="about">
        <About
          data={
            (aboutData as AboutData) || {
              title: "",
              subtitle: "",
              stats: [],
            }
          }
        />
      </div>
      <LogoMarquee
        data={
          (logomarqueeData as LogoMarqueeData) || {
            title: "",
            brands: [],
          }
        }
      />
      <div>
        <Process
          data={
            (processData as ProcessData) || {
              title: "",
              subtitle: "",
              steps: [],
            }
          }
        />
      </div>
      <div id="testimoni">
        <Testimonial
          data={
            (testimonialData as TestimonialData) || {
              title: "",
              subtitle: "",
              testimonials: [],
            }
          }
        />
      </div>
      <div id="service">
        <Pricing
          data={
            (pricingData as PricingData) || {
              title: "",
              subtitle: "",
              cards: [],
              cta_text: "",
              cta_link: "",
            }
          }
        />
      </div>

      <div id="faq">
        <Faq
          data={
            (faqData as FaqData) || {
              title: "",
              subtitle: "",
              faqs: [],
            }
          }
        />
      </div>
      <div id="contact">
        <Contact
          data={
            (contactData as ContactData) || {
              title: "",
              subtitle: "",
              contacts: [],
            }
          }
        />
      </div>
    </>
  );
}
