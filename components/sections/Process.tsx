import { Clock, RefreshCcw } from "lucide-react";
import StepCard from "../ui/StepCard";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Kirim Kebutuhan",
      description: "Isi form singkat tentang topik & deadline via whatsapp",
      isFilled: false,
    },
    {
      number: "2",
      title: "Mini Assessment",
      description: "Kami cek scope & feasibility naskah kamu (free)",
      isFilled: true, // Sesuai desain, nomor 2 warnanya solid
    },
    {
      number: "3",
      title: "Deal Paket",
      description: "Pilih paket + timeline. Deliverables jelas di awal.",
      isFilled: false,
    },
    {
      number: "4",
      title: "Eksekusi dan Revisi", // Typo 'Eskekusi' di gambar saya perbaiki jadi 'Eksekusi'
      description: "Kerja bareng, tracking progress, dan revisi hingga tuntas",
      isFilled: false,
    },
  ];

  return (
    <section id="service" className=" md:py-15 p-4 md:px-17.5 md:scroll-mt-45">
      {/* Header */}
      <div className="mb-4 md:mb-16 space-y-2 md:py-3.75 md:space-y-4.5 text-center">
        <h2 className="text-[28px]/9.5 max-w-[15ch] mx-auto text-center md:text-[44px]/14.5 font-bold text-[#f5f5f5]">
          Cara Kerja Simple
        </h2>
        <p className="text-[#f5f5f5] text-base/6 max-w-[35ch] md:text-[18px]/6.75 md:max-w-[73ch] mx-auto">
          Setiap penelitian memiliki tingkat kompleksitas yang berbeda. Paket pendampingan disusun fleksibel sesuai tujuan, deadline, dan kebutuhan akademik Anda.
        </p>
      </div>

      {/* Grid Steps */}
      <div className="grid grid-cols-1 gap-y-7.5 md:grid-cols-2 lg:grid-cols-4 mt-7.5 md:mt-0 md:gap-6 relative z-10">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>

      {/* Bottom Badges */}
      <div className="mt-7 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {/* Badge 1 */}
        <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#2f2f2f] rounded-full">
          <Clock className="h-5 w-5 md:h-8 md:w-8 text-violet-500" />
          <span className="text-[#f5f5f5] text-base">Respon cepat ≤ 6 jam</span>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#2f2f2f] rounded-full">
          <RefreshCcw className="h-5 w-5 md:h-8 md:w-8 text-violet-500" />
          <span className="text-[#f5f5f5] text-sm md:text-base">
            Revisi minor tanpa batas (7 hari)
          </span>
        </div>
      </div>
    </section>
  );
}
