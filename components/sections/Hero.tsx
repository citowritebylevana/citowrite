import { AlignLeft, ArrowRight, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-10 px-4 md:px-17.5 md:mt-35">

      <div className="absolute inset-0 z-10 pointer-events-none bg-noise opacity-15 mix-blend-overlay"></div>      {/* Container Utama dengan Background Gradient */}
      <div className="relative w-full rounded-[30px] overflow-hidden px-6 py-16 md:px-12 md:py-20 text-center">

        {/* Layer Gradient Background */}
        {/* Menggunakan multiple gradients untuk meniru efek cahaya di gambar */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-800 z-0"></div>

        {/* Overlay Noise/Texture (Opsional, untuk efek 'bintik' halus) */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

        {/* Layer Gradient Radial untuk Highlight di tengah-kiri */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/50 to-transparent opacity-60 z-0 pointer-events-none"></div>

        {/* Konten Utama */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-275 mx-auto space-y-6 text-[#f5f5f5]">

          {/* Heading */}
          <h2 className="text-3xl md:text-[60px]/18.5 font-semibold ">
            Hai Doc! Kami Bantu Apa Hari Ini
          </h2>

          {/* Deskripsi */}
          <p className="text-gray-200 text-sm md:text-[18px]/6.75 max-w-[88ch]">
            CITO Write membantu mahasiswa kedokteran, PPDS, dan dokter klinisi menyusun karya ilmiah yang rapi, logis, dan
            siap submit—mulai dari proposal, skripsi, hingga systematic review & meta-analysis—dengan mentoring step-by-
            step dan standar akademik yang jelas.
          </p>

          {/* Group Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

            {/* Tombol Order (Solid) */}
            <button className="flex items-center gap-x-2.5 justify-center px-8 py-2.5 bg-indigo-500 hover:bg-[#4845c4] rounded-full text-base
              font-semibold transition-all duration-200 shadow-lg shadow-indigo-900/30 group">
              Order Sekarang
              <span className="h-8 w-8 flex justify-center items-center shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                <ArrowRight />
              </span>
            </button>

            {/* Tombol WhatsApp (Outline) */}
            <button className="flex items-center justify-center px-8 py-3.5 bg-transparent border border-gray-400 hover:bg-white/10 text-white rounded-full font-medium transition-all duration-200">
              Chat Whatsapp Admin
              <Instagram />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
