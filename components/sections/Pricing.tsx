import PricingCard from "../ui/PricingCard";

export default function Pricing() {
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
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 500.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
    {
      title: "Hasil Skripsi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.899.000",
      features: defaultFeatures,
      isHighlighted: true, // Kartu tengah baris 1 Highlighted
    },
    {
      title: "Proposal Skripsi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.566.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
    // Baris 2
    {
      title: "Hasil Skripsi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.899.000",
      features: defaultFeatures,
      isHighlighted: true, // Kartu kiri baris 2 Highlighted
    },
    {
      title: "PPT Sidang",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 500.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
    {
      title: "Proposal Skripsi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet pharetra non eros sit ac phasellus at.",
      price: "Rp 1.566.000",
      features: defaultFeatures,
      isHighlighted: false,
    },
  ];

  return (
    <section id="pricing" className="w-full min-h-screen md:py-16 p-4 md:px-17.5">
      {/* Header Section */}
      <div className="text-center mb-10 space-y-2 md:space-y-4">
        <h2 className="text-[28px]/9.5 md:text-[44px]/14.5 font-bold text-white">
          Pendampingan Sesuai Kebutuhan Akademik
        </h2>
        <p className="mb:4 md:m-0 md:text-base/6 text-white max-w-[70ch] mx-auto">
          Setiap penelitian memiliki tingkat kompleksitas yang berbeda. Paket
          pendampingan disusun fleksibel sesuai tujuan, deadline, dan kebutuhan
          akademik Anda.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-10 my-7.5  md:mt-0 md:mb-10">
        {cards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* Bottom Floating CTA */}
      <div className="flex justify-center">
        <button
          className="bg-violet-500 hover:bg-purple-600 text-[#f5f5f5] font-semibold
            py-2.5 px-4 md:px-8 text-sm rounded-[50px] transition-colors duration-200"
        >
          Tanyakan Paket & Harga Lengkap
        </button>
      </div>
    </section>
  );
}
