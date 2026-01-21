"use client";

import React, { useState } from "react";
import FaqItem from "../ui/FaqItem";

interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqProps {
  data: {
    title: string;
    subtitle: string;
    faqs: FaqItemData[];
  };
}

export default function FaqSection({ data }: FaqProps) {
  // Hanya simpan 1 index yang aktif.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // LOGIKA PENTING: Memisahkan data menjadi Kolom Kiri (Ganjil) dan Kanan (Genap)
  // Ini mencegah gap kosong saat item dibuka.
  const leftColumnFaqs = data.faqs.filter((_, i) => i % 2 === 0);
  const rightColumnFaqs = data.faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="md:py-15 p-4 md:px-17.5 md:scroll-mt-40">
      {/* Header */}
      <div className="text-center mb-4 md:mb-10 space-y-2 md:space-y-4.5 text-[#f5f5f5]">
        <h2 className="text-[28px]/9.5 md:text-[44px]/14.5 font-bold">
          {data.title}
        </h2>
        <p className="text-base/6">{data.subtitle}</p>
      </div>

      {/* LAYOUT FIX: 
           Menggunakan Flexbox Column untuk Mobile, 
           dan Flexbox Row (dengan 2 kolom independen) untuk Desktop.
        */}
      <div className="flex flex-col lg:flex-row gap-y-3.75 md:gap-6 items-start mt-7.5 md:m-0">
        {/* Kolom Kiri */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {leftColumnFaqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index * 2}
              onClick={() => handleToggle(index * 2)}
            />
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {rightColumnFaqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index * 2 + 1}
              onClick={() => handleToggle(index * 2 + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
