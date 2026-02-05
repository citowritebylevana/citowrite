"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
  };
}


export default function Hero({ data }: HeroProps) {
  const [backgroundImage, setBackgroundImage] = useState(
    "url('/assets/hero-background-mobile.png')",
  );

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 768) {
        setBackgroundImage("url('/assets/hero-background.png')");
      } else {
        setBackgroundImage("url('/assets/hero-background-mobile.png')");
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);
  return (
    <section id="home" className="relative p-4 md:py-10 md:px-17.5 pt-20 md:pt-45">
      {/* Container Utama dengan Background Image */}
      <div
        className="relative w-full rounded-[30px] overflow-hidden px-4 py-14 md:px-12 md:py-26.25 text-center bg-cover bg-center"
        style={{ backgroundImage }}
      >
        {/* Konten Utama */}
        <div className="relative z-10 flex flex-col items-center justify-center mx-auto text-[#f5f5f5]">
          {/* Heading */}
          <h2 className="text-3xl md:text-[60px]/18.75 font-semibold">
            {data.title}
          </h2>

          {/* Deskripsi */}
          <p className="text-[#f5f5f5] text-sm md:text-[18px]/6.75 md:max-w-[88ch] mt-10 mb-10">
            {data.subtitle}
          </p>

          {/* Group Tombol */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            {/* Tombol Order (Solid) */}
            <a href="#pricing"
              className="flex items-center gap-x-2.5 justify-center py-2.5 px-8 md:px-8 md:py-2.5 bg-indigo-500 hover:bg-purple-700 rounded-[50px] text-base/5
              font-semibold transition-all duration-200 group"
            >
              Order Sekarang
              <span className="md:h-8 md:w-8 flex justify-center items-center shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                <ArrowRight />
              </span>
            </a>

            {/* Tombol WhatsApp (Outline) */}
            <a href="https://wa.me/6281776752704" target="_blank"
              className="flex items-center justify-center gap-x-2.5 py-2.5 px-8 md:px-8 md:py-2.5 bg-transparent border border-indigo-500 hover:bg-white/10 text-[#f5f5f5]
              rounded-[50px] text-base/5 font-medium transition-all duration-200"
            >
              Chat Whatsapp Admin
              <SiWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
