'use client';

import React, { useState } from 'react';
import FaqItem from '../ui/FaqItem';

export default function FaqSection() {
  // Hanya simpan 1 index yang aktif.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Data FAQ
  const faqs = [
    {
      id: 0,
      question: "Apakah layanan ini menggunakan AI?",
      answer: "Tidak. Kami menjamin 100% pengerjaan dilakukan oleh manusia (tim dokter dan akademisi) untuk memastikan validitas medis dan alur logika yang natural. Kami juga menyertakan bukti lolos deteksi AI.",
    },
    {
      id: 1,
      question: "Berapa lama proses pengerjaan naskah?",
      answer: "Durasi pengerjaan bergantung pada paket yang diambil dan kompleksitas topik. Namun, rata-rata pengerjaan proposal memakan waktu 5-7 hari kerja, sedangkan full skripsi menyesuaikan feedback dosen.",
    },
    {
      id: 2,
      question: "Apakah ada garansi revisi?",
      answer: "Ya, kami memberikan garansi revisi minor tanpa batas selama 7 hari setelah file dikirim. Untuk revisi mayor (perubahan topik/judul dari dosen), akan ada penyesuaian biaya yang fair.",
    },
    {
      id: 3,
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran dapat dilakukan dalam 2 tahap (DP 50% di awal dan pelunasan setelah draft diperlihatkan) untuk kenyamanan dan keamanan transaksi Anda.",
    },
    {
      id: 4,
      question: "Apakah data penelitian saya aman?",
      answer: "Sangat aman. Kami menerapkan kebijakan privasi ketat. Data pasien dan identitas klien tidak akan dipublikasikan atau digunakan untuk kepentingan lain tanpa izin.",
    },
    {
      id: 5,
      question: "Bisa bantu analisis statistik juga?",
      answer: "Tentu. Tim kami terdiri dari ahli statistik yang terbiasa menggunakan SPSS, STATA, atau R untuk analisis data kedokteran, termasuk uji validitas, reliabilitas, hingga multivariat.",
    }
  ];

  // LOGIKA PENTING: Memisahkan data menjadi Kolom Kiri (Ganjil) dan Kanan (Genap)
  // Ini mencegah gap kosong saat item dibuka.
  const leftColumnFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-15 px-4 md:px-17.5" id="faq">

      {/* Header */}
      <div className="text-center mb-10 space-y-4.5 text-[#f5f5f5]">
        <h2 className="text-3xl md:text-[44px]/14.5 font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-base/6">
          Informasi singkat untuk membantu Anda memahami layanan dan proses pendampingan kami.
        </p>
      </div>

      {/* LAYOUT FIX: 
           Menggunakan Flexbox Column untuk Mobile, 
           dan Flexbox Row (dengan 2 kolom independen) untuk Desktop.
        */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">

        {/* Kolom Kiri */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {leftColumnFaqs.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {rightColumnFaqs.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
