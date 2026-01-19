import { Bot, Clock, Inbox, Users } from "lucide-react";
import StatCard from "../ui/StatsCard";

export default function About() {
  const stats = [
    { icon: Users, value: "50+", label: "Klien Terbantu" },
    { icon: Inbox, value: "10+", label: "On Going Task" },
    { icon: Clock, value: "96%", label: "Tepat Waktu" },
    { icon: Bot, value: "100%", label: "Bebas AI" },
  ];

  return (
    <section id="about" className="py-15 px-4 md:px-16.75 md:scroll-mt-35">
      {/* Header Text */}
      <div className="mb-10 space-y-4.5 text-center">
        <h2 className="text-3xl md:text-[44px]/14.5 font-bold text-[#f5f5f5]">
          Siapa Kami & Apa yang Kami Bantu
        </h2>
        <p className="text-[#f5f5f5] text-sm md:text-[18px]/6.75 max-w-[73ch] mx-auto">
          Kami menyediakan layanan pendampingan penelitian dan penulisan ilmiah
          di bidang kedokteran. Kami membantu mahasiswa FK menyusun, merapikan,
          dan menyelesaikan karya ilmiah secara sistematis dan profesional.
        </p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.18fr_1fr_1fr_1.18fr] items-start gap-[37.33px]">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
