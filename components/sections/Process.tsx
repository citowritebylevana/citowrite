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
    <section id="service" className=" py-15 px-4 md:px-17.5 md:scroll-mt-45">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-[44px]/14.5 font-bold text-white">
          Cara Kerja Simple
        </h2>
      </div>

      {/* Grid Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>

      {/* Bottom Badges */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {/* Badge 1 */}
        <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#2f2f2f] rounded-full">
          <Clock className="h-8 w-8 text-violet-500" />
          <span className="text-[#f5f5f5] text-base">Respon cepat ≤ 6 jam</span>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#2f2f2f] rounded-full">
          <RefreshCcw className="h-8 w-8 text-violet-500" />
          <span className="text-[#f5f5f5] text-base">
            Revisi minor tanpa batas (7 hari)
          </span>
        </div>
      </div>
    </section>
  );
}
