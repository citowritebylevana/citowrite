"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import type { SwiperRef } from "swiper/react";
import "swiper/css";

export default function Testimonial() {
  const swiperRef = useRef<SwiperRef>(null);

  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Yoga",
      role: "Mahasiswa FK",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Yoga",
      role: "Mahasiswa FK",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Yoga",
      role: "Mahasiswa FK",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Budi",
      role: "Mahasiswa Teknik",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Siti",
      role: "Mahasiswa Hukum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Siti",
      role: "Mahasiswa Hukum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Siti",
      role: "Mahasiswa Hukum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Siti",
      role: "Mahasiswa Hukum",
    },
  ];

  return (
    <section className="py-15 px-4 md:px-17.5">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-[44px]/14.5 font-bold text-white">
          Testimoni
        </h2>
        <p className="max-w-[70ch] mx-auto text-sm md:text-base/6">
          Setiap penelitian memiliki tingkat kompleksitas yang berbeda. Paket
          pendampingan disusun fleksibel sesuai tujuan, deadline, dan kebutuhan
          akademik Anda.
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
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
