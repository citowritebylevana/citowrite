"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import type { SwiperRef } from "swiper/react";
import "swiper/css";

interface TestimonialItem {
  content: string;
  name: string;
  role: string;
}

interface TestimonialProps {
  data: {
    title: string;
    subtitle: string;
    testimonials: TestimonialItem[];
  };
}

export default function Testimonial({ data }: TestimonialProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section id="testimoni" className="p-4 md:py-15 md:px-17.5 md:scroll-mt-14">
      {/* Header */}
      <div className="text-center mb-4 md:mb-16 space-y-4">
        <h2 className="text-[28px]/9.5 md:text-[44px]/14.5 font-bold text-white">
          {data.title}
        </h2>
        <p className="max-w-[70ch] mx-auto text-base/6 md:text-base/6">
          {data.subtitle}
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          modules={[Autoplay]}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.3,
              spaceBetween: 24,
            },
          }}
          className="pb-4"
        >
          {data.testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
