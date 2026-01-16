import PricingCard from "../ui/PricingCard";

export default function PricingSection() {
  const defaultFeatures = [
    "Automated Meeting Scheduling",
    "Automated Meeting Scheduling",
    "Automated Meeting Scheduling",
    "Automated Meeting Scheduling",
    "Automated Meeting Scheduling",
  ];

  // Data kartu sesuai urutan di gambar
  const cards = [
    // Baris 1
    {
      title: "PPT Sidang",
      description: "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 500.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
    {
      title: "Hasil Skripsi",
      description: "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.899.000",
      features: defaultFeatures,
      isHighlighted: true, // Kartu tengah baris 1 Highlighted
    },
    {
      title: "Proposal Skripsi",
      description: "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.566.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
    // Baris 2
    {
      title: "Hasil Skripsi",
      description: "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.899.000",
      features: defaultFeatures,
      isHighlighted: true, // Kartu kiri baris 2 Highlighted
    },
    {
      title: "PPT Sidang",
      description: "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 500.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
    {
      title: "Proposal Skripsi",
      description: "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.566.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
  ];

  return (
    <section className="w-full min-h-screen py-16 px-4 md:px-17.5">

      {/* Header Section */}
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-4xl md:text-[44px]/14.5 font-bold text-white">
          Pendampingan Sesuai Kebutuhan Akademik
        </h2>
        <p className="md:text-base/6 text-white max-w-[70ch] mx-auto">
          Setiap penelitian memiliki tingkat kompleksitas yang berbeda. Paket pendampingan disusun
          fleksibel sesuai tujuan, deadline, dan kebutuhan akademik Anda.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-10">
        {cards.map((card, index) => (
          <PricingCard
            key={index}
            {...card}
          />
        ))}
      </div>

      {/* Bottom Floating CTA */}
      <div className="flex justify-center">
        <button className="bg-violet-500 hover:bg-purple-600 text-[#f5f5f5] font-semibold
            py-3 px-8 rounded-full transition-colors duration-200 shadow-lg shadow-purple-900/20">
          Tanyakan Paket & Harga Lengkap
        </button>
      </div>

    </section>
  );
}
